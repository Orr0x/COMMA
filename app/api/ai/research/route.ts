import { NextRequest, NextResponse } from 'next/server'
import { generateCopy, isConfigured } from '@/lib/ai/claude'
import {
  RESEARCH_SYSTEM_PROMPT,
  generateWebsiteResearchPrompt,
  generateSocialResearchPrompt,
  generateNicheResearchPrompt,
  type WebsiteResearchParams,
  type SocialResearchParams,
  type NicheResearchParams,
} from '@/lib/ai/prompts/research-prompts'
import { checkRateLimit, getIdentifier, formatResetTime } from '@/lib/ai/rate-limit'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const researchRequestSchema = z.object({
  type: z.enum(['website', 'social', 'niche']),
  // Website research fields
  url: z.string().url().optional(),
  competitorUrls: z.array(z.string().url()).optional(),
  content: z.string().optional(),
  additionalContext: z.string().optional(),
  focusAreas: z.array(z.string()).optional(),
  depth: z.enum(['quick', 'standard', 'deep']).optional(),
  // Social research fields
  companyName: z.string().optional(),
  linkedinUrl: z.string().url().optional(),
  twitterHandle: z.string().optional(),
  instagramHandle: z.string().optional(),
  analysisType: z.enum(['content_strategy', 'audience_engagement', 'competitor_comparison']).optional(),
  // Niche research fields
  niche: z.string().optional(),
  targetAudience: z.string().optional(),
  geography: z.string().optional(),
  researchGoals: z.array(z.string()).optional(),
})

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    // Check if AI is configured
    if (!isConfigured()) {
      return NextResponse.json(
        { error: 'AI features are not configured. Please add ANTHROPIC_API_KEY to environment variables.' },
        { status: 503 }
      )
    }

    // Rate limiting
    const identifier = getIdentifier(request)
    const rateLimitResult = checkRateLimit(identifier)

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message: `Too many AI requests. Please try again in ${formatResetTime(rateLimitResult.resetAt)}.`,
          resetAt: rateLimitResult.resetAt,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimitResult.resetAt.toString(),
          },
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const data = researchRequestSchema.parse(body)

    let prompt: string
    let title: string
    let inputData: any = {}

    // Generate prompt based on research type
    switch (data.type) {
      case 'website':
        if (!data.url || !data.content) {
          return NextResponse.json(
            { error: 'URL and content are required for website research' },
            { status: 400 }
          )
        }

        const websiteParams: WebsiteResearchParams = {
          url: data.url,
          competitorUrls: data.competitorUrls || [],
          content: data.content,
          additionalContext: data.additionalContext,
          focusAreas: data.focusAreas || ['messaging', 'audience', 'content', 'seo', 'campaigns'],
          depth: data.depth || 'standard',
        }

        prompt = generateWebsiteResearchPrompt(websiteParams)
        title = `Website Research: ${new URL(data.url).hostname}`
        inputData = {
          urls: JSON.stringify([data.url, ...(data.competitorUrls || [])]),
          context: data.additionalContext,
          focusAreas: JSON.stringify(data.focusAreas),
          depth: data.depth,
        }
        break

      case 'social':
        if (!data.companyName || !data.content) {
          return NextResponse.json(
            { error: 'Company name and content are required for social research' },
            { status: 400 }
          )
        }

        const socialParams: SocialResearchParams = {
          companyName: data.companyName,
          linkedinUrl: data.linkedinUrl,
          twitterHandle: data.twitterHandle,
          instagramHandle: data.instagramHandle,
          content: data.content,
          analysisType: data.analysisType || 'content_strategy',
        }

        prompt = generateSocialResearchPrompt(socialParams)
        title = `Social Media Research: ${data.companyName}`
        inputData = {
          socialHandles: JSON.stringify({
            linkedin: data.linkedinUrl,
            twitter: data.twitterHandle,
            instagram: data.instagramHandle,
          }),
          context: `Analysis Type: ${data.analysisType}`,
        }
        break

      case 'niche':
        if (!data.niche || !data.targetAudience) {
          return NextResponse.json(
            { error: 'Niche and target audience are required for niche research' },
            { status: 400 }
          )
        }

        const nicheParams: NicheResearchParams = {
          niche: data.niche,
          targetAudience: data.targetAudience,
          geography: data.geography || 'Global',
          researchGoals: data.researchGoals || ['market_analysis', 'content_opportunities', 'competitive_insights'],
        }

        prompt = generateNicheResearchPrompt(nicheParams)
        title = `Niche Research: ${data.niche}`
        inputData = {
          nicheData: JSON.stringify({
            niche: data.niche,
            targetAudience: data.targetAudience,
            geography: data.geography,
          }),
          context: `Research Goals: ${data.researchGoals?.join(', ')}`,
        }
        break

      default:
        return NextResponse.json({ error: 'Invalid research type' }, { status: 400 })
    }

    // Create initial report record with 'processing' status
    const report = await prisma.researchReport.create({
      data: {
        title,
        type: data.type,
        status: 'processing',
        report: '',
        ...inputData,
      },
    })

    // Generate research report using Claude
    let result: string
    try {
      result = await generateCopy(prompt, RESEARCH_SYSTEM_PROMPT, {
        maxTokens: 8192, // Large token limit for comprehensive reports
        temperature: 0.7,
      })

      // Extract executive summary (first section after # Executive Summary)
      const summaryMatch = result.match(/# 📊 Executive Summary\s+([\s\S]*?)(?=\n#|$)/)
      const summary = summaryMatch ? summaryMatch[1].trim() : ''

      // Calculate processing time
      const processingTime = Math.floor((Date.now() - startTime) / 1000)

      // Update report with results
      await prisma.researchReport.update({
        where: { id: report.id },
        data: {
          status: 'completed',
          report: result,
          summary,
          processingTime,
        },
      })

      // Return result with rate limit headers
      return NextResponse.json(
        {
          reportId: report.id,
          report: result,
          summary,
          processingTime,
        },
        {
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.resetAt.toString(),
          },
        }
      )
    } catch (generateError) {
      // Update report status to failed
      await prisma.researchReport.update({
        where: { id: report.id },
        data: {
          status: 'failed',
          report: `Error: ${generateError instanceof Error ? generateError.message : 'Unknown error'}`,
        },
      })
      throw generateError
    }
  } catch (error) {
    console.error('AI Research Error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to generate research report' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve reports
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const type = searchParams.get('type')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (id) {
      // Fetch specific report
      const report = await prisma.researchReport.findUnique({
        where: { id },
      })

      if (!report) {
        return NextResponse.json(
          { error: 'Report not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(report)
    }

    // Fetch all reports with optional type filter
    const where = type ? { type } : {}
    const reports = await prisma.researchReport.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        title: true,
        type: true,
        status: true,
        summary: true,
        createdAt: true,
        processingTime: true,
      },
    })

    return NextResponse.json({ reports })
  } catch (error) {
    console.error('Error fetching reports:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    )
  }
}

// DELETE endpoint to delete a report
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Report ID is required' },
        { status: 400 }
      )
    }

    await prisma.researchReport.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting report:', error)
    return NextResponse.json(
      { error: 'Failed to delete report' },
      { status: 500 }
    )
  }
}

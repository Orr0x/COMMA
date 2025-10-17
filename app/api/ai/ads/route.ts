import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { generateCopy, isConfigured } from '@/lib/ai/claude'
import { checkRateLimit, getIdentifier } from '@/lib/ai/rate-limit'
import {
  AD_SYSTEM_PROMPT,
  generateAdCampaignPrompt,
  generateSingleAdPrompt,
  type AdCampaignParams,
} from '@/lib/ai/prompts/ad-prompts'

export const dynamic = 'force-dynamic'

const adRequestSchema = z.object({
  action: z.enum(['generate_campaign', 'generate_single']),
  product: z.string().min(1),
  audience: z.string().min(1),
  platform: z.enum(['meta', 'google', 'linkedin', 'tiktok']),
  objective: z.string().optional(),
  tone: z.string().optional(),
  variations: z.number().min(1).max(5).optional(),
  angle: z.string().optional(),
  additionalContext: z.string().optional(),
})

type AdRequest = z.infer<typeof adRequestSchema>

export async function POST(request: NextRequest) {
  try {
    // Check if AI is configured
    if (!isConfigured()) {
      return NextResponse.json(
        {
          error:
            'AI features are not configured. Please add your Anthropic API key to the environment variables.',
        },
        { status: 503 }
      )
    }

    // Rate limiting
    const identifier = getIdentifier(request)
    const rateLimitResult = checkRateLimit(identifier)

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Please try again later.',
          resetAt: new Date(rateLimitResult.resetAt).toISOString(),
        },
        { status: 429 }
      )
    }

    // Parse and validate request
    const body = await request.json()
    const data = adRequestSchema.parse(body) as AdRequest

    let prompt: string
    let maxTokens = 2000

    // Generate prompt based on action
    if (data.action === 'generate_campaign') {
      const params: AdCampaignParams = {
        product: data.product,
        audience: data.audience,
        platform: data.platform,
        objective: data.objective || 'Conversions',
        tone: data.tone || 'Professional',
        variations: data.variations || 3,
        additionalContext: data.additionalContext,
      }
      prompt = generateAdCampaignPrompt(params)
      maxTokens = 3000 // More tokens for multiple variations
    } else {
      // generate_single
      if (!data.angle) {
        return NextResponse.json(
          { error: 'Angle is required for single ad generation' },
          { status: 400 }
        )
      }
      prompt = generateSingleAdPrompt({
        product: data.product,
        audience: data.audience,
        platform: data.platform,
        angle: data.angle,
      })
    }

    // Generate content with Claude
    const result = await generateCopy(prompt, AD_SYSTEM_PROMPT, {
      maxTokens,
      temperature: 0.8, // Higher creativity for ad copy
    })

    // Parse JSON response
    let parsedResult
    try {
      // Remove markdown code blocks if present
      const cleanedResult = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      parsedResult = JSON.parse(cleanedResult)
    } catch (parseError) {
      console.error('Failed to parse Claude response as JSON:', result)
      return NextResponse.json(
        { error: 'Failed to parse AI response. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      result: parsedResult,
      remaining: rateLimitResult.remaining,
    })
  } catch (error) {
    console.error('AI Ads API Error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request parameters', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to generate ad content',
      },
      { status: 500 }
    )
  }
}

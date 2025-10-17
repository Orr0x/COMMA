import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { generateCopy, isConfigured } from '@/lib/ai/claude'
import { checkRateLimit, getIdentifier } from '@/lib/ai/rate-limit'
import {
  EMAIL_SYSTEM_PROMPT,
  generateEmailPrompt,
  generateEmailSequencePrompt,
  generateSubjectLineVariationsPrompt,
  type EmailParams,
} from '@/lib/ai/prompts/email-prompts'

export const dynamic = 'force-dynamic'

const emailRequestSchema = z.object({
  action: z.enum(['generate_email', 'generate_sequence', 'generate_subject_lines']),
  emailType: z.enum([
    'welcome',
    'promotional',
    'newsletter',
    'product_launch',
    'abandoned_cart',
    'follow_up',
  ]),
  goal: z.string().min(1),
  audience: z.string().min(1),
  product: z.string().min(1),
  keyBenefits: z.array(z.string()).min(1),
  tone: z.string().optional(),
  brandName: z.string().optional(),
  sequenceLength: z.number().min(1).max(5).optional(),
  context: z.string().optional(), // For subject line variations
})

type EmailRequest = z.infer<typeof emailRequestSchema>

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
    const data = emailRequestSchema.parse(body) as EmailRequest

    let prompt: string
    let maxTokens = 2000

    // Generate prompt based on action
    if (data.action === 'generate_subject_lines') {
      if (!data.context) {
        return NextResponse.json(
          { error: 'Context is required for subject line generation' },
          { status: 400 }
        )
      }
      prompt = generateSubjectLineVariationsPrompt(data.context)
      maxTokens = 1500
    } else if (data.action === 'generate_sequence') {
      if (!data.sequenceLength) {
        return NextResponse.json(
          { error: 'Sequence length is required for sequence generation' },
          { status: 400 }
        )
      }
      const params: EmailParams & { sequenceLength: number } = {
        emailType: data.emailType,
        goal: data.goal,
        audience: data.audience,
        product: data.product,
        keyBenefits: data.keyBenefits,
        tone: data.tone,
        brandName: data.brandName,
        sequenceLength: data.sequenceLength,
      }
      prompt = generateEmailSequencePrompt(params)
      maxTokens = 4000 // More tokens for sequences
    } else {
      // generate_email
      const params: EmailParams = {
        emailType: data.emailType,
        goal: data.goal,
        audience: data.audience,
        product: data.product,
        keyBenefits: data.keyBenefits,
        tone: data.tone,
        brandName: data.brandName,
      }
      prompt = generateEmailPrompt(params)
    }

    // Generate content with Claude
    const result = await generateCopy(prompt, EMAIL_SYSTEM_PROMPT, {
      maxTokens,
      temperature: 0.7,
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
    console.error('AI Email API Error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request parameters', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to generate email content',
      },
      { status: 500 }
    )
  }
}

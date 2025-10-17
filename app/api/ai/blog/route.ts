import { NextRequest, NextResponse } from 'next/server'
import { generateCopy, isConfigured } from '@/lib/ai/claude'
import {
  BLOG_SYSTEM_PROMPT,
  generateBlogPostPrompt,
  generateTitlePrompt,
  generateExcerptPrompt,
  improveTextPrompt,
  generateIntroPrompt,
  generateOutlinePrompt,
} from '@/lib/ai/prompts/blog-prompts'
import { checkRateLimit, getIdentifier, formatResetTime } from '@/lib/ai/rate-limit'
import { z } from 'zod'

const blogRequestSchema = z.object({
  action: z.enum([
    'generate_post',
    'generate_title',
    'generate_excerpt',
    'improve_text',
    'generate_intro',
    'generate_outline',
  ]),
  topic: z.string().optional(),
  text: z.string().optional(),
  instruction: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  tone: z.string().optional(),
  targetLength: z.number().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Check if AI is configured
    if (!isConfigured()) {
      return NextResponse.json(
        { error: 'AI features are not configured. Please add ANTHROPIC_API_KEY to environment variables.' },
        { status: 503 }
      )
    }

    // TODO: Add authentication check
    // const session = await getServerSession(authOptions)
    // if (!session) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

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
    const data = blogRequestSchema.parse(body)

    let prompt: string
    let result: string

    // Generate content based on action
    switch (data.action) {
      case 'generate_post':
        if (!data.topic) {
          return NextResponse.json(
            { error: 'Topic is required for generating a blog post' },
            { status: 400 }
          )
        }
        prompt = generateBlogPostPrompt({
          topic: data.topic,
          keywords: data.keywords,
          targetLength: data.targetLength,
          tone: data.tone,
        })
        result = await generateCopy(prompt, BLOG_SYSTEM_PROMPT, {
          maxTokens: 4096,
          temperature: 0.7,
        })
        break

      case 'generate_title':
        if (!data.topic) {
          return NextResponse.json(
            { error: 'Topic is required for generating titles' },
            { status: 400 }
          )
        }
        prompt = generateTitlePrompt(data.topic)
        result = await generateCopy(prompt, BLOG_SYSTEM_PROMPT, {
          maxTokens: 500,
          temperature: 0.8,
        })
        break

      case 'generate_excerpt':
        if (!data.topic) {
          return NextResponse.json(
            { error: 'Topic is required for generating an excerpt' },
            { status: 400 }
          )
        }
        prompt = generateExcerptPrompt(data.topic)
        result = await generateCopy(prompt, BLOG_SYSTEM_PROMPT, {
          maxTokens: 200,
          temperature: 0.7,
        })
        break

      case 'improve_text':
        if (!data.text) {
          return NextResponse.json(
            { error: 'Text is required for improvement' },
            { status: 400 }
          )
        }
        prompt = improveTextPrompt({
          text: data.text,
          instruction: data.instruction || 'Make it more engaging and clear',
        })
        result = await generateCopy(prompt, BLOG_SYSTEM_PROMPT, {
          maxTokens: 2048,
          temperature: 0.6,
        })
        break

      case 'generate_intro':
        if (!data.topic) {
          return NextResponse.json(
            { error: 'Topic is required for generating an introduction' },
            { status: 400 }
          )
        }
        prompt = generateIntroPrompt(data.topic)
        result = await generateCopy(prompt, BLOG_SYSTEM_PROMPT, {
          maxTokens: 1024,
          temperature: 0.7,
        })
        break

      case 'generate_outline':
        if (!data.topic) {
          return NextResponse.json(
            { error: 'Topic is required for generating an outline' },
            { status: 400 }
          )
        }
        prompt = generateOutlinePrompt(data.topic)
        result = await generateCopy(prompt, BLOG_SYSTEM_PROMPT, {
          maxTokens: 1024,
          temperature: 0.7,
        })
        break

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    // Return result with rate limit headers
    return NextResponse.json(
      { result },
      {
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.resetAt.toString(),
        },
      }
    )
  } catch (error) {
    console.error('AI Blog Generation Error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to generate content' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

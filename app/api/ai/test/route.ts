import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Check if API key is present
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: 'ANTHROPIC_API_KEY environment variable is not set',
          debug: {
            hasApiKey: false,
            apiKeyPrefix: 'N/A',
          },
        },
        { status: 500 }
      )
    }

    // Log API key info (first 10 chars only for security)
    const apiKeyPrefix = apiKey.substring(0, 20)
    console.log('API Key prefix:', apiKeyPrefix)
    console.log('API Key length:', apiKey.length)
    console.log('AI Model:', process.env.AI_MODEL)

    // Try to make a simple API call
    const anthropic = new Anthropic({
      apiKey: apiKey,
    })

    const message = await anthropic.messages.create({
      model: process.env.AI_MODEL || 'claude-sonnet-4-5-20250929',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: 'Say hello in exactly 3 words.',
        },
      ],
    })

    const textContent = message.content.find((block) => block.type === 'text')
    const responseText = textContent && textContent.type === 'text' ? textContent.text : ''

    return NextResponse.json({
      success: true,
      message: 'Claude API is working!',
      response: responseText,
      debug: {
        hasApiKey: true,
        apiKeyPrefix: apiKeyPrefix,
        apiKeyLength: apiKey.length,
        model: process.env.AI_MODEL || 'claude-sonnet-4-5-20250929',
      },
    })
  } catch (error) {
    console.error('Claude API Test Error:', error)

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        errorType: error?.constructor?.name,
        debug: {
          hasApiKey: !!process.env.ANTHROPIC_API_KEY,
          apiKeyPrefix: process.env.ANTHROPIC_API_KEY?.substring(0, 20) || 'N/A',
          apiKeyLength: process.env.ANTHROPIC_API_KEY?.length || 0,
          model: process.env.AI_MODEL || 'claude-sonnet-4-5-20250929',
        },
      },
      { status: 500 }
    )
  }
}

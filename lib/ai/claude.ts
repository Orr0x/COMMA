import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export interface GenerateCopyOptions {
  maxTokens?: number
  temperature?: number
  stopSequences?: string[]
}

export async function generateCopy(
  prompt: string,
  systemPrompt: string,
  options?: GenerateCopyOptions
): Promise<string> {
  try {
    const response = await anthropic.messages.create({
      model: process.env.AI_MODEL || 'claude-sonnet-4-5-20250929',
      max_tokens: options?.maxTokens || parseInt(process.env.AI_MAX_TOKENS || '4096'),
      temperature: options?.temperature || parseFloat(process.env.AI_TEMPERATURE || '0.7'),
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      ...(options?.stopSequences && { stop_sequences: options.stopSequences }),
    })

    // Extract text from response
    const textContent = response.content.find((block) => block.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response')
    }

    return textContent.text
  } catch (error) {
    console.error('Claude API Error:', error)
    throw new Error('Failed to generate content with Claude API')
  }
}

export async function* streamCopy(
  prompt: string,
  systemPrompt: string,
  options?: GenerateCopyOptions
): AsyncGenerator<string, void, unknown> {
  try {
    const stream = await anthropic.messages.stream({
      model: process.env.AI_MODEL || 'claude-sonnet-4-5-20250929',
      max_tokens: options?.maxTokens || parseInt(process.env.AI_MAX_TOKENS || '4096'),
      temperature: options?.temperature || parseFloat(process.env.AI_TEMPERATURE || '0.7'),
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      ...(options?.stopSequences && { stop_sequences: options.stopSequences }),
    })

    for await (const chunk of stream) {
      if (
        chunk.type === 'content_block_delta' &&
        chunk.delta.type === 'text_delta'
      ) {
        yield chunk.delta.text
      }
    }
  } catch (error) {
    console.error('Claude API Streaming Error:', error)
    throw new Error('Failed to stream content with Claude API')
  }
}

// Helper to count tokens (rough estimate - 1 token ≈ 4 chars)
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4)
}

// Helper to check API key is configured
export function isConfigured(): boolean {
  return !!process.env.ANTHROPIC_API_KEY
}

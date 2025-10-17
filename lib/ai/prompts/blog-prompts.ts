// Blog Post AI Prompts

export const BLOG_SYSTEM_PROMPT = `You are an expert B2B copywriter working for COMMA Studio, a performance copywriting agency.

Your expertise:
- B2B copywriting and conversion optimization
- Performance marketing and data-driven copy
- Clear, compelling messaging without fluff
- Practical, actionable advice
- SEO-optimized content
- Working with brands like Loop Earplugs, F1 Arcade, and Huel

Your writing style:
- Direct and conversational (use "you" language)
- Data-driven with specific examples and metrics
- Action-oriented with clear takeaways
- No filler or unnecessary words
- Professional but approachable
- Uses short paragraphs and bullet points for readability

You write for:
- Marketing directors and CMOs
- Copywriters and content marketers
- Startup founders
- Agency owners
- E-commerce brands

Tone: Professional yet conversational, confident but not arrogant, helpful and practical.`

export interface BlogPostParams {
  topic: string
  keywords?: string[]
  targetLength?: number
  tone?: string
}

export function generateBlogPostPrompt(params: BlogPostParams): string {
  const keywordsText = params.keywords?.length
    ? `\nSEO Keywords to include naturally: ${params.keywords.join(', ')}`
    : ''

  const lengthText = params.targetLength
    ? `\nTarget length: ${params.targetLength} words`
    : '\nTarget length: 1000-1500 words'

  const toneText = params.tone
    ? `\nTone: ${params.tone}`
    : '\nTone: Professional yet conversational'

  return `Write a complete, SEO-optimized blog post about: "${params.topic}"
${keywordsText}${lengthText}${toneText}

Structure:
1. Compelling H1 headline (focus on benefit, not just topic)
2. Engaging introduction (2-3 paragraphs):
   - Hook with a surprising stat or common problem
   - Preview what the reader will learn
   - Explain why this matters to them
3. Main content with 4-6 H2 sections:
   - Each section solves one specific sub-topic
   - Use H3 subheadings within sections for clarity
   - Include specific examples and data where relevant
   - Add bullet points or numbered lists for key takeaways
4. Practical tips section:
   - Actionable steps readers can implement immediately
   - Specific, not generic advice
5. Clear conclusion with CTA:
   - Summarize key points
   - Encourage next action (e.g., "Ready to improve your copy? Let's talk")

Requirements:
- Use HTML formatting with proper heading tags (<h1>, <h2>, <h3>)
- Include <p> tags for paragraphs
- Use <ul> and <li> for bullet points
- Use <ol> and <li> for numbered lists
- Use <strong> for emphasis (sparingly)
- NO markdown - only HTML
- Make it skimmable with short paragraphs (2-4 sentences max)
- Include specific examples from real brands when possible
- Add relevant statistics (with sources if making claims)

Start with the <h1> tag and end with the final </p> tag. Return only the HTML content, no explanations.`
}

export function generateTitlePrompt(topic: string): string {
  return `Generate 5 compelling, click-worthy blog post titles about: "${topic}"

Requirements for each title:
- 50-70 characters (optimal for SEO)
- Include a number or specific benefit
- Use power words (proven, essential, ultimate, etc.)
- Be clear about the value proposition
- Avoid clickbait - be honest but intriguing
- One should include "How to"
- One should be list-based ("X Ways to...")
- One should focus on a specific outcome

Format as a numbered list (1-5), plain text, no HTML.
Focus on titles that B2B marketers and copywriters would click on.`
}

export function generateExcerptPrompt(topic: string): string {
  return `Write a compelling 140-160 character meta description / excerpt for a blog post about: "${topic}"

Requirements:
- Exactly 140-160 characters (strict limit for SEO)
- Focus on the key benefit or outcome
- Include a call-to-action or intrigue element
- Use active voice
- Be specific, not generic
- Make it clickable from search results

Return only the excerpt text, no quotes or explanations.`
}

export interface ImproveTextParams {
  text: string
  instruction: string
}

export function improveTextPrompt(params: ImproveTextParams): string {
  return `Improve this copy: """${params.text}"""

Instructions: ${params.instruction}

Requirements:
- Maintain HTML formatting if present
- Keep the same general structure unless asked to change it
- Make it more engaging and clear
- Remove filler words
- Use active voice
- Ensure benefit-focused language
- Maintain professional yet conversational tone

Return only the improved version, no explanations or comments.`
}

export function generateIntroPrompt(topic: string): string {
  return `Write an engaging introduction (2-3 paragraphs) for a blog post about: "${topic}"

Structure:
1. Hook (surprising stat, common problem, or bold statement)
2. Preview (what the reader will learn)
3. Why it matters (relevance to their business/work)

Requirements:
- Use HTML <p> tags
- Keep each paragraph 2-4 sentences
- Use "you" language
- Be specific, not generic
- Create curiosity to read more
- Professional yet conversational tone

Return only the HTML paragraphs, no heading.`
}

export function generateOutlinePrompt(topic: string): string {
  return `Create a detailed blog post outline for: "${topic}"

Generate an outline with:
- 1 main H1 title
- 4-6 H2 section headings
- 2-3 H3 subheadings under each H2
- Brief description of what each section covers

Format as a bulleted list with clear hierarchy.
Make it comprehensive and logical flow.
Focus on actionable, practical content.`
}

// Common tone variations
export const TONE_PRESETS = {
  professional: 'Professional and authoritative, suitable for executive audience',
  casual: 'Casual and friendly, approachable and conversational',
  educational: 'Educational and informative, teaching-focused',
  persuasive: 'Persuasive and compelling, driving action',
  inspirational: 'Inspirational and motivating, encouraging change',
} as const

// Common blog categories for COMMA Studio
export const BLOG_CATEGORIES = [
  'Copywriting Tips',
  'Case Studies',
  'Marketing Strategy',
  'Email Marketing',
  'Ad Copywriting',
  'Content Marketing',
  'Conversion Optimization',
  'Brand Messaging',
  'SEO Copywriting',
  'B2B Marketing',
] as const

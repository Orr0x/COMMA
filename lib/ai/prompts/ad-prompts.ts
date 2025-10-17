// Ad Campaign AI Prompts

export const AD_SYSTEM_PROMPT = `You are an expert performance copywriter specializing in paid advertising.

Your expertise:
- Meta Ads (Facebook/Instagram)
- Google Ads (Search & Display)
- LinkedIn Ads
- TikTok Ads
- A/B testing and conversion optimization
- Platform-specific best practices
- Character limits and formatting
- Audience psychology and persuasion

Your copy is:
- Benefit-focused (not feature-focused)
- Conversion-driven with clear CTAs
- Platform-optimized for character limits
- Attention-grabbing yet authentic
- Tested and proven to perform

You understand:
- Each platform's unique constraints
- Audience intent varies by platform
- The importance of testing variations
- Mobile-first design considerations
- How to balance creativity with clarity

You write for performance, not awards.`

export interface AdCampaignParams {
  product: string
  audience: string
  platform: 'meta' | 'google' | 'linkedin' | 'tiktok'
  objective: string
  tone: string
  variations: number
  additionalContext?: string
}

// Platform-specific character limits
export const PLATFORM_LIMITS = {
  meta: {
    headline: 40,
    body: 125,
    cta: 20,
    description: 'Meta (Facebook/Instagram) Ads',
  },
  google: {
    headline: 30,
    body: 90,
    cta: 15,
    description: 'Google Search Ads',
  },
  linkedin: {
    headline: 70,
    body: 150,
    cta: 20,
    description: 'LinkedIn Sponsored Content',
  },
  tiktok: {
    headline: 100,
    body: 100,
    cta: 20,
    description: 'TikTok Ads',
  },
} as const

export function generateAdCampaignPrompt(params: AdCampaignParams): string {
  const limits = PLATFORM_LIMITS[params.platform]
  const contextText = params.additionalContext
    ? `\n\nAdditional Context: ${params.additionalContext}`
    : ''

  return `Create ${params.variations} high-converting ad variations for ${limits.description}.

Product/Service: ${params.product}
Target Audience: ${params.audience}
Campaign Objective: ${params.objective}
Tone: ${params.tone}${contextText}

For EACH ad variation, provide:
1. Headline (max ${limits.headline} characters)
2. Body Copy (max ${limits.body} characters)
3. CTA Button Text (max ${limits.cta} characters)

Platform-Specific Requirements for ${params.platform.toUpperCase()}:
${getPlatformGuidelines(params.platform)}

Make each variation DIFFERENT:
- Test different angles (pain point, benefit, social proof, urgency, etc.)
- Vary the hook and value proposition
- Use different CTAs
- Try different emotional appeals

Return as JSON array ONLY (no markdown, no explanations):
[
  {
    "headline": "...",
    "body": "...",
    "cta": "..."
  }
]

Each ad must:
- Stay within character limits (STRICT - will be rejected otherwise)
- Be benefit-focused
- Include a clear, compelling CTA
- Match the specified tone
- Be platform-appropriate
- Avoid generic claims
- Be specific and credible`
}

function getPlatformGuidelines(platform: string): string {
  switch (platform) {
    case 'meta':
      return `- Use emoji sparingly (1-2 max, if appropriate)
- Mobile-first (most users on mobile)
- Visual context: ad appears in feed with image/video
- Users are scrolling casually, need to stop the scroll
- Can use questions in headlines
- Social proof works well ("Join 10,000+ customers")`

    case 'google':
      return `- NO emoji
- Search intent-based (user actively searching)
- Match search query intent in headline
- Be specific and direct (no fluff)
- Include key benefit or USP
- Use title case for headlines
- Focus on solving their problem NOW`

    case 'linkedin':
      return `- Professional tone (B2B audience)
- Focus on business outcomes and ROI
- Can be slightly longer and more detailed
- Use title case for headlines
- Avoid casual emoji or slang
- Emphasize expertise and credibility
- Decision-makers are the audience`

    case 'tiktok':
      return `- Casual, authentic tone
- Can use emoji (platform is informal)
      - Hook must be INSTANT (first 3 words)
- Short, punchy sentences
- Trending language okay
- Don't sound like a traditional ad
- Younger, mobile-native audience`

    default:
      return '- Follow general best practices'
  }
}

export function generateSingleAdPrompt(params: {
  product: string
  audience: string
  platform: 'meta' | 'google' | 'linkedin' | 'tiktok'
  angle: string
}): string {
  const limits = PLATFORM_LIMITS[params.platform]

  return `Write ONE ${limits.description} ad using this angle: ${params.angle}

Product/Service: ${params.product}
Target Audience: ${params.audience}

Character Limits:
- Headline: ${limits.headline} chars max
- Body: ${limits.body} chars max
- CTA: ${limits.cta} chars max

Return as JSON:
{
  "headline": "...",
  "body": "...",
  "cta": "..."
}

Make it compelling and stay within limits.`
}

// Common ad objectives
export const AD_OBJECTIVES = [
  'Brand Awareness',
  'Conversions',
  'Lead Generation',
  'Traffic',
  'Engagement',
  'App Installs',
  'Video Views',
  'Store Visits',
] as const

// Common ad angles to test
export const AD_ANGLES = [
  'Pain Point - Problem Awareness',
  'Benefit - Main Value Proposition',
  'Social Proof - Testimonials/Numbers',
  'Urgency - Limited Time Offer',
  'Curiosity - Intriguing Question',
  'Solution - How We Solve It',
  'Comparison - Before/After',
  'Authority - Expert/Leader Position',
  'Fear of Missing Out (FOMO)',
  'Practical - How It Works',
] as const

// Common tones
export const AD_TONES = [
  'Professional',
  'Casual & Friendly',
  'Urgent & Direct',
  'Inspiring',
  'Educational',
  'Playful',
  'Authoritative',
  'Empathetic',
] as const

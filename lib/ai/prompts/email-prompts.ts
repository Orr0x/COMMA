// Email Marketing AI Prompts

export const EMAIL_SYSTEM_PROMPT = `You are an expert email marketing copywriter with deep expertise in:

- Email conversion optimization
- Subject line psychology and testing
- Email deliverability best practices
- Mobile-first email design
- Personalization and segmentation
- Email sequence strategy
- CTA placement and optimization

Your emails:
- Get opened (compelling subject lines)
- Get read (engaging content)
- Get clicked (clear CTAs)
- Drive conversions

You understand:
- Subject line best practices (40-50 chars ideal)
- Preview text importance (100 chars)
- Mobile inbox display (60-70% of opens)
- The power of personalization
- When to use plain text vs HTML
- Spam filter avoidance
- Testing and optimization

You write for B2B and B2C audiences with equal expertise.`

export interface EmailParams {
  emailType: 'welcome' | 'promotional' | 'newsletter' | 'product_launch' | 'abandoned_cart' | 'follow_up'
  goal: string
  audience: string
  product: string
  keyBenefits: string[]
  tone?: string
  brandName?: string
}

export const EMAIL_TYPES = {
  welcome: {
    label: 'Welcome Email',
    description: 'First email to new subscribers',
  },
  promotional: {
    label: 'Promotional Email',
    description: 'Sale, offer, or special promotion',
  },
  newsletter: {
    label: 'Newsletter',
    description: 'Regular content update',
  },
  product_launch: {
    label: 'Product Launch',
    description: 'Announce new product or feature',
  },
  abandoned_cart: {
    label: 'Abandoned Cart',
    description: 'Recover incomplete purchases',
  },
  follow_up: {
    label: 'Follow-Up',
    description: 'Post-purchase or post-action',
  },
} as const

export function generateEmailPrompt(params: EmailParams): string {
  const toneText = params.tone || 'professional yet friendly'
  const brandText = params.brandName || 'the company'

  return `Write a high-converting ${EMAIL_TYPES[params.emailType].label}.

Campaign Details:
- Email Type: ${EMAIL_TYPES[params.emailType].description}
- Goal: ${params.goal}
- Audience: ${params.audience}
- Product/Offer: ${params.product}
- Key Benefits: ${params.keyBenefits.join(', ')}
- Tone: ${toneText}
- Brand: ${brandText}

Generate:
1. Subject Line (40-50 characters - strict limit for inbox display)
2. Preview Text (80-100 characters - shows after subject in inbox)
3. Email Body (HTML formatted, mobile-optimized)

Subject Line Requirements:
- 40-50 characters (optimal for mobile inbox)
- Create curiosity or promise clear benefit
- Personalize if appropriate (use [FirstName] placeholder)
- Avoid spam trigger words (FREE, !!!, URGENT in caps)
- Test-worthy (could beat control)
- Specific, not generic

Preview Text Requirements:
- 80-100 characters
- Complements subject line (not duplicate)
- Adds context or creates more intrigue
- Standalone readable if subject is cut off

Email Body Requirements:
- HTML formatted with proper structure
- Mobile-first (single column, 600px max width)
- Structure:
  * Greeting (personalized with [FirstName] if appropriate)
  * Hook/Opening (1-2 sentences, grab attention)
  * Value Proposition (what's in it for them)
  * Main Content (2-3 paragraphs or bullet points)
  * Social Proof (if relevant - testimonial, stats, logos)
  * Clear CTA (button or link - one primary CTA)
  * Sign-off
- Use <p> tags for paragraphs
- Use <ul>/<li> for bullet points if needed
- Include ONE main CTA in a <strong> tag or button format
- Keep paragraphs short (2-3 sentences)
- Use whitespace generously
- Conversational tone, benefit-focused

Return as JSON ONLY (no markdown, no explanations):
{
  "subjectLine": "...",
  "previewText": "...",
  "body": "... (HTML) ..."
}

Make it compelling, mobile-friendly, and conversion-focused.`
}

export function generateEmailSequencePrompt(params: EmailParams & { sequenceLength: number }): string {
  const toneText = params.tone || 'professional yet friendly'
  const brandText = params.brandName || 'the company'

  return `Create a ${params.sequenceLength}-email sequence for ${EMAIL_TYPES[params.emailType].label}.

Campaign Details:
- Goal: ${params.goal}
- Audience: ${params.audience}
- Product/Offer: ${params.product}
- Key Benefits: ${params.keyBenefits.join(', ')}
- Tone: ${toneText}
- Brand: ${brandText}

For EACH email in the sequence, provide:
1. Subject Line (40-50 characters)
2. Preview Text (80-100 characters)
3. Email Body (HTML formatted)
4. Purpose (what this email achieves in the sequence)

Sequence Strategy:
${getSequenceStrategy(params.emailType, params.sequenceLength)}

Return as JSON array (${params.sequenceLength} emails):
[
  {
    "emailNumber": 1,
    "purpose": "...",
    "subjectLine": "...",
    "previewText": "...",
    "body": "... (HTML) ..."
  }
]

Each email must:
- Build on the previous
- Have a clear purpose
- Drive toward the goal
- Include appropriate CTA
- Be mobile-optimized
- Follow email best practices`
}

function getSequenceStrategy(emailType: string, length: number): string {
  const strategies: Record<string, string> = {
    welcome: `
Email 1: Welcome + Brand introduction
Email 2: Key benefit or use case
Email 3: Social proof or customer story
Email 4: Product/service overview
Email 5: Call to action (purchase, book call, etc.)`,

    promotional: `
Email 1: Announce promotion (create urgency)
Email 2: Feature key products/benefits
Email 3: Social proof + testimonials
Email 4: Urgency reminder (ending soon)
Email 5: Last chance (final hours)`,

    product_launch: `
Email 1: Tease/announce the product
Email 2: Deep dive into benefits
Email 3: Use cases and examples
Email 4: Social proof and early reviews
Email 5: Launch day + CTA`,

    newsletter: `
Email 1-${length}: Each provides valuable content, tips, or updates
- Maintain consistent structure
- Always provide value
- Include relevant CTA
- Build relationship over time`,

    abandoned_cart: `
Email 1: Gentle reminder (1 hour after)
Email 2: Benefits reminder + urgency (24 hours)
Email 3: Offer incentive if needed (48 hours)`,

    follow_up: `
Email 1: Thank you + confirmation
Email 2: Tips for getting started
Email 3: Check-in + support offer
Email 4: Request feedback/review
Email 5: Upsell or next steps`,
  }

  return strategies[emailType] || 'Build a logical sequence toward the goal'
}

export function generateSubjectLineVariationsPrompt(context: string): string {
  return `Generate 10 different subject line variations for this email context:

${context}

Requirements:
- Each 40-50 characters
- Test different approaches:
  * Question-based
  * Benefit-focused
  * Curiosity-driven
  * Urgency/scarcity
  * Personalized
  * Direct/clear value
  * Number/list-based
  * Social proof
  * Problem/solution
  * Exclusive/VIP

Return as JSON array:
[
  {
    "subjectLine": "...",
    "approach": "...",
    "reasoning": "..."
  }
]

Make them all test-worthy and different from each other.`
}

// Email best practices constants
export const EMAIL_BEST_PRACTICES = {
  subjectLineLength: { min: 40, max: 50, ideal: 47 },
  previewTextLength: { min: 80, max: 100, ideal: 90 },
  emailWidth: 600,
  paragraphSentences: { min: 2, max: 3 },
  primaryCTAs: 1,
  secondaryCTAs: { max: 2 },
} as const

// Common spam trigger words to avoid
export const SPAM_TRIGGERS = [
  'FREE!!!',
  'Click here now',
  'Act now',
  'Limited time',
  'Buy now',
  'Cash',
  'Earn money',
  'Weight loss',
  'Miracle',
  'Guarantee',
] as const

// Email sequence lengths
export const SEQUENCE_LENGTHS = {
  welcome: 5,
  promotional: 3,
  product_launch: 5,
  abandoned_cart: 3,
  follow_up: 4,
  newsletter: 1,
} as const

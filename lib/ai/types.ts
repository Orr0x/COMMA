// AI Request/Response Types

export interface BlogGenerateRequest {
  action: 'generate_post' | 'generate_title' | 'generate_excerpt' | 'improve_text'
  topic?: string
  text?: string
  instruction?: string
  keywords?: string[]
  tone?: string
  targetLength?: number
}

export interface BlogGenerateResponse {
  result: string
  tokensUsed?: number
}

export interface AdCampaignRequest {
  product: string
  audience: string
  platform: 'meta' | 'google' | 'linkedin' | 'tiktok'
  objective: string
  tone: string
  variations: number
  additionalContext?: string
}

export interface AdVariation {
  headline: string
  body: string
  cta: string
  characterCounts: {
    headline: number
    body: number
    cta: number
  }
}

export interface AdCampaignResponse {
  ads: AdVariation[]
  platform: string
  tokensUsed?: number
}

export interface EmailGenerateRequest {
  emailType: 'welcome' | 'promotional' | 'newsletter' | 'product_launch' | 'abandoned_cart' | 'follow_up'
  goal: string
  audience: string
  product: string
  keyBenefits: string[]
  tone?: string
  sequenceLength?: number
}

export interface EmailContent {
  subjectLine: string
  previewText: string
  body: string
}

export interface EmailGenerateResponse {
  email: EmailContent
  sequence?: EmailContent[]
  tokensUsed?: number
}

export type AIAction =
  | 'blog_generate_post'
  | 'blog_generate_title'
  | 'blog_generate_excerpt'
  | 'blog_improve_text'
  | 'ad_campaign_generate'
  | 'email_generate'
  | 'email_sequence_generate'

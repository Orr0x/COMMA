# COMMA Studio Website Redesign & Implementation Plan
## Modern Stack with AI Integration & shadcn/ui

**Project Goal:** Transform the single-page prototype into a full-featured, SEO-optimized, AI-ready website that dominates B2B copywriting search rankings.

---

## 🎯 Executive Summary

### Current State
- Single HTML file with embedded CSS/JS
- No backend, no CMS, no AI capabilities
- Static content with broken form functionality
- Zero content marketing infrastructure

### Target State
- Full-stack Next.js application with App Router
- AI-powered chat assistant and email automation
- Dynamic content management with MDX blog
- 80+ pages of SEO-optimized content
- Real-time contact forms with CRM integration
- Optimized for both traditional and AI search engines

### Tech Stack Selection
```
Frontend:          Next.js 14+ (App Router)
UI Components:     shadcn/ui + Radix UI
Styling:           Tailwind CSS
Animations:        Framer Motion
Content:           MDX + Contentlayer
Database:          Supabase (PostgreSQL)
AI:                OpenAI API + LangChain
Email:             Resend API
Forms:             React Hook Form + Zod
Analytics:         Vercel Analytics + Plausible
CMS:               Sanity (optional) or MDX-based
Hosting:           Vercel
```

---

## 📐 Technical Architecture

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERFACE                           │
│  Next.js 14 App Router + shadcn/ui Components + Tailwind   │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────┴────────────────────────────────────────────┐
│                   APPLICATION LAYER                          │
│  ├── Server Components (SSR)                                │
│  ├── Client Components (Interactive)                        │
│  ├── API Routes (Next.js Route Handlers)                    │
│  └── Server Actions (Form handling)                         │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────┴────────────────────────────────────────────┐
│                    SERVICE LAYER                            │
│  ├── AI Services (OpenAI, LangChain)                       │
│  ├── Email Service (Resend)                                │
│  ├── CRM Integration (HubSpot/Pipedrive)                   │
│  └── Analytics (Vercel, Plausible)                         │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────┴────────────────────────────────────────────┐
│                     DATA LAYER                              │
│  ├── Supabase (User data, leads, chat history)            │
│  ├── MDX Files (Blog content, case studies)               │
│  └── Edge KV (Rate limiting, cache)                       │
└─────────────────────────────────────────────────────────────┘
```

### Why This Stack?

**Next.js 14 App Router:**
- Server Components for optimal SEO
- Built-in image optimization
- API routes for backend logic
- Edge runtime support for AI responses
- Excellent Core Web Vitals out of the box

**shadcn/ui:**
- Copy-paste components (full control)
- Built on Radix UI (accessible by default)
- Tailwind-based (easy customization)
- No vendor lock-in
- Tree-shakeable (smaller bundles)

**Supabase:**
- PostgreSQL with real-time subscriptions
- Row Level Security for data protection
- Auth built-in (if needed later)
- Generous free tier
- Vector search ready for RAG

**OpenAI + LangChain:**
- GPT-4 for intelligent chat responses
- LangChain for conversation memory
- RAG (Retrieval Augmented Generation) for accurate responses
- Function calling for actions (send email, book call)

**Resend:**
- Modern email API
- React Email templates
- Deliverability-focused
- Webhook support for tracking

---

## 🗂️ Project Structure

```
comma-studio-website/
├── app/                          # Next.js App Router
│   ├── (marketing)/             # Marketing pages group
│   │   ├── page.tsx             # Homepage
│   │   ├── about/               # About page
│   │   ├── services/            # Services pages
│   │   │   ├── page.tsx         # Services overview
│   │   │   ├── b2b-copywriting/
│   │   │   ├── email-marketing/
│   │   │   ├── landing-pages/
│   │   │   ├── performance-ads/
│   │   │   ├── website-copy/
│   │   │   └── brand-messaging/
│   │   ├── case-studies/        # Portfolio/case studies
│   │   │   ├── page.tsx
│   │   │   ├── loop-earplugs/
│   │   │   ├── f1-arcade/
│   │   │   └── huel/
│   │   ├── pricing/             # Pricing page
│   │   └── contact/             # Contact page
│   │
│   ├── blog/                    # Blog section
│   │   ├── page.tsx             # Blog index
│   │   ├── [slug]/              # Individual posts
│   │   ├── category/            # Category pages
│   │   └── author/              # Author pages
│   │
│   ├── resources/               # Resources section
│   │   ├── page.tsx
│   │   ├── templates/           # Free templates
│   │   ├── guides/              # Ultimate guides
│   │   └── tools/               # Interactive tools
│   │
│   ├── api/                     # API routes
│   │   ├── chat/                # AI chat endpoint
│   │   ├── contact/             # Contact form handler
│   │   ├── subscribe/           # Newsletter signup
│   │   ├── webhooks/            # External webhooks
│   │   └── og/                  # Dynamic OG images
│   │
│   ├── layout.tsx               # Root layout
│   ├── not-found.tsx            # 404 page
│   └── sitemap.ts               # Dynamic sitemap
│
├── components/                  # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   │
│   ├── layout/                  # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   └── mobile-nav.tsx
│   │
│   ├── sections/                # Homepage sections
│   │   ├── hero.tsx
│   │   ├── clients.tsx
│   │   ├── services.tsx
│   │   ├── process.tsx
│   │   ├── testimonials.tsx
│   │   └── cta.tsx
│   │
│   ├── blog/                    # Blog components
│   │   ├── post-card.tsx
│   │   ├── post-header.tsx
│   │   ├── table-of-contents.tsx
│   │   └── related-posts.tsx
│   │
│   ├── ai/                      # AI components
│   │   ├── chat-widget.tsx
│   │   ├── chat-interface.tsx
│   │   ├── message-bubble.tsx
│   │   └── suggested-prompts.tsx
│   │
│   └── forms/                   # Form components
│       ├── contact-form.tsx
│       ├── newsletter-form.tsx
│       └── quote-form.tsx
│
├── lib/                         # Utility functions
│   ├── ai/                      # AI utilities
│   │   ├── openai.ts            # OpenAI client
│   │   ├── langchain.ts         # LangChain setup
│   │   ├── embeddings.ts        # Vector embeddings
│   │   └── prompts.ts           # AI prompts
│   │
│   ├── email/                   # Email utilities
│   │   ├── resend.ts            # Resend client
│   │   ├── templates/           # Email templates
│   │   └── send.ts              # Email sending logic
│   │
│   ├── db/                      # Database utilities
│   │   ├── supabase.ts          # Supabase client
│   │   ├── schema.ts            # DB schema types
│   │   └── queries.ts           # DB queries
│   │
│   ├── seo/                     # SEO utilities
│   │   ├── metadata.ts          # Metadata generation
│   │   ├── structured-data.ts   # JSON-LD schemas
│   │   └── og-image.tsx         # OG image generator
│   │
│   └── utils.ts                 # General utilities
│
├── content/                     # Content files
│   ├── blog/                    # Blog posts (MDX)
│   ├── case-studies/            # Case studies (MDX)
│   ├── services/                # Service pages (MDX)
│   └── pages/                   # Static pages (MDX)
│
├── emails/                      # Email templates
│   ├── contact-notification.tsx
│   ├── lead-nurture.tsx
│   └── welcome.tsx
│
├── public/                      # Static assets
│   ├── images/
│   ├── fonts/
│   └── robots.txt
│
├── styles/                      # Global styles
│   └── globals.css
│
├── types/                       # TypeScript types
│   ├── blog.ts
│   ├── case-study.ts
│   └── index.ts
│
├── .env.local                   # Environment variables
├── .env.example                 # Example env file
├── next.config.js               # Next.js config
├── tailwind.config.ts           # Tailwind config
├── tsconfig.json                # TypeScript config
├── contentlayer.config.ts       # Contentlayer config
└── package.json
```

---

## 🎨 Design System with shadcn/ui

### Component Library

**Core Components:**
```typescript
// Navigation
- NavigationMenu (shadcn)
- MobileNav (custom + Sheet)
- Breadcrumb (shadcn)

// Content Display
- Card (shadcn) - for services, blog posts, testimonials
- Badge (shadcn) - for tags, categories
- Avatar (shadcn) - for testimonials, author bios
- Separator (shadcn) - section dividers

// Forms
- Form (shadcn + react-hook-form)
- Input (shadcn)
- Textarea (shadcn)
- Button (shadcn)
- Label (shadcn)

// Feedback
- Toast (shadcn) - form submissions, notifications
- Alert (shadcn) - important messages
- Skeleton (shadcn) - loading states

// Overlays
- Dialog (shadcn) - video modals, lead magnets
- Sheet (shadcn) - mobile menu
- Popover (shadcn) - tooltips, help text

// Interactive
- Accordion (shadcn) - FAQs
- Tabs (shadcn) - service pages, pricing
- Carousel (custom + embla-carousel) - testimonials, case studies
```

### Color Palette

```typescript
// tailwind.config.ts
const colors = {
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',  // Main brand color
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  accent: {
    500: '#ff4444',  // CTA accent
  },
  neutral: {
    50: '#f8f9fa',
    100: '#f1f3f5',
    200: '#e9ecef',
    // ... gray scale
    900: '#1a1a1a',
  },
}
```

### Typography Scale

```css
/* globals.css */
@layer base {
  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-heading: 'Inter', var(--font-sans);
  }

  h1 { @apply text-5xl md:text-6xl font-bold tracking-tight; }
  h2 { @apply text-4xl md:text-5xl font-bold tracking-tight; }
  h3 { @apply text-3xl md:text-4xl font-semibold; }
  h4 { @apply text-2xl md:text-3xl font-semibold; }
  h5 { @apply text-xl md:text-2xl font-medium; }
  h6 { @apply text-lg md:text-xl font-medium; }
}
```

### Spacing System

```typescript
// Use Tailwind's default spacing scale
// Consistent spacing multiplier: 4px base unit
// Common spacings: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
```

---

## 🤖 AI Integration Architecture

### 1. AI Chat Assistant

**Purpose:** Answer questions about services, pricing, process, and qualify leads

**Architecture:**
```typescript
// lib/ai/chat-system.ts

import { ChatOpenAI } from "langchain/chat_models/openai"
import { ConversationChain } from "langchain/chains"
import { BufferMemory } from "langchain/memory"
import { PromptTemplate } from "langchain/prompts"

// System prompt for the AI assistant
const SYSTEM_PROMPT = `
You are Cain Lewis's AI assistant for COMMA Studio, a B2B copywriting agency.

Your role:
- Answer questions about B2B copywriting services
- Explain pricing (£2,000-£10,000 for projects)
- Describe the process (Discovery, Research, Draft, Optimize)
- Share case studies (Loop Earplugs, F1 Arcade, Huel)
- Qualify leads by understanding their needs
- Encourage booking a discovery call for serious inquiries

Tone: Professional but conversational, no jargon, direct

Key facts:
- Cain has 6+ years experience
- Clients include £120M+ brands
- Specializes in B2B, SaaS, e-commerce
- Based in UK, serves globally
- 43 LinkedIn recommendations, 5.0 rating

If asked about pricing, provide ranges but recommend a call for accurate quotes.
If asked about availability, suggest booking a discovery call.
`

// Chat handler with memory
export async function handleChatMessage(
  message: string,
  conversationId: string,
  history: Message[]
) {
  const chat = new ChatOpenAI({
    modelName: "gpt-4-turbo-preview",
    temperature: 0.7,
  })

  const memory = new BufferMemory({
    returnMessages: true,
    memoryKey: "history",
  })

  // Load previous conversation
  for (const msg of history) {
    if (msg.role === "user") {
      await memory.chatHistory.addUserMessage(msg.content)
    } else {
      await memory.chatHistory.addAIChatMessage(msg.content)
    }
  }

  const chain = new ConversationChain({
    llm: chat,
    memory,
    prompt: PromptTemplate.fromTemplate(SYSTEM_PROMPT + "\n\nHuman: {input}\nAI:"),
  })

  const response = await chain.call({ input: message })

  // Save to database
  await saveMessage(conversationId, message, response.response)

  return response.response
}
```

**Features:**
- Floating chat widget (bottom right)
- Conversation memory (per session)
- Suggested prompts to start conversations
- Function calling for actions:
  - Book a discovery call (opens Calendly)
  - Download a resource (triggers lead capture)
  - Send email inquiry (pre-fills contact form)
- Rate limiting (prevent abuse)
- Human handoff for complex queries

**Database Schema:**
```sql
-- Supabase schema for chat

create table conversations (
  id uuid primary key default uuid_generate_v4(),
  visitor_id text not null,
  email text,
  created_at timestamp default now(),
  last_message_at timestamp default now(),
  status text default 'active', -- active, qualified, closed
  lead_score integer default 0
);

create table messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid references conversations(id),
  role text not null, -- user, assistant, system
  content text not null,
  created_at timestamp default now()
);

create table chat_analytics (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid references conversations(id),
  event_type text not null, -- message_sent, lead_qualified, call_booked
  metadata jsonb,
  created_at timestamp default now()
);
```

### 2. AI Email Response System

**Purpose:** Automatically respond to common inquiries, qualify leads, route to human

**Architecture:**
```typescript
// lib/ai/email-handler.ts

import { OpenAI } from "openai"
import { Resend } from "resend"

const openai = new OpenAI()
const resend = new Resend()

// Email classification
export async function classifyEmail(content: string, subject: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: `Classify this email inquiry into categories:
        - pricing_inquiry: Asking about costs
        - service_inquiry: Questions about services
        - project_request: Ready to start a project
        - partnership: Business partnership opportunity
        - spam: Spam or irrelevant
        - other: Other inquiries

        Also extract:
        - urgency (low, medium, high)
        - budget_mentioned (yes/no)
        - company_size (startup, small, medium, enterprise, unknown)

        Return JSON only.`
      },
      {
        role: "user",
        content: `Subject: ${subject}\n\nBody: ${content}`
      }
    ],
    response_format: { type: "json_object" }
  })

  return JSON.parse(response.choices[0].message.content)
}

// Generate response
export async function generateEmailResponse(
  classification: any,
  originalEmail: string
) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: `You are Cain Lewis, founder of COMMA Studio.

        Generate a professional email response based on the classification.

        Guidelines:
        - Be warm but professional
        - For pricing inquiries: provide ranges, suggest a call
        - For service inquiries: answer the question, include relevant case study
        - For project requests: express enthusiasm, suggest next steps
        - Always include a clear CTA
        - Keep it concise (3-4 paragraphs max)
        - Sign off as "Cain Lewis, Co-Founder, COMMA Studio"
        `
      },
      {
        role: "user",
        content: `Classification: ${JSON.stringify(classification)}

        Original email: ${originalEmail}

        Generate response:`
      }
    ]
  })

  return response.choices[0].message.content
}

// Send email with human review option
export async function sendEmailResponse(
  to: string,
  subject: string,
  content: string,
  requiresHumanReview: boolean = false
) {
  if (requiresHumanReview) {
    // Save to database for human review
    await saveDraftResponse({ to, subject, content })
    // Send notification to Cain
    await notifyHuman({ to, subject, content })
  } else {
    // Send directly
    await resend.emails.send({
      from: "Cain Lewis <cain@commastudio.co.uk>",
      to,
      subject: `Re: ${subject}`,
      html: content,
    })
  }
}
```

**Workflow:**
1. Email arrives via Resend webhook
2. AI classifies the email (category, urgency, lead quality)
3. AI generates appropriate response
4. If high-value lead → human review before sending
5. If low-complexity → send automatically
6. Log in CRM with classification data

**Safety Guardrails:**
- All pricing mentioned includes "starting from" or "typically ranges"
- Never commit to specific deliverables without scope call
- Always route enterprise inquiries to human review
- Include disclaimer: "This is an initial response. We'll follow up personally within 24 hours."

### 3. RAG (Retrieval Augmented Generation)

**Purpose:** Ground AI responses in actual website content, case studies, and blog posts

**Architecture:**
```typescript
// lib/ai/rag.ts

import { SupabaseVectorStore } from "langchain/vectorstores/supabase"
import { OpenAIEmbeddings } from "langchain/embeddings/openai"
import { createClient } from "@supabase/supabase-js"

const embeddings = new OpenAIEmbeddings()
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

// Create vector store
const vectorStore = new SupabaseVectorStore(embeddings, {
  client: supabase,
  tableName: "documents",
  queryName: "match_documents",
})

// Index content
export async function indexContent() {
  const content = [
    // Blog posts
    ...await getBlogPosts(),
    // Case studies
    ...await getCaseStudies(),
    // Service pages
    ...await getServicePages(),
    // FAQs
    ...await getFAQs(),
  ]

  await vectorStore.addDocuments(content)
}

// Search for relevant content
export async function searchContent(query: string, k: number = 3) {
  const results = await vectorStore.similaritySearch(query, k)
  return results
}

// Use in chat
export async function chatWithRAG(message: string) {
  // 1. Search for relevant content
  const relevantDocs = await searchContent(message)

  // 2. Build context
  const context = relevantDocs.map(doc => doc.pageContent).join("\n\n")

  // 3. Generate response with context
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: `Answer based on this context from COMMA Studio's website:

        ${context}

        If the answer isn't in the context, say so and suggest booking a call.`
      },
      {
        role: "user",
        content: message
      }
    ]
  })

  return response.choices[0].message.content
}
```

**Vector Database Schema:**
```sql
-- Supabase vector extension
create extension vector;

create table documents (
  id bigserial primary key,
  content text not null,
  metadata jsonb,
  embedding vector(1536)
);

-- Create index for similarity search
create index on documents using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- Similarity search function
create function match_documents (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language sql stable
as $$
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;
```

---

## 📧 Email Automation System

### Email Templates with React Email

```tsx
// emails/contact-notification.tsx

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Button,
} from '@react-email/components'

interface ContactNotificationProps {
  name: string
  email: string
  company?: string
  message: string
  aiClassification?: {
    category: string
    urgency: string
    leadScore: number
  }
}

export default function ContactNotification({
  name,
  email,
  company,
  message,
  aiClassification
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          {aiClassification && (
            <Section style={alertBox}>
              <Text style={alertText}>
                🎯 Lead Score: {aiClassification.leadScore}/100
              </Text>
              <Text style={alertText}>
                📊 Category: {aiClassification.category}
              </Text>
              <Text style={alertText}>
                ⚡ Urgency: {aiClassification.urgency}
              </Text>
            </Section>
          )}

          <Section style={infoSection}>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            {company && <Text><strong>Company:</strong> {company}</Text>}
          </Section>

          <Section style={messageSection}>
            <Text style={messageLabel}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Button
            style={button}
            href={`mailto:${email}?subject=Re: Your inquiry about COMMA Studio`}
          >
            Reply to {name}
          </Button>
        </Container>
      </Body>
    </Html>
  )
}

// Styles...
const main = { backgroundColor: '#f6f9fc', fontFamily: 'sans-serif' }
const container = { margin: '0 auto', padding: '20px 0 48px', maxWidth: '600px' }
// ... more styles
```

### Email Workflows

**1. Contact Form Submission:**
```
User submits form
  ↓
AI classifies inquiry
  ↓
Send to Cain (with AI insights)
  ↓
Send auto-response to user
  ↓
Add to CRM with lead score
  ↓
If high-value: Send to Slack/SMS
```

**2. Newsletter Subscription:**
```
User subscribes
  ↓
Send welcome email
  ↓
Add to email list (Resend Audience)
  ↓
Schedule drip campaign
  ↓
Week 1: "Best B2B Copywriting Resources"
Week 2: "Case Study: How Loop Scaled to £120M"
Week 3: "Free Template: Landing Page Framework"
```

**3. Lead Nurture Sequence:**
```typescript
// lib/email/sequences.ts

export const leadNurtureSequence = [
  {
    delay: 0, // immediate
    template: 'welcome',
    subject: 'Thanks for reaching out about B2B copywriting',
  },
  {
    delay: 2 * 24 * 60 * 60 * 1000, // 2 days
    template: 'case-study',
    subject: 'How we helped Loop Earplugs scale to £120M',
    condition: (lead) => !lead.hasBookedCall
  },
  {
    delay: 5 * 24 * 60 * 60 * 1000, // 5 days
    template: 'resource',
    subject: 'Free download: B2B Copywriting Framework',
    condition: (lead) => !lead.hasBookedCall
  },
  {
    delay: 7 * 24 * 60 * 60 * 1000, // 1 week
    template: 'final-cta',
    subject: 'Quick question about your copywriting needs',
    condition: (lead) => !lead.hasBookedCall && lead.leadScore > 70
  }
]
```

---

## 🔍 SEO Implementation

### Metadata Generation

```typescript
// lib/seo/metadata.ts

import { Metadata } from 'next'

interface PageSEO {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  article?: {
    publishedTime: string
    modifiedTime: string
    author: string
    tags: string[]
  }
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  article
}: PageSEO): Metadata {
  const baseUrl = 'https://commastudio.co.uk'
  const defaultImage = `${baseUrl}/og-default.jpg`

  return {
    title: `${title} | COMMA Studio`,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: 'Cain Lewis', url: baseUrl }],
    creator: 'Cain Lewis',
    publisher: 'COMMA Studio',

    alternates: {
      canonical: canonical || baseUrl,
    },

    openGraph: {
      type: article ? 'article' : 'website',
      url: canonical || baseUrl,
      title,
      description,
      siteName: 'COMMA Studio',
      images: [
        {
          url: ogImage || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: [article.author],
        tags: article.tags,
      })
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || defaultImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
```

### Structured Data

```typescript
// lib/seo/structured-data.ts

import { Organization, Person, FAQPage, Article } from 'schema-dts'

export function generateOrganizationSchema(): Organization {
  return {
    '@type': 'ProfessionalService',
    name: 'COMMA Studio',
    description: 'B2B copywriting for tech companies, SaaS brands, and e-commerce businesses',
    url: 'https://commastudio.co.uk',
    logo: 'https://commastudio.co.uk/logo.png',
    founder: {
      '@type': 'Person',
      name: 'Cain Lewis',
      jobTitle: 'Co-Founder & B2B Copywriter',
      url: 'https://www.linkedin.com/in/cain-lewis-6219a110b/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Burton Upon Trent',
      addressCountry: 'GB',
    },
    areaServed: ['GB', 'US', 'EU'],
    serviceType: [
      'B2B Copywriting',
      'Website Copywriting',
      'Email Marketing Copy',
      'Performance Advertising Copy',
      'Landing Page Optimization',
      'Brand Storytelling',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '43',
      bestRating: '5',
      worstRating: '5',
    },
  }
}

export function generatePersonSchema(): Person {
  return {
    '@type': 'Person',
    name: 'Cain Lewis',
    jobTitle: 'B2B Copywriter & Marketing Strategist',
    description: 'B2B copywriter with 6+ years experience. Trusted by £120M+ brands.',
    url: 'https://commastudio.co.uk',
    sameAs: [
      'https://www.linkedin.com/in/cain-lewis-6219a110b/',
    ],
    knowsAbout: [
      'B2B Copywriting',
      'SaaS Marketing',
      'Email Marketing',
      'Conversion Rate Optimization',
      'Brand Storytelling',
      'Performance Marketing',
    ],
  }
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>): FAQPage {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  publishedDate: string
  modifiedDate: string
  author: string
  image: string
  url: string
}): Article {
  return {
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'COMMA Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://commastudio.co.uk/logo.png',
      },
    },
  }
}
```

### Dynamic Sitemap

```typescript
// app/sitemap.ts

import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog'
import { getAllCaseStudies } from '@/lib/case-studies'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://commastudio.co.uk'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/b2b-copywriting',
    '/services/email-marketing',
    '/services/landing-pages',
    '/services/performance-ads',
    '/services/website-copy',
    '/services/brand-messaging',
    '/pricing',
    '/contact',
    '/blog',
    '/case-studies',
    '/resources',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts
  const posts = await getAllBlogPosts()
  const blogPages = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Case studies
  const caseStudies = await getAllCaseStudies()
  const caseStudyPages = caseStudies.map(study => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(study.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...caseStudyPages]
}
```

---

## 📱 Key Page Components

### Homepage Hero

```tsx
// components/sections/hero.tsx

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-grid-move" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Trust badge */}
          <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by Huel, Loop Earplugs & More
          </Badge>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Your Words Should Work
            <br />
            <span className="text-purple-200">As Hard As You Do</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            I turn complex offerings into clear, compelling copy that your customers
            actually understand—and buy. Trusted by feel-good brands building something
            worth talking about.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              Get Copy That Converts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              See Real Results
            </Button>
          </div>

          {/* Social proof bullets */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center text-purple-100 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Feel-Good Brands
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 6+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 43 Recommendations
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

### Service Card Component

```tsx
// components/sections/services.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: '🎯',
    title: 'Performance Advertising',
    description: 'Ads that stop the scroll and drive action. From Meta to Google, I write performance copy that converts cold audiences into customers.',
    href: '/services/performance-ads',
    clients: ['Navan', 'Huel', 'Loop Earplugs']
  },
  {
    icon: '📢',
    title: 'OOH & Retail Advertising',
    description: 'Billboards, posters, retail displays that grab attention in seconds. Big, bold copy that works at a glance.',
    href: '/services/ooh-advertising',
    clients: ['Huel', 'F1 Arcade']
  },
  {
    icon: '📧',
    title: 'Email & CRM Copywriting',
    description: 'Email sequences that people actually want to read. From welcome flows to retention campaigns.',
    href: '/services/email-marketing',
    clients: ['Loop', 'F1 Arcade']
  },
  {
    icon: '✍️',
    title: 'Website & Landing Pages',
    description: 'Clear, conversion-focused copy that guides visitors from curiosity to customer.',
    href: '/services/website-copy',
    clients: ['Loop', 'Huel']
  },
  {
    icon: '📦',
    title: 'Product Marketing & Launches',
    description: 'Messaging that positions your product clearly and compellingly.',
    href: '/services/product-marketing',
    clients: ['Huel Daily Greens', 'Loop']
  },
  {
    icon: '📖',
    title: 'Brand Voice & Messaging',
    description: 'The strategic foundation that guides all your copy.',
    href: '/services/brand-messaging',
    clients: ['Various']
  }
]

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Actually Do</h2>
          <p className="text-xl text-gray-600">
            Not just writing. Strategic copywriting across channels that moves the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-transparent hover:border-t-purple-500"
            >
              <CardHeader>
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Recent work:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.clients.map((client, i) => (
                      <span key={i} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform" asChild>
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### AI Chat Widget

```tsx
// components/ai/chat-widget.tsx

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Cain's AI assistant. I can answer questions about our B2B copywriting services, pricing, or process. What would you like to know?"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const suggestedPrompts = [
    "What's your pricing?",
    "How long does a project take?",
    "Tell me about your process",
    "Can you show me case studies?"
  ]

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages
        })
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I'm having trouble responding. Please try again or email us directly."
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              className="rounded-full w-16 h-16 shadow-lg bg-purple-600 hover:bg-purple-700"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-purple-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <p className="font-semibold">Chat with us</p>
                    <p className="text-xs text-purple-100">Usually reply instantly</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-purple-700"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Suggested prompts (only show at start) */}
                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 text-center">Suggested questions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {suggestedPrompts.map((prompt, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs h-auto py-2 px-3"
                          onClick={() => {
                            setInput(prompt)
                            handleSend()
                          }}
                        >
                          {prompt}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    disabled={isLoading}
                  />
                  <Button
                    size="sm"
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by AI • We'll follow up personally
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

---

## 🗓️ Implementation Roadmap

### Phase 1: Foundation (Weeks 1-2)

**Week 1: Project Setup**
- [ ] Initialize Next.js 14 project
- [ ] Install shadcn/ui and configure Tailwind
- [ ] Set up Supabase project and database
- [ ] Configure environment variables
- [ ] Set up TypeScript and ESLint
- [ ] Create basic project structure
- [ ] Set up Git repository

**Week 2: Core Pages**
- [ ] Build homepage with shadcn components
- [ ] Create service pages (6 services)
- [ ] Build about page
- [ ] Create contact page with working form
- [ ] Implement navigation and footer
- [ ] Add responsive mobile menu

**Deliverables:**
- Fully functional website with core pages
- Working contact form
- Responsive design
- Basic SEO metadata

### Phase 2: Content & SEO (Weeks 3-4)

**Week 3: Blog System**
- [ ] Set up Contentlayer for MDX
- [ ] Create blog layout and components
- [ ] Build blog index page
- [ ] Create blog post template
- [ ] Add table of contents
- [ ] Implement related posts
- [ ] Add reading time calculator

**Week 4: Case Studies & SEO**
- [ ] Build case study pages (Loop, F1, Huel)
- [ ] Implement structured data (JSON-LD)
- [ ] Create dynamic sitemap
- [ ] Add robots.txt
- [ ] Implement OG image generation
- [ ] Add meta tags to all pages
- [ ] Set up Google Search Console

**Deliverables:**
- Blog system with MDX support
- 3 detailed case studies
- Complete SEO implementation
- Dynamic sitemap

### Phase 3: AI Integration (Weeks 5-6)

**Week 5: Chat System**
- [ ] Set up OpenAI API
- [ ] Implement chat backend with LangChain
- [ ] Create chat widget component
- [ ] Add conversation memory
- [ ] Implement suggested prompts
- [ ] Add rate limiting
- [ ] Store conversations in Supabase

**Week 6: Email Automation**
- [ ] Set up Resend API
- [ ] Create email templates with React Email
- [ ] Implement contact form email handler
- [ ] Build AI email classification
- [ ] Create automated response system
- [ ] Set up newsletter subscription
- [ ] Implement lead nurture sequence

**Deliverables:**
- Working AI chat assistant
- Automated email responses
- Lead nurture system
- Email templates

### Phase 4: Content Production (Weeks 7-10)

**Content Creation:**
- [ ] Write 6 pillar pages (5,000+ words each)
- [ ] Write 30 supporting blog articles (2,000+ words each)
- [ ] Create 5 case studies with detailed metrics
- [ ] Build 3 resource pages (templates, guides)
- [ ] Write all service page content
- [ ] Create FAQ pages

**Deliverables:**
- 6 comprehensive pillar pages
- 30 SEO-optimized blog posts
- 5 detailed case studies
- Resource library

### Phase 5: Advanced Features (Weeks 11-12)

**Week 11: Interactive Features**
- [ ] Build newsletter signup with lead magnet
- [ ] Create downloadable resources (PDF generation)
- [ ] Add interactive tools (calculators, templates)
- [ ] Implement search functionality
- [ ] Add blog categories and tags
- [ ] Create author pages

**Week 12: Analytics & Optimization**
- [ ] Set up Vercel Analytics
- [ ] Implement Plausible Analytics
- [ ] Add conversion tracking
- [ ] Set up A/B testing framework
- [ ] Optimize Core Web Vitals
- [ ] Implement caching strategy
- [ ] Add error monitoring (Sentry)

**Deliverables:**
- Lead magnet system
- Interactive tools
- Complete analytics
- Performance optimization

### Phase 6: Launch & Marketing (Week 13+)

**Pre-Launch:**
- [ ] Final SEO audit
- [ ] Performance testing
- [ ] Security audit
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Content review

**Launch:**
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Configure DNS
- [ ] Submit to search engines
- [ ] Set up Google Business Profile
- [ ] Submit to directories (20+)

**Post-Launch:**
- [ ] Monitor analytics
- [ ] Fix any bugs
- [ ] Start content marketing
- [ ] Begin link building
- [ ] Launch guest posting campaign
- [ ] Start Reddit/Quora engagement

---

## 💰 Cost Breakdown

### Development Costs

**Option A: DIY Development**
- Time investment: 300-400 hours
- Your time cost (opportunity cost)
- Tools & services: ~£200/month

**Option B: Agency Build**
- Full build: £25,000-£40,000
- Timeline: 3-4 months
- Includes design, development, content strategy

**Option C: Freelance Developer**
- Experienced Next.js dev: £50-80/hour
- Total: ~£15,000-£25,000 (200-300 hours)
- Timeline: 2-3 months

### Monthly Running Costs

```
Hosting (Vercel Pro):        £20/month
Supabase (Pro):              £25/month
OpenAI API:                  £50-200/month (usage-based)
Resend Email:                £20/month (5,000 emails)
Domain:                      £10/year
Analytics:                   £10/month
Total:                       £125-275/month
```

### Content Production Costs

**Option A: DIY**
- Your time: 200+ hours for initial content
- Free (but high opportunity cost)

**Option B: Hire Writers**
- SEO writer: £0.10-0.20/word
- 80 articles × 2,000 words = 160,000 words
- Cost: £16,000-£32,000

**Option C: Hybrid**
- Write pillar pages yourself (6 articles)
- Hire for supporting content (30 articles)
- Cost: £6,000-£12,000

---

## 🎯 Success Metrics

### Month 1-3 Goals
- [ ] 10+ keywords ranking in top 100
- [ ] 500+ monthly organic visitors
- [ ] 5+ leads from website
- [ ] Contact form conversion rate: 2-3%
- [ ] AI chat engagement rate: 15-20%

### Month 4-6 Goals
- [ ] 20+ keywords in top 50
- [ ] 2,000+ monthly organic visitors
- [ ] 20+ leads from website
- [ ] 3+ case studies published
- [ ] 30+ blog articles live

### Month 7-12 Goals
- [ ] 30+ keywords in top 10
- [ ] 5,000+ monthly organic visitors
- [ ] 50+ leads from website
- [ ] Featured in AI search results (ChatGPT, Perplexity)
- [ ] 100+ quality backlinks
- [ ] £600K+ in attributed revenue

---

## 🚀 Next Steps

### Immediate Actions (This Week)

1. **Make a build decision:**
   - DIY (if you have React/Next.js skills)
   - Hire developer (fastest route)
   - Agency (most expensive but hands-off)

2. **Set up accounts:**
   - Vercel account
   - Supabase account
   - OpenAI API key
   - Resend account

3. **Domain & hosting:**
   - Ensure commastudio.co.uk is ready
   - Set up DNS for migration

4. **Content planning:**
   - Prioritize first 10 blog topics
   - Outline 3 case studies
   - Plan service page content

### Week 1 Tasks

1. **Development:**
   - Initialize Next.js project
   - Install and configure shadcn/ui
   - Set up Tailwind CSS
   - Create basic layout

2. **Design:**
   - Design homepage in Figma (optional)
   - Choose color palette
   - Select fonts
   - Create component library

3. **Content:**
   - Write homepage copy
   - Draft service page content
   - Prepare case study data

### Decision Points

**Build vs Buy:**
- If budget allows (£15K+): Hire experienced Next.js developer
- If time-limited: Use agency
- If technically skilled: DIY with this plan

**Content Strategy:**
- Start with 6 pillar pages (write yourself)
- Hire for supporting content (30 articles)
- Use AI to assist (but always edit/review)

**AI Features Priority:**
- Phase 1: Working contact form (essential)
- Phase 2: AI chat widget (high value)
- Phase 3: Email automation (scalability)

---

## 📚 Technical Documentation

### Environment Variables

```bash
# .env.local

# App
NEXT_PUBLIC_APP_URL=https://commastudio.co.uk

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# OpenAI
OPENAI_API_KEY=your_openai_key

# Resend
RESEND_API_KEY=your_resend_key

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=commastudio.co.uk

# CRM (optional)
HUBSPOT_API_KEY=your_hubspot_key
```

### Package.json Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "contentlayer": "^0.3.0",
    "next-contentlayer": "^0.3.0",
    "langchain": "^0.1.0",
    "openai": "^4.28.0",
    "@supabase/supabase-js": "^2.39.0",
    "resend": "^3.2.0",
    "@react-email/components": "^0.0.15",
    "react-hook-form": "^7.51.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "lucide-react": "^0.344.0",
    "date-fns": "^3.3.0",
    "gray-matter": "^4.0.3",
    "reading-time": "^1.5.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.3.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## 🎓 Learning Resources

### For Development

**Next.js:**
- Official docs: https://nextjs.org/docs
- Next.js 14 App Router course: https://nextjs.org/learn

**shadcn/ui:**
- Component library: https://ui.shadcn.com
- Installation guide: https://ui.shadcn.com/docs/installation/next

**Tailwind CSS:**
- Official docs: https://tailwindcss.com/docs
- Tailwind UI examples: https://tailwindui.com

**Contentlayer:**
- Docs: https://contentlayer.dev
- Blog starter: https://github.com/contentlayerdev/next-contentlayer-example

### For AI Integration

**OpenAI:**
- API docs: https://platform.openai.com/docs
- GPT-4 guide: https://platform.openai.com/docs/guides/gpt

**LangChain:**
- JS docs: https://js.langchain.com
- Memory: https://js.langchain.com/docs/modules/memory
- RAG tutorial: https://js.langchain.com/docs/use_cases/question_answering

**Supabase:**
- Quickstart: https://supabase.com/docs/guides/getting-started
- Vector search: https://supabase.com/docs/guides/ai

---

## ✅ Conclusion

This design plan provides everything needed to transform the COMMA Studio prototype into a production-ready, AI-powered website that:

1. **Converts visitors into leads** with optimized UX and AI assistance
2. **Ranks for target keywords** through comprehensive SEO
3. **Scales efficiently** with automated email and chat
4. **Provides insights** through analytics and tracking
5. **Future-proofs** with modern stack and AI integration

The recommended stack (Next.js + shadcn/ui + Supabase + OpenAI) provides:
- Best-in-class performance
- Full control over design
- Scalability for AI features
- Cost-effective hosting
- Easy maintenance

**Recommended Path Forward:**
1. Hire experienced Next.js developer (£15-20K budget)
2. Build in 3 phases: Core site (Month 1), Content + SEO (Month 2), AI features (Month 3)
3. Write pillar content yourself, hire for supporting articles
4. Launch with strong foundation, iterate based on data

**Timeline:** 3 months to full launch, 12 months to SEO dominance

Ready to build this? Let's start with Phase 1.

# AI Marketing Tools - Complete Documentation

## Overview

The COMMA Studio admin portal includes four powerful AI-powered marketing tools that leverage Claude Sonnet 4.5 to generate high-quality marketing content in seconds.

---

## Tool #1: AI Blog Post Creator

**Location:** `/admin/dashboard/ai-tools` (Blog Post Creator card)

### Features
- Generate complete blog posts with titles, outlines, and full content
- Choose from 3 tone options: Professional, Conversational, Technical
- Select content length: Short (500 words), Medium (1000 words), Long (1500+ words)
- Specify target audience for tailored content
- Add keywords for SEO optimization
- Include custom context/requirements

### How to Use
1. Navigate to AI Tools hub
2. Click "Open tool" on Blog Post Creator card
3. Enter your topic/subject
4. Select tone, length, and target audience
5. (Optional) Add keywords and additional context
6. Click "Generate Blog Post"
7. Review generated content
8. Copy or use directly in blog editor

### API Endpoint
- **Route:** `/api/ai/blog`
- **Method:** POST
- **Rate Limit:** 20 requests/hour per IP
- **Response Time:** 30-60 seconds

### Generated Content Includes
- SEO-optimized title
- Structured outline with sections
- Full blog post content
- Natural keyword integration
- Compelling introduction and conclusion

---

## Tool #2: AI Ad Campaign Creator

**Location:** `/admin/dashboard/ai-tools/ads`

### Features
- Generate multi-platform ad campaigns
- Supports 4 platforms:
  - Meta Ads (Facebook/Instagram)
  - Google Ads (Search & Display)
  - LinkedIn Ads (B2B focus)
  - TikTok Ads (Short-form video)
- Multiple ad formats per platform
- A/B testing variations included
- Character limit compliance for each platform
- Call-to-action suggestions

### How to Use
1. Select target platform
2. Choose campaign objective (awareness, leads, sales, engagement)
3. Describe your product/service
4. Define target audience
5. Specify key message/USP
6. (Optional) Add budget constraints
7. Click "Generate Ad Campaign"
8. Review multiple ad variations
9. Copy ads for your campaign platform

### Platform-Specific Output

#### Meta Ads
- Primary text (125 chars)
- Headline (40 chars)
- Description (30 chars)
- Multiple variations for A/B testing

#### Google Ads
- Search ad headlines (3x 30 chars)
- Descriptions (2x 90 chars)
- Display ad copy

#### LinkedIn Ads
- Professional tone
- B2B-focused messaging
- Lead generation optimized

#### TikTok Ads
- Short-form, engaging copy
- Hook-driven openings
- Youth-oriented language

### API Endpoint
- **Route:** `/api/ai/ads`
- **Method:** POST
- **Rate Limit:** 20 requests/hour per IP
- **Response Time:** 30-45 seconds

---

## Tool #3: AI Email Marketing Creator

**Location:** `/admin/dashboard/ai-tools/email`

### Features
- Generate 3 types of email content:
  1. **Single Email:** One-off campaigns or newsletters
  2. **Email Sequence:** Multi-email drip campaigns (3-7 emails)
  3. **Subject Lines:** 10 compelling subject line variations

### Single Email Generator
- Choose email type:
  - Newsletter
  - Promotional
  - Product Launch
  - Event Invitation
  - Welcome Email
- Specify audience and goal
- Include product/service details
- Generate complete email with:
  - Compelling subject line
  - Preheader text
  - Email body
  - Clear CTA
  - P.S. line

### Email Sequence Generator
- Create entire drip campaigns
- Specify sequence purpose (onboarding, nurture, sales)
- Define number of emails (3-7)
- Each email includes:
  - Day/timing recommendation
  - Subject line
  - Full email content
  - Strategic CTA placement
  - Logical progression through sequence

### Subject Line Generator
- Generate 10 subject line variations
- Specify product/service and key benefit
- Receive diverse approaches:
  - Curiosity-driven
  - Benefit-focused
  - Urgency-based
  - Question format
  - Personalized
  - Number-driven

### How to Use
1. Select tab (Email, Sequence, or Subject Lines)
2. Fill in required fields
3. Choose options (type, purpose, length)
4. Click "Generate"
5. Review all generated content
6. Copy to your email platform
7. Customize as needed

### API Endpoint
- **Route:** `/api/ai/email`
- **Method:** POST
- **Rate Limit:** 20 requests/hour per IP
- **Response Time:** 20-50 seconds (varies by type)

---

## Tool #4: AI Company Research Agent

**Location:** `/admin/dashboard/ai-tools/research`

### Features
- Comprehensive company and market research
- 3 research modes:
  1. **Website Research:** Analyze company websites and competitors
  2. **Social Media Research:** Analyze social presence and engagement
  3. **Niche/Market Research:** Identify opportunities in specific markets

### Website Research Mode

**What You Provide:**
- Company website URL
- Website content (copy/paste homepage, about page, etc.)
- (Optional) Competitor URLs
- (Optional) Additional context
- Focus areas (select multiple):
  - Messaging & Positioning
  - Audience Analysis
  - Content Strategy
  - SEO Opportunities
  - Campaign Ideas
  - Competitive Analysis
- Research depth: Quick (5-10 min), Standard (15-20 min), Deep Dive (30+ min)

**What You Get:**
15+ section comprehensive report including:
- Executive Summary
- Company Overview
- Value Proposition Analysis
- Target Audience Insights
- Competitive Landscape
- Messaging Analysis
- Brand Voice & Tone
- Marketing Opportunities (specific actionable ideas)
- Content Calendar Recommendations
- SEO & Keyword Opportunities
- Copywriting Hooks (ready-to-use lines)
- Pain Points & Solutions
- Call-to-Action Recommendations
- Channel Strategy
- Next Steps & Recommendations

### Social Media Research Mode

**What You Provide:**
- Company name
- Social media profiles (LinkedIn, Twitter, Instagram)
- Sample social posts (copy/paste recent content)
- Analysis type:
  - Content Strategy Analysis
  - Audience Engagement Analysis
  - Competitor Comparison

**What You Get:**
- Content strategy breakdown
- Posting frequency and timing insights
- Engagement patterns
- Audience demographics and interests
- Tone and voice analysis
- Top-performing content themes
- Competitor comparison (if requested)
- Recommendations for improvement

### Niche/Market Research Mode

**What You Provide:**
- Niche/industry description
- Target audience definition
- Geographic focus (Global, North America, Europe, etc.)
- Research goals (select multiple):
  - Market Size & Trends
  - Customer Insights
  - Content Opportunities
  - Competitive Intelligence
  - Positioning Strategy
  - Channel Strategy

**What You Get:**
- Market size and growth trends
- Customer persona insights
- Pain points and needs
- Content gap analysis
- Competitor landscape overview
- Marketing channel recommendations
- Positioning opportunities
- Go-to-market strategy suggestions

### Research Report Features
- **Markdown formatted** for easy reading
- **Copy to clipboard** button
- **Download as .md file**
- **Saved to database** for future reference
- **View all past reports** at `/admin/dashboard/ai-tools/research/reports`
- **Filter by type** (website, social, niche)
- **Search and delete** reports

### How to Use
1. Choose research mode tab (Website, Social, or Niche)
2. Fill in required information
3. Select focus areas/research goals
4. Choose research depth (website mode only)
5. Click "Generate Research Report"
6. Wait 30-60 seconds for AI analysis
7. Review comprehensive report
8. Copy specific sections or download entire report
9. Access report anytime from Reports list page

### API Endpoints
- **Generate:** POST `/api/ai/research`
- **List Reports:** GET `/api/ai/research`
- **Get Single Report:** GET `/api/ai/research?id={reportId}`
- **Delete Report:** DELETE `/api/ai/research?id={reportId}`
- **Rate Limit:** 20 requests/hour per IP
- **Response Time:** 30-90 seconds (depends on depth)

### Reports Management
- **Main page:** `/admin/dashboard/ai-tools/research`
- **All reports:** `/admin/dashboard/ai-tools/research/reports`
- **Single report:** `/admin/dashboard/ai-tools/research/reports/[id]`

---

## Technical Implementation

### Shared Infrastructure

#### AI Configuration
- **Model:** Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- **Provider:** Anthropic
- **Max Tokens:** 4,096 (Blog/Ads/Email), 8,192 (Research)
- **Temperature:** 0.7 (balanced creativity/consistency)
- **Rate Limiting:** LRU cache, 20 requests/hour per IP

#### Environment Variables
```env
ANTHROPIC_API_KEY=sk-ant-api03-...
AI_MODEL=claude-sonnet-4-5-20250929
AI_MAX_TOKENS=4096
AI_TEMPERATURE=0.7
AI_RATE_LIMIT_MAX=20
AI_RATE_LIMIT_WINDOW_MS=3600000
```

#### Core AI Library
- **Location:** `lib/ai/claude.ts`
- **Functions:**
  - `generateCopy()` - Single generation
  - `streamCopy()` - Streaming response
  - `isConfigured()` - Check AI setup
- **Error Handling:** Graceful fallbacks, user-friendly messages

#### Rate Limiting
- **Implementation:** LRU cache in memory
- **Identifier:** Client IP address
- **Limit:** 20 requests per hour
- **Response:** 429 status with retry-after header

### System Prompts

All tools use carefully crafted system prompts located in `lib/ai/prompts/`:

- **Blog:** `blog-prompts.ts` - Optimized for long-form content, SEO, structure
- **Ads:** `ad-prompts.ts` - Platform-specific constraints, persuasive copy
- **Email:** `email-prompts.ts` - Engagement, sequences, subject lines
- **Research:** `research-prompts.ts` - Analysis frameworks, comprehensive insights

### Database Integration

#### Research Reports Only
Research Agent saves reports to database for future reference:

**Model:** `ResearchReport` (Prisma)
**Fields:**
- `id` - Unique identifier
- `title` - Report name
- `type` - Research mode (website/social/niche)
- `status` - Processing status
- `report` - Full markdown content
- `urls`, `socialHandles`, `nicheData` - Input data (JSON)
- `processingTime`, `tokensUsed` - Metrics
- `createdAt`, `updatedAt` - Timestamps

**Migration:** `prisma/migrations/.../add_research_reports`

---

## User Interface Components

### Shared Components
- **Form inputs:** React Hook Form + Zod validation
- **Loading states:** Spinner with progress message
- **Error handling:** User-friendly error messages
- **Success feedback:** Green checkmark with next action
- **Copy buttons:** One-click clipboard copy
- **Responsive design:** Mobile-optimized forms and results

### AI Tools Hub
- **Location:** `/admin/dashboard/ai-tools/page.tsx`
- **Features:**
  - 4 tool cards with descriptions
  - Quick access links
  - Usage stats
  - "About AI Features" information card
  - Back to Dashboard navigation

### Tool-Specific Pages
Each tool has dedicated page with:
- **Form section:** Input fields specific to tool
- **Sidebar:** How-to guide, tips, best practices
- **Results section:** Generated content display
- **Action buttons:** Copy, regenerate, save

---

## Best Practices

### For Blog Posts
- Be specific with topics (narrow focus = better content)
- Include target keywords for SEO
- Provide audience context (industry, experience level)
- Use generated outline as starting point, customize as needed
- Always review and add personal insights

### For Ad Campaigns
- Know your objective before starting
- Test multiple variations (A/B testing)
- Customize ads after generation for brand voice
- Check character limits before copying to platforms
- Use platform-specific suggestions

### For Email Marketing
- Single emails work best with clear, specific goals
- Sequences need logical progression - review full sequence before sending
- Test subject lines with small segment first
- Personalize generated content with recipient data
- Always include unsubscribe option (add manually)

### For Research Reports
- Provide comprehensive website content for best analysis
- Include competitor URLs for comparative insights
- Be specific about focus areas and research goals
- Deep dive mode gives most detailed insights (but takes longer)
- Save reports to compare companies or track changes over time
- Export to markdown for sharing with team

---

## Troubleshooting

### Common Issues

**"AI not configured" error:**
- Check `.env.local` has `ANTHROPIC_API_KEY`
- Verify API key is valid
- Restart dev server

**"Rate limit exceeded" error:**
- Wait 1 hour before next request
- Contact admin to increase limit if needed

**Slow generation:**
- Normal for deep research (30-90 seconds)
- Check internet connection
- Try again if timeout occurs

**Empty or poor results:**
- Provide more detailed input
- Add specific context and requirements
- Try different tone or length settings
- Regenerate with adjusted parameters

**Report not saving:**
- Check database connection
- Verify Prisma is running
- Check browser console for errors

---

## API Usage Examples

### Blog Post Generation
```typescript
const response = await fetch('/api/ai/blog', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    topic: 'How to improve B2B email open rates',
    tone: 'professional',
    length: 'medium',
    targetAudience: 'B2B marketers',
    keywords: ['email marketing', 'open rates', 'subject lines'],
    additionalContext: 'Focus on data-driven strategies'
  })
});

const data = await response.json();
// data.blog contains generated content
```

### Ad Campaign Generation
```typescript
const response = await fetch('/api/ai/ads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    platform: 'meta',
    objective: 'leads',
    productService: 'B2B copywriting services',
    targetAudience: 'Tech startup founders',
    keyMessage: 'Convert more customers with compelling copy',
    budget: '£1000/month'
  })
});

const data = await response.json();
// data.ads contains ad variations
```

### Email Generation
```typescript
const response = await fetch('/api/ai/email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'sequence',
    sequencePurpose: 'onboarding',
    numberOfEmails: 5,
    productService: 'SaaS project management tool',
    targetAudience: 'Product managers',
    goal: 'Activate trial users'
  })
});

const data = await response.json();
// data.sequence contains array of emails
```

### Research Report Generation
```typescript
const response = await fetch('/api/ai/research', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'website',
    url: 'https://example.com',
    content: '...website content...',
    competitorUrls: ['https://competitor1.com', 'https://competitor2.com'],
    focusAreas: ['messaging', 'audience', 'content'],
    depth: 'standard',
    additionalContext: 'Looking to rebrand for enterprise market'
  })
});

const data = await response.json();
// data.reportId - ID to access report later
// data.report - Full markdown report content
```

---

## Performance & Costs

### Response Times
- **Blog Post:** 30-60 seconds
- **Ad Campaign:** 30-45 seconds
- **Single Email:** 20-30 seconds
- **Email Sequence:** 40-60 seconds
- **Subject Lines:** 15-25 seconds
- **Research (Quick):** 30-45 seconds
- **Research (Standard):** 45-75 seconds
- **Research (Deep):** 60-120 seconds

### Token Usage (Approximate)
- **Blog Post:** 1,500-3,000 tokens
- **Ad Campaign:** 800-1,500 tokens
- **Email:** 500-2,000 tokens (varies by type)
- **Research:** 3,000-8,000 tokens (depends on depth)

### API Costs (Anthropic Claude Sonnet 4.5)
- **Input:** $3.00 per million tokens
- **Output:** $15.00 per million tokens
- **Average blog post cost:** $0.05-$0.12
- **Average ad campaign cost:** $0.03-$0.08
- **Average email cost:** $0.02-$0.10
- **Average research report cost:** $0.15-$0.50

**Monthly estimates (based on 100 generations each):**
- Blog: $5-$12
- Ads: $3-$8
- Email: $2-$10
- Research: $15-$50
- **Total:** ~$25-$80/month for moderate usage

---

## Future Enhancements

### Planned Features
- [ ] **Content Scheduling:** Schedule blog posts and emails
- [ ] **Brand Voice Training:** Train AI on your specific brand voice
- [ ] **Template Library:** Save favorite prompts as templates
- [ ] **Collaboration:** Share and review content with team
- [ ] **Version History:** Track changes and iterations
- [ ] **Export Options:** PDF, DOCX, HTML export
- [ ] **Integration:** Direct publish to blog or email platform
- [ ] **Analytics:** Track performance of AI-generated content
- [ ] **Custom Models:** Fine-tune models on your content
- [ ] **Multi-language:** Generate content in multiple languages

### Research Agent Enhancements
- [ ] **Live Website Scraping:** Auto-fetch website content
- [ ] **Social API Integration:** Pull data directly from social platforms
- [ ] **Competitive Tracking:** Monitor competitor changes over time
- [ ] **Report Comparisons:** Side-by-side company comparisons
- [ ] **Trend Analysis:** Identify industry trends from multiple reports
- [ ] **Action Items:** Generate specific tasks from research
- [ ] **Client Sharing:** Share reports with clients via link

---

## Security & Privacy

### Data Handling
- **No persistent storage** for blog/ads/email content (except user-initiated saves)
- **Research reports** stored in local database only
- **API keys** stored in environment variables, never exposed to client
- **Rate limiting** prevents abuse
- **Input sanitization** on all user inputs
- **No data sent to third parties** (except Anthropic API for generation)

### Best Practices
- Keep API keys secure
- Don't commit `.env.local` to version control
- Regularly rotate API keys
- Monitor usage for unusual patterns
- Set appropriate rate limits for your use case

---

## Support & Documentation

### Additional Resources
- **System Prompts:** `lib/ai/prompts/` - View exact prompts used
- **API Routes:** `app/api/ai/` - Implementation details
- **Components:** `components/admin/` - UI components
- **Database Schema:** `prisma/schema.prisma` - Data models

### Getting Help
1. Check this documentation first
2. Review error messages in browser console
3. Check dev server logs
4. Verify environment variables
5. Test API endpoint directly
6. Check Anthropic API status: status.anthropic.com

---

## Changelog

### Version 1.0.0 (Current)
- ✅ AI Blog Post Creator
- ✅ AI Ad Campaign Creator (Meta, Google, LinkedIn, TikTok)
- ✅ AI Email Marketing Creator (Single, Sequence, Subject Lines)
- ✅ AI Company Research Agent (Website, Social, Niche modes)
- ✅ Rate limiting (20/hour)
- ✅ Error handling and validation
- ✅ Research report persistence
- ✅ Comprehensive documentation

---

**Last Updated:** October 2025
**AI Model:** Claude Sonnet 4.5
**Status:** Production Ready ✅

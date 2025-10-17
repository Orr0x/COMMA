# AI Company Research Agent - Design Document

## Overview

An intelligent research assistant that analyzes companies, brands, and niches to uncover marketing opportunities, competitive insights, and strategic recommendations.

**Purpose**: Help copywriters and marketers quickly understand a client's business, competitors, target audience, and identify content/marketing opportunities.

---

## Core Capabilities

### 1. Multi-Source Research
- **Website Analysis**: Scrape and analyze company websites
- **Social Media Intelligence**: LinkedIn, Twitter, Instagram profile analysis
- **Industry Research**: Niche/vertical analysis based on text descriptions
- **Competitor Analysis**: Identify and analyze competitors
- **Audience Profiling**: Understand target demographics and psychographics

### 2. Marketing Intelligence
- **Content Gap Analysis**: Find topics they should cover but haven't
- **SEO Opportunities**: Keyword suggestions and content themes
- **Messaging Analysis**: Extract brand voice, tone, and positioning
- **Pain Points Identification**: Customer problems worth addressing
- **Unique Value Props**: What makes them different

### 3. Actionable Outputs
- **Company Brief**: Comprehensive overview document
- **Marketing Opportunities**: Prioritized list of content/campaign ideas
- **Competitive Landscape**: Who they're competing against and how
- **Content Calendar Ideas**: Topic suggestions with angles
- **Copywriting Hooks**: Proven messaging frameworks

---

## User Interface Design

### Research Agent Page Layout

```
┌─────────────────────────────────────────────────────────┐
│  Back to AI Tools  |  Dashboard                          │
│                                                           │
│  🔍 AI Company Research Agent                            │
│  Analyze companies and discover marketing opportunities  │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  [Tab: URL Research] [Tab: Social Research] [Tab: Niche] │
│                                                           │
│  ┌─── URL Research Tab ───────────────────────────────┐ │
│  │                                                      │ │
│  │  Company Website URL *                              │ │
│  │  [https://example.com              ]                │ │
│  │                                                      │ │
│  │  Additional URLs (optional)                         │ │
│  │  [Competitor 1                     ] [+ Add More]   │ │
│  │  [Competitor 2                     ]                │ │
│  │                                                      │ │
│  │  Research Depth                                     │ │
│  │  ○ Quick Overview (5 pages)                         │ │
│  │  ● Standard Analysis (15 pages)                     │ │
│  │  ○ Deep Dive (30 pages)                             │ │
│  │                                                      │ │
│  │  Focus Areas (select all that apply)                │ │
│  │  ☑ Company Overview                                 │ │
│  │  ☑ Marketing Analysis                               │ │
│  │  ☑ Competitor Research                              │ │
│  │  ☑ Content Opportunities                            │ │
│  │  ☑ Audience Insights                                │ │
│  │                                                      │ │
│  │  Additional Context (optional)                      │ │
│  │  [textarea]                                         │ │
│  │                                                      │ │
│  │  [🔍 Start Research]                                │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌─── Social Research Tab ──────────────────────────┐   │
│  │  LinkedIn Profile URL                             │   │
│  │  [https://linkedin.com/company/...  ]             │   │
│  │                                                    │   │
│  │  Twitter Handle                                   │   │
│  │  [@companyhandle                   ]              │   │
│  │                                                    │   │
│  │  Instagram Handle                                 │   │
│  │  [@companyhandle                   ]              │   │
│  │                                                    │   │
│  │  Analysis Type                                    │   │
│  │  ○ Content Strategy Analysis                      │   │
│  │  ○ Audience Engagement Analysis                   │   │
│  │  ○ Competitor Comparison                          │   │
│  │                                                    │   │
│  │  [🔍 Analyze Social Presence]                     │   │
│  └────────────────────────────────────────────────────┘   │
│                                                           │
│  ┌─── Niche Research Tab ────────────────────────────┐   │
│  │  Industry/Niche Description *                      │   │
│  │  [e.g., "B2B SaaS for remote teams"]              │   │
│  │                                                    │   │
│  │  Target Audience                                  │   │
│  │  [e.g., "CTOs at 50-200 employee companies"]     │   │
│  │                                                    │   │
│  │  Geographic Focus                                 │   │
│  │  [Dropdown: Global, US, UK, EU, etc.]            │   │
│  │                                                    │   │
│  │  Research Goals                                   │   │
│  │  ☑ Market Trends                                  │   │
│  │  ☑ Content Topics                                 │   │
│  │  ☑ Competitor Landscape                           │   │
│  │  ☑ Customer Pain Points                           │   │
│  │                                                    │   │
│  │  [🔍 Research Niche]                              │   │
│  └────────────────────────────────────────────────────┘   │
│                                                           │
├─────────────────────────────────────────────────────────┤
│  Research History (Recent)                               │
│                                                           │
│  [Card] Company XYZ - Website Analysis                   │
│         Completed 2 hours ago | View Report              │
│                                                           │
│  [Card] SaaS Niche Research                              │
│         Completed yesterday | View Report                │
└─────────────────────────────────────────────────────────┘
```

---

## Research Output Format

### Company Research Report Structure

```markdown
# Company Research Report: [Company Name]

**Generated**: [Date/Time]
**Research Type**: Website Analysis
**Depth**: Standard (15 pages analyzed)

---

## 📊 Executive Summary

- **Industry**: [Industry/Niche]
- **Business Model**: [B2B/B2C/Marketplace/etc.]
- **Target Market**: [Description]
- **Key Offerings**: [Products/Services]
- **Estimated Size**: [Team size, revenue tier if available]

**Quick Take**: [2-3 sentence summary of what they do and who they serve]

---

## 🎯 Company Overview

### What They Do
[Detailed description of products/services]

### How They Position Themselves
- **Main Value Proposition**: [Quote from website]
- **Key Differentiators**:
  - [Point 1]
  - [Point 2]
  - [Point 3]

### Brand Voice & Messaging
- **Tone**: [Professional/Casual/Technical/etc.]
- **Language Style**: [Jargon-heavy/Simple/etc.]
- **Common Phrases**:
  - "[Example 1]"
  - "[Example 2]"

---

## 👥 Target Audience Analysis

### Primary Audience
- **Who**: [Job titles, roles]
- **Pain Points Addressed**:
  1. [Pain point 1]
  2. [Pain point 2]
  3. [Pain point 3]

### Psychographic Profile
- **Motivations**: [What drives them]
- **Objections**: [Common concerns]
- **Decision Criteria**: [What matters to them]

---

## 🏆 Competitive Landscape

### Main Competitors
1. **[Competitor 1]** - [URL]
   - Positioning: [How they position]
   - Strength: [What they do well]

2. **[Competitor 2]** - [URL]
   - Positioning: [How they position]
   - Strength: [What they do well]

### Competitive Advantages
✅ [Advantage 1]
✅ [Advantage 2]
✅ [Advantage 3]

### Gaps/Weaknesses
⚠️ [Weakness 1]
⚠️ [Weakness 2]

---

## 💡 Marketing Opportunities

### Content Gaps
**Topics they should cover but haven't**:
1. **[Topic 1]** - Why: [Reason]
2. **[Topic 2]** - Why: [Reason]
3. **[Topic 3]** - Why: [Reason]

### SEO Opportunities
**High-value keywords to target**:
- "[Keyword 1]" - [Search intent]
- "[Keyword 2]" - [Search intent]
- "[Keyword 3]" - [Search intent]

### Campaign Ideas
1. **[Campaign Name]**
   - **Angle**: [Approach]
   - **Channels**: [Where to run]
   - **Why it works**: [Reasoning]

2. **[Campaign Name]**
   - **Angle**: [Approach]
   - **Channels**: [Where to run]
   - **Why it works**: [Reasoning]

---

## ✍️ Copywriting Hooks

### Proven Messaging Frameworks

**Problem-Agitate-Solution**:
- Problem: "[Customer problem]"
- Agitate: "[Make it hurt]"
- Solution: "[Your solution]"

**Before-After-Bridge**:
- Before: "[Current state]"
- After: "[Desired state]"
- Bridge: "[How you get there]"

**Feature-Benefit-Proof**:
- Feature: "[What it is]"
- Benefit: "[What it does for them]"
- Proof: "[Evidence]"

---

## 📅 Content Calendar Ideas

### Month 1: Awareness
- **Week 1**: [Topic + Angle]
- **Week 2**: [Topic + Angle]
- **Week 3**: [Topic + Angle]
- **Week 4**: [Topic + Angle]

### Month 2: Consideration
[Similar structure]

### Month 3: Conversion
[Similar structure]

---

## 🎨 Design & UX Observations

- **Website Quality**: [Assessment]
- **User Experience**: [Strengths/weaknesses]
- **Visual Identity**: [Description]
- **Mobile Experience**: [Assessment]

---

## 📈 Recommendations

### Immediate Wins (0-30 days)
1. [Action item]
2. [Action item]
3. [Action item]

### Medium-term Opportunities (30-90 days)
1. [Action item]
2. [Action item]
3. [Action item]

### Long-term Strategy (90+ days)
1. [Action item]
2. [Action item]
3. [Action item]

---

## 🔗 Source Links
- Company Website: [URL]
- Competitors Analyzed: [URLs]
- Tools Used: [List]

---

**💡 Next Steps**:
Use this research to craft targeted messaging, identify content opportunities,
and position your services effectively to this client.
```

---

## Technical Architecture

### Phase 1: MVP (No External Tools)
**Status**: Implement first, fastest to market

**Capabilities**:
- User provides URL(s) or text description
- Claude analyzes the provided context
- User can manually paste website content, social posts, etc.
- AI generates comprehensive research report

**Limitations**:
- Requires manual copy/paste of website content
- No automatic scraping
- No real-time social media data

**Advantages**:
- Fast to implement (1-2 days)
- No external dependencies
- No additional costs
- Works immediately

### Phase 2: Enhanced (With Web Scraping)
**Status**: Future enhancement

**Additional Capabilities**:
- Automatic website scraping using Puppeteer/Playwright
- Extract text, headings, meta tags, structure
- Analyze multiple pages automatically
- Screenshot capture for visual analysis

**Tools Required**:
- Puppeteer or Playwright (headless browser)
- Readability parser for content extraction
- Optional: Firecrawl API or similar

### Phase 3: Advanced (Full Integration)
**Status**: Future roadmap

**Additional Capabilities**:
- LinkedIn API integration (if available/approved)
- Twitter API integration for tweet analysis
- Instagram Graph API for content analysis
- Google Search API for competitor discovery
- SEMrush/Ahrefs API for SEO data

---

## System Prompts

### Primary Research Agent System Prompt

```
You are an expert business analyst and marketing strategist with deep expertise in:

- Company and competitive research
- Market analysis and positioning
- Content strategy and SEO
- Copywriting and messaging frameworks
- Audience psychology and pain point analysis
- Marketing opportunity identification

Your role:
You analyze companies, brands, and markets to provide actionable marketing intelligence
and strategic recommendations. Your analysis is thorough, objective, and focused on
uncovering opportunities.

Your analysis style:
- Data-driven with specific examples and evidence
- Strategic with clear reasoning behind recommendations
- Actionable with prioritized next steps
- Honest about both strengths and weaknesses
- Focused on practical marketing applications

Your outputs:
- Comprehensive yet scannable (use headings, bullets, tables)
- Backed by evidence from the source materials
- Include specific quotes, examples, and data points
- Provide both analysis AND actionable recommendations
- Written for marketing professionals who need to act on insights

Key principles:
1. Always provide evidence for claims (quote specific text, cite examples)
2. Identify patterns across multiple sources
3. Think like a customer - what would resonate with their audience?
4. Be specific - avoid generic observations
5. Prioritize insights by impact and feasibility
6. Focus on what's unique or differentiated
7. Call out gaps and missed opportunities
8. Suggest concrete next steps

Analysis framework:
- What do they do? (Core offering)
- Who do they serve? (Target audience)
- How do they position themselves? (Messaging)
- What makes them different? (Differentiation)
- What are they doing well? (Strengths)
- What are they missing? (Opportunities)
- What can we learn? (Insights)
- What should we do? (Recommendations)

Quality standards:
- Never make assumptions - only analyze what's provided
- If data is limited, acknowledge it explicitly
- Provide ranges/estimates when exact data isn't available
- Flag when more research would be beneficial
- Be objective - analyze competitors fairly
```

### Website Analysis Prompt Template

```
Analyze this company website and provide comprehensive marketing intelligence.

COMPANY INFORMATION:
Website URL: {url}
Additional Context: {context}

WEBSITE CONTENT PROVIDED:
{scraped_content}

ANALYSIS REQUIREMENTS:

1. COMPANY OVERVIEW
   - What they do (products/services)
   - Business model (B2B/B2C/etc.)
   - Industry/niche
   - Target market

2. MESSAGING ANALYSIS
   - Main value proposition (quote directly)
   - Key differentiators (3-5 points)
   - Brand voice and tone
   - Common phrases and language patterns

3. AUDIENCE INTELLIGENCE
   - Primary audience (who they target)
   - Pain points they address (specific)
   - Customer motivations
   - Likely objections

4. COMPETITIVE POSITIONING
   - How they position vs competitors
   - Unique strengths
   - Potential weaknesses or gaps
   - Market opportunity

5. CONTENT STRATEGY
   - Current content types
   - Topics they cover
   - Content gaps (what they should cover but don't)
   - SEO opportunities

6. MARKETING OPPORTUNITIES
   - 5-7 specific campaign ideas
   - Content topics to create
   - Messaging angles to test
   - Channels to prioritize

7. COPYWRITING ASSETS
   - 3 proven messaging frameworks with examples
   - 5 headline formulas based on their style
   - Key talking points
   - Objection handlers

8. ACTIONABLE RECOMMENDATIONS
   - Immediate wins (0-30 days)
   - Medium-term opportunities (30-90 days)
   - Long-term strategy (90+ days)

FORMAT:
Use the Company Research Report structure provided.
Be specific, cite examples, and focus on actionable insights.

QUALITY CHECKS:
✓ Every claim backed by evidence from the content
✓ Specific examples and quotes included
✓ Opportunities prioritized by impact
✓ Recommendations are concrete and actionable
✓ Report is scannable with clear headings
```

### Social Media Analysis Prompt Template

```
Analyze this company's social media presence and content strategy.

COMPANY: {company_name}

SOCIAL PROFILES:
- LinkedIn: {linkedin_url}
- Twitter: {twitter_handle}
- Instagram: {instagram_handle}

CONTENT PROVIDED:
{social_posts_content}

ANALYZE:

1. CONTENT STRATEGY
   - Post frequency and consistency
   - Content types/formats used
   - Topics and themes covered
   - Content performance indicators (if visible)

2. MESSAGING & VOICE
   - Tone and personality
   - Key messages repeated
   - Hashtag strategy
   - Call-to-action patterns

3. AUDIENCE ENGAGEMENT
   - Who engages with content
   - Types of conversations happening
   - Community building efforts
   - Response strategy

4. COMPETITIVE POSITIONING
   - How they differentiate on social
   - Gaps vs competitors
   - Unique content angles

5. CONTENT OPPORTUNITIES
   - Underutilized formats
   - Trending topics in their space
   - Engagement opportunities
   - Cross-platform strategies

6. RECOMMENDATIONS
   - Content improvements
   - New content ideas
   - Engagement tactics
   - Growth strategies

Include specific post examples that illustrate each point.
```

### Niche Research Prompt Template

```
Conduct comprehensive market research for this industry/niche.

NICHE: {niche_description}
TARGET AUDIENCE: {target_audience}
GEOGRAPHIC FOCUS: {geography}
RESEARCH GOALS: {selected_goals}

RESEARCH FRAMEWORK:

1. MARKET OVERVIEW
   - Industry size and growth
   - Key trends and shifts
   - Major players
   - Market maturity

2. CUSTOMER ANALYSIS
   - Typical customer profile
   - Common pain points (rank by severity)
   - Buying triggers
   - Decision criteria
   - Budget considerations

3. COMPETITIVE LANDSCAPE
   - Main competitors
   - Market leaders
   - Positioning strategies
   - Pricing models
   - Differentiation approaches

4. CONTENT OPPORTUNITIES
   - Top 10 content topics for this niche
   - Trending questions customers ask
   - Educational gaps in the market
   - Thought leadership opportunities

5. MARKETING CHANNELS
   - Most effective channels for this niche
   - Content formats that work
   - Community platforms
   - Influencers and thought leaders

6. MESSAGING INSIGHTS
   - Language that resonates
   - Proven value propositions
   - Effective messaging angles
   - Objections to address

7. SEO & CONTENT STRATEGY
   - High-value keywords
   - Search intent patterns
   - Content gaps to fill
   - Featured snippet opportunities

8. CAMPAIGN IDEAS
   - 5 campaign concepts for this niche
   - Each with angle, channels, and reasoning
   - Based on proven patterns in this space

DELIVERABLE:
Comprehensive niche research report with actionable marketing strategies.
Focus on what's unique about this niche and how to win in this market.
```

---

## Database Schema

### ResearchReport Model

```prisma
model ResearchReport {
  id            String   @id @default(cuid())
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  // Report metadata
  title         String
  type          String   // 'website', 'social', 'niche'
  status        String   // 'processing', 'completed', 'failed'

  // Input data
  urls          String[] // Website URLs analyzed
  socialHandles Json?    // { linkedin, twitter, instagram }
  nicheData     Json?    // { description, audience, geography }
  context       String?  // Additional user context
  focusAreas    String[] // Selected focus areas
  depth         String?  // 'quick', 'standard', 'deep'

  // Generated output
  report        String   @db.Text // Markdown report
  summary       String?  // Executive summary
  opportunities Json?    // Extracted opportunities list

  // Metadata
  processingTime Int?    // Seconds taken
  tokensUsed     Int?    // AI tokens consumed
  userId         String? // Future: link to user

  @@index([createdAt])
  @@index([type])
  @@index([status])
}
```

---

## Implementation Plan

### MVP (Phase 1) - Estimated: 2-3 days

**Day 1: Core Infrastructure**
- [x] Create system prompts (in `lib/ai/prompts/research-prompts.ts`)
- [x] Create research agent service (`lib/ai/research-agent.ts`)
- [x] Create API route (`app/api/ai/research/route.ts`)
- [x] Add ResearchReport model to Prisma schema
- [x] Run database migration

**Day 2: UI Components**
- [ ] Create research form component with tabs
- [ ] Create report viewer component
- [ ] Create research history component
- [ ] Create admin page (`app/admin/dashboard/ai-tools/research/page.tsx`)

**Day 3: Integration & Testing**
- [ ] Add navigation links
- [ ] Test all research types
- [ ] Error handling and edge cases
- [ ] Rate limiting integration
- [ ] Documentation

### Future Enhancements (Phase 2+)

**Web Scraping Integration**
- Implement Puppeteer/Playwright for automatic website scraping
- Build content extraction pipeline
- Handle pagination and multi-page analysis

**Social Media APIs**
- Integrate Twitter API (if user provides API key)
- LinkedIn scraping (manual paste fallback)
- Instagram Graph API integration

**Advanced Features**
- Save and organize reports
- Compare multiple companies
- Export to PDF/DOCX
- Share reports with clients
- Template customization
- Saved searches

---

## Cost Estimation

### MVP (Manual Input)
- **Per Report**: ~8,000-15,000 tokens
- **Cost**: $0.30-0.50 per comprehensive report
- **Monthly (50 reports)**: ~$15-25

### With Auto-Scraping
- **Scraping**: Minimal (Puppeteer is free)
- **Processing**: Same as above
- **Storage**: Negligible

### With APIs
- **Twitter API**: Free tier available
- **LinkedIn**: Manual/scraping only (no official API)
- **Google Search**: $5 per 1000 queries (optional)

---

## Success Metrics

**User Adoption**:
- Number of research reports generated
- Most common research type
- Average depth selected

**Quality**:
- Report length and detail
- User feedback/ratings
- Repeat usage rate

**Business Impact**:
- Time saved vs manual research
- Client wins attributed to insights
- Proposals sent using research

---

## Competitive Advantage

This research agent provides:

1. **Speed**: 5 minutes vs 2-3 hours of manual research
2. **Depth**: Comprehensive analysis across multiple dimensions
3. **Consistency**: Structured reports every time
4. **Actionability**: Concrete recommendations, not just data
5. **Cost**: $0.50 per report vs $500 outsourced research

**Compared to alternatives**:
- **ChatGPT**: Generic, requires prompt engineering, no structure
- **Manual research**: Slow, inconsistent, expensive
- **Market research firms**: Very expensive, slow turnaround
- **Tools like SparkToro**: Data-only, no strategic insights

---

## Documentation for Users

### How to Use the Research Agent

**URL Research** (Best for existing companies):
1. Paste the company's website URL
2. Optionally add competitor URLs
3. Select analysis depth (Standard recommended)
4. Choose focus areas
5. Click "Start Research"
6. Wait 30-60 seconds for comprehensive report

**Social Research** (Best for content strategy):
1. Add LinkedIn, Twitter, or Instagram profiles
2. Select analysis type
3. Click "Analyze Social Presence"
4. Review content strategy insights

**Niche Research** (Best for new markets):
1. Describe the industry/niche
2. Define target audience
3. Select geographic focus
4. Choose research goals
5. Click "Research Niche"
6. Review market intelligence report

**Tips for Best Results**:
- Provide as much context as possible
- For URL research, include competitor URLs
- Select all relevant focus areas
- Add specific questions or concerns in context field
- Review the full report - opportunities at the bottom

---

## Next Steps

Ready to implement MVP (Phase 1)?

**Quick Start**:
1. Create system prompts and research service
2. Build basic UI with URL input
3. Generate first research report
4. Iterate on prompt quality

**Or**: Review and refine this design first?

Let me know and I'll proceed with implementation!

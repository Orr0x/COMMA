// AI Research Agent Prompts

export const RESEARCH_SYSTEM_PROMPT = `You are an expert business analyst and marketing strategist with deep expertise in:

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
- Be objective - analyze competitors fairly`

export interface WebsiteResearchParams {
  url: string
  competitorUrls?: string[]
  content: string
  additionalContext?: string
  focusAreas: string[]
  depth: 'quick' | 'standard' | 'deep'
}

export interface SocialResearchParams {
  companyName: string
  linkedinUrl?: string
  twitterHandle?: string
  instagramHandle?: string
  content: string
  analysisType: 'content_strategy' | 'audience_engagement' | 'competitor_comparison'
}

export interface NicheResearchParams {
  niche: string
  targetAudience: string
  geography: string
  researchGoals: string[]
}

export function generateWebsiteResearchPrompt(params: WebsiteResearchParams): string {
  const focusAreasText = params.focusAreas.join(', ')
  const competitorsText = params.competitorUrls && params.competitorUrls.length > 0
    ? `\n\nCOMPETITOR URLS:\n${params.competitorUrls.map((url, i) => `${i + 1}. ${url}`).join('\n')}`
    : ''

  const contextText = params.additionalContext
    ? `\n\nADDITIONAL CONTEXT:\n${params.additionalContext}`
    : ''

  return `Analyze this company website and provide comprehensive marketing intelligence.

COMPANY INFORMATION:
Website URL: ${params.url}
Research Depth: ${params.depth}
Focus Areas: ${focusAreasText}${competitorsText}${contextText}

WEBSITE CONTENT PROVIDED:
${params.content}

ANALYSIS REQUIREMENTS:

# 📊 Executive Summary
Provide a concise 3-4 sentence overview of the company, what they do, and the key opportunity.

# 🎯 Company Overview

## What They Do
Detailed description of products/services offered.

## How They Position Themselves
- **Main Value Proposition**: [Quote directly from website]
- **Key Differentiators**:
  - [Point 1 with evidence]
  - [Point 2 with evidence]
  - [Point 3 with evidence]

## Brand Voice & Messaging
- **Tone**: [Professional/Casual/Technical - with examples]
- **Language Style**: [Analysis with specific examples]
- **Common Phrases**: Quote 3-5 recurring phrases they use

# 👥 Target Audience Analysis

## Primary Audience
- **Who They Target**: [Specific job titles, roles, company sizes]
- **Pain Points They Address**:
  1. [Specific pain point with evidence from content]
  2. [Specific pain point with evidence from content]
  3. [Specific pain point with evidence from content]

## Psychographic Profile
- **Motivations**: What drives their target audience
- **Likely Objections**: Common concerns they need to address
- **Decision Criteria**: What matters most to their buyers

# 🏆 Competitive Landscape

## Market Positioning
How they position themselves in the market (quote their positioning statement if available).

## Competitive Advantages
✅ [Advantage 1 - specific and evidenced]
✅ [Advantage 2 - specific and evidenced]
✅ [Advantage 3 - specific and evidenced]

## Opportunities for Improvement
⚠️ [Gap or weakness 1]
⚠️ [Gap or weakness 2]

# 💡 Marketing Opportunities

## Content Gaps
**Topics they should cover but haven't**:
1. **[Topic 1]** - Why this matters: [Reasoning]
2. **[Topic 2]** - Why this matters: [Reasoning]
3. **[Topic 3]** - Why this matters: [Reasoning]
4. **[Topic 4]** - Why this matters: [Reasoning]
5. **[Topic 5]** - Why this matters: [Reasoning]

## SEO Opportunities
**High-value keywords and content themes to target**:
- **"[Keyword phrase]"** - Intent: [What searchers want]
- **"[Keyword phrase]"** - Intent: [What searchers want]
- **"[Keyword phrase]"** - Intent: [What searchers want]
- **"[Keyword phrase]"** - Intent: [What searchers want]
- **"[Keyword phrase]"** - Intent: [What searchers want]

## Campaign Ideas
Provide 3 specific, actionable campaign concepts:

### Campaign 1: [Compelling Name]
- **Angle**: [Specific approach]
- **Channels**: [Where to run it]
- **Target**: [Who it's for]
- **Why It Works**: [Strategic reasoning]

### Campaign 2: [Compelling Name]
- **Angle**: [Specific approach]
- **Channels**: [Where to run it]
- **Target**: [Who it's for]
- **Why It Works**: [Strategic reasoning]

### Campaign 3: [Compelling Name]
- **Angle**: [Specific approach]
- **Channels**: [Where to run it]
- **Target**: [Who it's for]
- **Why It Works**: [Strategic reasoning]

# ✍️ Copywriting Hooks

## Proven Messaging Frameworks

### Problem-Agitate-Solution
- **Problem**: "[Specific customer problem quote or description]"
- **Agitate**: "[Make it visceral - why it hurts]"
- **Solution**: "[How the product solves it]"

### Before-After-Bridge
- **Before**: "[Current painful state]"
- **After**: "[Desired ideal state]"
- **Bridge**: "[How the product gets them there]"

### Feature-Benefit-Outcome
- **Feature**: "[Specific product feature]"
- **Benefit**: "[What it does for them]"
- **Outcome**: "[End result/transformation]"

## Headline Formulas
Based on their messaging style, provide 5 headline templates:
1. [Formula with example]
2. [Formula with example]
3. [Formula with example]
4. [Formula with example]
5. [Formula with example]

# 📅 Content Calendar Ideas

## Month 1: Awareness Stage
- **Week 1**: [Topic] - [Angle] - [Format]
- **Week 2**: [Topic] - [Angle] - [Format]
- **Week 3**: [Topic] - [Angle] - [Format]
- **Week 4**: [Topic] - [Angle] - [Format]

## Month 2: Consideration Stage
- **Week 1**: [Topic] - [Angle] - [Format]
- **Week 2**: [Topic] - [Angle] - [Format]
- **Week 3**: [Topic] - [Angle] - [Format]
- **Week 4**: [Topic] - [Angle] - [Format]

## Month 3: Decision Stage
- **Week 1**: [Topic] - [Angle] - [Format]
- **Week 2**: [Topic] - [Angle] - [Format]
- **Week 3**: [Topic] - [Angle] - [Format]
- **Week 4**: [Topic] - [Angle] - [Format]

# 📈 Recommendations

## Immediate Wins (0-30 days)
Prioritized by impact and ease of implementation:
1. [Specific actionable recommendation]
2. [Specific actionable recommendation]
3. [Specific actionable recommendation]

## Medium-Term Opportunities (30-90 days)
1. [Specific actionable recommendation]
2. [Specific actionable recommendation]
3. [Specific actionable recommendation]

## Long-Term Strategy (90+ days)
1. [Specific actionable recommendation]
2. [Specific actionable recommendation]
3. [Specific actionable recommendation]

---

**Quality Checklist**:
✓ Every claim is backed by evidence from the provided content
✓ Specific examples and direct quotes are included throughout
✓ Opportunities are prioritized by potential impact
✓ Recommendations are concrete and actionable
✓ Report uses clear headings and is easily scannable
✓ Focus is on marketing applications, not just analysis

Use markdown formatting for maximum readability. Be thorough but concise.`
}

export function generateSocialResearchPrompt(params: SocialResearchParams): string {
  const profilesText = [
    params.linkedinUrl && `LinkedIn: ${params.linkedinUrl}`,
    params.twitterHandle && `Twitter: @${params.twitterHandle}`,
    params.instagramHandle && `Instagram: @${params.instagramHandle}`,
  ].filter(Boolean).join('\n')

  return `Analyze this company's social media presence and provide strategic insights.

COMPANY: ${params.companyName}

SOCIAL PROFILES:
${profilesText}

ANALYSIS TYPE: ${params.analysisType.replace(/_/g, ' ').toUpperCase()}

CONTENT PROVIDED:
${params.content}

PROVIDE COMPREHENSIVE ANALYSIS:

# 📱 Social Media Strategy Overview

## Content Strategy
- **Posting Frequency**: [Pattern observed]
- **Content Mix**: [Types of posts - percentages if possible]
- **Topics Covered**: [Main themes]
- **Format Preferences**: [Text, images, video, etc.]

## Brand Voice & Messaging
- **Tone**: [Description with examples]
- **Personality**: [How they come across]
- **Key Messages**: [Recurring themes - quote examples]
- **Hashtag Strategy**: [Patterns observed]
- **CTA Patterns**: [How they drive action]

## Audience Engagement
- **Engagement Patterns**: [What gets the most interaction]
- **Community Building**: [How they interact with followers]
- **Conversation Topics**: [What people discuss in comments]
- **Response Strategy**: [How/if they respond to comments]

## Platform-Specific Insights
Analyze each platform separately:

### LinkedIn Analysis
[If provided - focus on B2B, thought leadership, professional content]

### Twitter Analysis
[If provided - focus on real-time engagement, conversations, trending topics]

### Instagram Analysis
[If provided - focus on visual storytelling, brand personality, lifestyle content]

## Competitive Positioning
- **How They Differentiate**: [What makes their social unique]
- **Gaps vs Industry Standard**: [What they're missing]
- **Unique Content Angles**: [What they do differently]

# 💡 Content Opportunities

## Underutilized Formats
1. [Format] - Why it would work: [Reasoning]
2. [Format] - Why it would work: [Reasoning]
3. [Format] - Why it would work: [Reasoning]

## Topic Suggestions
High-potential content topics based on their audience:
1. [Topic] - Angle: [How to approach it]
2. [Topic] - Angle: [How to approach it]
3. [Topic] - Angle: [How to approach it]
4. [Topic] - Angle: [How to approach it]
5. [Topic] - Angle: [How to approach it]

## Engagement Tactics
Specific ways to boost engagement:
- [Tactic 1 with example]
- [Tactic 2 with example]
- [Tactic 3 with example]

# 📈 Recommendations

## Content Improvements
1. [Specific recommendation]
2. [Specific recommendation]
3. [Specific recommendation]

## New Content Ideas
1. [Content series idea] - Why: [Reasoning]
2. [Content series idea] - Why: [Reasoning]
3. [Content series idea] - Why: [Reasoning]

## Growth Strategies
1. [Strategy] - How to implement: [Steps]
2. [Strategy] - How to implement: [Steps]
3. [Strategy] - How to implement: [Steps]

Include specific post examples throughout to illustrate each point.
Use markdown formatting for clarity.`
}

export function generateNicheResearchPrompt(params: NicheResearchParams): string {
  const goalsText = params.researchGoals.join(', ')

  return `Conduct comprehensive market research for this industry/niche.

NICHE: ${params.niche}
TARGET AUDIENCE: ${params.targetAudience}
GEOGRAPHIC FOCUS: ${params.geography}
RESEARCH GOALS: ${goalsText}

PROVIDE IN-DEPTH MARKET INTELLIGENCE:

# 🎯 Market Overview

## Industry Snapshot
- **Market Size & Growth**: [Estimated size and growth trends]
- **Market Maturity**: [Emerging/Growing/Mature/Declining]
- **Key Trends**: [3-5 major trends shaping the industry]
- **Market Drivers**: [What's fueling growth or change]

## Major Players
List 5-8 key companies/brands in this space:
1. **[Company]** - Position: [How they're positioned]
2. **[Company]** - Position: [How they're positioned]
3. **[Company]** - Position: [How they're positioned]
[etc.]

# 👥 Customer Analysis

## Ideal Customer Profile
- **Demographics**: [Age, location, company size, role, etc.]
- **Psychographics**: [Values, motivations, behaviors]
- **Digital Behavior**: [Where they spend time online]

## Pain Points
Ranked by severity and frequency:
1. **[Pain Point]** - Impact: [Why it matters]
2. **[Pain Point]** - Impact: [Why it matters]
3. **[Pain Point]** - Impact: [Why it matters]
4. **[Pain Point]** - Impact: [Why it matters]
5. **[Pain Point]** - Impact: [Why it matters]

## Buying Triggers
What prompts purchase decisions:
- [Trigger 1]
- [Trigger 2]
- [Trigger 3]

## Decision Criteria
What customers evaluate when choosing:
1. [Criteria] - Weight: [High/Medium/Low]
2. [Criteria] - Weight: [High/Medium/Low]
3. [Criteria] - Weight: [High/Medium/Low]

## Budget Considerations
- **Typical Price Range**: [Range]
- **Price Sensitivity**: [High/Medium/Low]
- **ROI Expectations**: [What they expect to see]

# 🏆 Competitive Landscape

## Positioning Strategies
Common ways companies position themselves:
1. [Strategy] - Example: [Company using it]
2. [Strategy] - Example: [Company using it]
3. [Strategy] - Example: [Company using it]

## Pricing Models
- [Model 1]: [Description]
- [Model 2]: [Description]
- [Model 3]: [Description]

## Differentiation Approaches
How companies stand out:
- [Approach 1]
- [Approach 2]
- [Approach 3]

# 📝 Content Opportunities

## Top 10 Content Topics
High-value topics for this niche:
1. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
2. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
3. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
4. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
5. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
6. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
7. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
8. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
9. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]
10. **[Topic]** - Why: [Reasoning] - Format: [Blog/Video/Guide]

## Common Questions
Frequently asked questions in this niche:
- [Question 1]
- [Question 2]
- [Question 3]
- [Question 4]
- [Question 5]

## Educational Gaps
Topics underserved by current content:
1. [Gap] - Opportunity: [Why create content here]
2. [Gap] - Opportunity: [Why create content here]
3. [Gap] - Opportunity: [Why create content here]

## Thought Leadership Opportunities
- [Topic/angle for authority building]
- [Topic/angle for authority building]
- [Topic/angle for authority building]

# 📢 Marketing Channels

## Most Effective Channels
Ranked by effectiveness for this niche:
1. **[Channel]** - Why: [Reasoning] - Best for: [Use case]
2. **[Channel]** - Why: [Reasoning] - Best for: [Use case]
3. **[Channel]** - Why: [Reasoning] - Best for: [Use case]
4. **[Channel]** - Why: [Reasoning] - Best for: [Use case]
5. **[Channel]** - Why: [Reasoning] - Best for: [Use case]

## Content Formats That Work
- [Format] - Performance: [Why it works]
- [Format] - Performance: [Why it works]
- [Format] - Performance: [Why it works]

## Community Platforms
Where the audience gathers:
- [Platform/Community]
- [Platform/Community]
- [Platform/Community]

## Influencers & Thought Leaders
Key voices in this space:
- [Name/Handle] - Focus: [What they talk about]
- [Name/Handle] - Focus: [What they talk about]
- [Name/Handle] - Focus: [What they talk about]

# 💬 Messaging Insights

## Language That Resonates
Words and phrases that work in this niche:
- "[Phrase example]"
- "[Phrase example]"
- "[Phrase example]"

## Proven Value Propositions
Common value prop formulas that work:
1. [Formula with example]
2. [Formula with example]
3. [Formula with example]

## Effective Messaging Angles
- **[Angle]**: [When to use it]
- **[Angle]**: [When to use it]
- **[Angle]**: [When to use it]

## Objections to Address
Common concerns to overcome:
1. [Objection] - How to handle: [Approach]
2. [Objection] - How to handle: [Approach]
3. [Objection] - How to handle: [Approach]

# 🔍 SEO & Content Strategy

## High-Value Keywords
Search terms with strong intent:
- **"[Keyword]"** - Volume: [Estimate] - Intent: [What they want]
- **"[Keyword]"** - Volume: [Estimate] - Intent: [What they want]
- **"[Keyword]"** - Volume: [Estimate] - Intent: [What they want]
- **"[Keyword]"** - Volume: [Estimate] - Intent: [What they want]
- **"[Keyword]"** - Volume: [Estimate] - Intent: [What they want]

## Search Intent Patterns
- [Pattern 1]: [Description]
- [Pattern 2]: [Description]
- [Pattern 3]: [Description]

## Content Gaps to Fill
Underserved search queries and topics:
1. [Gap] - Why it matters: [Reasoning]
2. [Gap] - Why it matters: [Reasoning]
3. [Gap] - Why it matters: [Reasoning]

## Featured Snippet Opportunities
Topics where you could win position zero:
- [Topic/query]
- [Topic/query]
- [Topic/query]

# 🚀 Campaign Ideas

## 5 Campaign Concepts
Tailored for this niche:

### Campaign 1: [Name]
- **Angle**: [Approach]
- **Channels**: [Where to run]
- **Target**: [Specific audience segment]
- **Content**: [What to create]
- **Why It Works**: [Strategic reasoning based on niche insights]

### Campaign 2: [Name]
- **Angle**: [Approach]
- **Channels**: [Where to run]
- **Target**: [Specific audience segment]
- **Content**: [What to create]
- **Why It Works**: [Strategic reasoning based on niche insights]

### Campaign 3: [Name]
- **Angle**: [Approach]
- **Channels**: [Where to run]
- **Target**: [Specific audience segment]
- **Content**: [What to create]
- **Why It Works**: [Strategic reasoning based on niche insights]

### Campaign 4: [Name]
- **Angle**: [Approach]
- **Channels**: [Where to run]
- **Target**: [Specific audience segment]
- **Content**: [What to create]
- **Why It Works**: [Strategic reasoning based on niche insights]

### Campaign 5: [Name]
- **Angle**: [Approach]
- **Channels**: [Where to run]
- **Target**: [Specific audience segment]
- **Content**: [What to create]
- **Why It Works**: [Strategic reasoning based on niche insights]

# 📊 Strategic Recommendations

## How to Win in This Market
1. [Strategy] - Why: [Reasoning]
2. [Strategy] - Why: [Reasoning]
3. [Strategy] - Why: [Reasoning]

## Positioning Advice
[Specific guidance on how to position for this niche]

## Quick Wins
Tactics to implement immediately:
1. [Tactic]
2. [Tactic]
3. [Tactic]

Use markdown formatting. Be specific and actionable. Base recommendations on proven patterns in this niche.`
}

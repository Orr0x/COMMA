'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2, Globe, Share2, Target, AlertCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface ResearchFormProps {
  onReportGenerated?: (reportId: string, report: string) => void
}

type ResearchType = 'website' | 'social' | 'niche'

const focusAreaOptions = [
  { value: 'messaging', label: 'Messaging & Positioning' },
  { value: 'audience', label: 'Audience Analysis' },
  { value: 'content', label: 'Content Strategy' },
  { value: 'seo', label: 'SEO Opportunities' },
  { value: 'campaigns', label: 'Campaign Ideas' },
  { value: 'competitive', label: 'Competitive Analysis' },
]

const researchGoalOptions = [
  { value: 'market_analysis', label: 'Market Size & Trends' },
  { value: 'customer_insights', label: 'Customer Insights' },
  { value: 'content_opportunities', label: 'Content Opportunities' },
  { value: 'competitive_insights', label: 'Competitive Intelligence' },
  { value: 'positioning', label: 'Positioning Strategy' },
  { value: 'channel_strategy', label: 'Channel Strategy' },
]

export function AIResearchForm({ onReportGenerated }: ResearchFormProps) {
  const [activeTab, setActiveTab] = useState<ResearchType>('website')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [generatedReportId, setGeneratedReportId] = useState<string | null>(null)

  // Website research state
  const [url, setUrl] = useState('')
  const [competitorUrls, setCompetitorUrls] = useState('')
  const [websiteContent, setWebsiteContent] = useState('')
  const [additionalContext, setAdditionalContext] = useState('')
  const [focusAreas, setFocusAreas] = useState<string[]>(['messaging', 'audience', 'content'])
  const [depth, setDepth] = useState<'quick' | 'standard' | 'deep'>('standard')

  // Social research state
  const [companyName, setCompanyName] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [twitterHandle, setTwitterHandle] = useState('')
  const [instagramHandle, setInstagramHandle] = useState('')
  const [socialContent, setSocialContent] = useState('')
  const [analysisType, setAnalysisType] = useState<'content_strategy' | 'audience_engagement' | 'competitor_comparison'>('content_strategy')

  // Niche research state
  const [niche, setNiche] = useState('')
  const [targetAudience, setTargetAudience] = useState('')
  const [geography, setGeography] = useState('Global')
  const [researchGoals, setResearchGoals] = useState<string[]>(['market_analysis', 'content_opportunities'])

  const handleFocusAreaChange = (value: string, checked: boolean) => {
    setFocusAreas(prev =>
      checked ? [...prev, value] : prev.filter(v => v !== value)
    )
  }

  const handleResearchGoalChange = (value: string, checked: boolean) => {
    setResearchGoals(prev =>
      checked ? [...prev, value] : prev.filter(v => v !== value)
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    setGeneratedReportId(null)

    try {
      let requestBody: any = { type: activeTab }

      switch (activeTab) {
        case 'website':
          if (!url || !websiteContent) {
            throw new Error('Please enter a URL and paste website content')
          }
          requestBody = {
            ...requestBody,
            url,
            competitorUrls: competitorUrls.split('\n').filter(u => u.trim()),
            content: websiteContent,
            additionalContext,
            focusAreas,
            depth,
          }
          break

        case 'social':
          if (!companyName || !socialContent) {
            throw new Error('Please enter company name and paste social content')
          }
          requestBody = {
            ...requestBody,
            companyName,
            linkedinUrl: linkedinUrl || undefined,
            twitterHandle: twitterHandle || undefined,
            instagramHandle: instagramHandle || undefined,
            content: socialContent,
            analysisType,
          }
          break

        case 'niche':
          if (!niche || !targetAudience) {
            throw new Error('Please enter niche and target audience')
          }
          requestBody = {
            ...requestBody,
            niche,
            targetAudience,
            geography,
            researchGoals,
          }
          break
      }

      const response = await fetch('/api/ai/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || errorData.message || 'Failed to generate report')
      }

      const data = await response.json()
      setSuccess(true)
      setGeneratedReportId(data.reportId)

      if (onReportGenerated) {
        onReportGenerated(data.reportId, data.report)
      }
    } catch (err) {
      console.error('Research generation error:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-6">
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as ResearchType)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="website" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Website
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Social Media
          </TabsTrigger>
          <TabsTrigger value="niche" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            Niche/Market
          </TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit} className="mt-6">
          <TabsContent value="website" className="space-y-4">
            <div>
              <Label htmlFor="url">Website URL *</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div>
              <Label htmlFor="competitor-urls">Competitor URLs (optional)</Label>
              <Textarea
                id="competitor-urls"
                placeholder="https://competitor1.com&#10;https://competitor2.com"
                value={competitorUrls}
                onChange={(e) => setCompetitorUrls(e.target.value)}
                disabled={loading}
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">One URL per line</p>
            </div>

            <div>
              <Label htmlFor="website-content">Website Content *</Label>
              <Textarea
                id="website-content"
                placeholder="Paste the main content from the website here (homepage, about page, etc.)"
                value={websiteContent}
                onChange={(e) => setWebsiteContent(e.target.value)}
                disabled={loading}
                rows={8}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Paste homepage copy, about page, key landing pages</p>
            </div>

            <div>
              <Label htmlFor="context">Additional Context (optional)</Label>
              <Textarea
                id="context"
                placeholder="Any specific questions or focus areas? E.g., 'Looking to improve conversion rates' or 'Want to target enterprise customers'"
                value={additionalContext}
                onChange={(e) => setAdditionalContext(e.target.value)}
                disabled={loading}
                rows={3}
              />
            </div>

            <div>
              <Label>Research Depth</Label>
              <Select value={depth} onValueChange={(v: any) => setDepth(v)} disabled={loading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quick">Quick (5-10 min)</SelectItem>
                  <SelectItem value="standard">Standard (15-20 min)</SelectItem>
                  <SelectItem value="deep">Deep Dive (30+ min)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Focus Areas</Label>
              <div className="space-y-2 mt-2">
                {focusAreaOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`focus-${option.value}`}
                      checked={focusAreas.includes(option.value)}
                      onCheckedChange={(checked) =>
                        handleFocusAreaChange(option.value, checked as boolean)
                      }
                      disabled={loading}
                    />
                    <Label htmlFor={`focus-${option.value}`} className="font-normal">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-4">
            <div>
              <Label htmlFor="company-name">Company Name *</Label>
              <Input
                id="company-name"
                placeholder="Acme Corp"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="linkedin-url">LinkedIn URL</Label>
                <Input
                  id="linkedin-url"
                  type="url"
                  placeholder="https://linkedin.com/company/..."
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="twitter-handle">Twitter Handle</Label>
                <Input
                  id="twitter-handle"
                  placeholder="@company"
                  value={twitterHandle}
                  onChange={(e) => setTwitterHandle(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="instagram-handle">Instagram Handle</Label>
                <Input
                  id="instagram-handle"
                  placeholder="@company"
                  value={instagramHandle}
                  onChange={(e) => setInstagramHandle(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="analysis-type">Analysis Type</Label>
              <Select value={analysisType} onValueChange={(v: any) => setAnalysisType(v)} disabled={loading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="content_strategy">Content Strategy</SelectItem>
                  <SelectItem value="audience_engagement">Audience Engagement</SelectItem>
                  <SelectItem value="competitor_comparison">Competitor Comparison</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="social-content">Social Media Content *</Label>
              <Textarea
                id="social-content"
                placeholder="Paste recent posts, bio, about section, etc. from their social profiles"
                value={socialContent}
                onChange={(e) => setSocialContent(e.target.value)}
                disabled={loading}
                rows={10}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Copy/paste recent posts, profile descriptions, and any other relevant content
              </p>
            </div>
          </TabsContent>

          <TabsContent value="niche" className="space-y-4">
            <div>
              <Label htmlFor="niche">Niche/Industry *</Label>
              <Input
                id="niche"
                placeholder="e.g., 'B2B SaaS for healthcare' or 'Sustainable fashion e-commerce'"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div>
              <Label htmlFor="target-audience">Target Audience *</Label>
              <Textarea
                id="target-audience"
                placeholder="Describe your target audience (e.g., 'CMOs at mid-market B2B tech companies' or 'Millennial women interested in sustainable fashion')"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                disabled={loading}
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="geography">Geographic Focus</Label>
              <Select value={geography} onValueChange={setGeography} disabled={loading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Global">Global</SelectItem>
                  <SelectItem value="North America">North America</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
                  <SelectItem value="Latin America">Latin America</SelectItem>
                  <SelectItem value="Middle East & Africa">Middle East & Africa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Research Goals</Label>
              <div className="space-y-2 mt-2">
                {researchGoalOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={`goal-${option.value}`}
                      checked={researchGoals.includes(option.value)}
                      onCheckedChange={(checked) =>
                        handleResearchGoalChange(option.value, checked as boolean)
                      }
                      disabled={loading}
                    />
                    <Label htmlFor={`goal-${option.value}`} className="font-normal">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {error && (
            <div className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm mt-4">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Error</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          {success && generatedReportId && (
            <div className="flex items-start gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm mt-4">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold">Research Report Generated!</p>
                <p className="mb-3">Your report has been created and saved.</p>
                <Link href={`/admin/dashboard/ai-tools/research/reports/${generatedReportId}`}>
                  <Button size="sm" variant="outline">
                    View Full Report
                  </Button>
                </Link>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-6 pt-6 border-t">
            <p className="text-xs text-gray-500">
              {loading ? 'Generating... this may take 30-60 seconds' : 'Ready to generate'}
            </p>
            <Button type="submit" disabled={loading} size="lg">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating Report...
                </>
              ) : (
                'Generate Research Report'
              )}
            </Button>
          </div>
        </form>
      </Tabs>
    </Card>
  )
}

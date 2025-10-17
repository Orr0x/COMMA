'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Sparkles, Copy, RotateCcw } from 'lucide-react'
import { AD_OBJECTIVES, AD_TONES, PLATFORM_LIMITS } from '@/lib/ai/prompts/ad-prompts'

interface AdVariation {
  headline: string
  body: string
  cta: string
}

interface AIAdAssistantProps {
  onInsert?: (ads: AdVariation[]) => void
}

export default function AIAdAssistant({ onInsert }: AIAdAssistantProps) {
  const [product, setProduct] = useState('')
  const [audience, setAudience] = useState('')
  const [platform, setPlatform] = useState<'meta' | 'google' | 'linkedin' | 'tiktok'>('meta')
  const [objective, setObjective] = useState('Conversions')
  const [tone, setTone] = useState('Professional')
  const [variations, setVariations] = useState(3)
  const [additionalContext, setAdditionalContext] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<AdVariation[] | null>(null)

  const handleGenerate = async () => {
    if (!product.trim() || !audience.trim()) {
      setError('Please fill in product and audience fields')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch('/api/ai/ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'generate_campaign',
          product,
          audience,
          platform,
          objective,
          tone,
          variations,
          additionalContext,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate ads')
      }

      const data = await response.json()
      setResult(data.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleCopyAd = (ad: AdVariation) => {
    const text = `Headline: ${ad.headline}\n\nBody: ${ad.body}\n\nCTA: ${ad.cta}`
    navigator.clipboard.writeText(text)
  }

  const handleCopyAll = () => {
    if (!result) return
    const text = result
      .map(
        (ad, i) =>
          `=== Variation ${i + 1} ===\nHeadline: ${ad.headline}\n\nBody: ${ad.body}\n\nCTA: ${ad.cta}\n`
      )
      .join('\n')
    navigator.clipboard.writeText(text)
  }

  const handleInsert = () => {
    if (result && onInsert) {
      onInsert(result)
    }
  }

  const platformLimits = PLATFORM_LIMITS[platform]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          AI Ad Campaign Generator
        </CardTitle>
        <CardDescription>
          Generate high-converting ad variations for different platforms
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Product/Service */}
        <div className="space-y-2">
          <Label htmlFor="product">Product/Service *</Label>
          <Input
            id="product"
            placeholder="e.g., Project management software for remote teams"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>

        {/* Target Audience */}
        <div className="space-y-2">
          <Label htmlFor="audience">Target Audience *</Label>
          <Input
            id="audience"
            placeholder="e.g., SaaS founders, tech startup CTOs"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
          />
        </div>

        {/* Platform */}
        <div className="space-y-2">
          <Label htmlFor="platform">Platform</Label>
          <Select value={platform} onValueChange={(v: any) => setPlatform(v)}>
            <SelectTrigger id="platform">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="meta">Meta (Facebook/Instagram)</SelectItem>
              <SelectItem value="google">Google Search Ads</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            Headline: {platformLimits.headline} chars | Body: {platformLimits.body} chars | CTA:{' '}
            {platformLimits.cta} chars
          </p>
        </div>

        {/* Objective */}
        <div className="space-y-2">
          <Label htmlFor="objective">Campaign Objective</Label>
          <Select value={objective} onValueChange={setObjective}>
            <SelectTrigger id="objective">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {AD_OBJECTIVES.map((obj) => (
                <SelectItem key={obj} value={obj}>
                  {obj}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tone */}
        <div className="space-y-2">
          <Label htmlFor="tone">Tone</Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger id="tone">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {AD_TONES.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Number of Variations */}
        <div className="space-y-2">
          <Label htmlFor="variations">Number of Variations</Label>
          <Select value={variations.toString()} onValueChange={(v) => setVariations(parseInt(v))}>
            <SelectTrigger id="variations">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((n) => (
                <SelectItem key={n} value={n.toString()}>
                  {n} {n === 1 ? 'variation' : 'variations'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Additional Context */}
        <div className="space-y-2">
          <Label htmlFor="context">Additional Context (Optional)</Label>
          <Textarea
            id="context"
            placeholder="e.g., Focus on our new AI feature, mention 30-day free trial"
            value={additionalContext}
            onChange={(e) => setAdditionalContext(e.target.value)}
            rows={2}
          />
        </div>

        {/* Generate Button */}
        <Button onClick={handleGenerate} disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Ad Campaign
            </>
          )}
        </Button>

        {/* Error Message */}
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-800 border border-red-200">
            {error}
          </div>
        )}

        {/* Results */}
        {result && result.length > 0 && (
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Generated Ads ({result.length})</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handleCopyAll}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All
                </Button>
                {onInsert && (
                  <Button size="sm" onClick={handleInsert}>
                    Insert All
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={handleGenerate}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Regenerate
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {result.map((ad, index) => (
                <Card key={index} className="border-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        Variation {index + 1}
                      </CardTitle>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopyAd(ad)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <div>
                      <Label className="text-xs text-muted-foreground">
                        Headline ({ad.headline.length}/{platformLimits.headline})
                      </Label>
                      <p className="font-semibold">{ad.headline}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">
                        Body ({ad.body.length}/{platformLimits.body})
                      </Label>
                      <p className="text-sm">{ad.body}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">
                        CTA ({ad.cta.length}/{platformLimits.cta})
                      </Label>
                      <p className="text-sm font-medium bg-primary/10 px-3 py-1.5 rounded inline-block">
                        {ad.cta}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

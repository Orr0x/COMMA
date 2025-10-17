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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Loader2, Sparkles, Copy, Mail, RotateCcw } from 'lucide-react'
import { EMAIL_TYPES } from '@/lib/ai/prompts/email-prompts'
import { Badge } from '@/components/ui/badge'

interface EmailResult {
  subjectLine: string
  previewText: string
  body: string
  emailNumber?: number
  purpose?: string
}

interface SubjectLineVariation {
  subjectLine: string
  approach: string
  reasoning: string
}

interface AIEmailAssistantProps {
  onInsert?: (email: EmailResult) => void
}

export default function AIEmailAssistant({ onInsert }: AIEmailAssistantProps) {
  const [activeTab, setActiveTab] = useState('single')

  // Single Email State
  const [emailType, setEmailType] = useState<keyof typeof EMAIL_TYPES>('promotional')
  const [goal, setGoal] = useState('')
  const [audience, setAudience] = useState('')
  const [product, setProduct] = useState('')
  const [benefits, setBenefits] = useState('')
  const [tone, setTone] = useState('Professional yet friendly')
  const [brandName, setBrandName] = useState('')

  // Sequence State
  const [sequenceLength, setSequenceLength] = useState(3)

  // Subject Line Variations State
  const [subjectContext, setSubjectContext] = useState('')

  // UI State
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [singleResult, setSingleResult] = useState<EmailResult | null>(null)
  const [sequenceResult, setSequenceResult] = useState<EmailResult[] | null>(null)
  const [subjectLinesResult, setSubjectLinesResult] = useState<SubjectLineVariation[] | null>(null)

  const handleGenerateSingle = async () => {
    if (!goal.trim() || !audience.trim() || !product.trim() || !benefits.trim()) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)
    setError('')
    setSingleResult(null)

    try {
      const response = await fetch('/api/ai/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate_email',
          emailType,
          goal,
          audience,
          product,
          keyBenefits: benefits.split(',').map((b) => b.trim()),
          tone,
          brandName: brandName || undefined,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate email')
      }

      const data = await response.json()
      setSingleResult(data.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateSequence = async () => {
    if (!goal.trim() || !audience.trim() || !product.trim() || !benefits.trim()) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)
    setError('')
    setSequenceResult(null)

    try {
      const response = await fetch('/api/ai/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate_sequence',
          emailType,
          goal,
          audience,
          product,
          keyBenefits: benefits.split(',').map((b) => b.trim()),
          tone,
          brandName: brandName || undefined,
          sequenceLength,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate email sequence')
      }

      const data = await response.json()
      setSequenceResult(data.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateSubjectLines = async () => {
    if (!subjectContext.trim()) {
      setError('Please provide context for subject lines')
      return
    }

    setLoading(true)
    setError('')
    setSubjectLinesResult(null)

    try {
      const response = await fetch('/api/ai/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate_subject_lines',
          emailType: 'promotional', // Default
          goal: 'Generate subject lines',
          audience: 'target audience',
          product: 'product',
          keyBenefits: ['benefit'],
          context: subjectContext,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate subject lines')
      }

      const data = await response.json()
      setSubjectLinesResult(data.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleCopyEmail = (email: EmailResult) => {
    const text = `Subject: ${email.subjectLine}\nPreview: ${email.previewText}\n\n${email.body}`
    navigator.clipboard.writeText(text)
  }

  const handleCopySubject = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          AI Email Marketing Creator
        </CardTitle>
        <CardDescription>
          Generate high-converting emails and subject lines
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="single">Single Email</TabsTrigger>
            <TabsTrigger value="sequence">Email Sequence</TabsTrigger>
            <TabsTrigger value="subjects">Subject Lines</TabsTrigger>
          </TabsList>

          {/* Single Email Tab */}
          <TabsContent value="single" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email-type">Email Type</Label>
              <Select value={emailType} onValueChange={(v: any) => setEmailType(v)}>
                <SelectTrigger id="email-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(EMAIL_TYPES).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.label} - {value.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal">Campaign Goal *</Label>
              <Input
                id="goal"
                placeholder="e.g., Get 20% of recipients to book a demo"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience *</Label>
              <Input
                id="audience"
                placeholder="e.g., B2B SaaS founders with 10-50 employees"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="product">Product/Offer *</Label>
              <Input
                id="product"
                placeholder="e.g., AI-powered email marketing platform"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="benefits">Key Benefits * (comma-separated)</Label>
              <Textarea
                id="benefits"
                placeholder="e.g., Save 10 hours/week, 3x open rates, Easy integration"
                value={benefits}
                onChange={(e) => setBenefits(e.target.value)}
                rows={2}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Tone</Label>
                <Input
                  id="tone"
                  placeholder="Professional yet friendly"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand">Brand Name (Optional)</Label>
                <Input
                  id="brand"
                  placeholder="Your Company"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>
            </div>

            <Button onClick={handleGenerateSingle} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Email...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Email
                </>
              )}
            </Button>

            {singleResult && (
              <EmailPreview email={singleResult} onCopy={handleCopyEmail} onInsert={onInsert} />
            )}
          </TabsContent>

          {/* Email Sequence Tab */}
          <TabsContent value="sequence" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="seq-type">Sequence Type</Label>
              <Select value={emailType} onValueChange={(v: any) => setEmailType(v)}>
                <SelectTrigger id="seq-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(EMAIL_TYPES).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="seq-length">Number of Emails</Label>
              <Select
                value={sequenceLength.toString()}
                onValueChange={(v) => setSequenceLength(parseInt(v))}
              >
                <SelectTrigger id="seq-length">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n} emails
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Reuse same fields */}
            <div className="space-y-2">
              <Label>Campaign Goal *</Label>
              <Input
                placeholder="e.g., Nurture leads to book a consultation"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Target Audience *</Label>
              <Input
                placeholder="e.g., New trial users"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Product/Offer *</Label>
              <Input
                placeholder="e.g., Premium subscription"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Key Benefits * (comma-separated)</Label>
              <Textarea
                placeholder="e.g., Advanced features, Priority support, Analytics"
                value={benefits}
                onChange={(e) => setBenefits(e.target.value)}
                rows={2}
              />
            </div>

            <Button onClick={handleGenerateSequence} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Sequence...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Email Sequence
                </>
              )}
            </Button>

            {sequenceResult && sequenceResult.length > 0 && (
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold">Email Sequence ({sequenceResult.length} emails)</h3>
                {sequenceResult.map((email, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>Email {email.emailNumber || index + 1}</Badge>
                      {email.purpose && (
                        <span className="text-sm text-muted-foreground">{email.purpose}</span>
                      )}
                    </div>
                    <EmailPreview email={email} onCopy={handleCopyEmail} onInsert={onInsert} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Subject Lines Tab */}
          <TabsContent value="subjects" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="context">Email Context *</Label>
              <Textarea
                id="context"
                placeholder="Describe your email (e.g., Announcing a 48-hour flash sale on all premium plans with 40% off)"
                value={subjectContext}
                onChange={(e) => setSubjectContext(e.target.value)}
                rows={3}
              />
            </div>

            <Button onClick={handleGenerateSubjectLines} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Variations...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate 10 Subject Lines
                </>
              )}
            </Button>

            {subjectLinesResult && subjectLinesResult.length > 0 && (
              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-semibold">Subject Line Variations ({subjectLinesResult.length})</h3>
                {subjectLinesResult.map((item, index) => (
                  <Card key={index} className="border">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">{item.subjectLine}</p>
                            <Badge variant="outline" className="text-xs">
                              {item.subjectLine.length} chars
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">
                            <strong>Approach:</strong> {item.approach}
                          </p>
                          <p className="text-xs text-muted-foreground">{item.reasoning}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleCopySubject(item.subjectLine)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Error Display */}
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-800 border border-red-200 mt-4">
            {error}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Email Preview Component
function EmailPreview({
  email,
  onCopy,
  onInsert,
}: {
  email: EmailResult
  onCopy: (email: EmailResult) => void
  onInsert?: (email: EmailResult) => void
}) {
  return (
    <Card className="border-2">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">Email Preview</CardTitle>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" onClick={() => onCopy(email)}>
              <Copy className="h-4 w-4" />
            </Button>
            {onInsert && (
              <Button size="sm" onClick={() => onInsert(email)}>
                Insert
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div>
          <Label className="text-xs text-muted-foreground flex items-center gap-2">
            Subject Line
            <Badge variant="outline" className="text-xs">
              {email.subjectLine.length} chars
            </Badge>
          </Label>
          <p className="font-semibold">{email.subjectLine}</p>
        </div>
        <div>
          <Label className="text-xs text-muted-foreground flex items-center gap-2">
            Preview Text
            <Badge variant="outline" className="text-xs">
              {email.previewText.length} chars
            </Badge>
          </Label>
          <p className="text-sm text-muted-foreground">{email.previewText}</p>
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Email Body</Label>
          <div
            className="text-sm border rounded p-3 bg-white max-h-96 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: email.body }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

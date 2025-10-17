'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Sparkles, Copy, RefreshCw, Loader2, Wand2, FileText, Type, AlignLeft } from 'lucide-react'

interface AIBlogAssistantProps {
  onInsert: (text: string) => void
  onInsertTitle?: (title: string) => void
  onInsertExcerpt?: (excerpt: string) => void
}

type Action = 'generate_post' | 'generate_title' | 'generate_excerpt' | 'generate_intro' | 'generate_outline' | 'improve_text'

export function AIBlogAssistant({ onInsert, onInsertTitle, onInsertExcerpt }: AIBlogAssistantProps) {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentAction, setCurrentAction] = useState<Action | null>(null)
  const [error, setError] = useState('')

  const handleGenerate = async (action: Action) => {
    if (!prompt.trim() && action !== 'improve_text') {
      setError('Please enter a topic or description')
      return
    }

    setLoading(true)
    setError('')
    setCurrentAction(action)

    try {
      const response = await fetch('/api/ai/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action,
          topic: prompt,
          text: prompt,
          instruction: 'Make it more engaging and conversion-focused',
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || errorData.message || 'Failed to generate content')
      }

      const data = await response.json()
      setResult(data.result)
      setError('')
    } catch (error) {
      console.error('AI Generation Error:', error)
      setError(error instanceof Error ? error.message : 'Something went wrong')
      setResult('')
    } finally {
      setLoading(false)
      setCurrentAction(null)
    }
  }

  const handleInsert = () => {
    if (currentAction === 'generate_title' && onInsertTitle) {
      // Extract first title from the list
      const firstTitle = result.split('\n').find(line => line.match(/^\d+\./))
      if (firstTitle) {
        const title = firstTitle.replace(/^\d+\.\s*/, '').trim()
        onInsertTitle(title)
      }
    } else if (currentAction === 'generate_excerpt' && onInsertExcerpt) {
      onInsertExcerpt(result)
    } else {
      onInsert(result)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result)
      // Could add a toast notification here
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const getActionLabel = (action: Action): string => {
    const labels: Record<Action, string> = {
      generate_post: 'Write Full Post',
      generate_title: 'Get Title Ideas',
      generate_excerpt: 'Write Excerpt',
      generate_intro: 'Write Intro',
      generate_outline: 'Create Outline',
      improve_text: 'Improve Text',
    }
    return labels[action]
  }

  return (
    <Card className="p-6 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <h3 className="font-semibold text-lg">AI Writing Assistant</h3>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="ai-prompt" className="text-sm font-medium mb-2 block">
            What do you want to write about?
          </Label>
          <Textarea
            id="ai-prompt"
            placeholder="e.g., 'How to write better email subject lines for B2B SaaS companies'"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="resize-none"
            disabled={loading}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <Label className="text-sm font-medium">Quick Actions</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleGenerate('generate_post')}
              disabled={loading || !prompt.trim()}
              className="justify-start"
            >
              <FileText className="w-4 h-4 mr-2" />
              {loading && currentAction === 'generate_post' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Full Post'
              )}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => handleGenerate('generate_title')}
              disabled={loading || !prompt.trim()}
              className="justify-start"
            >
              <Type className="w-4 h-4 mr-2" />
              {loading && currentAction === 'generate_title' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Titles'
              )}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => handleGenerate('generate_intro')}
              disabled={loading || !prompt.trim()}
              className="justify-start"
            >
              <AlignLeft className="w-4 h-4 mr-2" />
              {loading && currentAction === 'generate_intro' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Intro'
              )}
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={() => handleGenerate('generate_excerpt')}
              disabled={loading || !prompt.trim()}
              className="justify-start"
            >
              <Wand2 className="w-4 h-4 mr-2" />
              {loading && currentAction === 'generate_excerpt' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Excerpt'
              )}
            </Button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-12 text-gray-500">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-3 text-purple-600" />
            <p className="text-sm">
              Generating {currentAction ? getActionLabel(currentAction).toLowerCase() : 'content'}...
            </p>
            <p className="text-xs mt-1 text-gray-400">This may take 10-30 seconds</p>
          </div>
        )}

        {result && !loading && (
          <div className="space-y-3">
            <Label className="text-sm font-medium">Generated Content</Label>
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg max-h-96 overflow-y-auto">
              {currentAction === 'generate_post' || currentAction === 'generate_intro' ? (
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: result }}
                />
              ) : (
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                  {result}
                </pre>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleInsert}
                className="flex-1"
              >
                Insert
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopy}
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => currentAction && handleGenerate(currentAction)}
                title="Regenerate"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              💡 Tip: Review and edit AI-generated content before publishing
            </p>
          </div>
        )}

        {!loading && !result && !error && (
          <div className="text-center py-8 text-gray-400 text-sm">
            <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>Enter a topic above and choose an action to get started</p>
          </div>
        )}
      </div>
    </Card>
  )
}

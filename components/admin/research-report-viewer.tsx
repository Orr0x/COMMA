'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Copy, Download, CheckCircle } from 'lucide-react'

interface ResearchReportViewerProps {
  report: string
  title?: string
  showActions?: boolean
}

export function ResearchReportViewer({ report, title, showActions = true }: ResearchReportViewerProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(report)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleDownload = () => {
    const blob = new Blob([report], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${title || 'research-report'}-${Date.now()}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Card className="p-6">
      {showActions && (
        <div className="flex items-center justify-between mb-6 pb-4 border-b">
          <h3 className="font-semibold text-lg">Research Report</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download MD
            </Button>
          </div>
        </div>
      )}

      <div className="prose prose-sm max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold mt-8 mb-4 first:mt-0" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-4 leading-7 text-gray-700" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside mb-4 space-y-2 ml-4" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-gray-700 leading-7" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-semibold text-gray-900" {...props} />
            ),
            em: ({ node, ...props }) => (
              <em className="italic text-gray-700" {...props} />
            ),
            code: ({ node, inline, ...props }: any) =>
              inline ? (
                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-purple-600" {...props} />
              ) : (
                <code className="block bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4" {...props} />
              ),
            pre: ({ node, ...props }) => (
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4 text-gray-600" {...props} />
            ),
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full divide-y divide-gray-200 border" {...props} />
              </div>
            ),
            thead: ({ node, ...props }) => (
              <thead className="bg-gray-50" {...props} />
            ),
            th: ({ node, ...props }) => (
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="px-4 py-2 text-sm text-gray-700 border-t" {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className="my-8 border-gray-200" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-purple-600 hover:text-purple-700 underline" {...props} />
            ),
          }}
        >
          {report}
        </ReactMarkdown>
      </div>

      {showActions && (
        <div className="mt-8 pt-6 border-t bg-gray-50 -mx-6 -mb-6 px-6 py-4 rounded-b-lg">
          <p className="text-xs text-gray-500 text-center">
            This report was generated by AI. Please review and verify insights before use.
          </p>
        </div>
      )}
    </Card>
  )
}

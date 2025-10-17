import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import AIEmailAssistant from '@/components/admin/ai-email-assistant'

export default function AIEmailPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/admin/dashboard/ai-tools">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to AI Tools
            </Button>
          </Link>
          <Link href="/admin/dashboard">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-2">AI Email Marketing Creator</h1>
        <p className="text-muted-foreground">
          Generate high-converting emails, sequences, and subject lines using AI
        </p>
      </div>

      <AIEmailAssistant />
    </div>
  )
}

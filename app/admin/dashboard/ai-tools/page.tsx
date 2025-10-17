import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Mail, Megaphone, FileText, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AIToolsPage() {
  const tools = [
    {
      title: 'Blog Post Creator',
      description: 'Generate high-quality blog posts, titles, outlines, and more',
      icon: FileText,
      href: '/admin/dashboard/blog/new',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Ad Campaign Creator',
      description: 'Create high-converting ads for Meta, Google, LinkedIn, and TikTok',
      icon: Megaphone,
      href: '/admin/dashboard/ai-tools/ads',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Email Marketing Creator',
      description: 'Generate emails, sequences, and subject line variations',
      icon: Mail,
      href: '/admin/dashboard/ai-tools/email',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Company Research Agent',
      description: 'Analyze companies, competitors, and niches to uncover marketing opportunities',
      icon: Search,
      href: '/admin/dashboard/ai-tools/research',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ]

  return (
    <div className="py-8">
      <div className="mb-8">
        <Link href="/admin/dashboard">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">AI Marketing Tools</h1>
        </div>
        <p className="text-muted-foreground">
          Powered by Claude AI - Generate high-converting marketing content in seconds
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <Link key={tool.href} href={tool.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${tool.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${tool.color}`} />
                  </div>
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary font-medium">
                    Open tool →
                  </p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-8 p-6 border rounded-lg bg-muted/50">
        <h2 className="font-semibold mb-2 flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          About AI Features
        </h2>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            All AI tools are powered by Claude Sonnet 4.5, Anthropic's most advanced model for
            creative writing and complex tasks.
          </p>
          <p>
            <strong>Rate Limits:</strong> 20 AI requests per hour to ensure quality and prevent
            abuse.
          </p>
          <p>
            <strong>Best Practices:</strong> Be specific in your inputs, test multiple variations,
            and always review AI-generated content before publishing.
          </p>
        </div>
      </div>
    </div>
  )
}

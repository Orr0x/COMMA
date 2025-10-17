import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Search, Clock, FileText } from 'lucide-react'
import { AIResearchForm } from '@/components/admin/ai-research-form'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Company Research Agent | COMMA Studio',
  description: 'AI-powered company and market research',
}

async function getRecentReports() {
  try {
    const reports = await prisma.researchReport.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        title: true,
        type: true,
        status: true,
        createdAt: true,
        processingTime: true,
      },
    })
    return reports
  } catch (error) {
    console.error('Error fetching reports:', error)
    return []
  }
}

export default async function ResearchPage() {
  const recentReports = await getRecentReports()

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/admin/dashboard/ai-tools">
            <Button variant="ghost">
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

        <div className="flex items-center gap-3 mb-2">
          <Search className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Company Research Agent</h1>
        </div>
        <p className="text-muted-foreground">
          Analyze companies, competitors, and niches to uncover marketing opportunities and strategic insights
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <AIResearchForm />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium">Choose Research Type</p>
                  <p className="text-gray-600 text-xs">Website, social media, or niche analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium">Provide Details</p>
                  <p className="text-gray-600 text-xs">Enter URLs, content, or niche description</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium">Get Insights</p>
                  <p className="text-gray-600 text-xs">AI analyzes and generates comprehensive report</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Recent Reports</CardTitle>
              <Link href="/admin/dashboard/ai-tools/research/reports">
                <Button variant="ghost" size="sm" className="text-xs">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentReports.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <FileText className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">No reports yet</p>
                  <p className="text-xs">Generate your first report above</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <Link
                      key={report.id}
                      href={`/admin/dashboard/ai-tools/research/reports/${report.id}`}
                    >
                      <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              {report.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                report.type === 'website' ? 'bg-blue-100 text-blue-700' :
                                report.type === 'social' ? 'bg-green-100 text-green-700' :
                                'bg-purple-100 text-purple-700'
                              }`}>
                                {report.type}
                              </span>
                              {report.processingTime && (
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {report.processingTime}s
                                </span>
                              )}
                            </div>
                          </div>
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${
                            report.status === 'completed' ? 'bg-green-500' :
                            report.status === 'processing' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`} />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(report.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Pro Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-blue-800">
              <p>• Paste complete website content for better analysis</p>
              <p>• Include competitor URLs for comparative insights</p>
              <p>• Be specific about your research goals</p>
              <p>• Reports are saved for future reference</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

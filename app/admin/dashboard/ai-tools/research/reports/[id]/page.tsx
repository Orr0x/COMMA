import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { ResearchReportViewer } from '@/components/admin/research-report-viewer'
import { prisma } from '@/lib/prisma'

interface PageProps {
  params: {
    id: string
  }
}

async function getReport(id: string) {
  try {
    const report = await prisma.researchReport.findUnique({
      where: { id },
    })
    return report
  } catch (error) {
    console.error('Error fetching report:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps) {
  const report = await getReport(params.id)

  return {
    title: report ? `${report.title} | Research Report` : 'Report Not Found',
    description: report?.summary || 'AI-generated research report',
  }
}

export default async function ReportPage({ params }: PageProps) {
  const report = await getReport(params.id)

  if (!report) {
    notFound()
  }

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/admin/dashboard/ai-tools/research/reports">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Reports
            </Button>
          </Link>
          <Link href="/admin/dashboard/ai-tools/research">
            <Button variant="ghost" size="sm">
              Research Agent
            </Button>
          </Link>
          <Link href="/admin/dashboard">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>
        </div>

        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{report.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className={`px-2 py-1 text-xs rounded-full ${
              report.type === 'website' ? 'bg-blue-100 text-blue-700' :
              report.type === 'social' ? 'bg-green-100 text-green-700' :
              'bg-purple-100 text-purple-700'
            }`}>
              {report.type} research
            </span>
            <span className={`px-2 py-1 text-xs rounded-full ${
              report.status === 'completed' ? 'bg-green-100 text-green-700' :
              report.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {report.status}
            </span>
          </div>
        </div>

        {/* Metadata Card */}
        <Card className="mb-6 bg-gray-50">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Generated</p>
                  <p className="font-medium">
                    {new Date(report.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>

              {report.processingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Processing Time</p>
                    <p className="font-medium">{report.processingTime} seconds</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 text-gray-500">📊</div>
                <div>
                  <p className="text-xs text-gray-500">Report ID</p>
                  <p className="font-mono text-xs">{report.id.slice(0, 8)}...</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Content */}
      {report.status === 'completed' ? (
        <ResearchReportViewer report={report.report} title={report.title} />
      ) : report.status === 'processing' ? (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Processing...</p>
              <p className="text-sm text-gray-500">
                This report is still being generated. Please refresh the page in a moment.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <p className="text-lg font-medium mb-2 text-red-600">Report Generation Failed</p>
              <p className="text-sm text-gray-600 mb-4">
                {report.report || 'An error occurred while generating this report.'}
              </p>
              <Link href="/admin/dashboard/ai-tools/research">
                <Button>Try Again</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

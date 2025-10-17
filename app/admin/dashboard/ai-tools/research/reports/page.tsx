'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowLeft, Search, Trash2, Eye, Loader2, AlertCircle, Clock, FileText } from 'lucide-react'

interface Report {
  id: string
  title: string
  type: string
  status: string
  summary: string | null
  createdAt: string
  processingTime: number | null
}

export default function ReportsListPage() {
  const [reports, setReports] = useState<Report[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<'all' | 'website' | 'social' | 'niche'>('all')
  const [deleting, setDeleting] = useState<string | null>(null)

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/ai/research')
      if (!response.ok) throw new Error('Failed to fetch reports')
      const data = await response.json()
      setReports(data.reports)
      setError('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load reports')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this report? This action cannot be undone.')) {
      return
    }

    try {
      setDeleting(id)
      const response = await fetch(`/api/ai/research?id=${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete report')

      setReports(reports.filter((r) => r.id !== id))
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete report')
    } finally {
      setDeleting(null)
    }
  }

  const filteredReports = filter === 'all'
    ? reports
    : reports.filter((r) => r.type === filter)

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/admin/dashboard/ai-tools/research">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Research Agent
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Search className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold">Research Reports</h1>
            </div>
            <p className="text-muted-foreground">
              View and manage all your AI-generated research reports
            </p>
          </div>

          <Link href="/admin/dashboard/ai-tools/research">
            <Button>
              Generate New Report
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">Filter by type:</label>
            <Select value={filter} onValueChange={(v: any) => setFilter(v)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reports</SelectItem>
                <SelectItem value="website">Website Research</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="niche">Niche/Market</SelectItem>
              </SelectContent>
            </Select>

            <div className="ml-auto text-sm text-gray-600">
              {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      {loading ? (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </CardContent>
        </Card>
      ) : error ? (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-red-500" />
              <p className="text-red-600">{error}</p>
              <Button onClick={fetchReports} className="mt-4" variant="outline">
                Retry
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : filteredReports.length === 0 ? (
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <div className="text-center text-gray-400">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium mb-2">No reports found</p>
              <p className="text-sm mb-4">
                {filter === 'all'
                  ? "You haven't generated any research reports yet"
                  : `No ${filter} reports found`}
              </p>
              <Link href="/admin/dashboard/ai-tools/research">
                <Button>Generate Your First Report</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg truncate">{report.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                        report.type === 'website' ? 'bg-blue-100 text-blue-700' :
                        report.type === 'social' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {report.type}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                        report.status === 'completed' ? 'bg-green-100 text-green-700' :
                        report.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {report.status}
                      </span>
                    </div>

                    {report.summary && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {report.summary}
                      </p>
                    )}

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>
                        {new Date(report.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      {report.processingTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {report.processingTime}s processing time
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Link href={`/admin/dashboard/ai-tools/research/reports/${report.id}`}>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(report.id)}
                      disabled={deleting === report.id}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      {deleting === report.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

import { prisma } from '@/lib/prisma'
import { Card } from '@/components/ui/card'
import { FileText, Briefcase, MessageSquare, Wrench, Sparkles } from 'lucide-react'

export default async function AdminDashboard() {
  const [blogCount, caseStudyCount, testimonialCount, serviceCount] = await Promise.all([
    prisma.blogPost.count(),
    prisma.caseStudy.count(),
    prisma.testimonial.count(),
    prisma.service.count(),
  ])

  const stats = [
    { label: 'Blog Posts', value: blogCount, icon: FileText, color: 'bg-blue-500' },
    { label: 'Case Studies', value: caseStudyCount, icon: Briefcase, color: 'bg-purple-500' },
    { label: 'Testimonials', value: testimonialCount, icon: MessageSquare, color: 'bg-green-500' },
    { label: 'Services', value: serviceCount, icon: Wrench, color: 'bg-orange-500' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your content management system</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/dashboard/blog/new"
              className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
            >
              <p className="font-medium">Create New Blog Post</p>
              <p className="text-sm text-gray-600">Write and publish a new article</p>
            </a>
            <a
              href="/admin/dashboard/case-studies/new"
              className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors"
            >
              <p className="font-medium">Add Case Study</p>
              <p className="text-sm text-gray-600">Showcase a new client project</p>
            </a>
            <a
              href="/admin/dashboard/testimonials/new"
              className="block p-3 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
            >
              <p className="font-medium">Add Testimonial</p>
              <p className="text-sm text-gray-600">Add a new client review</p>
            </a>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            AI Marketing Tools
          </h2>
          <div className="space-y-3">
            <a
              href="/admin/dashboard/ai-tools"
              className="block p-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-md transition-colors border border-purple-200"
            >
              <p className="font-medium text-purple-900">View All AI Tools</p>
              <p className="text-sm text-purple-700">Access blog, ads, and email creators</p>
            </a>
            <a
              href="/admin/dashboard/ai-tools/ads"
              className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors"
            >
              <p className="font-medium">AI Ad Campaign Creator</p>
              <p className="text-sm text-gray-600">Generate ads for Meta, Google, LinkedIn, TikTok</p>
            </a>
            <a
              href="/admin/dashboard/ai-tools/email"
              className="block p-3 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors"
            >
              <p className="font-medium">AI Email Marketing Creator</p>
              <p className="text-sm text-gray-600">Create emails, sequences, and subject lines</p>
            </a>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="text-sm text-gray-600">
            <p>No recent activity to display</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

import { prisma } from '@/lib/prisma'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import { format } from 'date-fns'
import { DeleteCaseStudyButton } from '@/components/admin/delete-case-study-button'
import { BackNavigation } from '@/components/admin/back-navigation'

export default async function CaseStudiesPage() {
  const caseStudies = await prisma.caseStudy.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <BackNavigation backTo="/admin/dashboard" backLabel="Back to Dashboard" showDashboard={false} />
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Case Studies</h1>
          <p className="text-gray-600 mt-2">Manage your portfolio case studies</p>
        </div>
        <Button asChild>
          <Link href="/admin/dashboard/case-studies/new">
            <Plus className="w-4 h-4 mr-2" />
            New Case Study
          </Link>
        </Button>
      </div>

      {caseStudies.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-600 mb-4">No case studies yet.</p>
          <Button asChild>
            <Link href="/admin/dashboard/case-studies/new">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Case Study
            </Link>
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                    <Badge
                      variant={caseStudy.published ? 'default' : 'secondary'}
                    >
                      {caseStudy.published ? 'Published' : 'Draft'}
                    </Badge>
                    <Badge variant="outline">{caseStudy.color}</Badge>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {caseStudy.client} • {caseStudy.industry}
                  </p>
                  <p className="text-gray-700 mb-3">{caseStudy.tagline}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Slug: {caseStudy.slug}</span>
                    <span>•</span>
                    <span>Created: {format(new Date(caseStudy.createdAt), 'MMM d, yyyy')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/dashboard/case-studies/${caseStudy.id}/edit`}>
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit
                    </Link>
                  </Button>
                  <DeleteCaseStudyButton id={caseStudy.id} title={caseStudy.title} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

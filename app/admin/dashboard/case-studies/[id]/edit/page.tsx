import { prisma } from '@/lib/prisma'
import { CaseStudyForm } from '@/components/admin/case-study-form'
import { notFound } from 'next/navigation'
import { BackNavigation } from '@/components/admin/back-navigation'

export default async function EditCaseStudyPage({
  params,
}: {
  params: { id: string }
}) {
  const caseStudy = await prisma.caseStudy.findUnique({
    where: { id: params.id },
  })

  if (!caseStudy) {
    notFound()
  }

  return (
    <div>
      <BackNavigation backTo="/admin/dashboard/case-studies" backLabel="Back to Case Studies" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Case Study</h1>
        <p className="text-gray-600 mt-2">Update {caseStudy.title}</p>
      </div>

      <CaseStudyForm
        initialData={{
          id: caseStudy.id,
          title: caseStudy.title,
          slug: caseStudy.slug,
          client: caseStudy.client,
          industry: caseStudy.industry,
          color: caseStudy.color,
          tagline: caseStudy.tagline,
          overview: caseStudy.overview,
          challenge: caseStudy.challenge,
          solution: caseStudy.solution,
          results: caseStudy.results,
          testimonial: caseStudy.testimonial || undefined,
          coverImage: caseStudy.coverImage || undefined,
          published: caseStudy.published,
        }}
      />
    </div>
  )
}

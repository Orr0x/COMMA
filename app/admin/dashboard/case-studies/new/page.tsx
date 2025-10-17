import { CaseStudyForm } from '@/components/admin/case-study-form'
import { BackNavigation } from '@/components/admin/back-navigation'

export default function NewCaseStudyPage() {
  return (
    <div>
      <BackNavigation backTo="/admin/dashboard/case-studies" backLabel="Back to Case Studies" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create Case Study</h1>
        <p className="text-gray-600 mt-2">Add a new portfolio case study</p>
      </div>

      <CaseStudyForm />
    </div>
  )
}

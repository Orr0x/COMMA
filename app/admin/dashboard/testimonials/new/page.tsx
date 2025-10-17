import { TestimonialForm } from '@/components/admin/testimonial-form'
import { BackNavigation } from '@/components/admin/back-navigation'

export default function NewTestimonialPage() {
  return (
    <div>
      <BackNavigation backTo="/admin/dashboard/testimonials" backLabel="Back to Testimonials" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add Testimonial</h1>
        <p className="text-gray-600 mt-2">Add a new client testimonial</p>
      </div>

      <TestimonialForm />
    </div>
  )
}

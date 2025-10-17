import { prisma } from '@/lib/prisma'
import { TestimonialForm } from '@/components/admin/testimonial-form'
import { notFound } from 'next/navigation'
import { BackNavigation } from '@/components/admin/back-navigation'

export default async function EditTestimonialPage({
  params,
}: {
  params: { id: string }
}) {
  const testimonial = await prisma.testimonial.findUnique({
    where: { id: params.id },
  })

  if (!testimonial) {
    notFound()
  }

  return (
    <div>
      <BackNavigation backTo="/admin/dashboard/testimonials" backLabel="Back to Testimonials" />
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Testimonial</h1>
        <p className="text-gray-600 mt-2">Update testimonial from {testimonial.name}</p>
      </div>

      <TestimonialForm
        initialData={{
          id: testimonial.id,
          name: testimonial.name,
          role: testimonial.role,
          company: testimonial.company,
          content: testimonial.content,
          image: testimonial.image || undefined,
          rating: testimonial.rating,
          featured: testimonial.featured,
          published: testimonial.published,
        }}
      />
    </div>
  )
}

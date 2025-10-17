import { prisma } from '@/lib/prisma'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Plus, Pencil, Star } from 'lucide-react'
import { format } from 'date-fns'
import { DeleteTestimonialButton } from '@/components/admin/delete-testimonial-button'
import { BackNavigation } from '@/components/admin/back-navigation'

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <BackNavigation backTo="/admin/dashboard" backLabel="Back to Dashboard" showDashboard={false} />
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-gray-600 mt-2">Manage client testimonials</p>
        </div>
        <Button asChild>
          <Link href="/admin/dashboard/testimonials/new">
            <Plus className="w-4 h-4 mr-2" />
            New Testimonial
          </Link>
        </Button>
      </div>

      {testimonials.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-gray-600 mb-4">No testimonials yet.</p>
          <Button asChild>
            <Link href="/admin/dashboard/testimonials/new">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Testimonial
            </Link>
          </Button>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/dashboard/testimonials/${testimonial.id}/edit`}>
                      <Pencil className="w-3 h-3" />
                    </Link>
                  </Button>
                  <DeleteTestimonialButton id={testimonial.id} name={testimonial.name} />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {testimonial.featured && (
                  <Badge variant="default" className="text-xs">Featured</Badge>
                )}
                <Badge variant={testimonial.published ? 'default' : 'secondary'} className="text-xs">
                  {testimonial.published ? 'Published' : 'Draft'}
                </Badge>
              </div>

              <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                {testimonial.content}
              </p>

              <p className="text-xs text-gray-500">
                Created: {format(new Date(testimonial.createdAt), 'MMM d, yyyy')}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

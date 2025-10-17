'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

const testimonialSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role is required'),
  company: z.string().min(1, 'Company is required'),
  content: z.string().min(1, 'Content is required'),
  image: z.string().optional(),
  rating: z.number().min(1).max(5),
  featured: z.boolean(),
  published: z.boolean(),
})

type TestimonialFormData = z.infer<typeof testimonialSchema>

interface TestimonialFormProps {
  initialData?: {
    id?: string
    name: string
    role: string
    company: string
    content: string
    image?: string
    rating: number
    featured: boolean
    published: boolean
  }
}

export function TestimonialForm({ initialData }: TestimonialFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: initialData || {
      name: '',
      role: '',
      company: '',
      content: '',
      image: '',
      rating: 5,
      featured: false,
      published: true,
    },
  })

  const onSubmit = async (data: TestimonialFormData) => {
    setLoading(true)

    try {
      const url = initialData?.id
        ? `/api/admin/testimonials/${initialData.id}`
        : '/api/admin/testimonials'
      const method = initialData?.id ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        router.push('/admin/dashboard/testimonials')
        router.refresh()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to save testimonial')
      }
    } catch (error) {
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Client Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Alex Aráez"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                {...register('role')}
                placeholder="Creative Director"
              />
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                {...register('company')}
                placeholder="Loop Earplugs"
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="image">Image URL (optional)</Label>
            <Input
              id="image"
              {...register('image')}
              placeholder="https://..."
            />
          </div>

          <div>
            <Label htmlFor="rating">Rating (1-5)</Label>
            <Input
              id="rating"
              type="number"
              min="1"
              max="5"
              {...register('rating', { valueAsNumber: true })}
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Testimonial</h2>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            {...register('content')}
            rows={6}
            placeholder="Cain was the first person I brought at Loop as a performance copywriter. His approach, understanding, and practicality makes him a great teammate..."
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
          )}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="featured"
              {...register('featured')}
              className="w-4 h-4"
            />
            <Label htmlFor="featured" className="cursor-pointer">
              Featured on homepage
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="published"
              {...register('published')}
              className="w-4 h-4"
            />
            <Label htmlFor="published" className="cursor-pointer">
              Published
            </Label>
          </div>
        </div>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : initialData?.id ? 'Update' : 'Create'} Testimonial
        </Button>
      </div>
    </form>
  )
}

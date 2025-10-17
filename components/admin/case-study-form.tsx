'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const caseStudySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  client: z.string().min(1, 'Client is required'),
  industry: z.string().min(1, 'Industry is required'),
  color: z.string().default('purple'),
  tagline: z.string().min(1, 'Tagline is required'),
  coverImage: z.string().optional(),
  published: z.boolean(),
})

type CaseStudyFormData = z.infer<typeof caseStudySchema>

interface CaseStudyFormProps {
  initialData?: {
    id?: string
    title: string
    slug: string
    client: string
    industry: string
    color: string
    tagline: string
    overview: string
    challenge: string
    solution: string
    results: string
    testimonial?: string
    coverImage?: string
    published: boolean
  }
}

export function CaseStudyForm({ initialData }: CaseStudyFormProps) {
  const router = useRouter()
  const [overview, setOverview] = useState(initialData?.overview || '')
  const [challenge, setChallenge] = useState(initialData?.challenge || '')
  const [solution, setSolution] = useState(initialData?.solution || '')
  const [results, setResults] = useState(initialData?.results || '')
  const [testimonial, setTestimonial] = useState(initialData?.testimonial || '')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CaseStudyFormData>({
    resolver: zodResolver(caseStudySchema),
    defaultValues: initialData || {
      title: '',
      slug: '',
      client: '',
      industry: '',
      color: 'purple',
      tagline: '',
      coverImage: '',
      published: false,
    },
  })

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue('title', value)
    if (!initialData?.id) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setValue('slug', slug)
    }
  }

  const onSubmit = async (data: CaseStudyFormData) => {
    setLoading(true)

    try {
      const url = initialData?.id
        ? `/api/admin/case-studies/${initialData.id}`
        : '/api/admin/case-studies'
      const method = initialData?.id ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          overview,
          challenge,
          solution,
          results,
          testimonial: testimonial || undefined,
        }),
      })

      if (response.ok) {
        router.push('/admin/dashboard/case-studies')
        router.refresh()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to save case study')
      }
    } catch (error) {
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'link'],
      ['clean'],
    ],
  }

  const colorOptions = [
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'indigo', label: 'Indigo' },
    { value: 'amber', label: 'Amber' },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              {...register('title')}
              onChange={handleTitleChange}
              placeholder="Loop Earplugs"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input
              id="slug"
              {...register('slug')}
              placeholder="loop-earplugs"
            />
            {errors.slug && (
              <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client">Client</Label>
              <Input
                id="client"
                {...register('client')}
                placeholder="Loop Earplugs"
              />
              {errors.client && (
                <p className="text-red-500 text-sm mt-1">{errors.client.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                {...register('industry')}
                placeholder="E-Commerce"
              />
              {errors.industry && (
                <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              {...register('tagline')}
              placeholder="Product Launch Campaign"
            />
            {errors.tagline && (
              <p className="text-red-500 text-sm mt-1">{errors.tagline.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="color">Theme Color</Label>
              <select
                id="color"
                {...register('color')}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              >
                {colorOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="coverImage">Cover Image URL (optional)</Label>
              <Input
                id="coverImage"
                {...register('coverImage')}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p className="text-sm text-gray-600 mb-4">Client background and project context</p>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={overview}
            onChange={setOverview}
            modules={modules}
            className="bg-white"
          />
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Challenge</h2>
        <p className="text-sm text-gray-600 mb-4">What problem needed to be solved?</p>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={challenge}
            onChange={setChallenge}
            modules={modules}
            className="bg-white"
          />
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Solution</h2>
        <p className="text-sm text-gray-600 mb-4">Your approach and what you created</p>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={solution}
            onChange={setSolution}
            modules={modules}
            className="bg-white"
          />
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Results</h2>
        <p className="text-sm text-gray-600 mb-4">Outcomes, metrics, and impact</p>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={results}
            onChange={setResults}
            modules={modules}
            className="bg-white"
          />
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Client Testimonial (Optional)</h2>
        <p className="text-sm text-gray-600 mb-4">Quote from the client about working together</p>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={testimonial}
            onChange={setTestimonial}
            modules={modules}
            className="bg-white"
          />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="published"
            {...register('published')}
            className="w-4 h-4"
          />
          <Label htmlFor="published" className="cursor-pointer">
            Publish this case study
          </Label>
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
          {loading ? 'Saving...' : initialData?.id ? 'Update' : 'Create'} Case Study
        </Button>
      </div>
    </form>
  )
}

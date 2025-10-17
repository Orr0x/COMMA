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
import { AIBlogAssistant } from '@/components/admin/ai-blog-assistant'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  author: z.string().min(1, 'Author is required'),
  category: z.string().min(1, 'Category is required'),
  readTime: z.string().min(1, 'Read time is required'),
  published: z.boolean(),
})

type BlogFormData = z.infer<typeof blogSchema>

interface BlogFormProps {
  initialData?: {
    id?: string
    title: string
    slug: string
    excerpt: string
    content: string
    author: string
    category: string
    readTime: string
    published: boolean
  }
}

export function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter()
  const [content, setContent] = useState(initialData?.content || '')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
    defaultValues: initialData || {
      title: '',
      slug: '',
      excerpt: '',
      author: 'Cain Lewis',
      category: 'Copywriting Tips',
      readTime: '5 min read',
      published: false,
    },
  })

  // Auto-generate slug from title
  const title = watch('title')
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

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true)

    try {
      const url = initialData?.id
        ? `/api/admin/blog/${initialData.id}`
        : '/api/admin/blog'
      const method = initialData?.id ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, content }),
      })

      if (response.ok) {
        router.push('/admin/dashboard/blog')
        router.refresh()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to save blog post')
      }
    } catch (error) {
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean'],
    ],
  }

  const handleAIInsert = (text: string) => {
    setContent(text)
  }

  const handleAIInsertTitle = (title: string) => {
    setValue('title', title)
    // Auto-generate slug from AI-generated title
    if (!initialData?.id) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setValue('slug', slug)
    }
  }

  const handleAIInsertExcerpt = (excerpt: string) => {
    setValue('excerpt', excerpt)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* AI Assistant - Sidebar on desktop */}
      <div className="lg:col-span-1 order-2 lg:order-1">
        <AIBlogAssistant
          onInsert={handleAIInsert}
          onInsertTitle={handleAIInsertTitle}
          onInsertExcerpt={handleAIInsertExcerpt}
        />
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:col-span-2 order-1 lg:order-2">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              {...register('title')}
              onChange={handleTitleChange}
              placeholder="How to Write High-Converting Ads"
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
              placeholder="how-to-write-high-converting-ads"
            />
            {errors.slug && (
              <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              {...register('excerpt')}
              rows={3}
              placeholder="A brief description of your blog post..."
            />
            {errors.excerpt && (
              <p className="text-red-500 text-sm mt-1">{errors.excerpt.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="author">Author</Label>
              <Input id="author" {...register('author')} />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Input id="category" {...register('category')} />
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="readTime">Read Time</Label>
              <Input id="readTime" {...register('readTime')} placeholder="5 min read" />
              {errors.readTime && (
                <p className="text-red-500 text-sm mt-1">{errors.readTime.message}</p>
              )}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Content</h2>
        <div className="prose-editor">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
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
            Publish this blog post
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
          {loading ? 'Saving...' : initialData?.id ? 'Update' : 'Create'} Post
        </Button>
      </div>
    </form>
    </div>
  )
}

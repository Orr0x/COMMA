import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { BlogForm } from '@/components/admin/blog-form'

export default function NewBlogPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/admin/dashboard/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog Posts
            </Button>
          </Link>
          <Link href="/admin/dashboard">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold">Create New Blog Post</h1>
        <p className="text-gray-600 mt-2">Write and publish a new article</p>
      </div>

      <BlogForm />
    </div>
  )
}

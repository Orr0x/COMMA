import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { BlogForm } from '@/components/admin/blog-form'
import { notFound } from 'next/navigation'

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
  })

  if (!post) {
    notFound()
  }

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
        <h1 className="text-3xl font-bold">Edit Blog Post</h1>
        <p className="text-gray-600 mt-2">Update your article</p>
      </div>

      <BlogForm initialData={post} />
    </div>
  )
}

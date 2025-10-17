import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'

export async function generateStaticParams() {
  // Get slugs from both database and markdown
  const dbPosts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true },
  })
  const markdownPosts = getAllPosts()

  return [
    ...dbPosts.map(post => ({ slug: post.slug })),
    ...markdownPosts.map(post => ({ slug: post.slug })),
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Try database first
  const dbPost = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  })

  if (dbPost) {
    return {
      title: `${dbPost.title} | COMMA Studio Blog`,
      description: dbPost.excerpt,
      openGraph: {
        title: dbPost.title,
        description: dbPost.excerpt,
        type: 'article',
        publishedTime: dbPost.createdAt.toISOString(),
        authors: [dbPost.author],
      },
    }
  }

  // Fall back to markdown
  const post = getPostBySlug(params.slug)
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | COMMA Studio Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Try database first
  const dbPost = await prisma.blogPost.findUnique({
    where: { slug: params.slug, published: true },
  })

  let post
  if (dbPost) {
    post = {
      title: dbPost.title,
      excerpt: dbPost.excerpt,
      content: dbPost.content,
      author: dbPost.author,
      category: dbPost.category,
      readTime: dbPost.readTime,
      date: format(new Date(dbPost.createdAt), 'MMM d, yyyy'),
    }
  } else {
    // Fall back to markdown
    const markdownPost = getPostBySlug(params.slug)
    if (!markdownPost) {
      notFound()
    }
    post = markdownPost
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-purple-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-16 prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:leading-tight
              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-10
              prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-8
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-3
              prose-ol:my-8 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-3
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
              prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-purple-50/30
              prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-8
              prose-hr:my-12 prose-hr:border-gray-200
            ">
              {dbPost ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <ReactMarkdown>{post.content}</ReactMarkdown>
              )}
            </div>
          </article>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need copywriting help?
              </h2>
              <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
                I write conversion-focused copy for brands like Loop Earplugs, F1 Arcade, and Huel. Let's talk about your project.
              </p>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
                <Link href="/#contact">Work With Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">More Articles</h2>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

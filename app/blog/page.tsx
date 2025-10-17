import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'

export const metadata = genMetadata({
  title: 'Copywriting Blog - Tips, Strategies & Insights',
  description: 'Learn how to write better copy. Practical tips on ads, emails, product launches, and more from a copywriter who has worked with £120M+ brands.',
  keywords: [
    'copywriting blog',
    'copywriting tips',
    'ad copywriting',
    'email marketing',
    'conversion copywriting',
  ],
  canonical: '/blog',
})

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  // Get posts from database (published only)
  const dbPosts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  // Get posts from markdown files (legacy)
  const markdownPosts = getAllPosts()

  // Combine both sources
  const allPosts = [
    ...dbPosts.map(post => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      category: post.category,
      readTime: post.readTime,
      date: format(new Date(post.createdAt), 'MMM d, yyyy'),
    })),
    ...markdownPosts,
  ]

  // Get unique categories
  const categories = Array.from(new Set(allPosts.map(p => p.category)))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Copywriting That Works
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Practical tips on writing ads, emails, product launches, and more. No fluff. Just what actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-8 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
              <Link href="/blog">
                <Badge variant="outline" className="bg-white hover:bg-purple-50 cursor-pointer">
                  All Posts
                </Badge>
              </Link>
              {categories.map((category) => (
                <Link key={category} href={`/blog?category=${encodeURIComponent(category)}`}>
                  <Badge variant="outline" className="bg-white hover:bg-purple-50 cursor-pointer">
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {allPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-all group">
                    <div className="h-3 bg-gradient-to-r from-purple-600 to-purple-800"></div>
                    <div className="p-6">
                      {/* Category & Read Time */}
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-purple-50 text-purple-600 border-0 text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{post.date}</span>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform p-0">
                            Read More <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need help with your copy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              I write conversion-focused copy for brands that need results. From ads to full product launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/#contact">
                  Work With Me <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

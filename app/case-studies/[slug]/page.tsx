import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const dbStudies = await prisma.caseStudy.findMany({
    where: { published: true },
    select: { slug: true },
  })

  return dbStudies.map(study => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await prisma.caseStudy.findUnique({
    where: { slug: params.slug },
  })

  if (study) {
    return {
      title: `${study.title} Case Study - ${study.tagline}`,
      description: study.overview.replace(/<[^>]*>/g, '').substring(0, 160),
      openGraph: {
        title: `${study.title} Case Study`,
        description: study.tagline,
        type: 'article',
      },
    }
  }

  return {
    title: 'Case Study',
  }
}

const colorVariants: Record<string, { bg: string; gradient: string }> = {
  purple: { bg: 'bg-purple-600', gradient: 'from-purple-600 to-purple-800' },
  red: { bg: 'bg-red-600', gradient: 'from-red-600 to-red-800' },
  green: { bg: 'bg-green-600', gradient: 'from-green-600 to-green-800' },
  blue: { bg: 'bg-blue-600', gradient: 'from-blue-600 to-blue-800' },
  indigo: { bg: 'bg-indigo-600', gradient: 'from-indigo-600 to-indigo-800' },
  amber: { bg: 'bg-amber-600', gradient: 'from-amber-600 to-amber-800' },
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await prisma.caseStudy.findUnique({
    where: { slug: params.slug, published: true },
  })

  if (!study) {
    notFound()
  }

  const colors = colorVariants[study.color] || colorVariants.purple

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`pt-32 pb-20 bg-gradient-to-br ${colors.gradient} text-white`}>
        <div className="container mx-auto px-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              {study.industry}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {study.title}
              <br />
              <span className="text-gray-200 text-3xl md:text-4xl">{study.tagline}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Client</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{study.client}</div>
              <div className="text-sm text-gray-600">{study.industry}</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Project</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{study.tagline}</div>
              <div className="text-sm text-gray-600">Copywriting & Messaging</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Theme</div>
              <div className={`inline-block px-4 py-2 rounded-lg ${colors.bg} text-white font-bold`}>
                {study.color.charAt(0).toUpperCase() + study.color.slice(1)}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Overview</h2>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-strong:text-gray-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: study.overview }}
            />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Challenge</h2>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-strong:text-gray-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: study.challenge }}
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Solution</h2>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-strong:text-gray-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: study.solution }}
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Results</h2>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-strong:text-gray-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: study.results }}
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section (if available) */}
      {study.testimonial && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What The Client Said</h2>
              <Card className="p-8 md:p-12 text-center">
                <div className="mb-6">
                  <span className={`text-6xl ${colors.bg.replace('bg-', 'text-')}`}>"</span>
                </div>
                <div
                  className="prose prose-lg mx-auto
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-xl"
                  dangerouslySetInnerHTML={{ __html: study.testimonial }}
                />
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br ${colors.gradient} text-white`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want similar results for your project?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              I can help you create clear, compelling copy that drives conversions. Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link href="/#contact">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/case-studies">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { prisma } from '@/lib/prisma'

export const metadata = genMetadata({
  title: 'Case Studies - Copywriting Portfolio',
  description: 'See how COMMA Studio has helped brands like Loop Earplugs, F1 Arcade, and Knight Frank achieve results with conversion-focused copy.',
  keywords: [
    'copywriting case studies',
    'copywriting portfolio',
    'performance copywriting examples',
    'B2B copywriting portfolio',
    'marketing case studies',
  ],
  canonical: '/case-studies',
})

export const revalidate = 60 // Revalidate every 60 seconds

// Static fallback case studies
const staticCaseStudies = [
  {
    title: 'Loop Earplugs',
    slug: 'loop-earplugs',
    subtitle: 'Loop Engage Kids Product Launch',
    description: 'Multi-channel product launch campaign for a £120M+ e-commerce brand entering the kids market for the first time.',
    tags: ['Product Launch', 'E-Commerce', 'B2C'],
    stats: ['£120M+ Brand', '1+ Year Collaboration', 'Multi-Channel Campaign'],
    color: 'purple',
  },
  {
    title: 'F1 Arcade',
    slug: 'f1-arcade',
    subtitle: 'Date in a New Gear Campaign',
    description: 'November dating campaign repositioning F1 Arcade as the ultimate date night destination through email and Meta ads.',
    tags: ['Event Marketing', 'Hospitality', 'B2C'],
    stats: ['Premium Venue', 'Multi-Touch Campaign', 'Email + Meta Ads'],
    color: 'red',
  },
  {
    title: 'Airhive',
    slug: 'airhive',
    subtitle: 'Website Launch & Messaging',
    description: 'Complete website copy for B2B SaaS platform, translating complex air quality technology into clear business benefits.',
    tags: ['B2B SaaS', 'Website Launch', 'Tech Startup'],
    stats: ['Full Site Copy', 'Messaging Framework', 'Multi-Stakeholder'],
    color: 'green',
  },
  {
    title: 'Yugen Agency',
    slug: 'yugen-agency',
    subtitle: 'Brand Voice & Website Messaging',
    description: 'Brand voice definition and website rewrite for creative agency to differentiate in crowded market and attract premium clients.',
    tags: ['Brand Messaging', 'Creative Agency', 'B2B'],
    stats: ['Brand Voice', 'Full Site Rewrite', 'Voice Guidelines'],
    color: 'indigo',
  },
  {
    title: 'Knight Frank',
    slug: 'knight-frank',
    subtitle: 'Premium Direct Mail Campaign',
    description: 'Sophisticated direct mail series for global real estate firm targeting high-net-worth property investors with market intelligence.',
    tags: ['Direct Mail', 'Luxury Real Estate', 'B2C'],
    stats: ['Global Brand', '3-Piece Series', 'HNWI Targeting'],
    color: 'amber',
  },
  {
    title: 'Scottish Book Trust',
    slug: 'scottish-book-trust',
    subtitle: 'Donation Campaign',
    description: 'Emotional fundraising campaign driving donations for literacy programs through story-driven messaging across email, web, and social.',
    tags: ['Nonprofit', 'Fundraising', 'B2C'],
    stats: ['4-Email Series', 'Impact-Focused', 'Donor Journey'],
    color: 'blue',
  },
]

const colorVariants: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
    gradient: 'from-purple-600 to-purple-800',
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-200',
    gradient: 'from-red-600 to-red-800',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200',
    gradient: 'from-green-600 to-green-800',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    gradient: 'from-indigo-600 to-indigo-800',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
    gradient: 'from-amber-600 to-amber-800',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    gradient: 'from-blue-600 to-blue-800',
  },
}

export default async function CaseStudiesPage() {
  // Fetch case studies from database
  const dbCaseStudies = await prisma.caseStudy.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  // Transform database case studies to match display format
  const dbStudiesFormatted = dbCaseStudies.map(study => ({
    title: study.title,
    slug: study.slug,
    subtitle: study.tagline,
    description: study.overview.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
    tags: [study.industry],
    stats: [study.client],
    color: study.color,
  }))

  // Combine database and static case studies
  const caseStudies = [...dbStudiesFormatted, ...staticCaseStudies]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Copy That Works
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8">
              See how I've helped brands from £120M+ e-commerce giants to tech startups achieve results with clear, compelling, conversion-focused copy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-purple-200">
              <div className="flex items-center gap-2">
                <span className="text-white">✓</span>
                <span>6 Detailed Case Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">✓</span>
                <span>Multiple Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">✓</span>
                <span>Real Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter/Category Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 mb-4">Explore work across:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Product Launch', 'Website Copy', 'Email Marketing', 'Brand Messaging', 'Direct Mail', 'Fundraising', 'B2B SaaS', 'E-Commerce'].map((category) => (
                <Badge key={category} variant="outline" className="bg-white">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => {
                const colors = colorVariants[study.color]
                return (
                  <Card key={study.slug} className="overflow-hidden hover:shadow-xl transition-all group">
                    <div className={`h-3 bg-gradient-to-r ${colors.gradient}`}></div>
                    <div className="p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <Badge key={tag} className={`${colors.bg} ${colors.text} border-0`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-600 mb-4">
                        {study.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {study.description}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        {study.stats.map((stat, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}></span>
                            <span className="text-gray-600">{stat}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link href={`/case-studies/${study.slug}`}>
                        <Button variant="outline" className="group/btn">
                          Read Case Study
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real Copy. Real Results.
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              From product launches to fundraising campaigns, my copy has helped brands achieve measurable outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">2,350%</div>
                <div className="text-sm text-gray-600">Conversion increase</div>
                <div className="text-xs text-gray-500 mt-1">(0.04% → 0.98% for Victress)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">£120M+</div>
                <div className="text-sm text-gray-600">Brand value served</div>
                <div className="text-xs text-gray-500 mt-1">(Loop Earplugs collaboration)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
                <div className="text-sm text-gray-600">Brands helped</div>
                <div className="text-xs text-gray-500 mt-1">(From startups to enterprises)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "Cain was the first person I brought at Loop as a performance copywriter. His approach, understanding, and practicality makes him a great teammate."
                </p>
                <p className="font-semibold">Alex Aráez</p>
                <p className="text-sm text-gray-600">Creative Director, Loop Earplugs</p>
              </Card>
              <Card className="p-6">
                <p className="text-gray-700 mb-4 italic">
                  "The first time I worked with Cain, I felt like I'd worked with him forever. He led to an increase in conversions from 0.04% to 0.98%!"
                </p>
                <p className="font-semibold">Emma Glover</p>
                <p className="text-sm text-gray-600">Marketing Strategist, Victress</p>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                <strong>44 LinkedIn Recommendations</strong> • 5.0 ⭐⭐⭐⭐⭐ Average Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to see what's possible?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Whether you're launching a product, refreshing your website, or running a campaign—I can help. Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
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
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const featuredCaseStudies = [
  {
    title: 'Loop Earplugs',
    subtitle: 'Loop Engage Kids Product Launch',
    description: 'Multi-channel product launch campaign for £120M+ e-commerce brand entering the kids market.',
    tags: ['Product Launch', 'E-Commerce', 'Multi-Channel'],
    color: 'purple',
    href: '/case-studies/loop-earplugs',
    stats: ['£120M+ Brand', '1+ Year', '5 Channels']
  },
  {
    title: 'F1 Arcade',
    subtitle: 'Dating Campaign',
    description: 'November campaign repositioning F1 Arcade as the ultimate date night destination.',
    tags: ['Event Marketing', 'Email + Ads', 'B2C'],
    color: 'red',
    href: '/case-studies/f1-arcade',
    stats: ['Premium Venue', '3-Email Series', 'Meta Ads']
  },
  {
    title: 'Airhive',
    subtitle: 'Website Launch',
    description: 'Complete website copy for B2B SaaS platform, translating complex tech into clear benefits.',
    tags: ['B2B SaaS', 'Website Launch', 'Tech'],
    color: 'green',
    href: '/case-studies/airhive',
    stats: ['Full Site Copy', 'Multi-Stakeholder', 'SEO']
  }
]

const colorVariants: Record<string, { bg: string; text: string; gradient: string }> = {
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    gradient: 'from-purple-600 to-purple-800',
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-600',
    gradient: 'from-red-600 to-red-800',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    gradient: 'from-green-600 to-green-800',
  },
}

export function CaseStudies() {
  return (
    <section className="py-24 bg-gray-50" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work That Works</h2>
          <p className="text-xl text-gray-600">
            Real projects. Real results. From £120M+ brands to fast-growing startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredCaseStudies.map((study, index) => {
            const colors = colorVariants[study.color]
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className={`h-3 bg-gradient-to-r ${colors.gradient}`}></div>
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, i) => (
                      <Badge key={i} className={`${colors.bg} ${colors.text} border-0 text-xs`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-base font-semibold text-gray-600 mb-3">
                    {study.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}></span>
                        <span className="text-gray-600 text-xs">{stat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="group-hover:translate-x-2 transition-transform p-0" asChild>
                    <Link href={study.href}>
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

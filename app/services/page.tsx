import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Copywriting Services',
  description: 'Performance-focused copywriting services for brands that need copy that converts. From ads to websites to product launches.',
  keywords: [
    'copywriting services',
    'performance copywriter',
    'conversion copywriting',
    'marketing copywriter',
    'brand copywriter',
  ],
  canonical: '/services',
})

const services = [
  {
    icon: '🎯',
    title: 'Performance Advertising',
    description: 'Ads that stop the scroll and drive action. Meta, Google, TikTok—I write performance copy that converts cold audiences into customers.',
    href: '/services/performance-advertising',
    color: 'purple',
    includes: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'A/B Testing'],
    results: '2,350% conversion increase for Victress'
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    description: 'Email sequences that people actually want to read. From welcome flows to product launches, I write emails that build relationships and drive revenue.',
    href: '/services/email-marketing',
    color: 'blue',
    includes: ['Welcome Series', 'Launch Campaigns', 'Abandoned Cart', 'Newsletters'],
    results: '1,000+ emails written for DTC brands'
  },
  {
    icon: '✍️',
    title: 'Website Copy',
    description: 'Clear, conversion-focused copy that guides visitors from curiosity to customer. Every page optimized for humans and search engines.',
    href: '/services/website-copy',
    color: 'green',
    includes: ['Homepage', 'Product Pages', 'Landing Pages', 'SEO Copy'],
    results: 'Complete sites for B2B SaaS & E-Commerce'
  },
  {
    icon: '📦',
    title: 'Product Marketing',
    description: 'Launch campaigns that build hype and drive sales. From teaser to launch day to post-launch nurture—I handle the full journey.',
    href: '/services/product-marketing',
    color: 'orange',
    includes: ['Teaser Campaigns', 'Launch Copy', 'Product Pages', 'Post-Launch'],
    results: '£120M+ brand product launches'
  },
  {
    icon: '📖',
    title: 'Brand Messaging',
    description: 'Find your unique voice and own it. I help brands define messaging frameworks and voice guidelines that keep communications consistent.',
    href: '/services/brand-messaging',
    color: 'indigo',
    includes: ['Voice Development', 'Positioning', 'Messaging Framework', 'Guidelines'],
    results: 'Complete rebrands for agencies & startups'
  },
  {
    icon: '📢',
    title: 'OOH Advertising',
    description: 'Billboards, posters, transit ads that grab attention in seconds. Big, bold copy that works at a glance.',
    href: '/services/ooh-advertising',
    color: 'pink',
    includes: ['Billboards', 'Bus Shelters', 'Transit Ads', 'DOOH'],
    results: 'Campaigns for premium hospitality brands'
  }
]

const colorVariants: Record<string, { bg: string; text: string; gradient: string }> = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-800' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-800' },
  green: { bg: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-600 to-green-800' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-800' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-indigo-600 to-indigo-800' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', gradient: 'from-pink-600 to-pink-800' },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Copy That Converts
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8">
              I don't write pretty words. I write strategic, conversion-focused copy that helps brands grow—from ads to websites to full product launches.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-purple-200">
              <div className="flex items-center gap-2">
                <span className="text-white">✓</span>
                <span>Performance-Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">✓</span>
                <span>Multi-Channel</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">✓</span>
                <span>Results-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const colors = colorVariants[service.color]
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                    <div className={`h-3 bg-gradient-to-r ${colors.gradient}`}></div>
                    <div className="p-8">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl">{service.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Includes */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-600 mb-3">Includes:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.includes.map((item, i) => (
                            <Badge key={i} className={`${colors.bg} ${colors.text} border-0 text-xs`}>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className={`${colors.bg} p-4 rounded-lg mb-6`}>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Recent Work:</p>
                        <p className={`text-sm font-medium ${colors.text}`}>{service.results}</p>
                      </div>

                      {/* CTA */}
                      <Link href={service.href}>
                        <Button className="w-full group/btn">
                          Learn More
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

      {/* How I Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              How I Work
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Understand Your Goals</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I start by understanding what you're trying to achieve. Not just "write copy"—but what specific business goal are we solving for?
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Research Your Audience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Great copy speaks directly to your customer. I dig into who they are, what they care about, and the language they use.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Write & Test</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I deliver copy with multiple variations for testing. Because what works isn't always what we expect—data reveals the winners.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Optimize & Improve</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Copy is never "done." I help you iterate based on performance data to keep improving results over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to improve your copy?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's talk about your project. I'll help you create copy that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
                <Link href="/#contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

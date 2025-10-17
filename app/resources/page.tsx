import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, Download, FileText, Mail, Target } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Free Copywriting Resources & Templates',
  description: 'Download free copywriting templates, checklists, and frameworks. Email sequences, ad formulas, product launch checklists, and more.',
  keywords: [
    'copywriting templates',
    'copywriting resources',
    'free copywriting tools',
    'ad copy templates',
    'email templates',
  ],
  canonical: '/resources',
})

const resources = [
  {
    icon: Mail,
    title: 'Email Subject Line Swipe File',
    description: '50 proven email subject line formulas organized by goal (sales, engagement, curiosity, urgency). Includes real examples with open rates.',
    category: 'Email Marketing',
    format: 'PDF',
    color: 'blue',
    downloadUrl: '#', // TODO: Add actual download link
  },
  {
    icon: Target,
    title: 'Facebook Ad Copy Formula',
    description: 'The exact 5-part formula I use to write high-converting Meta ads. Includes 10 real ad examples and 20 hook templates.',
    category: 'Performance Ads',
    format: 'PDF',
    color: 'purple',
    downloadUrl: '#',
  },
  {
    icon: FileText,
    title: 'Product Launch Copywriting Checklist',
    description: 'Complete checklist of 23 pieces of copy you need ready before launch day. From teaser emails to post-launch sequences.',
    category: 'Product Marketing',
    format: 'PDF',
    color: 'orange',
    downloadUrl: '#',
  },
  {
    icon: FileText,
    title: 'Landing Page Copy Template',
    description: 'Fill-in-the-blank template for high-converting landing pages. Includes headline formulas, benefit sections, and CTA optimization.',
    category: 'Website Copy',
    format: 'Google Doc',
    color: 'green',
    downloadUrl: '#',
  },
]

const colorVariants: Record<string, { bg: string; text: string; icon: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'bg-blue-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'bg-purple-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'bg-orange-100' },
  green: { bg: 'bg-green-50', text: 'text-green-600', icon: 'bg-green-100' },
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Free Resources
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Copywriting Templates & Tools
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              Free templates, checklists, and frameworks to help you write better copy. No email signup required.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => {
                const colors = colorVariants[resource.color]
                const Icon = resource.icon
                return (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all group">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    {/* Category & Format */}
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`${colors.bg} ${colors.text} border-0 text-xs`}>
                        {resource.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{resource.format}</span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    {/* CTA */}
                    <Button className="w-full group/btn" disabled={resource.downloadUrl === '#'}>
                      <Download className="mr-2 w-4 h-4" />
                      {resource.downloadUrl === '#' ? 'Coming Soon' : 'Download Free'}
                      {resource.downloadUrl !== '#' && (
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              More Resources Coming Soon
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 opacity-60">
                <h3 className="text-lg font-bold mb-2">Website Copy Audit Template</h3>
                <p className="text-sm text-gray-700">Step-by-step checklist to audit your website copy for conversion issues.</p>
              </Card>
              <Card className="p-6 opacity-60">
                <h3 className="text-lg font-bold mb-2">Brand Voice Worksheet</h3>
                <p className="text-sm text-gray-700">Define your brand voice with prompts and examples to guide your team.</p>
              </Card>
              <Card className="p-6 opacity-60">
                <h3 className="text-lg font-bold mb-2">Email Sequence Templates</h3>
                <p className="text-sm text-gray-700">Pre-written sequences for welcome, abandoned cart, and post-purchase.</p>
              </Card>
              <Card className="p-6 opacity-60">
                <h3 className="text-lg font-bold mb-2">CTA Testing Framework</h3>
                <p className="text-sm text-gray-700">How to A/B test calls-to-action with a proven testing methodology.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Callout */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Looking for more copywriting tips?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out the blog for in-depth guides on writing ads, emails, product launches, and more.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                Read the Blog <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need custom copy for your business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              These templates are great for DIY. But if you need professional copy that's tailored to your brand and audience, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
                <Link href="/#contact">
                  Work With Me <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

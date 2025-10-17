import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, FileText, Sparkles } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Website Copywriting Services',
  description: 'Clear, conversion-focused website copy that turns visitors into customers. From homepage to product pages, I write copy that sells.',
  keywords: [
    'website copywriter',
    'website copywriting services',
    'homepage copywriter',
    'landing page copywriting',
    'web copy services',
  ],
  canonical: '/services/website-copy',
})

export default function WebsiteCopyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Website Copywriting
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Website Copy That Converts Visitors Into Customers
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-8">
              Your website is your best salesperson. I write clear, compelling copy that explains what you do, why it matters, and gets people to take action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" asChild>
                <Link href="/#contact">
                  Get Your Website Copy <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* What I Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Every Page. Every Word. Every Click.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I write website copy that's clear, conversion-focused, and optimized for both humans and search engines.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Full Website Copy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Homepage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>About page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Services/Product pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Contact page</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Landing Pages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Product launch pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Lead generation pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Campaign-specific pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Event registration pages</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">SEO & Messaging</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>SEO-optimized copy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Meta descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Value proposition development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Messaging frameworks</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              How I Approach Website Copy
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Start With Clarity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most websites bury the value proposition. I make it crystal clear what you do, who it's for, and why people should care—in the first 3 seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Speak to Your Audience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I write in the language your customers use, addressing their actual pain points—not what you think matters, but what they care about.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Guide the Journey</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every section leads to the next. Every page has a clear purpose. I structure copy to guide visitors from awareness to action.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Optimize for Conversion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beautiful design needs great copy to convert. I write headlines, CTAs, and body copy that work together to drive action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Websites I've Written
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-green-600 to-green-800"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-green-50 text-green-600 border-0">
                    B2B SaaS Launch
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Airhive</h3>
                  <p className="text-gray-700 mb-6">
                    Complete website copy for B2B SaaS platform. Translated complex air quality technology into clear business benefits.
                  </p>
                  <Link href="/case-studies/airhive">
                    <Button variant="outline">
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-indigo-600 to-indigo-800"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-indigo-50 text-indigo-600 border-0">
                    Brand Messaging
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Yugen Agency</h3>
                  <p className="text-gray-700 mb-6">
                    Full website rewrite for creative agency. Defined brand voice and rewrote all core pages from homepage to services.
                  </p>
                  <Link href="/case-studies/yugen-agency">
                    <Button variant="outline">
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Website Pages Breakdown */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Pages I Write
            </h2>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Homepage</h3>
                <p className="text-sm text-gray-700">Your most important page. Clear value prop, benefits, social proof, and strong CTAs.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">About Page</h3>
                <p className="text-sm text-gray-700">Tell your story in a way that builds trust and shows why you're the right choice.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Services/Products</h3>
                <p className="text-sm text-gray-700">Explain what you offer and why it matters—with benefits, not just features.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Landing Pages</h3>
                <p className="text-sm text-gray-700">Single-purpose pages built to convert traffic from ads, emails, or campaigns.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Product Pages</h3>
                <p className="text-sm text-gray-700">E-commerce copy that sells—product descriptions, headlines, and CTAs.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Contact/Demo Pages</h3>
                <p className="text-sm text-gray-700">Lower friction and increase form submissions with the right messaging.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Who This Is For
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Launching a New Website</h3>
                <p className="text-gray-700">
                  You're building a new site and need professional copy that converts from day one.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Refreshing Your Site</h3>
                <p className="text-gray-700">
                  Your design is great, but the copy isn't converting. Time for a rewrite.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ B2B SaaS Companies</h3>
                <p className="text-gray-700">
                  You need to explain complex products simply and convert visitors into demo requests.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ E-Commerce Brands</h3>
                <p className="text-gray-700">
                  You need product pages and landing pages that turn browsers into buyers.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to turn your website into a conversion machine?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let's talk about your website. I'll help you create copy that clarifies your message and drives action.
            </p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" asChild>
              <Link href="/#contact">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Rocket, Package, TrendingUp } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Product Marketing Copywriting Services',
  description: 'Product launch copywriting that builds hype and drives sales. From teaser campaigns to launch day, I write copy that gets products noticed.',
  keywords: [
    'product launch copywriter',
    'product marketing copywriting',
    'product description writer',
    'launch campaign copywriter',
    'product copywriting services',
  ],
  canonical: '/services/product-marketing',
})

export default function ProductMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Product Marketing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Launch Products That People Actually Want
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8">
              Product launches don't fail because the product is bad—they fail because nobody cares. I write launch copy that builds anticipation, drives demand, and converts interest into sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50" asChild>
                <Link href="/#contact">
                  Plan Your Launch <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/case-studies/loop-earplugs">View Launch Case Study</Link>
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
                End-to-End Product Launch Copy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From teaser campaigns to post-launch nurture, I handle every stage of your product launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pre-Launch (Teaser)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Teaser email campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Waitlist landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Social media teasers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Coming soon pages</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Package className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Launch Day</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Product pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Launch announcement emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Launch ads (Meta, Google, TikTok)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Product descriptions</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Post-Launch</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Follow-up email sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Social proof campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Customer testimonial collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Evergreen product marketing</span>
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
              How I Approach Product Launches
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Build Anticipation First</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Great launches don't happen overnight. I create teaser campaigns that build curiosity and anticipation weeks before launch day—so you have demand waiting.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Position, Don't Just Describe</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anyone can list features. I position your product in a way that makes people think "I need this"—connecting features to real emotional and practical benefits.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Multi-Channel Consistency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your launch messaging should be consistent everywhere—email, ads, product pages, social. I create a unified narrative that works across all channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Plan Beyond Launch Day</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Most launches fizzle after day one. I create post-launch sequences that sustain momentum, gather testimonials, and turn early adopters into evangelists.
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
              Product Launches I've Written
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-purple-600 to-purple-800"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-purple-50 text-purple-600 border-0">
                    £120M+ Brand Launch
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">Loop Earplugs - Loop Engage Kids</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Complete product launch campaign for Loop's first kids' product. Teaser campaign, launch announcement, product pages, email marketing, and Meta ads. Multi-channel approach that built anticipation and drove day-one sales.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-purple-50 rounded">
                      <div className="font-bold text-2xl text-purple-600">3</div>
                      <div className="text-sm text-gray-600">Campaign Phases</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded">
                      <div className="font-bold text-2xl text-purple-600">5</div>
                      <div className="text-sm text-gray-600">Channels</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded">
                      <div className="font-bold text-2xl text-purple-600">1+</div>
                      <div className="text-sm text-gray-600">Year Partnership</div>
                    </div>
                  </div>
                  <Link href="/case-studies/loop-earplugs">
                    <Button size="lg">
                      Read Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Checklist */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              What a Full Launch Includes
            </h2>

            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Pre-Launch Strategy</h3>
                    <p className="text-sm text-gray-700">Positioning, messaging framework, audience research, and launch timeline.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Teaser Campaign</h3>
                    <p className="text-sm text-gray-700">Landing pages, waitlist copy, teaser emails, and social media snippets.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Launch Day Assets</h3>
                    <p className="text-sm text-gray-700">Product pages, launch emails, ad copy (Meta/Google/TikTok), descriptions.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Post-Launch Momentum</h3>
                    <p className="text-sm text-gray-700">Follow-up sequences, testimonial requests, social proof campaigns.</p>
                  </div>
                </div>
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
                <h3 className="text-xl font-bold mb-3">✓ E-Commerce Brands</h3>
                <p className="text-gray-700">
                  Launching new products and need copy that drives day-one sales and sustains momentum.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ DTC Startups</h3>
                <p className="text-gray-700">
                  Bringing your first product to market and need a launch that makes an impact.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ SaaS Companies</h3>
                <p className="text-gray-700">
                  Launching new features or products and need copy that educates and converts.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Product Managers</h3>
                <p className="text-gray-700">
                  You own the product roadmap but need help with go-to-market messaging.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to launch your next product?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Let's talk about your launch. I'll help you create a campaign that builds hype and drives sales.
            </p>
            <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50" asChild>
              <Link href="/#contact">
                Plan Your Launch <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

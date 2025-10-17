import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Target, TrendingUp, Zap } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Performance Advertising Copywriting Services',
  description: 'Conversion-focused ad copy for Meta, Google, and TikTok. I write ads that drive clicks, conversions, and measurable ROI for e-commerce and DTC brands.',
  keywords: [
    'performance advertising copywriter',
    'Meta ads copywriter',
    'Google ads copywriting',
    'TikTok ads copy',
    'conversion copywriting',
    'performance marketing copy',
  ],
  canonical: '/services/performance-advertising',
})

export default function PerformanceAdvertisingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Performance Advertising
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ads That Actually Convert
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8">
              Stop wasting ad spend on copy that doesn't work. I write performance-focused ad copy that drives clicks, conversions, and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
                <Link href="/#contact">
                  Get Your Ad Copy <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Results Bar */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">2,350%</div>
              <div className="text-sm text-gray-600">Conversion increase for Victress</div>
              <div className="text-xs text-gray-500 mt-1">(0.04% → 0.98%)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">£120M+</div>
              <div className="text-sm text-gray-600">Brand value worked with</div>
              <div className="text-xs text-gray-500 mt-1">(Loop Earplugs + more)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1,000+</div>
              <div className="text-sm text-gray-600">Ad variations written</div>
              <div className="text-xs text-gray-500 mt-1">(Meta, Google, TikTok)</div>
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
                What I Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I write ad copy that's optimized for performance—not creativity awards. Every word is chosen to drive action.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Meta Ads (Facebook & Instagram)</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Primary text, headlines, descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Multiple variations for A/B testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Carousel, video, and story ad copy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Retargeting and cold audience angles</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Google Ads</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Search ads (RSAs, expanded text ads)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Display ad copy and banner text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Shopping ad descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Keyword-optimized ad groups</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">TikTok & Emerging Platforms</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Native-feeling TikTok ad scripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Platform-specific voice and style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Spark ads and branded content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Hook-first storytelling approach</span>
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
              My Approach
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Understand Your Audience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I start by learning who you're targeting—their pain points, desires, and the language they use. Great ad copy speaks directly to your ideal customer.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Test Multiple Angles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I create 5-10+ ad variations testing different hooks, benefits, and CTAs. Because what works isn't always what you expect—testing reveals winners.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Optimize for Platform</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Meta ads need different copy than Google search ads. TikTok needs a different tone than LinkedIn. I write for the platform and the context.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Focus on Conversion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every ad has one job: drive action. I write copy that moves people from scroll to click to purchase—not just pretty words.
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
              Real Results
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-purple-600 to-purple-800"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-purple-50 text-purple-600 border-0">
                    Product Launch Campaign
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Loop Earplugs</h3>
                  <p className="text-gray-700 mb-6">
                    Multi-channel ad copy for Loop's first kids' product launch. Teaser campaign, product launch, Meta ads, and email marketing.
                  </p>
                  <Link href="/case-studies/loop-earplugs">
                    <Button variant="outline">
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-red-600 to-red-800"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-red-50 text-red-600 border-0">
                    Dating Campaign
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">F1 Arcade</h3>
                  <p className="text-gray-700 mb-6">
                    November dating campaign with email and Meta ads repositioning F1 Arcade as the ultimate date night destination.
                  </p>
                  <Link href="/case-studies/f1-arcade">
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

      {/* Who This Is For */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Who This Is For
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ E-Commerce & DTC Brands</h3>
                <p className="text-gray-700">
                  You're running paid ads but need copy that converts better and scales profitably.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Marketing Agencies</h3>
                <p className="text-gray-700">
                  You need a reliable copywriter who understands performance marketing and can deliver fast.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Product Launch Teams</h3>
                <p className="text-gray-700">
                  You're launching a new product and need ad copy tested and ready for day one.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Performance Marketers</h3>
                <p className="text-gray-700">
                  You run the campaigns, but need a copywriter who understands CTR, CVR, and ROAS.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to improve your ad performance?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's talk about your campaigns. I'll help you create ads that drive measurable results.
            </p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
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

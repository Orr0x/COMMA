import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Loop Earplugs Case Study - Product Launch Copywriting',
  description: "How COMMA Studio helped Loop Earplugs launch their first kids' product with conversion-focused copy across web, email, and Meta ads. £120M+ brand.",
  keywords: [
    'Loop Earplugs copywriter',
    'product launch copywriting',
    'e-commerce copywriting',
    'kids product marketing',
    'performance copywriting case study',
  ],
  canonical: '/case-studies/loop-earplugs',
})

export default function LoopEarplugsCase() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Product Launch • E-Commerce • B2C
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Loop Earplugs
              <br />
              <span className="text-gray-400">Loop Engage Kids Product Launch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Launching Loop's first-ever kids' product to open up new markets and encourage repeat purchases. Multi-channel campaign from teaser to launch.
            </p>
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Client</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Loop Earplugs</div>
              <div className="text-sm text-gray-600">£120M+ e-commerce brand, 1M+ customers</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Role</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Lead Copywriter</div>
              <div className="text-sm text-gray-600">Performance copy, UX, CRM campaigns</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Duration</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">1+ Year</div>
              <div className="text-sm text-gray-600">Multiple campaign collaboration</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Challenge</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Loop Earplugs had built a £120M+ business selling premium earplugs to adults. But they'd never created a product for kids. This was their chance to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Open up an entirely new market (parents buying for their children)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Encourage repeat purchases from existing customers who are now parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Position earplugs as essential for kids' learning, focus, and wellbeing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>Differentiate from adult products with kid-friendly messaging and design</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                The messaging had to appeal to <strong>two audiences simultaneously</strong>: kids (who'd wear them) and parents (who'd buy them). Plus, we needed to educate a market that didn't think kids needed earplugs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Solution</h2>
            <p className="text-xl text-gray-600 mb-12">
              A comprehensive, multi-channel launch campaign that educated parents while exciting kids.
            </p>

            <div className="space-y-12">
              {/* Campaign 1 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">1. Teaser Campaign</h3>
                <p className="text-gray-700 mb-4">
                  Built anticipation before launch with cryptic emails and social posts hinting at "something special for little learners." Created mystery without revealing the product.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Key Message:</p>
                  <p className="text-lg font-semibold text-gray-900">
                    "Something small is coming soon... but it's going to make a BIG difference."
                  </p>
                </div>
              </div>

              {/* Campaign 2 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">2. Launch Campaign</h3>
                <p className="text-gray-700 mb-4">
                  Full reveal with educational messaging focused on three key use cases: staying engaged at school, enjoying calmer socializing, and managing noise sensitivity.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Hero Headline:</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    "Earplugs for learning, playing and growing"
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-4 rounded">
                      <div className="text-2xl mb-2">📚</div>
                      <p className="font-semibold text-sm">Stay engaged at school</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <div className="text-2xl mb-2">🎉</div>
                      <p className="font-semibold text-sm">Enjoy calmer socializing</p>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <div className="text-2xl mb-2">🧘</div>
                      <p className="font-semibold text-sm">Manage noise sensitivity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaign 3 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">3. Product Pages</h3>
                <p className="text-gray-700 mb-4">
                  Created conversion-focused product pages with clear benefits, colorful visuals, and parent-friendly CTAs. Emphasized safety, comfort, and the science behind noise reduction for developing minds.
                </p>
              </div>

              {/* Campaign 4 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">4. Email Marketing</h3>
                <p className="text-gray-700 mb-4">
                  Segmented campaigns for existing customers (parents with kids) vs. new prospects. Educational drip series explaining why earplugs aren't just for concerts—they're tools for focus, learning, and emotional regulation.
                </p>
              </div>

              {/* Campaign 5 */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">5. Meta Ads</h3>
                <p className="text-gray-700 mb-4">
                  Performance-driven ad copy testing multiple angles: "Give distractions a time out," "Discover Loop Engage Kids," and "Meet their new study buddies." Focused on colorful product imagery and kid-friendly language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What I Delivered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Teaser campaign copy (email + social)',
                'Launch campaign messaging framework',
                'Product page copy (3 variants)',
                'Email sequences (welcome series + nurture)',
                'Meta ad copy (10+ variations)',
                'Value proposition & positioning',
                'Educational content (benefits guide)',
                'CTA optimization',
              ].map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What The Team Said</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="mb-4">
                  <span className="text-4xl text-purple-600">"</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Cain was the first person I brought at Loop as a performance copywriter. His approach, understanding, and practicality makes him a great teammate. He also has a vision of performance that doesn't dilute quality—something important to high-end brands.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                    AA
                  </div>
                  <div>
                    <p className="font-semibold">Alex Aráez</p>
                    <p className="text-sm text-gray-600">Creative Director, Loop Earplugs</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="mb-4">
                  <span className="text-4xl text-purple-600">"</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Working with Cain on many successful projects like performance landing pages, ads and a quiz funnel that delivered outstanding results. He consistently produces exceptional copy that connects deeply with our target audience.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                    KV
                  </div>
                  <div>
                    <p className="font-semibold">Karo Van den Brande</p>
                    <p className="text-sm text-gray-600">Funnel Strategist, Loop Earplugs</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🎯 Dual-Audience Messaging</h3>
                <p className="text-gray-700">
                  Successfully balanced kid-friendly language (fun, colorful, engaging) with parent-focused benefits (educational value, safety, wellbeing).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">📚 Market Education</h3>
                <p className="text-gray-700">
                  Created content that educated a market unfamiliar with kids' earplugs. Positioned the product as essential for learning and focus, not just noise blocking.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🚀 Multi-Channel Launch</h3>
                <p className="text-gray-700">
                  Coordinated messaging across email, web, and ads to create a cohesive launch experience. Each channel reinforced the same core message with platform-specific optimization.
                </p>
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
              Need a product launch copywriter?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              I've helped brands like Loop, Huel, and F1 Arcade launch products, enter new markets, and drive conversions. Let's talk about your launch.
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
                <Link href="/case-studies">View More Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

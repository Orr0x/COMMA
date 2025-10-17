import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Yugen Agency Case Study - Brand Messaging & Website Copy',
  description: 'How COMMA Studio helped Yugen Agency refine their brand voice and website messaging to attract premium creative clients.',
  keywords: [
    'Yugen Agency copywriter',
    'creative agency branding',
    'brand messaging copywriting',
    'agency website copy',
    'brand voice development',
  ],
  canonical: '/case-studies/yugen-agency',
})

export default function YugenCase() {
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
              Brand Messaging • Creative Agency • B2B
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Yugen Agency
              <br />
              <span className="text-gray-400">Brand Voice & Website Messaging</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Helping a creative agency find their unique voice and communicate it clearly across their website to attract premium clients.
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
              <div className="text-2xl font-bold text-gray-900 mb-2">Yugen Agency</div>
              <div className="text-sm text-gray-600">Creative & branding agency</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Role</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Brand Copywriter</div>
              <div className="text-sm text-gray-600">Messaging strategy & website copy</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Project Type</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Brand Refresh</div>
              <div className="text-sm text-gray-600">Voice definition & site rewrite</div>
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
                Yugen Agency had exceptional creative work, but their website didn't reflect their unique approach. Their messaging felt generic—like every other creative agency saying the same things.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>Differentiate from hundreds of other creative agencies with similar portfolios</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>Define and articulate a unique brand voice that reflects their philosophy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>Attract premium clients who value strategic thinking, not just design execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>Communicate their Japanese-inspired philosophy (Yugen = profound grace and subtlety)</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                This required going beyond surface-level copywriting. We needed to <strong>uncover what makes Yugen different</strong> and express it in a way that resonates with the right clients.
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
              A brand messaging overhaul grounded in Yugen's philosophy of meaningful, intentional design.
            </p>

            <div className="space-y-12">
              {/* Discovery Process */}
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">1. Brand Voice Discovery</h3>
                <p className="text-gray-700 mb-4">
                  Started with deep-dive interviews to understand Yugen's philosophy, their ideal clients, and what they believe great creative work should achieve. Identified three core brand pillars:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded">
                    <div className="text-2xl mb-2">🎯</div>
                    <p className="font-semibold text-sm mb-1">Intentional</p>
                    <p className="text-xs text-gray-600">Every choice serves a purpose</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded">
                    <div className="text-2xl mb-2">🌊</div>
                    <p className="font-semibold text-sm mb-1">Subtle</p>
                    <p className="text-xs text-gray-600">Power in restraint and refinement</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded">
                    <div className="text-2xl mb-2">💡</div>
                    <p className="font-semibold text-sm mb-1">Meaningful</p>
                    <p className="text-xs text-gray-600">Design that connects deeply</p>
                  </div>
                </div>
              </div>

              {/* Messaging Framework */}
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">2. Core Messaging Framework</h3>
                <p className="text-gray-700 mb-4">
                  Developed a positioning statement and supporting messages that communicate Yugen's philosophy without being pretentious:
                </p>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Positioning Statement:</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    "We create brands with depth—the kind people feel before they understand why."
                  </p>
                  <p className="text-sm text-gray-600 mb-2">Supporting Message:</p>
                  <p className="text-base text-gray-700">
                    "Great branding isn't about being loudest. It's about being most remembered. We help brands achieve this through intentional design that speaks to what matters."
                  </p>
                </div>
              </div>

              {/* Website Copy */}
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">3. Website Copy Rewrite</h3>
                <p className="text-gray-700 mb-4">
                  Rewrote all core website pages with the new brand voice—confident but not arrogant, philosophical but not abstract:
                </p>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-indigo-200 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">Homepage Hero</p>
                    <p className="text-sm text-gray-700">"Brands that whisper louder than shouts"</p>
                  </div>
                  <div className="bg-white border-2 border-indigo-200 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">About Page Hook</p>
                    <p className="text-sm text-gray-700">"We named ourselves after a Japanese concept: Yugen. It means a profound grace and subtlety that can't be expressed in words—only felt. That's the kind of branding we create."</p>
                  </div>
                  <div className="bg-white border-2 border-indigo-200 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">Services Positioning</p>
                    <p className="text-sm text-gray-700">"We don't do branding by committee or design by trends. We dig deep, think hard, and create work that lasts."</p>
                  </div>
                </div>
              </div>

              {/* Voice Guidelines */}
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">4. Brand Voice Guidelines</h3>
                <p className="text-gray-700 mb-4">
                  Created a comprehensive voice guide so Yugen could maintain consistency across all future communications:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>Tone: Confident, thoughtful, refined</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>Language: Simple words, profound ideas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>Avoid: Industry jargon, empty superlatives, trend-chasing language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span>Embrace: Restraint, poetry, philosophy (used sparingly)</span>
                  </li>
                </ul>
              </div>

              {/* Case Study Templates */}
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">5. Case Study Copy Templates</h3>
                <p className="text-gray-700 mb-4">
                  Wrote templates for portfolio case studies that focus on the thinking behind the work, not just the visual output. This positions Yugen as strategic partners, not just design executors.
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
                'Brand voice discovery & definition',
                'Core messaging framework',
                'Positioning statement',
                'Homepage copy rewrite',
                'About page narrative',
                'Services page copy',
                'Contact page messaging',
                'Brand voice guidelines document',
                'Case study copy templates',
                'Tone of voice examples',
              ].map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🎯 Philosophy-Driven Differentiation</h3>
                <p className="text-gray-700">
                  Instead of competing on portfolio alone, positioned Yugen around their unique philosophy—making them memorable in a crowded market.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">💎 Clarity Through Simplicity</h3>
                <p className="text-gray-700">
                  Used simple, direct language to communicate profound ideas. Avoided the trap of sounding pretentious while discussing philosophy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">📚 Scalable Brand Voice</h3>
                <p className="text-gray-700">
                  Created voice guidelines and templates that enable Yugen to maintain consistency across all future marketing without needing a copywriter for every piece of content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need help defining your brand voice?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              I've helped creative agencies, tech startups, and £120M+ brands find their unique voice and express it clearly. Let's talk about your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50" asChild>
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

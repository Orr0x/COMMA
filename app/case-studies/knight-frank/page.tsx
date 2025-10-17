import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Knight Frank Case Study - Direct Mail Copywriting',
  description: 'How COMMA Studio helped Knight Frank (global real estate leader) create premium direct mail campaigns for high-net-worth property clients.',
  keywords: [
    'Knight Frank copywriter',
    'direct mail copywriting',
    'luxury real estate marketing',
    'premium property copywriting',
    'real estate direct mail',
  ],
  canonical: '/case-studies/knight-frank',
})

export default function KnightFrankCase() {
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
              Direct Mail • Luxury Real Estate • B2C
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Knight Frank
              <br />
              <span className="text-gray-400">Premium Direct Mail Campaign</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Creating sophisticated direct mail copy for one of the world's largest real estate firms to reach high-net-worth property investors.
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
              <div className="text-2xl font-bold text-gray-900 mb-2">Knight Frank</div>
              <div className="text-sm text-gray-600">Global real estate consultancy</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Role</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Direct Mail Copywriter</div>
              <div className="text-sm text-gray-600">Premium campaign messaging</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Campaign</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Multi-Touch Series</div>
              <div className="text-sm text-gray-600">High-value property investors</div>
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
                Knight Frank needed direct mail campaigns that could break through to ultra-high-net-worth individuals—people who receive hundreds of marketing messages daily and ignore most of them.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span>Stand out in the mailboxes of wealthy property investors who are bombarded with marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span>Communicate Knight Frank's premium positioning without sounding stuffy or pretentious</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span>Drive responses (property valuations, viewing requests) from a notoriously unresponsive audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span>Maintain brand consistency across multiple touchpoints while personalizing for local markets</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                This wasn't about selling properties—it was about <strong>positioning Knight Frank as the trusted advisor</strong> for significant property decisions. The copy needed to feel personal, expert, and valuable.
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
              Sophisticated, insights-driven direct mail that positions Knight Frank as market experts, not just property agents.
            </p>

            <div className="space-y-12">
              {/* Strategy */}
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">1. Lead with Market Intelligence</h3>
                <p className="text-gray-700 mb-4">
                  Instead of "we have properties to sell," led with valuable market insights and data that recipients couldn't get elsewhere. Positioned Knight Frank as the source of truth for property intelligence.
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Opening Hook Example:</p>
                  <p className="text-base text-gray-700 mb-4">
                    "Your property's value increased 12.3% last year. Here's what that means for your portfolio in 2024."
                  </p>
                  <p className="text-xs text-gray-500">
                    ↑ Leads with personalized data, not a sales pitch
                  </p>
                </div>
              </div>

              {/* Personalization */}
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">2. Hyper-Local Personalization</h3>
                <p className="text-gray-700 mb-4">
                  Created modular copy templates that allowed Knight Frank's regional teams to insert local market data, neighborhood insights, and area-specific opportunities while maintaining the core message.
                </p>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-amber-200 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">National Framework</p>
                    <p className="text-sm text-gray-700">"The UK property market is shifting. Here's what it means for [AREA]..."</p>
                  </div>
                  <div className="bg-white border-2 border-amber-200 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">Local Insert</p>
                    <p className="text-sm text-gray-700">"In Kensington, average property values rose 8.2% while inventory dropped 15%. This creates unique opportunities for sellers."</p>
                  </div>
                </div>
              </div>

              {/* Multi-Touch Series */}
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">3. Multi-Touch Nurture Sequence</h3>
                <p className="text-gray-700 mb-4">
                  Developed a 3-piece direct mail series that built trust over time instead of asking for the sale immediately:
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Piece 1: Market Insights</p>
                    <p className="text-sm text-gray-600">Establishes Knight Frank as data-driven experts. No ask, just value.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Piece 2: Neighborhood Analysis</p>
                    <p className="text-sm text-gray-600">Personalized analysis of their specific area with comparable sales data.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Piece 3: Invitation to Consultation</p>
                    <p className="text-sm text-gray-600">Soft CTA: "Want to discuss your property's potential? Here's my direct line."</p>
                  </div>
                </div>
              </div>

              {/* Tone & Style */}
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">4. Premium But Approachable Tone</h3>
                <p className="text-gray-700 mb-4">
                  Wrote in a voice that conveys expertise and sophistication without feeling distant or corporate. Think "trusted advisor" rather than "luxury salesperson."
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Tone Principles:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">✓</span>
                      <span>Confident but not arrogant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">✓</span>
                      <span>Data-driven but human</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">✓</span>
                      <span>Premium but accessible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600">✓</span>
                      <span>Advisory, not pushy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Design Collaboration */}
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">5. Copy-Design Integration</h3>
                <p className="text-gray-700 mb-4">
                  Worked closely with Knight Frank's design team to ensure copy and visual elements enhanced each other. Used short, impactful headlines paired with data visualizations to make complex market information scannable.
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
                '3-piece direct mail series copy',
                'Personalization framework',
                'Local market insert templates',
                'Headline variations (A/B testing)',
                'Call-to-action optimization',
                'Envelope teaser copy',
                'Response card messaging',
                'Tone of voice guidelines',
                'Regional adaptation templates',
                'Follow-up sequence copy',
              ].map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">📊 Lead with Value, Not Sales</h3>
                <p className="text-gray-700">
                  Market insights and data opened doors that traditional sales copy couldn't. High-net-worth individuals respond to expertise, not pitches.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🎯 Personalization at Scale</h3>
                <p className="text-gray-700">
                  Created modular templates that enabled hyper-local personalization while maintaining brand consistency across all Knight Frank regions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🏆 Premium Positioning Through Copy</h3>
                <p className="text-gray-700">
                  Tone and word choice communicated luxury and expertise without resorting to clichés or pretentious language common in high-end real estate marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need premium direct mail copy?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              I've helped global brands like Knight Frank create direct mail campaigns that break through to high-value audiences. Let's talk about your campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50" asChild>
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

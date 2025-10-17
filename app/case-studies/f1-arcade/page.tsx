import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = genMetadata({
  title: 'F1 Arcade Case Study - Dating Campaign Copywriting',
  description: 'How COMMA Studio helped F1 Arcade drive date night bookings with a November dating campaign. Multi-channel email and Meta ads for premium hospitality brand.',
  keywords: [
    'F1 Arcade copywriter',
    'dating campaign copywriting',
    'hospitality marketing',
    'event marketing copywriting',
    'performance copywriting case study',
  ],
  canonical: '/case-studies/f1-arcade',
})

export default function F1ArcadeCase() {
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
              Event Marketing • Hospitality • B2C
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              F1 Arcade
              <br />
              <span className="text-gray-400">Date in a New Gear Campaign</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A November dating campaign to position F1 Arcade as the ultimate date night destination. Multi-channel email and Meta ads driving bookings.
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
              <div className="text-2xl font-bold text-gray-900 mb-2">F1 Arcade</div>
              <div className="text-sm text-gray-600">Premium racing & hospitality venue</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Role</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Performance Copywriter</div>
              <div className="text-sm text-gray-600">Campaign messaging & ad copy</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Campaign</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">November 2024</div>
              <div className="text-sm text-gray-600">Dating-focused booking drive</div>
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
                F1 Arcade is a premium venue combining F1 racing simulators with high-end hospitality. But they needed to drive bookings during November—traditionally a quieter month for entertainment venues.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span>Position F1 Arcade as a unique date night destination (not just "boys' night out")</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span>Appeal to couples looking for something different than typical dinner dates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span>Drive immediate bookings with urgency and clear value proposition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span>Communicate the premium experience without alienating casual daters</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                The campaign needed to feel <strong>exciting and romantic</strong> while maintaining F1 Arcade's premium brand positioning. Plus, we had to educate prospects on what makes F1 Arcade different from traditional date venues.
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
              A playful, high-energy campaign that repositioned racing simulators as the perfect icebreaker for dates.
            </p>

            <div className="space-y-12">
              {/* Campaign Concept */}
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">Campaign Concept: "Date in a New Gear"</h3>
                <p className="text-gray-700 mb-4">
                  Created messaging that played on speed dating terminology while highlighting the unique experience. Positioned F1 Arcade as the antidote to boring dinner dates.
                </p>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Hero Headline:</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    "A new kind of speed dating"
                  </p>
                  <p className="text-sm text-gray-600 mb-2">Supporting Copy:</p>
                  <p className="text-base text-gray-700">
                    "Forget awkward silences over dinner. Race each other on world-class F1 simulators, enjoy premium drinks, and actually have fun on your date."
                  </p>
                </div>
              </div>

              {/* Email Campaign */}
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">1. Email Marketing Campaign</h3>
                <p className="text-gray-700 mb-4">
                  Multi-touch email sequence targeting existing customers and prospects. Emails focused on the experience: competitive fun, premium atmosphere, and unforgettable memories.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Email 1: The Hook</p>
                    <p className="text-sm text-gray-600">Subject: "Your next date just got faster ⚡"</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Email 2: The Experience</p>
                    <p className="text-sm text-gray-600">Subject: "Dinner & drinks? Try racing & champagne 🏎️"</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Email 3: Urgency</p>
                    <p className="text-sm text-gray-600">Subject: "Book your date night before November ends"</p>
                  </div>
                </div>
              </div>

              {/* Meta Ads */}
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">2. Meta Advertising Campaign</h3>
                <p className="text-gray-700 mb-4">
                  Created multiple ad variations testing different angles: competitive couples, romantic experiences, and group dates. All ads emphasized the unique "racing + hospitality" combination.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">Ad Angle 1: Competition</p>
                    <p className="text-sm text-gray-700">"See who's fastest. Loser buys drinks. 🏆"</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">Ad Angle 2: Romance</p>
                    <p className="text-sm text-gray-700">"Heart racing. Adrenaline pumping. Champagne flowing."</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">Ad Angle 3: Experience</p>
                    <p className="text-sm text-gray-700">"This isn't dinner and a movie. This is dinner and 200mph."</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-2">Ad Angle 4: Anti-Boring</p>
                    <p className="text-sm text-gray-700">"Awkward first date? Not when you're both doing 200mph."</p>
                  </div>
                </div>
              </div>

              {/* Messaging Framework */}
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">3. Messaging Framework</h3>
                <p className="text-gray-700 mb-4">
                  Developed a consistent voice across all channels: playful, confident, premium without being pretentious. Key themes included competition, shared experiences, and breaking date night norms.
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
                'Campaign concept & positioning',
                'Email sequence (3 emails)',
                'Email subject lines (15+ variations)',
                'Meta ad copy (8+ variations)',
                'Landing page headlines',
                'CTA optimization',
                'Audience segmentation messaging',
                'Brand voice guidelines',
              ].map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
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
            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <div className="mb-4">
                  <span className="text-4xl text-red-600">"</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Cain is a fantastic support to our team. Reliable, fast and most importantly, creative and insightful at responding to our briefs.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold">
                    KT
                  </div>
                  <div>
                    <p className="font-semibold">Kerry Taylor</p>
                    <p className="text-sm text-gray-600">CMO, F1 Arcade</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🎯 Repositioning Through Copy</h3>
                <p className="text-gray-700">
                  Transformed perception from "boys' night out" venue to romantic date destination through strategic messaging and playful tone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">💡 Breaking Category Norms</h3>
                <p className="text-gray-700">
                  Positioned racing simulators as a date night activity by emphasizing shared experience, competition, and premium hospitality over technical specs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🚀 Multi-Channel Consistency</h3>
                <p className="text-gray-700">
                  Maintained consistent voice and messaging across email and Meta ads while optimizing for each platform's unique format and audience behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a campaign copywriter?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              I've helped brands like F1 Arcade, Loop Earplugs, and Huel create campaigns that drive bookings and conversions. Let's talk about your campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-700 hover:bg-red-50" asChild>
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

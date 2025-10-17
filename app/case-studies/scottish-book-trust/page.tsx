import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Scottish Book Trust Case Study - Donation Campaign Copywriting',
  description: 'How COMMA Studio helped Scottish Book Trust create an emotional donation campaign that drove contributions for literacy programs across Scotland.',
  keywords: [
    'Scottish Book Trust copywriter',
    'charity copywriting',
    'donation campaign copywriting',
    'nonprofit marketing',
    'fundraising copywriting',
  ],
  canonical: '/case-studies/scottish-book-trust',
})

export default function ScottishBookTrustCase() {
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
              Nonprofit • Donation Campaign • B2C
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scottish Book Trust
              <br />
              <span className="text-gray-400">Donation Campaign</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Creating an emotional fundraising campaign to support literacy programs for children across Scotland—turning awareness into action.
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
              <div className="text-2xl font-bold text-gray-900 mb-2">Scottish Book Trust</div>
              <div className="text-sm text-gray-600">National literacy charity</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Role</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Fundraising Copywriter</div>
              <div className="text-sm text-gray-600">Donation campaign messaging</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Campaign</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Multi-Channel Drive</div>
              <div className="text-sm text-gray-600">Email, web, social media</div>
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
                Scottish Book Trust needed to raise funds for their literacy programs at a time when donor fatigue was high and competition for charitable donations was fierce.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Stand out in inboxes flooded with charity appeals during giving season</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Connect emotionally with donors without resorting to guilt or manipulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Clearly communicate impact—how donations directly help children learn to read</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Appeal to different donor segments (one-time givers, recurring donors, major donors)</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                The campaign needed to inspire action quickly while building long-term donor relationships. It wasn't just about raising money—it was about <strong>making people feel part of something meaningful</strong>.
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
              Story-driven fundraising that showed real impact and made donors the hero of the story.
            </p>

            <div className="space-y-12">
              {/* Campaign Theme */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">1. Campaign Theme: "Every Story Starts Here"</h3>
                <p className="text-gray-700 mb-4">
                  Created a unifying message that positioned donations as the beginning of a child's reading journey—not just funding programs, but unlocking futures.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Hero Message:</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    "Every child deserves a story. You can write the first chapter."
                  </p>
                  <p className="text-sm text-gray-600 mb-2">Supporting Copy:</p>
                  <p className="text-base text-gray-700">
                    "Your donation doesn't just buy books. It opens doors. Builds confidence. Creates futures. Help us bring the joy of reading to every child in Scotland."
                  </p>
                </div>
              </div>

              {/* Email Sequence */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">2. Multi-Email Fundraising Sequence</h3>
                <p className="text-gray-700 mb-4">
                  Developed a 4-email series that built emotional connection, demonstrated impact, created urgency, and closed with a final appeal:
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Email 1: The Story (Emotional Hook)</p>
                    <p className="text-xs text-gray-600 mb-2">Subject: "Meet Sophie. She couldn't read her own name."</p>
                    <p className="text-sm text-gray-700">Opens with a child's real story (anonymized), creates empathy</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Email 2: The Impact (Proof)</p>
                    <p className="text-xs text-gray-600 mb-2">Subject: "£20 = 10 books. Here's what happens next."</p>
                    <p className="text-sm text-gray-700">Shows tangible outcomes, breaks down donation amounts</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Email 3: The Urgency (Limited Time)</p>
                    <p className="text-xs text-gray-600 mb-2">Subject: "3 days left to change a child's life"</p>
                    <p className="text-sm text-gray-700">Creates deadline, emphasizes immediate action</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold text-sm mb-1">Email 4: The Final Push (Last Chance)</p>
                    <p className="text-xs text-gray-600 mb-2">Subject: "This is your last chance (and theirs)"</p>
                    <p className="text-sm text-gray-700">Final emotional appeal with social proof</p>
                  </div>
                </div>
              </div>

              {/* Impact Visualization */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">3. Tangible Impact Breakdown</h3>
                <p className="text-gray-700 mb-4">
                  Made donations concrete by showing exactly what each amount provides—removing ambiguity and making giving feel more impactful:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-2">£10</p>
                    <p className="text-sm text-gray-700">Provides 5 books for a primary school classroom</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-2">£25</p>
                    <p className="text-sm text-gray-700">Funds a one-on-one reading session with a trained tutor</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-2">£50</p>
                    <p className="text-sm text-gray-700">Supports a full literacy workshop for 20 children</p>
                  </div>
                </div>
              </div>

              {/* Landing Page */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">4. Donation Landing Page</h3>
                <p className="text-gray-700 mb-4">
                  Created a conversion-focused landing page with clear messaging, emotional storytelling, social proof, and minimal friction to donate:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">→</span>
                    <span><strong>Hero:</strong> Emotional headline with child photo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">→</span>
                    <span><strong>Impact section:</strong> Donation amount breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">→</span>
                    <span><strong>Social proof:</strong> "Join 2,000+ supporters changing lives"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">→</span>
                    <span><strong>CTA:</strong> "Give the gift of reading today"</span>
                  </li>
                </ul>
              </div>

              {/* Thank You Journey */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">5. Post-Donation Thank You Sequence</h3>
                <p className="text-gray-700 mb-4">
                  Wrote follow-up emails that thanked donors, showed them the ongoing impact of their gift, and nurtured them toward recurring donations. Made them feel like heroes, not just transaction numbers.
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
                'Campaign theme & messaging framework',
                '4-email fundraising sequence',
                'Email subject line variations (20+)',
                'Donation landing page copy',
                'Impact breakdown messaging',
                'Social media post copy',
                'Thank you email sequence',
                'Recurring donation upsell copy',
                'CTA optimization',
                'Donor segmentation messaging',
              ].map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">❤️ Emotion + Logic = Action</h3>
                <p className="text-gray-700">
                  Led with emotional storytelling to create connection, then backed it up with concrete impact data to justify the donation decision.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">💡 Make Impact Tangible</h3>
                <p className="text-gray-700">
                  Breaking down donation amounts into specific outcomes (£10 = 5 books) made giving feel more meaningful and removed uncertainty about where money goes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🔄 Donor Journey Design</h3>
                <p className="text-gray-700">
                  Created a complete journey from first email to thank you—treating donors like valued partners, not just funding sources. Built foundation for long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need fundraising copywriting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              I've helped nonprofits like Scottish Book Trust create campaigns that inspire action and build lasting donor relationships. Let's talk about your campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
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

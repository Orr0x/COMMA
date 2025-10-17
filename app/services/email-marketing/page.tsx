import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, Users, Repeat } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Email Marketing Copywriting Services',
  description: 'Email sequences that convert subscribers into customers. From welcome flows to product launches, I write emails that get opened, read, and clicked.',
  keywords: [
    'email copywriter',
    'email marketing copywriting',
    'email sequence writer',
    'newsletter copywriting',
    'e-commerce email copywriter',
  ],
  canonical: '/services/email-marketing',
})

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Email Marketing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emails That Get Opened, Read & Clicked
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Your email list is your most valuable asset. I write email copy that turns subscribers into customers—and customers into repeat buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
                <Link href="/#contact">
                  Get Your Email Copy <ArrowRight className="ml-2 w-5 h-5" />
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
                Email Copy That Converts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From welcome sequences to product launches, I write emails that build relationships and drive revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Automated Sequences</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Welcome series (3-7 emails)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Post-purchase nurture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Abandoned cart recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Re-engagement campaigns</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Broadcast Emails</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Product launch campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Promotional emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Seasonal campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Event/webinar invites</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Repeat className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Subject Lines & Testing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>20+ subject line variations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Preview text optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>A/B test concepts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>CTA optimization</span>
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
              How I Write Emails That Work
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Hook Them in the Subject Line</h3>
                  <p className="text-gray-700 leading-relaxed">
                    50% of email success is getting opened. I write subject lines that create curiosity, urgency, or clear value—no clickbait, just compelling hooks.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Write Like a Human</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nobody wants to read corporate email templates. I write conversational, engaging emails that sound like they're from a real person—because they are.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Focus on One Goal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every email should do one thing: get the reader to click. I keep emails focused, scannable, and action-oriented.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Build a Journey</h3>
                  <p className="text-gray-700 leading-relaxed">
                    One email rarely closes the sale. I design multi-email sequences that build trust, educate, and move people toward purchase.
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
              Email Campaigns I've Written
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-purple-600 to-purple-800"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-purple-50 text-purple-600 border-0">
                    Product Launch
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Loop Earplugs</h3>
                  <p className="text-gray-700 mb-6">
                    Multi-email product launch sequence for Loop Engage Kids. Teaser, launch, and post-launch nurture emails.
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
                    Event Campaign
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">F1 Arcade</h3>
                  <p className="text-gray-700 mb-6">
                    3-email series for November dating campaign driving bookings for date night experiences.
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

      {/* Email Types */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Types of Emails I Write
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Welcome Series</h3>
                <p className="text-sm text-gray-700">Introduce new subscribers to your brand and convert them into first-time buyers.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Product Launch</h3>
                <p className="text-sm text-gray-700">Build hype and drive sales for new product releases with multi-touch campaigns.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Abandoned Cart</h3>
                <p className="text-sm text-gray-700">Recover lost revenue by reminding customers what they left behind.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Post-Purchase</h3>
                <p className="text-sm text-gray-700">Turn one-time buyers into repeat customers with smart follow-up sequences.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Re-Engagement</h3>
                <p className="text-sm text-gray-700">Win back inactive subscribers before they forget about you.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Promotional</h3>
                <p className="text-sm text-gray-700">Drive sales during key periods (Black Friday, seasonal sales, flash deals).</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Newsletters</h3>
                <p className="text-sm text-gray-700">Keep your audience engaged with valuable content that builds long-term loyalty.</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Fundraising</h3>
                <p className="text-sm text-gray-700">Drive donations for nonprofits with emotional, impact-focused email campaigns.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to turn your email list into revenue?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's talk about your email marketing. I'll help you create sequences that convert.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
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

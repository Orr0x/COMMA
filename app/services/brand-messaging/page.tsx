import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageSquare, Lightbulb, BookOpen } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Brand Messaging & Voice Development Services',
  description: 'Define your brand voice and messaging framework. I help brands find their unique voice and communicate it consistently across all channels.',
  keywords: [
    'brand messaging copywriter',
    'brand voice development',
    'messaging framework',
    'brand positioning copywriting',
    'voice and tone guidelines',
  ],
  canonical: '/services/brand-messaging',
})

export default function BrandMessagingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Brand Messaging
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Voice. Own Your Message.
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed mb-8">
              Most brands sound like everyone else. I help you define a unique brand voice and messaging framework that makes you memorable—then give you the tools to use it everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50" asChild>
                <Link href="/#contact">
                  Define Your Voice <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/case-studies/yugen-agency">View Messaging Case Study</Link>
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
                Strategic Messaging That Differentiates
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From positioning to voice guidelines, I create messaging frameworks that make your brand distinct and consistent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Brand Voice Development</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Voice discovery workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Tone & personality definition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Voice guidelines documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Do's and don'ts examples</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Messaging Framework</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Value proposition development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Core messaging pillars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Positioning statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Key differentiators</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Implementation Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Copy templates for key formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Messaging library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Style guide integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Team training materials</span>
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
              How I Define Brand Voice
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Discovery: Understand What Makes You Different</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I start with deep interviews to understand your brand's values, audience, and competitive landscape. What makes you different isn't always what you think—discovery reveals the truth.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Definition: Articulate Your Unique Voice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I translate insights into a clear brand voice—the personality, tone, and language that makes you sound like you. Not generic corporate speak, but authentic and ownable.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Documentation: Create Practical Guidelines</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Voice without guidelines is useless. I create practical documentation with real examples, templates, and do's/don'ts that anyone on your team can follow.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Application: Write Real Copy That Works</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Theory is meaningless without execution. I apply the voice to real assets—website copy, emails, ads—proving the voice works in practice, not just on paper.
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
              Brand Voice Projects I've Led
            </h2>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-indigo-600 to-indigo-800"></div>
                <div className="p-8">
                  <Badge className="mb-4 bg-indigo-50 text-indigo-600 border-0">
                    Creative Agency Rebrand
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">Yugen Agency</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Complete brand voice development and website rewrite for creative agency. Defined philosophy-driven positioning around Japanese concept of "Yugen" (profound grace and subtlety). Created voice guidelines and rewrote all core website pages to differentiate in crowded market.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-indigo-50 rounded">
                      <div className="font-bold text-2xl text-indigo-600">3</div>
                      <div className="text-sm text-gray-600">Brand Pillars</div>
                    </div>
                    <div className="text-center p-4 bg-indigo-50 rounded">
                      <div className="font-bold text-2xl text-indigo-600">5</div>
                      <div className="text-sm text-gray-600">Pages Rewritten</div>
                    </div>
                    <div className="text-center p-4 bg-indigo-50 rounded">
                      <div className="font-bold text-2xl text-indigo-600">1</div>
                      <div className="text-sm text-gray-600">Voice Guide</div>
                    </div>
                  </div>
                  <Link href="/case-studies/yugen-agency">
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

      {/* What You Get */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              What a Brand Voice Project Includes
            </h2>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Brand Voice Definition</h3>
                <p className="text-sm text-gray-700 mb-3">Complete personality, tone, and language guidelines that define your unique voice.</p>
                <div className="text-xs text-gray-600">Includes: Voice attributes, tone spectrum, language preferences</div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Messaging Framework</h3>
                <p className="text-sm text-gray-700 mb-3">Core messages, positioning statements, and value propositions that guide all communications.</p>
                <div className="text-xs text-gray-600">Includes: Positioning statement, 3-5 messaging pillars, key differentiators</div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Voice Guidelines Document</h3>
                <p className="text-sm text-gray-700 mb-3">Practical documentation with real examples, do's/don'ts, and templates.</p>
                <div className="text-xs text-gray-600">Includes: 10-15 page guide with examples for emails, web, social, ads</div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Applied Copy Examples</h3>
                <p className="text-sm text-gray-700 mb-3">Real copy written in your new voice to prove it works in practice.</p>
                <div className="text-xs text-gray-600">Includes: Homepage rewrite, email examples, social post templates</div>
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
                <h3 className="text-xl font-bold mb-3">✓ Rebranding Companies</h3>
                <p className="text-gray-700">
                  You're refreshing your brand and need a voice that reflects who you are today.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Growing Startups</h3>
                <p className="text-gray-700">
                  You've been winging it—now you need consistent messaging as you scale.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Agencies & Creative Firms</h3>
                <p className="text-gray-700">
                  You help clients with brand work but haven't defined your own voice.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Brands That Sound Generic</h3>
                <p className="text-gray-700">
                  Your copy sounds like everyone else's—you need differentiation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to define your brand voice?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's talk about your brand. I'll help you find a voice that's uniquely yours.
            </p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50" asChild>
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

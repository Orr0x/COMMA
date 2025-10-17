import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = genMetadata({
  title: 'Airhive Case Study - Website Launch Copywriting',
  description: 'How COMMA Studio helped Airhive launch their B2B SaaS website with conversion-focused copy that explains complex air quality technology simply.',
  keywords: [
    'Airhive copywriter',
    'B2B SaaS copywriting',
    'website launch copywriting',
    'tech startup copywriting',
    'air quality marketing',
  ],
  canonical: '/case-studies/airhive',
})

export default function AirhiveCase() {
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
              B2B SaaS • Website Launch • Tech Startup
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Airhive
              <br />
              <span className="text-gray-400">Website Launch & Messaging</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Launching a B2B SaaS platform with website copy that makes complex air quality technology accessible to facilities managers and building owners.
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
              <div className="text-2xl font-bold text-gray-900 mb-2">Airhive</div>
              <div className="text-sm text-gray-600">Air quality monitoring SaaS platform</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Role</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Website Copywriter</div>
              <div className="text-sm text-gray-600">Full site copy & messaging framework</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-gray-500 mb-2">Project Type</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Website Launch</div>
              <div className="text-sm text-gray-600">From scratch to live site</div>
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
                Airhive had groundbreaking technology for monitoring and improving air quality in commercial buildings. But they had no website, no clear messaging, and a complex product that was hard to explain.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Explain complex IoT sensors and air quality data in language facilities managers understand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Position Airhive against established competitors with bigger budgets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Balance technical credibility with accessibility for non-technical buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Create messaging that works for multiple stakeholders (facilities managers, building owners, sustainability teams)</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                This wasn't just about writing website copy—it was about <strong>defining what Airhive stands for</strong> and creating a messaging framework for all future marketing.
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
              Benefits-first copy that translated technical features into business outcomes.
            </p>

            <div className="space-y-12">
              {/* Homepage */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">1. Homepage Hero & Messaging</h3>
                <p className="text-gray-700 mb-4">
                  Created a clear value proposition that immediately communicates what Airhive does and why it matters—without requiring technical knowledge.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Hero Headline:</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    "See the air. Improve it. Prove it."
                  </p>
                  <p className="text-sm text-gray-600 mb-2">Supporting Copy:</p>
                  <p className="text-base text-gray-700">
                    "Airhive gives you real-time insights into your building's air quality—so you can create healthier spaces, reduce energy costs, and meet ESG targets."
                  </p>
                </div>
              </div>

              {/* Messaging Framework */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">2. Core Messaging Framework</h3>
                <p className="text-gray-700 mb-4">
                  Developed a three-pillar messaging structure that connects to different stakeholder priorities:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-green-200 p-4 rounded">
                    <div className="text-2xl mb-2">🏢</div>
                    <p className="font-semibold text-sm mb-2">For Facilities Managers</p>
                    <p className="text-xs text-gray-600">"Maintain healthier buildings with less guesswork"</p>
                  </div>
                  <div className="bg-white border-2 border-green-200 p-4 rounded">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="font-semibold text-sm mb-2">For Building Owners</p>
                    <p className="text-xs text-gray-600">"Reduce energy costs while improving tenant satisfaction"</p>
                  </div>
                  <div className="bg-white border-2 border-green-200 p-4 rounded">
                    <div className="text-2xl mb-2">🌍</div>
                    <p className="font-semibold text-sm mb-2">For Sustainability Teams</p>
                    <p className="text-xs text-gray-600">"Track and report ESG progress with data-backed proof"</p>
                  </div>
                </div>
              </div>

              {/* Features to Benefits */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">3. Features → Benefits Translation</h3>
                <p className="text-gray-700 mb-4">
                  Rewrote technical feature descriptions to focus on outcomes, not specs. Every feature now answers "so what?" for the customer.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-xs text-gray-500 mb-1">BEFORE: Technical jargon</p>
                    <p className="text-sm text-gray-600 line-through">"IoT-enabled PM2.5 and CO2 sensors with cloud-based analytics dashboard"</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-xs text-gray-500 mb-1">AFTER: Business outcome</p>
                    <p className="text-sm text-gray-900">"Know exactly when air quality drops—and fix it before tenants complain"</p>
                  </div>
                </div>
              </div>

              {/* Page Structure */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">4. Complete Website Structure</h3>
                <p className="text-gray-700 mb-4">
                  Wrote copy for all core pages with clear user journeys and conversion paths:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Homepage:</strong> Value prop, how it works, social proof, demo CTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Product Page:</strong> Feature breakdowns with benefits, use cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>About Page:</strong> Mission, team credentials, why Airhive exists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">→</span>
                    <span><strong>Contact/Demo Pages:</strong> Low-friction CTAs with clear next steps</span>
                  </li>
                </ul>
              </div>

              {/* SEO Strategy */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-4">5. SEO-Optimized Copy</h3>
                <p className="text-gray-700 mb-4">
                  Integrated target keywords naturally throughout the site without sacrificing readability. Focused on high-intent search terms like "air quality monitoring for buildings" and "commercial IAQ sensors."
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
                'Homepage copy (hero, features, benefits, CTAs)',
                'Product page copy',
                'About page copy',
                'Contact/demo page copy',
                'Core messaging framework',
                'Value proposition development',
                'Feature-to-benefit translations',
                'SEO keyword integration',
                'Brand voice guidelines',
                'Competitor differentiation messaging',
              ].map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🎯 Benefits Over Features</h3>
                <p className="text-gray-700">
                  Transformed technical IoT jargon into clear business outcomes. Every feature now connects to a real problem that facilities managers face daily.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">👥 Multi-Stakeholder Messaging</h3>
                <p className="text-gray-700">
                  Created messaging that speaks to three different buyer personas simultaneously without diluting the core value proposition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">🚀 Foundation for Growth</h3>
                <p className="text-gray-700">
                  Built a messaging framework that Airhive now uses across all marketing—from sales decks to LinkedIn posts to email campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Launching a B2B SaaS product?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              I've helped tech startups like Airhive launch with clarity and confidence. Let's talk about your website launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" asChild>
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

import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, Award, Users, TrendingUp, Heart } from 'lucide-react'

export const metadata = genMetadata({
  title: 'About Cain Lewis - B2B Copywriter',
  description: 'B2B copywriter with 6+ years experience. Trusted by £120M+ brands like Loop Earplugs, F1 Arcade, and Huel. 44 LinkedIn recommendations, 10K+ followers.',
  keywords: [
    'Cain Lewis',
    'about Cain Lewis',
    'copywriter background',
    'B2B copywriter UK',
    'copywriting experience',
    'Midlands Marketing Awards',
  ],
  canonical: '/about',
})

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Hi, I'm Cain Lewis
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Freelance Copywriter
              <br />
              <span className="text-purple-200">For Feel-Good Brands</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
              I'm a freelance creative copywriter passionate about connecting brands to their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                My work has helped build <strong>£120M+ e-commerce giants like Loop Earplugs</strong>, secure critical investments for tech startups, and given a new voice to brands that have lost their way.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Over the past 6+ years, I've worked with feel-good brands—the ones building something worth talking about. From health and wellness companies like Huel, to innovative products like Loop Earplugs, to hospitality brands like F1 Arcade.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I don't do corporate jargon. I don't do waffle. I write copy that works as hard as you do—clear, compelling, and conversion-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">44</div>
                <div className="text-sm text-gray-600">LinkedIn Recommendations</div>
                <div className="text-xs text-gray-500 mt-1">5.0 ⭐⭐⭐⭐⭐ Average</div>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
                <div className="text-sm text-gray-600">LinkedIn Followers</div>
                <div className="text-xs text-gray-500 mt-1">Active Community</div>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">2,350%</div>
                <div className="text-sm text-gray-600">Conversion Increase</div>
                <div className="text-xs text-gray-500 mt-1">0.04% → 0.98% for clients</div>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
                <div className="text-sm text-gray-600">Feel-Good Brands</div>
                <div className="text-xs text-gray-500 mt-1">From startups to £120M+</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience & Background</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">📍 Based in Burton-on-Trent, UK</h3>
                  <p className="text-gray-600">Serving clients globally across UK, US, and EU</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🎯 6+ Years Marketing Experience</h3>
                  <p className="text-gray-600">From performance ads to brand storytelling, I've done it all</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">🏆 Midlands Marketing Awards 2024</h3>
                  <p className="text-gray-600">Attended and networked with the region's top marketers</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">💼 Loop Earplugs Lead Copywriter</h3>
                  <p className="text-gray-600">Worked with the team for 1+ year on performance campaigns, UX, and product launches</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">📚 Community Educator</h3>
                  <p className="text-gray-600">Helped dozens of emerging copywriters start their careers with actionable feedback and mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Approach</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Strategic First</h3>
                <p className="text-gray-600">
                  Every word has a job to do. I don't just write—I strategize, then write copy that moves the needle.
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
                <p className="text-gray-600">
                  I back creativity with data. Every decision is informed by performance metrics and user behavior.
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Results-Focused</h3>
                <p className="text-gray-600">
                  My copy has driven 2,350% conversion increases and helped launch £2M+ products. Results matter.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to See Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to see what's possible?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's talk about your project. No sales pitch. No corporate waffle. Just an honest chat about whether we're a good fit.
            </p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50" asChild>
              <Link href="/#contact">
                Let's Talk <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

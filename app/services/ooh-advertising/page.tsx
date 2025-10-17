import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Eye, MapPin, Bus } from 'lucide-react'

export const metadata = genMetadata({
  title: 'OOH Advertising Copywriting Services',
  description: 'Billboard, poster, and out-of-home copywriting that stops people in their tracks. I write OOH ads that make an impact in seconds.',
  keywords: [
    'OOH copywriter',
    'out-of-home advertising copywriter',
    'billboard copywriting',
    'poster copywriting',
    'transit advertising copy',
  ],
  canonical: '/services/ooh-advertising',
})

export default function OOHAdvertisingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-600 via-pink-700 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              OOH Advertising
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Copy That Stops Traffic
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 leading-relaxed mb-8">
              You have 3 seconds. Maybe less. I write OOH copy that cuts through the noise—billboards, posters, transit ads that make people stop, stare, and remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50" asChild>
                <Link href="/#contact">
                  Get Your OOH Copy <ArrowRight className="ml-2 w-5 h-5" />
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
                Big, Bold, Impossible to Ignore
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From billboards to bus shelters, I write OOH copy that makes an impact in the time it takes to glance at your phone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Static OOH</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Billboards (6-sheet to 96-sheet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Poster campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Bus shelter ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Street furniture</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <Bus className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transit Advertising</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Bus sides & backs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Tube/metro ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Train station posters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Taxi/rideshare ads</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Digital & Experiential</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Digital billboards (DOOH)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Animated sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Interactive installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span>Guerrilla marketing copy</span>
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
              How I Write OOH That Works
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Brevity Is Everything</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nobody has time to read paragraphs on a billboard. I write OOH copy that delivers maximum impact in 7 words or less. Every word earns its place.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Make It Memorable</h3>
                  <p className="text-gray-700 leading-relaxed">
                    OOH is about brand recall, not immediate conversion. I write copy that sticks in people's heads—clever wordplay, bold statements, unexpected angles.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Visual-Copy Synergy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Great OOH is 50% visual, 50% copy. I work with designers to ensure the copy and image work together—each making the other stronger.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Context Matters</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A billboard on a highway needs different copy than a poster in a train station. I tailor OOH copy to where it's seen and how long people have to read it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OOH Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              The Rules of Great OOH Copy
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-pink-600">
                <h3 className="text-lg font-bold mb-2 text-pink-600">Keep It Short</h3>
                <p className="text-sm text-gray-700">5-7 words maximum. If it takes longer than 3 seconds to read, it's too long.</p>
              </Card>

              <Card className="p-6 border-l-4 border-pink-600">
                <h3 className="text-lg font-bold mb-2 text-pink-600">Make It Bold</h3>
                <p className="text-sm text-gray-700">OOH isn't the place for subtle. Be brave. Be direct. Be impossible to ignore.</p>
              </Card>

              <Card className="p-6 border-l-4 border-pink-600">
                <h3 className="text-lg font-bold mb-2 text-pink-600">One Clear Message</h3>
                <p className="text-sm text-gray-700">Don't try to say everything. Pick one message and say it powerfully.</p>
              </Card>

              <Card className="p-6 border-l-4 border-pink-600">
                <h3 className="text-lg font-bold mb-2 text-pink-600">Think Big Picture</h3>
                <p className="text-sm text-gray-700">OOH is about brand building, not immediate clicks. Focus on recall and impact.</p>
              </Card>

              <Card className="p-6 border-l-4 border-pink-600">
                <h3 className="text-lg font-bold mb-2 text-pink-600">Work With Design</h3>
                <p className="text-sm text-gray-700">Copy and visuals should be inseparable. Neither works without the other.</p>
              </Card>

              <Card className="p-6 border-l-4 border-pink-600">
                <h3 className="text-lg font-bold mb-2 text-pink-600">Be Contextual</h3>
                <p className="text-sm text-gray-700">Where it's seen matters. Highway billboards need different copy than bus stops.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              OOH Copy Formats
            </h2>

            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Large Format Billboard</h3>
                <p className="text-sm text-gray-700 mb-3">Highway-visible, maximum 5 words, bold statement.</p>
                <div className="bg-pink-100 p-4 rounded text-center">
                  <p className="text-2xl font-bold text-gray-900">"Your Commute Just Got Quieter"</p>
                  <p className="text-xs text-gray-600 mt-2">↑ Product benefit, minimal words, immediate clarity</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Bus Shelter Poster</h3>
                <p className="text-sm text-gray-700 mb-3">More dwell time, can use 7-10 words with CTA or URL.</p>
                <div className="bg-pink-100 p-4 rounded text-center">
                  <p className="text-xl font-bold text-gray-900">"Racing Simulators + Champagne = Your Friday Night"</p>
                  <p className="text-xs text-gray-600 mt-2">↑ Longer format, unexpected combination, brand recall</p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Digital Billboard Sequence</h3>
                <p className="text-sm text-gray-700 mb-3">3-5 second rotation, can tell a mini story across frames.</p>
                <div className="bg-pink-100 p-4 rounded">
                  <p className="text-base font-bold text-gray-900 mb-2">Frame 1: "Can't focus."</p>
                  <p className="text-base font-bold text-gray-900 mb-2">Frame 2: "Can't sleep."</p>
                  <p className="text-base font-bold text-gray-900">Frame 3: "Can we help? Loop Earplugs."</p>
                  <p className="text-xs text-gray-600 mt-3">↑ Sequential storytelling, builds intrigue</p>
                </div>
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
                <h3 className="text-xl font-bold mb-3">✓ Brand Campaigns</h3>
                <p className="text-gray-700">
                  You're running a brand awareness campaign and need OOH that makes an impact.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Product Launches</h3>
                <p className="text-gray-700">
                  You're launching a product and want OOH to build buzz and visibility.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Local Businesses</h3>
                <p className="text-gray-700">
                  You're targeting a specific geographic area with bus shelters or local posters.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">✓ Creative Agencies</h3>
                <p className="text-gray-700">
                  You're designing OOH campaigns for clients and need punchy copywriting.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to stop traffic?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Let's talk about your OOH campaign. I'll help you create copy that's impossible to ignore.
            </p>
            <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50" asChild>
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

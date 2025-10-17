'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full animate-grid-move"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Trusted by Huel, Loop Earplugs & More
          </Badge>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Your Words Should Work
            <br />
            <span className="text-purple-200">As Hard As You Do</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            I turn complex offerings into clear, compelling copy that your customers
            actually understand—and buy. Trusted by feel-good brands building something
            worth talking about.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href="#contact">
                Get Copy That Converts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
              asChild
            >
              <Link href="#case-studies">See Real Results</Link>
            </Button>
          </div>

          {/* Social proof bullets */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center text-purple-100 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <span>44 LinkedIn Recommendations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <span>10,000+ Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <span>0.04% → 0.98% Conversions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <span>£120M+ Brands Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

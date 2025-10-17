import { Card } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'

// Static fallback testimonials
const staticTestimonials = [
  {
    quote: "I'm hesitant to give this rec because I want Cain to give me even more hours and not have anyone else work with him. He understood our complicated audience landscape in hours and provided value from day one. I get praised at work for finding such a standout freelancer.",
    author: 'Molly Aviva',
    role: 'Director of Marketing Strategy',
    company: 'Navan',
    initials: 'MA',
  },
  {
    quote: "The first time I worked with Cain, I felt like I'd worked with him forever. He took the time to understand what was in my head and translated it into perfect landing page, email and ad copy - which led to an increase in conversions from 0.04% to 0.98%!",
    author: 'Emma Glover',
    role: 'Marketing Strategist',
    company: 'Victress',
    initials: 'EG',
  },
  {
    quote: "Cain was the first person I brought at Loop as a performance copywriter. His approach, understanding, and practicality makes him a great teammate. He also has a vision of performance that doesn't dilute quality—something important to high-end brands.",
    author: 'Alex Aráez',
    role: 'Creative Director',
    company: 'Loop Earplugs',
    initials: 'AA',
  },
  {
    quote: "Cain is a really talented copywriter who not only crafts compelling, conversion-driven content but also ensures every decision is backed by data. He consistently meets deadlines, follows up proactively, and always seeks feedback to refine his work.",
    author: 'Brina Skof',
    role: 'Marketing | CRM',
    company: 'Loop Earplugs',
    initials: 'BS',
  },
  {
    quote: "Cain did an absolutely incredible job re-voicing our brand! The new messaging is night and day compared to what we had before and we couldn't be happier with the way it turned out.",
    author: 'Matthew Kitchen',
    role: 'CEO & Founder',
    company: 'Vinny',
    initials: 'MK',
  },
  {
    quote: "Without having much of an idea of tone or feel, Cain pulled together some amazing copy that really hit the nail on the head for us. We were truly blown away by the work he did.",
    author: 'Oscar Lie',
    role: 'Co-founder',
    company: 'Homebound',
    initials: 'OL',
  },
  {
    quote: "Cain is a fantastic support to our team. Reliable, fast and most importantly, creative and insightful at responding to our briefs.",
    author: 'Kerry Taylor',
    role: 'CMO',
    company: 'F1 Arcade',
    initials: 'KT',
  },
  {
    quote: "Cain was brilliant when re-writing our web copy. He went above and beyond just writing the words—he re-imagined how we could structure the site to make the copy really do its job. He's also just a really great guy.",
    author: 'Amy Gleave',
    role: 'Digital Marketing Manager',
    company: 'Dawn Creative',
    initials: 'AG',
  },
  {
    quote: "I AM a writer. And I've worked with a ton of copywriters. But I've never been able to even use what they've written... until Cain. He just gets things DONE.",
    author: 'Tara-Nicholle Kirke',
    role: 'Author & CMO',
    company: '100M+ Lives Changed',
    initials: 'TK',
  },
]

export async function Testimonials() {
  // Fetch published testimonials from database
  const dbTestimonials = await prisma.testimonial.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  // Transform database testimonials to match display format
  const dbTestimonialsFormatted = dbTestimonials.map(t => ({
    quote: t.content,
    author: t.name,
    role: t.role,
    company: t.company,
    initials: t.name.split(' ').map(n => n[0]).join(''),
  }))

  // Combine database and static testimonials
  const testimonials = [...dbTestimonialsFormatted, ...staticTestimonials]

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600">
            44 LinkedIn Recommendations • 5.0 ⭐⭐⭐⭐⭐ Average Rating
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <span className="text-6xl text-primary-500 leading-none">"</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-6">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Loop Earplugs', 'F1 Arcade', 'Huel', 'Knight Frank'].map((brand) => (
              <div key={brand} className="text-xl font-bold text-gray-400 hover:text-primary-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

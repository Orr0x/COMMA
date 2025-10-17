import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What types of copywriting do you specialize in?',
    answer: 'I focus on performance-driven copy across multiple channels: Meta & Google ads, email marketing (sequences & broadcasts), website copy (homepages, landing pages, product pages), product launches, brand messaging, and OOH advertising. Everything is optimized for conversion, not just creativity.',
  },
  {
    question: 'How do you charge for projects?',
    answer: 'It depends on the scope. Smaller projects (like ad copy or email sequences) are typically fixed-price. Larger projects (like full website rewrites or product launches) can be fixed-price or retainer-based. I\'ll send you a custom quote after our initial call where we discuss your needs.',
  },
  {
    question: 'What\'s your typical turnaround time?',
    answer: 'For ad copy or email sequences: 3-5 business days. For website copy or landing pages: 1-2 weeks. For full product launches: 2-4 weeks depending on complexity. Rush projects are available for an additional fee.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes. All projects include 2 rounds of revisions. Most clients don\'t need more than that, but if you do, additional revisions are available at an hourly rate. I want you to be happy with the final copy.',
  },
  {
    question: 'Can you work with my existing brand voice?',
    answer: 'Absolutely. If you have brand guidelines or an established voice, I\'ll match it. If you don\'t have clear guidelines yet, I can help define your voice as part of the project. I\'ve worked with brands ranging from playful and irreverent to corporate and professional.',
  },
  {
    question: 'Do you write in languages other than English?',
    answer: 'I write in English only. However, I\'ve worked with brands that translate my copy into other languages. I can structure the copy to make translation easier if needed.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'I\'ve worked across e-commerce, DTC, B2B SaaS, hospitality, nonprofits, and creative agencies. My approach is research-driven, so I can adapt to most industries. That said, I\'m strongest with consumer brands and tech companies.',
  },
  {
    question: 'Do you guarantee results?',
    answer: 'I can\'t guarantee specific metrics (open rates, conversion rates, etc.) because there are too many variables outside my control (offer, design, targeting, timing). What I can guarantee is copy that\'s strategically sound, audience-focused, and optimized based on proven frameworks. I\'ve consistently delivered results for brands like Loop Earplugs, F1 Arcade, and Huel.',
  },
  {
    question: 'Can you help with strategy, or just writing?',
    answer: 'Both. I don\'t just take briefs and write—I ask questions, challenge assumptions, and make strategic recommendations. For larger projects, strategy is built in. For example, a product launch includes positioning, messaging framework, and channel recommendations—not just the words.',
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'At minimum: (1) A clear goal (What are we trying to achieve?), (2) Audience info (Who are we talking to?), (3) Key product/service details, and (4) Any existing brand assets (voice guidelines, previous copy, competitor examples). The more context you give me, the better the copy will be.',
  },
  {
    question: 'Do you work with agencies?',
    answer: 'Yes! I work with marketing agencies who need copywriting support for their clients. I can work under your agency\'s brand (white-label) or be introduced as a specialist partner. I\'m used to working with creative teams and can adapt to your processes.',
  },
  {
    question: 'What if I need ongoing copywriting support?',
    answer: 'I offer monthly retainers for clients who need consistent copy support. This works well for brands launching multiple products, running ongoing ad campaigns, or needing regular email/blog content. Retainers give you dedicated capacity and priority turnaround.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-purple-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/#contact"
            className="text-purple-600 hover:text-purple-700 font-semibold hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  )
}

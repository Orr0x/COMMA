import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: '🎯',
    title: 'Performance Advertising',
    description: 'Ads that stop the scroll and drive action. From Meta to Google, I write performance copy that converts cold audiences into customers.',
    href: '/services/performance-advertising',
    clients: ['Navan', 'Huel', 'Loop Earplugs']
  },
  {
    icon: '📢',
    title: 'OOH & Retail Advertising',
    description: 'Billboards, posters, retail displays that grab attention in seconds. Big, bold copy that works at a glance.',
    href: '/services/ooh-advertising',
    clients: ['Huel', 'F1 Arcade']
  },
  {
    icon: '📧',
    title: 'Email & CRM Copywriting',
    description: 'Email sequences that people actually want to read. From welcome flows to retention campaigns, I write emails that build relationships and drive repeat purchases.',
    href: '/services/email-marketing',
    clients: ['Loop', 'F1 Arcade', 'Navan']
  },
  {
    icon: '✍️',
    title: 'Website & Landing Pages',
    description: 'Clear, conversion-focused copy that guides visitors from curiosity to customer. I work closely with designers to ensure the words actually get read.',
    href: '/services/website-copy',
    clients: ['Loop', 'Huel', 'Knight Frank']
  },
  {
    icon: '📦',
    title: 'Product Marketing & Launches',
    description: 'Messaging that positions your product clearly and compellingly. From naming to launch campaigns, I help brands introduce new products without confusing customers.',
    href: '/services/product-marketing',
    clients: ['Huel Daily Greens', 'Loop']
  },
  {
    icon: '📖',
    title: 'Brand Voice & Messaging',
    description: 'The strategic foundation that guides all your copy. I help brands find their voice and create messaging frameworks that keep communications consistent.',
    href: '/services/brand-messaging',
    clients: ['Yugen', 'Various']
  }
]

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Actually Do</h2>
          <p className="text-xl text-gray-600">
            Not just writing. Strategic copywriting across channels that moves the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-transparent hover:border-t-primary-500"
            >
              <CardHeader>
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-medium">Recent work:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.clients.map((client, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="group-hover:translate-x-2 transition-transform text-primary-600 hover:text-primary-700"
                  asChild
                >
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

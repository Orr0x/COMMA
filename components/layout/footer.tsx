import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Linkedin, Mail, Twitter } from 'lucide-react'
import { NewsletterSignup } from '@/components/newsletter-signup'

const services = [
  { name: 'Website Copywriting', href: '/services/website-copy' },
  { name: 'Email Marketing', href: '/services/email-marketing' },
  { name: 'Performance Advertising', href: '/services/performance-advertising' },
  { name: 'Product Marketing', href: '/services/product-marketing' },
  { name: 'Brand Messaging', href: '/services/brand-messaging' },
]

const company = [
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-2xl font-bold text-white">COMMA</span>
              <span className="text-2xl font-bold text-primary-500">,</span>
              <span className="text-2xl font-bold text-white">Studio</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Copy & Content Studio for feel-good brands. Based in the UK, trusted globally by brands like Huel, Loop Earplugs & more.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://www.linkedin.com/in/cain-lewis-6219a110b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:hello@commastudio.co.uk"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/commastudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Burton Upon Trent, UK</li>
              <li>🌍 Serving clients globally</li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  📧 Get a Quote
                </Link>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg border-l-4 border-primary-500">
              <p className="text-sm font-semibold text-white">⭐ 5.0 Average Rating</p>
              <p className="text-xs text-gray-400 mt-1">
                44 LinkedIn Recommendations • 10K+ Followers
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h4 className="text-white font-semibold mb-2">Get Copywriting Tips in Your Inbox</h4>
          <p className="text-sm text-gray-400 mb-4">
            No spam. No fluff. Just practical tips on writing better ads, emails, and websites.
          </p>
          <NewsletterSignup placeholder="Enter your email" buttonText="Subscribe" />
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} COMMA Studio. All rights reserved.
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            UK-based. Globally trusted. Zero waffle guaranteed.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

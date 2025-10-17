import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'

export const metadata = genMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for COMMA Studio. Learn how we collect, use, and protect your personal information.',
  canonical: '/privacy',
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: October 16, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              COMMA Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>1. Information We Collect</h2>

            <h3>Information You Provide</h3>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
              <li><strong>Project Information:</strong> Details about your project, industry, and copywriting needs</li>
              <li><strong>Communication Data:</strong> Messages you send through contact forms or email</li>
              <li><strong>Payment Information:</strong> Billing details (processed securely through third-party payment processors)</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, links clicked</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
              <li><strong>Cookies:</strong> Small data files stored on your device (see Cookie Policy below)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>

            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide copywriting services</li>
              <li>Send project updates, invoices, and service-related communications</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2>3. How We Share Your Information</h2>

            <p>We do not sell your personal information. We may share your information with:</p>

            <h3>Service Providers</h3>
            <p>Third-party companies that help us operate our business:</p>
            <ul>
              <li>Email service providers (for project communication)</li>
              <li>Payment processors (for secure payment handling)</li>
              <li>Analytics providers (for website analytics)</li>
              <li>Hosting providers (for website hosting)</li>
            </ul>

            <h3>Legal Requirements</h3>
            <p>We may disclose your information if required by law or to:</p>
            <ul>
              <li>Comply with legal processes</li>
              <li>Protect our rights and property</li>
              <li>Prevent fraud or security issues</li>
              <li>Protect the safety of our users</li>
            </ul>

            <h2>4. Data Security</h2>

            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Your Rights and Choices</h2>

            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails (using the link in emails)</li>
              <li><strong>Data Portability:</strong> Request your data in a structured, commonly used format</li>
            </ul>

            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:hello@commastudio.co.uk">hello@commastudio.co.uk</a>.
            </p>

            <h2>6. Cookie Policy</h2>

            <h3>What Are Cookies?</h3>
            <p>
              Cookies are small text files stored on your device that help us understand how you use our website.
            </p>

            <h3>Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
              <li><strong>Marketing Cookies:</strong> Used to show relevant ads (with your consent)</li>
            </ul>

            <h3>Managing Cookies</h3>
            <p>
              You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
            </p>

            <h2>7. Third-Party Links</h2>

            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>

            <h2>8. International Data Transfers</h2>

            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>

            <h2>9. Children's Privacy</h2>

            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated "Last Updated" date.
            </p>

            <h2>11. Contact Us</h2>

            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none pl-0">
              <li><strong>Email:</strong> <a href="mailto:hello@commastudio.co.uk">hello@commastudio.co.uk</a></li>
              <li><strong>Website:</strong> <Link href="/">commastudio.co.uk</Link></li>
            </ul>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="mt-0">Your Privacy Matters</h3>
              <p className="mb-0">
                We take your privacy seriously. If you have any concerns about how we handle your information, please don't hesitate to reach out. We're happy to answer any questions.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

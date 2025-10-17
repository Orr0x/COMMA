import { generateMetadata as genMetadata } from '@/lib/seo/metadata'
import Link from 'next/link'

export const metadata = genMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for COMMA Studio. Learn about the terms governing the use of our copywriting services.',
  canonical: '/terms',
})

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: October 16, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              These Terms of Service ("Terms") govern your use of COMMA Studio's website and copywriting services. By engaging our services or using our website, you agree to these Terms.
            </p>

            <h2>1. Services Overview</h2>

            <p>
              COMMA Studio provides professional copywriting services including, but not limited to:
            </p>
            <ul>
              <li>Performance advertising copy (Meta, Google, TikTok)</li>
              <li>Email marketing copywriting</li>
              <li>Website and landing page copy</li>
              <li>Product launch campaigns</li>
              <li>Brand messaging and voice development</li>
              <li>Out-of-home advertising copy</li>
            </ul>

            <h2>2. Engagement Process</h2>

            <h3>Initial Consultation</h3>
            <p>
              All projects begin with a consultation (via email, call, or video) to discuss scope, timeline, and pricing.
            </p>

            <h3>Project Scope</h3>
            <p>
              Once agreed, the project scope, deliverables, timeline, and fees will be documented in a project brief or contract.
            </p>

            <h3>Changes to Scope</h3>
            <p>
              Changes to the agreed scope may result in additional fees and extended timelines. Any changes must be agreed upon in writing.
            </p>

            <h2>3. Fees and Payment</h2>

            <h3>Pricing</h3>
            <p>
              Fees are determined based on project scope and complexity. Pricing is provided in writing before work begins.
            </p>

            <h3>Payment Terms</h3>
            <ul>
              <li><strong>Small Projects:</strong> 100% payment upfront</li>
              <li><strong>Large Projects:</strong> 50% upfront, 50% upon completion</li>
              <li><strong>Retainers:</strong> Monthly payment at the start of each month</li>
            </ul>

            <h3>Late Payments</h3>
            <p>
              Invoices are due within 14 days unless otherwise agreed. Late payments may incur a 5% monthly interest charge.
            </p>

            <h3>Refunds</h3>
            <p>
              Due to the nature of copywriting services, refunds are generally not available once work has commenced. If you're unsatisfied with the work, we'll work with you to make revisions (within the agreed revision limit).
            </p>

            <h2>4. Revisions and Edits</h2>

            <h3>Included Revisions</h3>
            <p>
              All projects include <strong>2 rounds of revisions</strong> unless otherwise specified in the project agreement.
            </p>

            <h3>What Counts as a Revision</h3>
            <p>
              A revision is a round of feedback on the delivered copy. Minor tweaks requested all at once count as one revision round.
            </p>

            <h3>Additional Revisions</h3>
            <p>
              Revisions beyond the included limit are available at an hourly rate, which will be communicated before starting additional work.
            </p>

            <h2>5. Intellectual Property</h2>

            <h3>Ownership of Final Copy</h3>
            <p>
              Upon full payment, you own the rights to the final delivered copy. You may use, modify, and publish it as needed.
            </p>

            <h3>Ownership Before Payment</h3>
            <p>
              COMMA Studio retains ownership of all work until full payment is received.
            </p>

            <h3>Portfolio Use</h3>
            <p>
              We reserve the right to showcase completed projects in our portfolio, case studies, and marketing materials unless otherwise agreed in writing.
            </p>

            <h3>Work Process Materials</h3>
            <p>
              Preliminary drafts, research, and work-in-progress materials remain the property of COMMA Studio unless otherwise agreed.
            </p>

            <h2>6. Client Responsibilities</h2>

            <p>To ensure successful project completion, you agree to:</p>
            <ul>
              <li>Provide necessary information, brand assets, and feedback in a timely manner</li>
              <li>Respond to requests for clarification within reasonable timeframes</li>
              <li>Review and approve deliverables within agreed timelines</li>
              <li>Make payment according to the agreed schedule</li>
            </ul>

            <h3>Delays Due to Client</h3>
            <p>
              If project delays are caused by lack of client input or feedback, deadlines may be extended accordingly.
            </p>

            <h2>7. Confidentiality</h2>

            <h3>Your Information</h3>
            <p>
              We treat all client information as confidential and will not share it with third parties except as necessary to complete the project (e.g., with designers or developers you've approved).
            </p>

            <h3>Non-Disclosure Agreements</h3>
            <p>
              We're happy to sign NDAs for sensitive projects. Please provide an NDA before sharing confidential information.
            </p>

            <h2>8. Timelines and Delivery</h2>

            <h3>Estimated Timelines</h3>
            <p>
              Project timelines are estimates based on the agreed scope. Actual delivery may vary based on project complexity and client feedback speed.
            </p>

            <h3>Rush Projects</h3>
            <p>
              Rush delivery is available for an additional fee (typically 25-50% depending on urgency).
            </p>

            <h3>Force Majeure</h3>
            <p>
              We are not liable for delays caused by circumstances beyond our control (illness, natural disasters, technical failures, etc.).
            </p>

            <h2>9. Termination</h2>

            <h3>Termination by Client</h3>
            <p>
              You may terminate the project at any time. You will be charged for work completed up to the termination date based on the agreed scope.
            </p>

            <h3>Termination by COMMA Studio</h3>
            <p>
              We reserve the right to terminate a project if:
            </p>
            <ul>
              <li>Payment terms are not met</li>
              <li>The client is unresponsive for an extended period</li>
              <li>The project scope changes significantly without agreement</li>
            </ul>

            <h2>10. Liability Limitations</h2>

            <h3>No Performance Guarantees</h3>
            <p>
              While we strive to deliver high-quality, effective copy, we cannot guarantee specific business results (sales, conversions, open rates, etc.) as these depend on many factors outside our control.
            </p>

            <h3>Limit of Liability</h3>
            <p>
              Our total liability for any claims related to our services is limited to the amount paid for the specific project in question.
            </p>

            <h3>Indemnification</h3>
            <p>
              You agree to indemnify COMMA Studio against any claims arising from your use of the copy we deliver, including claims related to trademark infringement, false advertising, or other legal issues.
            </p>

            <h2>11. Third-Party Services</h2>

            <p>
              We may recommend or work with third-party service providers (designers, developers, ad managers). We are not responsible for the quality or delivery of third-party services.
            </p>

            <h2>12. Dispute Resolution</h2>

            <h3>Good Faith Resolution</h3>
            <p>
              If a dispute arises, we agree to attempt to resolve it through good-faith communication before pursuing legal action.
            </p>

            <h3>Governing Law</h3>
            <p>
              These Terms are governed by the laws of the United Kingdom. Any disputes will be resolved in UK courts.
            </p>

            <h2>13. Changes to Terms</h2>

            <p>
              We may update these Terms from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services constitutes acceptance of updated Terms.
            </p>

            <h2>14. Contact Information</h2>

            <p>If you have questions about these Terms, please contact us:</p>
            <ul className="list-none pl-0">
              <li><strong>Email:</strong> <a href="mailto:hello@commastudio.co.uk">hello@commastudio.co.uk</a></li>
              <li><strong>Website:</strong> <Link href="/">commastudio.co.uk</Link></li>
            </ul>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="mt-0">Questions About These Terms?</h3>
              <p className="mb-0">
                These Terms are designed to protect both you and us. If anything is unclear or you'd like to discuss custom terms for your project, please reach out. We're happy to accommodate reasonable requests.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

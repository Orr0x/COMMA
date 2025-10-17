import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Providers } from "@/components/providers"
import { generateMetadata as genMetadata } from "@/lib/seo/metadata"
import { generateOrganizationSchema, generatePersonSchema, toJsonLd } from "@/lib/seo/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = genMetadata({
  title: "B2B Copywriter That Actually Understands Your Business | COMMA Studio",
  description: "Tired of copy that doesn't convert? B2B copywriting that ditches the jargon and drives results. Trusted by £120M+ brands like Loop Earplugs, F1 Arcade, and Huel.",
  keywords: [
    "B2B copywriter",
    "B2B copywriting",
    "freelance copywriter UK",
    "SaaS copywriter",
    "email marketing copywriter",
    "landing page copywriter",
    "website copywriting",
    "conversion copywriter",
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()
  const personSchema = generatePersonSchema()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={toJsonLd(organizationSchema)}
          key="organization-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={toJsonLd(personSchema)}
          key="person-jsonld"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

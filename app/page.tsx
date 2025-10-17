import { Hero } from '@/components/sections/hero'
import { Clients } from '@/components/sections/clients'
import { Services } from '@/components/sections/services'
import { CaseStudies } from '@/components/sections/case-studies'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

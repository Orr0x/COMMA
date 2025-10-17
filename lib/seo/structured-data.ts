export interface Organization {
  '@type': 'ProfessionalService'
  name: string
  description: string
  url: string
  logo?: string
  founder?: Person
  address?: PostalAddress
  areaServed?: string[]
  serviceType?: string[]
  aggregateRating?: AggregateRating
  priceRange?: string
}

export interface Person {
  '@type': 'Person'
  name: string
  jobTitle?: string
  description?: string
  url?: string
  sameAs?: string[]
  knowsAbout?: string[]
  worksFor?: {
    '@type': 'Organization'
    name: string
  }
}

export interface PostalAddress {
  '@type': 'PostalAddress'
  addressLocality: string
  addressCountry: string
}

export interface AggregateRating {
  '@type': 'AggregateRating'
  ratingValue: string
  reviewCount: string
  bestRating: string
  worstRating: string
}

export interface FAQPage {
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

export interface Article {
  '@type': 'Article'
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: {
    '@type': 'Person'
    name: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
}

export function generateOrganizationSchema(): Organization {
  return {
    '@type': 'ProfessionalService',
    name: 'COMMA Studio',
    description: 'B2B copywriting for tech companies, SaaS brands, and e-commerce businesses. Clear, compelling copy that drives results.',
    url: 'https://commastudio.co.uk',
    logo: 'https://commastudio.co.uk/logo.png',
    founder: {
      '@type': 'Person',
      name: 'Cain Lewis',
      jobTitle: 'Co-Founder & B2B Copywriter',
      url: 'https://www.linkedin.com/in/cain-lewis-6219a110b/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Burton Upon Trent',
      addressCountry: 'GB',
    },
    areaServed: ['GB', 'US', 'EU'],
    serviceType: [
      'B2B Copywriting',
      'Website Copywriting',
      'Email Marketing Copy',
      'Performance Advertising Copy',
      'Landing Page Optimization',
      'Brand Storytelling',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '43',
      bestRating: '5',
      worstRating: '5',
    },
    priceRange: '£££',
  }
}

export function generatePersonSchema(): Person {
  return {
    '@type': 'Person',
    name: 'Cain Lewis',
    jobTitle: 'B2B Copywriter & Marketing Strategist',
    description: 'B2B copywriter with 6+ years experience. Trusted by £120M+ brands including Loop Earplugs, F1 Arcade, and Huel.',
    url: 'https://commastudio.co.uk',
    sameAs: [
      'https://www.linkedin.com/in/cain-lewis-6219a110b/',
    ],
    knowsAbout: [
      'B2B Copywriting',
      'SaaS Marketing',
      'Email Marketing',
      'Conversion Rate Optimization',
      'Brand Storytelling',
      'Performance Marketing',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'COMMA Studio',
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQPage {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  publishedDate: string
  modifiedDate: string
  author: string
  image: string
}): Article {
  return {
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'COMMA Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://commastudio.co.uk/logo.png',
      },
    },
  }
}

export function toJsonLd(data: any) {
  return {
    __html: JSON.stringify({ '@context': 'https://schema.org', ...data }),
  }
}

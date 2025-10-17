import { Metadata } from 'next'

interface PageSEO {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  article?: {
    publishedTime: string
    modifiedTime: string
    author: string
    tags: string[]
  }
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://commastudio.co.uk'

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  article
}: PageSEO): Metadata {
  const defaultImage = `${baseUrl}/og-default.jpg`
  const fullTitle = title.includes('COMMA Studio') ? title : `${title} | COMMA Studio`

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    authors: [{ name: 'Cain Lewis', url: baseUrl }],
    creator: 'Cain Lewis',
    publisher: 'COMMA Studio',

    alternates: {
      canonical: canonical || baseUrl,
    },

    openGraph: {
      type: article ? 'article' : 'website',
      url: canonical || baseUrl,
      title,
      description,
      siteName: 'COMMA Studio',
      images: [
        {
          url: ogImage || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: [article.author],
        tags: article.tags,
      })
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage || defaultImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

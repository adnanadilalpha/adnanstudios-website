import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adnanstudios.com'

export const metadata: Metadata = {
  title: 'DeafTawk Case Study - Enterprise Accessibility Platform',
  description: 'Designed and led the product experience for a real-time sign language interpretation platform enabling enterprises and institutions to provide accessible communication at scale. Reduced interpreter connection time from ~60 min to <30 sec.',
  keywords: [
    'DeafTawk',
    'accessibility design',
    'sign language interpretation',
    'enterprise dashboard',
    'B2B product design',
    'accessibility platform',
    'product design case study',
    'UX design',
    'enterprise UX'
  ],
  openGraph: {
    title: 'DeafTawk Case Study - Enterprise Accessibility Platform',
    description: 'Designed and led the product experience for a real-time sign language interpretation platform. Reduced connection time from ~60 min to <30 sec.',
    type: 'article',
    url: `${siteUrl}/case-studies/deaftawk`,
    images: [
      {
        url: `${siteUrl}/deaftawk/dashboard-deaf.png`,
        width: 1200,
        height: 630,
        alt: 'DeafTawk Enterprise Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeafTawk Case Study - Enterprise Accessibility Platform',
    description: 'Designed and led the product experience for a real-time sign language interpretation platform.',
    images: [`${siteUrl}/deaftawk/dashboard-deaf.png`],
  },
  alternates: {
    canonical: `${siteUrl}/case-studies/deaftawk`,
  },
}

export default function DeafTawkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'DeafTawk Case Study - Enterprise Accessibility Platform',
    description: 'Designed and led the product experience for a real-time sign language interpretation platform enabling enterprises and institutions to provide accessible communication at scale.',
    image: `${siteUrl}/deaftawk/dashboard-deaf.png`,
    author: {
      '@type': 'Organization',
      name: 'Adnan Studios',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Adnan Studios',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: '2024-01-01',
    dateModified: '2024-01-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/case-studies/deaftawk`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}

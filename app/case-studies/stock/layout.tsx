import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adnanstudios.com'

export const metadata: Metadata = {
  title: 'Private Subscriber Product Case Study - FinTech Platform',
  description: 'Subscriber-Only Platform - Designed a product experience for a restricted-access platform, explicitly available only to subscribers. Designed for constrained environments, shipping under fixed timelines.',
  keywords: [
    'FinTech design',
    'subscriber platform',
    'private platform design',
    'product design case study',
    'UX design',
    'FinTech UX',
    'restricted access design'
  ],
  openGraph: {
    title: 'Private Subscriber Product Case Study - FinTech Platform',
    description: 'Designed a product experience for a restricted-access platform, explicitly available only to subscribers.',
    type: 'article',
    url: `${siteUrl}/case-studies/stock`,
    images: [
      {
        url: `${siteUrl}/stock/dashboard.png`,
        width: 1200,
        height: 630,
        alt: 'Private Subscriber Product Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Subscriber Product Case Study - FinTech Platform',
    description: 'Designed a product experience for a restricted-access platform.',
    images: [`${siteUrl}/stock/dashboard.png`],
  },
  alternates: {
    canonical: `${siteUrl}/case-studies/stock`,
  },
}

export default function StockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Private Subscriber Product Case Study - FinTech Platform',
    description: 'Subscriber-Only Platform - Designed a product experience for a restricted-access platform, explicitly available only to subscribers.',
    image: `${siteUrl}/stock/dashboard.png`,
    author: {
      '@type': 'Person',
      name: 'Adnan Adil',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Adnan Adil',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/case-studies/stock`,
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

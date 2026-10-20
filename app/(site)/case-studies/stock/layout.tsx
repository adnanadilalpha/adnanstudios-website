import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adnanstudios.com'

export const metadata: Metadata = {
  title: 'MWS Case Study - Private Subscriber FinTech Platform',
  description:
    'Case study: MWS (My Weekly Stock) — product design for a subscriber-only FinTech platform. Designed and shipped under fixed timelines in a constrained access environment.',
  keywords: [
    'MWS',
    'My Weekly Stock',
    'FinTech design',
    'subscriber platform',
    'private platform design',
    'product design case study',
    'UX design',
    'FinTech UX',
    'restricted access design',
  ],
  openGraph: {
    title: 'MWS Case Study - Private Subscriber FinTech Platform',
    description:
      'Product design for a subscriber-only FinTech platform, shipped under fixed timelines.',
    type: 'article',
    url: `${siteUrl}/case-studies/stock`,
    images: [
      {
        url: `${siteUrl}/stock/dashboard.png`,
        width: 1200,
        height: 630,
        alt: 'MWS private subscriber FinTech dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWS Case Study - Private Subscriber FinTech Platform',
    description: 'Product design for a subscriber-only FinTech platform.',
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
    headline: 'MWS Case Study - Private Subscriber FinTech Platform',
    description:
      'Product design for a subscriber-only FinTech platform, shipped under fixed timelines in a constrained access environment.',
    image: `${siteUrl}/stock/dashboard.png`,
    author: {
      '@type': 'Person',
      name: 'Adnan Adil',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Adnan Studios',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: '2025-01-01',
    dateModified: '2026-09-26',
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

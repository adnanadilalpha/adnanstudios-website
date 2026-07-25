import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import {
  organizationSchema,
  personSchema,
  professionalServiceSchema,
  serviceSchemas,
  reviewSchemas,
} from './lib/schema'
import { siteConfig, siteUrl } from './lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: '%s | Adnan Studios',
  },
  description: siteConfig.description,
  keywords: [
    'adnan studios',
    'product design studio',
    'development studio',
    'zero handoff',
    'figma to code',
    'nextjs agency',
    'flutter development studio',
    'wordpress development',
    'mvp design studio',
    'saas product design',
    'fintech design',
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Adnan Studios Zero Handoff product design and development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteUrl}/images/og-image.jpg`],
    creator: '@adnanadil',
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
  alternates: {
    canonical: siteUrl,
    types: {
      'application/xml': `${siteUrl}/sitemap.xml`,
    },
  },
  category: 'Professional Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { aggregateRating, reviews } = reviewSchemas()

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteUrl,
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
        />
        {reviews.map((review, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
          />
        ))}
        {serviceSchemas().map((service, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
          />
        ))}
      </head>
      <body>
        {children}
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

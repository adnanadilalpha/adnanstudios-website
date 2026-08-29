import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { fontBody, fontDisplay, fontMono } from './fonts'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import {
  personSchema,
  professionalServiceSchema,
  serviceSchemas,
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
    'design studio',
    'product design studio',
    'landing page designer',
    'landing page design',
    'product designer',
    'figma to code',
    'saas design',
    'mvp design',
    'web app design',
    'ui ux designer',
    'zero handoff',
    'nextjs developer',
    'flutter developer',
    'wordpress developer',
    'product designer developer',
    'fintech design',
    'adnan studios',
    'adnan adil',
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
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
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
    },
    author: {
      '@type': 'Person',
      name: siteConfig.owner,
    },
  }

  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {serviceSchemas().map((service, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        {children}
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adnanstudios.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Adnan Adil - Product Designer, UX Strategist & Full Stack Builder',
    template: '%s | Adnan Adil'
  },
  description: 'Product Designer, UX Strategist & Full Stack Builder. I design and build production-ready digital products. From strategy and UX to scalable frontends and shipped systems. Featured work includes DeafTawk, QuizWiz, and more.',
  keywords: [
    'product designer',
    'UX designer',
    'UI designer',
    'full stack developer',
    'web designer',
    'SaaS designer',
    'B2B product design',
    'accessibility design',
    'EdTech design',
    'FinTech design',
    'digital product design',
    'user experience design',
    'user interface design',
    'web development',
    'frontend development',
    'React developer',
    'Next.js developer',
    'portfolio',
    'Adnan Adil',
    'adnanstudios'
  ],
  authors: [{ name: 'Adnan Adil' }],
  creator: 'Adnan Adil',
  publisher: 'Adnan Adil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Adnan Adil Portfolio',
    title: 'Adnan Adil - Product Designer, UX Strategist & Full Stack Builder',
    description: 'I design and build production-ready digital products. From strategy and UX to scalable frontends and shipped systems.',
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Adnan Adil - Product Designer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adnan Adil - Product Designer, UX Strategist & Full Stack Builder',
    description: 'I design and build production-ready digital products. From strategy and UX to scalable frontends and shipped systems.',
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
  },
  category: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Structured Data for AI Search Engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Adnan Adil',
    jobTitle: 'Product Designer, UX Strategist & Full Stack Builder',
    description: 'I design and build production-ready digital products. From strategy and UX to scalable frontends and shipped systems.',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/adnan-adil-syed/',
      'https://www.upwork.com/freelancers/adnanux',
      'https://contra.com/adnanadiil',
      'https://github.com/adnanadilalpha'
    ],
    knowsAbout: [
      'Product Design',
      'UX Design',
      'UI Design',
      'Full Stack Development',
      'Web Development',
      'SaaS Design',
      'B2B Product Design',
      'Accessibility Design',
      'EdTech Design',
      'FinTech Design'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Design & Development Professional'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Product Designer & Developer'
    }
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adnan Adil Portfolio',
    url: siteUrl,
    description: 'Product Designer, UX Strategist & Full Stack Builder Portfolio',
    author: {
      '@type': 'Person',
      name: 'Adnan Adil'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adnan Adil',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    sameAs: [
      'https://www.linkedin.com/in/adnan-adil-syed/',
      'https://www.upwork.com/freelancers/adnanux',
      'https://contra.com/adnanadiil',
      'https://github.com/adnanadilalpha'
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

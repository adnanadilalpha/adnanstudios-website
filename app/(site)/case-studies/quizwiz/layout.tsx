import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adnanstudios.com'

export const metadata: Metadata = {
  title: 'QuizWiz Case Study - AI-Powered Quiz Generator',
  description: 'QuizWiz enables educators to generate quizzes from text, PDFs, and URLs, edit the output, and export for classroom use. Used by ~60K monthly visitors with 4.7 star rating.',
  keywords: [
    'QuizWiz',
    'EdTech design',
    'AI quiz generator',
    'education technology',
    'product design case study',
    'UX design',
    'EdTech UX',
    'AI-powered tools'
  ],
  openGraph: {
    title: 'QuizWiz Case Study - AI-Powered Quiz Generator',
    description: 'QuizWiz enables educators to generate quizzes from text, PDFs, and URLs. Used by ~60K monthly visitors.',
    type: 'article',
    url: `${siteUrl}/case-studies/quizwiz`,
    images: [
      {
        url: `${siteUrl}/quizwiz/library.png`,
        width: 1200,
        height: 630,
        alt: 'QuizWiz AI Quiz Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuizWiz Case Study - AI-Powered Quiz Generator',
    description: 'QuizWiz enables educators to generate quizzes from text, PDFs, and URLs.',
    images: [`${siteUrl}/quizwiz/library.png`],
  },
  alternates: {
    canonical: `${siteUrl}/case-studies/quizwiz`,
  },
}

export default function QuizWizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'QuizWiz Case Study - AI-Powered Quiz Generator',
    description: 'QuizWiz enables educators to generate quizzes from text, PDFs, and URLs, edit the output, and export for classroom use.',
    image: `${siteUrl}/quizwiz/library.png`,
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
      '@id': `${siteUrl}/case-studies/quizwiz`,
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

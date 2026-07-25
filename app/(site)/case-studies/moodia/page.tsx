import type { Metadata } from 'next'
import { CaseStudyTemplate } from '@/app/components/CaseStudyTemplate'
import { caseStudies } from '@/app/lib/case-studies'
import { siteUrl } from '@/app/lib/site'

const data = caseStudies.moodia

export const metadata: Metadata = {
  title: `${data.title} Case Study - ${data.subtitle}`,
  description: data.metaDescription,
  keywords: data.keywords,
  openGraph: {
    title: `${data.title} Case Study`,
    description: data.metaDescription,
    type: 'article',
    url: `${siteUrl}/case-studies/moodia`,
    images: [{ url: `${siteUrl}${data.image}`, width: 1200, height: 630, alt: data.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${data.title} Case Study`,
    description: data.metaDescription,
    images: [`${siteUrl}${data.image}`],
  },
  alternates: { canonical: `${siteUrl}/case-studies/moodia` },
}

export default function MoodiaCaseStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${data.title} Case Study`,
    description: data.metaDescription,
    image: `${siteUrl}${data.image}`,
    author: { '@type': 'Organization', name: 'Adnan Studios' },
    datePublished: '2025-06-01',
    dateModified: '2026-06-27',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/case-studies/moodia` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CaseStudyTemplate data={data} />
    </>
  )
}

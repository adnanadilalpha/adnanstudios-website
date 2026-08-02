import type { Metadata } from 'next'
import { CaseStudyTemplate } from '@/app/components/CaseStudyTemplate'
import { caseStudies } from '@/app/lib/case-studies'
import { caseStudySchema } from '@/app/lib/schema'
import { buildPageMetadata } from '@/app/lib/seo'

const data = caseStudies.moodia
const path = '/case-studies/moodia'
const title = `${data.title} Case Study - ${data.subtitle}`

export const metadata: Metadata = buildPageMetadata({
  title,
  description: data.metaDescription,
  path,
  type: 'article',
  keywords: data.keywords,
  images: [
    {
      url: data.image,
      width: 1200,
      height: 630,
      alt: data.imageAlt,
    },
  ],
})

export default function MoodiaCaseStudyPage() {
  const jsonLd = caseStudySchema({
    title,
    description: data.metaDescription,
    slug: data.slug,
    image: data.image,
    datePublished: '2025-06-01',
    dateModified: '2026-06-27',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyTemplate data={data} />
    </>
  )
}

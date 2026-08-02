import type { Metadata } from 'next'
import { caseStudySchema } from '@/app/lib/schema'
import { buildPageMetadata } from '@/app/lib/seo'

const path = '/case-studies/deaftawk'
const title = 'DeafTawk Case Study - Enterprise Accessibility Platform'
const description =
  'Designed and led the product experience for a real-time sign language interpretation platform enabling enterprises and institutions to provide accessible communication at scale. Reduced interpreter connection time from ~60 min to <30 sec.'
const image = '/deaftawk/dashboard-deaf.png'

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  type: 'article',
  keywords: [
    'DeafTawk',
    'accessibility design',
    'sign language interpretation',
    'enterprise dashboard',
    'B2B product design',
    'accessibility platform',
    'product design case study',
    'UX design',
    'enterprise UX',
    'zero handoff case study',
  ],
  images: [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: 'DeafTawk Enterprise Dashboard',
    },
  ],
})

export default function DeafTawkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = caseStudySchema({
    title,
    description,
    slug: 'deaftawk',
    image,
    datePublished: '2024-01-01',
    dateModified: '2026-08-01',
  })

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

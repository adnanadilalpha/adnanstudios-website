import type { Metadata } from 'next'
import { caseStudySchema } from '@/app/lib/schema'
import { buildPageMetadata } from '@/app/lib/seo'

const path = '/case-studies/stock'
const title = 'Private Subscriber Product Case Study - FinTech Platform'
const description =
  'Subscriber-Only Platform - Designed a product experience for a restricted-access platform, explicitly available only to subscribers. Designed for constrained environments, shipping under fixed timelines.'
const image = '/stock/dashboard.png'

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  type: 'article',
  keywords: [
    'FinTech design',
    'subscriber platform',
    'private platform design',
    'product design case study',
    'UX design',
    'FinTech UX',
    'restricted access design',
    'zero handoff case study',
  ],
  images: [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: 'Private Subscriber Product Dashboard',
    },
  ],
})

export default function StockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = caseStudySchema({
    title,
    description,
    slug: 'stock',
    image,
    datePublished: '2025-01-01',
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

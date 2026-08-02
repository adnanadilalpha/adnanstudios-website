import type { Metadata } from 'next'
import { caseStudySchema } from '@/app/lib/schema'
import { buildPageMetadata } from '@/app/lib/seo'

const path = '/case-studies/quizwiz'
const title = 'QuizWiz Case Study - AI-Powered Quiz Generator'
const description =
  'QuizWiz enables educators to generate quizzes from text, PDFs, and URLs, edit the output, and export for classroom use. Used by ~60K monthly visitors with 4.7 star rating.'
const image = '/quizwiz/library.png'

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
  type: 'article',
  keywords: [
    'QuizWiz',
    'EdTech design',
    'AI quiz generator',
    'education technology',
    'product design case study',
    'UX design',
    'EdTech UX',
    'AI-powered tools',
    'zero handoff case study',
  ],
  images: [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: 'QuizWiz AI Quiz Generator',
    },
  ],
})

export default function QuizWizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = caseStudySchema({
    title,
    description,
    slug: 'quizwiz',
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

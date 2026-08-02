import type { Metadata } from 'next'
import { HomePage } from '@/app/components/HomePage'
import { getSiteContent } from '@/lib/site-content'
import { buildPageMetadata, seoKeywords } from '@/app/lib/seo'
import { siteConfig } from '@/app/lib/site'

export const revalidate = 60

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: '/',
    keywords: [
      ...seoKeywords,
      'product design and development studio',
      'hire figma developer studio',
      'mvp agency',
    ],
  }),
  title: {
    absolute: siteConfig.title,
  },
}

export default async function Home() {
  const content = await getSiteContent()

  return <HomePage content={content} />
}

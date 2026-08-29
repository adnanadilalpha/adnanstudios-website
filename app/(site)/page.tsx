import type { Metadata } from 'next'
import { HomePage } from '@/app/components/HomePage'
import { siteConfig, siteUrl } from '@/app/lib/site'
import { getSiteContent } from '@/lib/site-content'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Product Design Studio & Landing Page Designer',
  description: siteConfig.description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
  },
}

export default async function Home() {
  const content = await getSiteContent()

  return <HomePage content={content} />
}

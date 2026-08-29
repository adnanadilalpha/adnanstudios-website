import { unstable_cache } from 'next/cache'
import { cache } from 'react'
import { getPayloadClient, isCmsEnabled } from '@/lib/payload'
import { defaultFaqItems } from '@/lib/faq-defaults'

export interface SiteContent {
  heroHeadline: string
  faqItems: Array<{ question: string; answer: string }>
}

const defaults: SiteContent = {
  heroHeadline:
    'Product design studio for landing pages, SaaS, and apps. One person from Figma to production.',
  faqItems: defaultFaqItems,
}

async function fetchSiteContentFromDb(): Promise<SiteContent> {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({
    slug: 'site-settings',
    depth: 0,
  })

  return {
    heroHeadline: settings.heroHeadline || defaults.heroHeadline,
    faqItems:
      settings.faqItems && settings.faqItems.length > 0
        ? settings.faqItems.map((item: { question: string; answer: string }) => ({
            question: item.question,
            answer: item.answer,
          }))
        : defaults.faqItems,
  }
}

const getCachedSiteContent = unstable_cache(fetchSiteContentFromDb, ['cms-site-settings'], {
  revalidate: 60,
  tags: ['site-settings'],
})

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  if (!isCmsEnabled()) {
    return defaults
  }

  try {
    return await getCachedSiteContent()
  } catch {
    return defaults
  }
})

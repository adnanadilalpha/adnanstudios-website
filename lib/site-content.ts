import { unstable_cache } from 'next/cache'
import { cache } from 'react'
import { getPayloadClient, isCmsEnabled } from '@/lib/payload'
import { defaultFaqItems } from '@/lib/faq-defaults'

export interface SiteContent {
  heroHeadline: string
  heroTitle: string
  heroSubhead: string
  packagesTitle: string
  packagesDescription: string
  faqItems: Array<{ question: string; answer: string }>
}

import { deliveryStackOr } from '@/app/lib/site'

const heroSubhead = `Design in Figma. Ship in ${deliveryStackOr}. Same person from wireframe to production.`
const packagesDescription =
  'Every tier includes Figma design and development by the same person — Next.js, Flutter, or WordPress. No separate developer handoff.'

const defaults: SiteContent = {
  heroHeadline: 'One person designs and ships. No handoff gap.',
  heroTitle: 'Zero Handoff product design and development.',
  heroSubhead,
  packagesTitle: 'Zero Handoff Packages',
  packagesDescription,
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
    heroTitle: settings.heroTitle || defaults.heroTitle,
    heroSubhead: settings.heroSubhead || defaults.heroSubhead,
    packagesTitle: settings.packagesTitle || defaults.packagesTitle,
    packagesDescription: settings.packagesDescription || defaults.packagesDescription,
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

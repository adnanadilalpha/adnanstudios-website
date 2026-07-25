import { getPayloadClient } from '../lib/payload'
import { defaultFaqItems } from '../lib/faq-defaults'
import { seedArticles } from './seed-data/articles'

function toLexicalContent(paragraphs: string[]) {
  return {
    root: {
      type: 'root',
      children: paragraphs.map((text) => ({
        type: 'paragraph',
        children: [{ type: 'text', text, version: 1 }],
        direction: 'ltr' as const,
        format: '' as const,
        indent: 0,
        version: 1,
      })),
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    },
  }
}

async function seedInsights(payload: Awaited<ReturnType<typeof getPayloadClient>>) {
  for (const article of seedArticles) {
    const existing = await payload.find({
      collection: 'insights',
      where: { slug: { equals: article.slug } },
      limit: 1,
    })

    const data = {
      title: article.title,
      slug: article.slug,
      description: article.description,
      author: 'Adnan Studios',
      publishedAt: article.publishedAt,
      content: toLexicalContent(article.paragraphs),
      _status: 'published' as const,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'insights',
        id: existing.docs[0].id,
        data,
      })
      console.log(`Updated insight: ${article.slug}`)
    } else {
      await payload.create({
        collection: 'insights',
        data,
      })
      console.log(`Created insight: ${article.slug}`)
    }
  }
}

async function seedSiteSettings(payload: Awaited<ReturnType<typeof getPayloadClient>>) {
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      heroHeadline: 'A product design and development studio. No handoff gap.',
      heroTitle: 'Zero Handoff product design and development.',
      heroSubhead: 'We design in Figma and ship in Next.js, Flutter, or WordPress. One studio from wireframe to production.',
      packagesTitle: 'Studio Packages',
      packagesDescription:
        'Every tier includes Figma design and production development by our studio — Next.js, Flutter, or WordPress. No separate agency handoff.',
      faqItems: defaultFaqItems,
    },
  })

  console.log('Site settings migrated to database.')
}

async function seed() {
  const payload = await getPayloadClient()
  await seedSiteSettings(payload)
  await seedInsights(payload)
  console.log('CMS seed complete.')
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})

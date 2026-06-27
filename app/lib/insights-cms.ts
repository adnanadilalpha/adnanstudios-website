import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import { unstable_cache } from 'next/cache'
import { cache } from 'react'
import readingTime from 'reading-time'
import { getPayloadClient, isCmsEnabled } from '@/lib/payload'

export interface InsightPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  author: string
  readTime: string
  contentHtml: string
}

async function fetchInsightsFromDb(): Promise<InsightPost[]> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'insights',
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
    limit: 100,
    depth: 0,
  })

  return result.docs.map((doc) => {
    const html = convertLexicalToHTML({ data: doc.content })
    const stats = readingTime(html.replace(/<[^>]+>/g, ' '))

    return {
      slug: doc.slug,
      title: doc.title,
      description: doc.description,
      publishedAt: doc.publishedAt,
      updatedAt: doc.updatedAt || doc.publishedAt,
      author: doc.author,
      readTime: stats.text,
      contentHtml: html,
    }
  })
}

const getCachedInsights = unstable_cache(fetchInsightsFromDb, ['cms-insights'], {
  revalidate: 60,
  tags: ['insights'],
})

const getInsights = cache(async (): Promise<InsightPost[]> => {
  if (!isCmsEnabled()) {
    return []
  }

  return getCachedInsights()
})

export async function getAllInsights(): Promise<Omit<InsightPost, 'contentHtml'>[]> {
  const posts = await getInsights()
  return posts.map(({ contentHtml: _html, ...post }) => post)
}

export async function getInsightBySlug(slug: string): Promise<InsightPost | null> {
  const posts = await getInsights()
  return posts.find((post) => post.slug === slug) ?? null
}

export async function getRelatedInsights(
  slug: string,
  count = 3
): Promise<Omit<InsightPost, 'contentHtml'>[]> {
  const posts = await getAllInsights()
  return posts.filter((post) => post.slug !== slug).slice(0, count)
}

export async function getAllInsightSlugs(): Promise<string[]> {
  const posts = await getInsights()
  return posts.map((post) => post.slug)
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getAllInsightSlugs,
  getInsightBySlug,
  getRelatedInsights,
} from '@/app/lib/insights-cms'
import { siteUrl, siteConfig } from '@/app/lib/site'
import { articleSchema } from '@/app/lib/schema'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { ArticleTracker } from '@/app/components/ArticleTracker'
import { TrackedLink } from '@/app/components/TrackedLink'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getInsightBySlug(slug)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteUrl}/insights/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.owner],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `${siteUrl}/insights/${post.slug}`,
    },
  }
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = await getInsightBySlug(slug)

  if (!post) {
    notFound()
  }

  const related = await getRelatedInsights(post.slug)

  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk']">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.description,
              slug: post.slug,
              publishedAt: post.publishedAt,
              updatedAt: post.updatedAt,
            })
          ),
        }}
      />
      <ArticleTracker slug={post.slug} />

      <header className="border-b border-gray-200 px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/insights" className="text-sm text-gray-600 hover:text-[#34A983] transition-colors">
            ← Back to insights
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: siteUrl },
            { label: 'Insights', href: `${siteUrl}/insights` },
            { label: post.title },
          ]}
        />

        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">{post.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
              <time dateTime={post.publishedAt}>
                Published{' '}
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <time dateTime={post.updatedAt}>
                Updated{' '}
                {new Date(post.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <aside className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-medium mb-4">About the author</h2>
            <p className="text-gray-600 mb-4">
              <strong>{post.author}</strong> designs in Figma and ships in Next.js, Flutter, and WordPress at Adnan Studios.
              One person from wireframe to production code.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <TrackedLink href={siteConfig.social.linkedin} platform="linkedin" className="text-[#34A983] hover:underline">
                LinkedIn
              </TrackedLink>
              <TrackedLink href={siteConfig.social.upwork} platform="upwork" className="text-[#34A983] hover:underline">
                Upwork
              </TrackedLink>
              <TrackedLink href={siteConfig.social.github} platform="github" className="text-[#34A983] hover:underline">
                GitHub
              </TrackedLink>
            </div>
          </aside>

          {related.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl mb-6">Related articles</h2>
              <div className="grid gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="block p-4 border border-gray-200 rounded-xl hover:border-[#34A983]/40 transition-colors"
                  >
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </div>
  )
}

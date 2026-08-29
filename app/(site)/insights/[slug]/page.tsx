import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
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

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = await getInsightBySlug(slug)

  if (!post) {
    notFound()
  }

  const related = await getRelatedInsights(post.slug)

  return (
    <div className="relative border-t border-white/[0.08] overflow-hidden">
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

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none stage-grid" aria-hidden />

      <main className="site-container relative pt-32 sm:pt-36 pb-20 sm:pb-28">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Insights', href: '/insights' },
            { label: post.title },
          ]}
        />

        <Link
          href="/insights"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All insights
        </Link>

        <article className="max-w-3xl">
          <header className="mb-12 pb-10 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Article
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-white mb-5">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-white/45 leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
              <time dateTime={post.publishedAt}>Published {formatDate(post.publishedAt)}</time>
              <span className="text-white/15">·</span>
              <time dateTime={post.updatedAt}>Updated {formatDate(post.updatedAt)}</time>
              <span className="text-white/15">·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <aside className="mt-14 pt-10 border-t border-white/[0.08]">
            <div className="border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 mb-4">
                About the author
              </p>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                <strong className="text-white font-medium">{post.author}</strong> designs in Figma
                and ships in Next.js, Flutter, and WordPress at Adnan Studios. One person from
                wireframe to production code.
              </p>
              <div className="flex flex-wrap gap-2">
                <TrackedLink
                  href={siteConfig.social.linkedin}
                  platform="linkedin"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 text-xs text-white/60 hover:border-brand/40 hover:text-white transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </TrackedLink>
                <TrackedLink
                  href={siteConfig.social.upwork}
                  platform="upwork"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 text-xs text-white/60 hover:border-brand/40 hover:text-white transition-colors"
                >
                  Upwork
                  <ArrowUpRight className="w-3 h-3" />
                </TrackedLink>
                <TrackedLink
                  href={siteConfig.social.github}
                  platform="github"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 text-xs text-white/60 hover:border-brand/40 hover:text-white transition-colors"
                >
                  GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </TrackedLink>
              </div>
            </div>
          </aside>

          {related.length > 0 && (
            <section className="mt-14 pt-10 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                  Related articles
                </h2>
                <Link
                  href="/insights"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 hover:text-brand transition-colors"
                >
                  View all
                </Link>
              </div>
              <div className="border border-white/[0.08] divide-y divide-white/[0.08]">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="group flex items-start justify-between gap-6 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">
                        {item.readTime}
                      </p>
                      <h3 className="font-medium text-white group-hover:text-brand transition-colors mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/45 line-clamp-2">{item.description}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-white/25 group-hover:text-brand transition-colors mt-1" />
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

import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllInsights } from '@/app/lib/insights-cms'
import { siteUrl } from '@/app/lib/site'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { buildPageMetadata } from '@/app/lib/seo'
import { Logo } from '@/app/components/Logo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Insights on Product Design, Development, and Zero Handoff',
  description:
    'Articles on Zero Handoff product design, Figma to production workflows, MVP scoping, and building digital products without a designer-to-developer gap.',
  path: '/insights',
  keywords: [
    'product design insights',
    'zero handoff articles',
    'figma to production',
    'mvp scoping',
    'saas product design blog',
    'design and development studio blog',
  ],
})

export const revalidate = 60

export default async function InsightsPage() {
  const posts = await getAllInsights()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-foreground/10 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <Logo className="w-7 h-5 text-brand" />
            <span className="text-sm tracking-[0.16em] uppercase text-foreground/70 group-hover:text-brand transition-colors">
              Adnan Studios
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-brand transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <Breadcrumbs
          items={[
            { label: 'Home', href: siteUrl },
            { label: 'Insights' },
          ]}
        />

        <p className="studio-kicker mb-4">Insights</p>
        <h1 className="text-4xl md:text-6xl tracking-tight mb-4">Insights</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          Practical writing on Zero Handoff, Figma to production, and building
          products that ship.
        </p>

        <div className="space-y-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-foreground/10 p-6 hover:border-brand/40 transition-colors"
            >
              <time
                dateTime={post.publishedAt}
                className="text-sm text-gray-500"
              >
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2 className="text-2xl mt-2 mb-3 tracking-tight">
                <Link
                  href={`/insights/${post.slug}`}
                  className="hover:text-brand transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.readTime}</span>
                <Link
                  href={`/insights/${post.slug}`}
                  className="text-brand hover:underline"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

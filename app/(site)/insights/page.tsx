import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getAllInsights } from '@/app/lib/insights-cms'
import { siteUrl } from '@/app/lib/site'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Insights on Product Design, Development, and Zero Handoff',
  description:
    'Articles on Zero Handoff product design, Figma to production workflows, MVP scoping, and building digital products without a designer-to-developer gap.',
  openGraph: {
    title: 'Insights | Adnan Studios',
    description:
      'Articles on Zero Handoff product design, shipping in Next.js, Flutter, or WordPress, and building products end to end.',
    url: `${siteUrl}/insights`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | Adnan Studios',
    description:
      'Articles on Zero Handoff product design, shipping in Next.js, Flutter, or WordPress, and building products end to end.',
  },
  alternates: {
    canonical: `${siteUrl}/insights`,
  },
}

export const revalidate = 60

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default async function InsightsPage() {
  const posts = await getAllInsights()

  return (
    <div className="relative border-t border-white/[0.08] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none stage-grid" aria-hidden />

      <main className="site-container relative pt-32 sm:pt-36 pb-20 sm:pb-28">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Insights' },
          ]}
        />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Writing
              </span>
            </div>
            <h1 className="display-lg text-white">Insights</h1>
          </div>
          <p className="text-sm text-white/35 max-w-sm lg:text-right leading-relaxed">
            Practical notes on Zero Handoff, Figma to production, and shipping products without a
            handoff gap.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="border border-white/[0.08] bg-white/[0.02] px-8 py-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-3">
              Coming soon
            </p>
            <p className="text-white/50 text-sm max-w-md mx-auto">
              New articles on product design and development are on the way. In the meantime,{' '}
              <Link href="/" className="text-brand hover:text-brand-light transition-colors">
                see the work
              </Link>{' '}
              or book a call from the footer.
            </p>
          </div>
        ) : (
          <div className="border-t border-white/[0.08]">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="group border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors"
              >
                <Link
                  href={`/insights/${post.slug}`}
                  className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3rem_1fr_auto] items-start sm:items-center gap-4 sm:gap-8 py-8 sm:py-10"
                >
                  <span className="font-mono text-[11px] text-white/30 tabular-nums pt-1 sm:pt-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <time
                        dateTime={post.publishedAt}
                        className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04]">
                        <span className="w-1 h-1 rounded-full bg-brand" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                          {post.readTime}
                        </span>
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-brand transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-white/45 leading-relaxed line-clamp-2 max-w-2xl">
                      {post.description}
                    </p>
                  </div>

                  <span className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/30 group-hover:border-brand group-hover:text-brand transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
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

export default async function InsightsPage() {
  const posts = await getAllInsights()

  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk']">
      <header className="border-b border-gray-200 px-6 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-600 hover:text-[#34A983] transition-colors">
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

        <h1 className="text-4xl md:text-5xl mb-4">Insights</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          Practical writing on Zero Handoff, Figma to production, and building products that ship.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-2xl p-6 hover:border-[#34A983]/40 transition-colors"
            >
              <time dateTime={post.publishedAt} className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2 className="text-2xl mt-2 mb-3">
                <Link
                  href={`/insights/${post.slug}`}
                  className="hover:text-[#34A983] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.readTime}</span>
                <Link
                  href={`/insights/${post.slug}`}
                  className="text-[#34A983] hover:underline"
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

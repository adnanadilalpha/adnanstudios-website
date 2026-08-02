import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata } from './lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Page Not Found',
  description:
    'The page you are looking for does not exist. Explore Adnan Studios work, packages, and insights.',
  path: '/404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-brand mb-6">
          404
        </p>
        <h1 className="text-4xl md:text-6xl tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          This route does not exist. Head back to the studio homepage or browse
          featured work.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-brand hover:bg-brand-dark text-white transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
          >
            View work
          </Link>
        </div>
      </div>
    </main>
  )
}

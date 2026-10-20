import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { SiteShell } from '@/app/components/SiteShell'
import { caseStudyIndex } from '@/app/lib/case-study-index'
import { breadcrumbSchema } from '@/app/lib/schema'
import { siteUrl } from '@/app/lib/site'

export const metadata: Metadata = {
  title: 'Product Design Case Studies',
  description:
    'Case studies from Adnan Studios: Zero Handoff product design and development for accessibility, EdTech, FinTech, and SaaS — Figma to Next.js, Flutter, and WordPress.',
  openGraph: {
    title: 'Product Design Case Studies | Adnan Studios',
    description:
      'Selected product design case studies: DeafTawk, QuizWiz, MWS, and Moodia. Designed and shipped end to end.',
    url: `${siteUrl}/case-studies`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Design Case Studies | Adnan Studios',
    description:
      'Selected product design case studies designed and shipped end to end at Adnan Studios.',
  },
  alternates: {
    canonical: `${siteUrl}/case-studies`,
  },
}

export default function CaseStudiesIndexPage() {
  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Product Design Case Studies',
    description:
      'Case studies from Adnan Studios covering Zero Handoff product design and development.',
    url: `${siteUrl}/case-studies`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Adnan Studios',
      url: siteUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: caseStudyIndex.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/case-studies/${study.slug}`,
        name: `${study.title} Case Study`,
      })),
    },
  }

  const crumbs = breadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Case Studies', url: `${siteUrl}/case-studies` },
  ])

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <div className="relative border-t border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none stage-grid" aria-hidden />

        <main className="site-container relative pt-32 sm:pt-36 pb-20 sm:pb-28">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Case Studies' },
            ]}
          />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-1 rounded-full bg-brand" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Selected work
                </span>
              </div>
              <h1 className="display-lg text-white">Case studies</h1>
            </div>
            <p className="text-sm text-white/35 max-w-sm lg:text-right leading-relaxed">
              Product design and development case studies — Figma to production, no handoff gap.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {caseStudyIndex.map((study, i) => (
              <article
                key={study.slug}
                className="group border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors"
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="grid grid-cols-1 sm:grid-cols-[3rem_7.5rem_1fr_auto] items-start sm:items-center gap-4 sm:gap-8 py-8 sm:py-10"
                >
                  <span className="font-mono text-[11px] text-white/30 tabular-nums pt-1 sm:pt-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative hidden sm:block w-30 h-20 overflow-hidden border border-white/10 bg-white/[0.03]">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="120px"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                        {study.year}
                      </span>
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04]">
                        <span className="w-1 h-1 rounded-full bg-brand" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                          {study.subtitle}
                        </span>
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-brand transition-colors mb-2">
                      {study.title}
                    </h2>
                    <p className="text-sm text-white/45 leading-relaxed line-clamp-2 max-w-2xl">
                      {study.summary}
                    </p>
                  </div>

                  <span className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/30 group-hover:border-brand group-hover:text-brand transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </SiteShell>
  )
}

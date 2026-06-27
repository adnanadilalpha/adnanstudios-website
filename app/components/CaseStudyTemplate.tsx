'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from './Breadcrumbs'
import { TrackedCalendlyLink } from './TrackedCalendlyLink'
import { trackCaseStudyLiveClick } from '../lib/analytics'
import { siteUrl } from '../lib/site'
import type { CaseStudyData } from '../lib/case-studies'

interface CaseStudyTemplateProps {
  data: CaseStudyData
}

export function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <div className="bg-white min-h-screen">
      <nav className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-[#525252] hover:text-[#0a0a0a] transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base">Back to work</span>
          </Link>
        </div>
      </nav>

      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: siteUrl },
              { label: 'Work', href: `${siteUrl}/#projects` },
              { label: data.title },
            ]}
          />
        </div>
      </section>

      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a0a0a] leading-tight tracking-tight">
                {data.title}
              </h1>
              <p className="text-xl sm:text-2xl text-[#737373]">{data.subtitle}</p>
              <p className="text-lg sm:text-xl text-[#404040] leading-relaxed max-w-lg">{data.summary}</p>
              <div className="border-b border-[#e5e5e5] pb-6 space-y-4">
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Role</span>
                  <span className="text-sm text-[#171717]">{data.role}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Scope</span>
                  <span className="text-sm text-[#171717]">{data.scope}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Timeline</span>
                  <span className="text-sm text-[#171717]">{data.timeline}</span>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  width={768}
                  height={417}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {data.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="h-0.5 w-8 bg-[#525252] mb-3"></div>
                    <div className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a] mb-2">{metric.value}</div>
                    <div className="text-sm text-[#525252]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0a0a0a] mb-6">Problem</h2>
            <p className="text-lg text-[#404040] leading-relaxed">{data.problem}</p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0a0a0a] mb-6">Process</h2>
            <ol className="space-y-4">
              {data.process.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="text-sm font-semibold text-[#525252] w-8">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-lg text-[#404040]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0a0a0a] mb-6">Outcome</h2>
          <p className="text-lg text-[#404040] leading-relaxed mb-8">{data.outcome}</p>

          {data.testimonial && (
            <blockquote className="border-l-4 border-[#34A983] pl-6 py-2">
              <p className="text-lg text-[#404040] italic mb-4">&ldquo;{data.testimonial.quote}&rdquo;</p>
              <footer className="text-sm text-[#737373]">
                {data.testimonial.author}, {data.testimonial.role}
              </footer>
            </blockquote>
          )}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCaseStudyLiveClick(data.slug)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#34A983] hover:bg-[#2A8A6B] text-white rounded-full transition-colors"
          >
            Live Website
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <TrackedCalendlyLink
            location={`case_study_${data.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-full transition-colors"
          >
            Book a call
          </TrackedCalendlyLink>
        </div>
      </section>
    </div>
  )
}

'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedCalendlyLink } from '@/app/components/TrackedCalendlyLink';
import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import { siteUrl } from '@/app/lib/site';

export default function DeafTawkCaseStudy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-[#525252] hover:text-[#0a0a0a] transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base">Back to work</span>
          </Link>
          <Breadcrumbs
            items={[
              { label: 'Home', href: siteUrl },
              { label: 'Work', href: `${siteUrl}/#projects` },
              { label: 'DeafTawk' },
            ]}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#525252] rounded-full w-12 h-12 flex items-center justify-center text-white text-sm font-medium">
                  01
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a0a0a] leading-tight tracking-tight">
                DeafTawk Plus
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#737373]">
                Enterprise Accessibility Platform
              </p>
              
              <p className="text-lg sm:text-xl text-[#404040] leading-relaxed max-w-lg">
                Designed and led the product experience for a real-time sign language interpretation platform enabling enterprises and institutions to provide accessible communication at scale.
              </p>
              
              <div className="border-b border-[#e5e5e5] pb-6 space-y-4">
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Role</span>
                  <span className="text-sm text-[#171717]">Lead Product Designer</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Scope</span>
                  <span className="text-sm text-[#171717]">Product UX, system design, enterprise dashboard, rollout support</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Timeline</span>
                  <span className="text-sm text-[#171717]">3 months</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="/deaftawk/video.png"
                  alt="DeafTawk real-time video sign language interpretation session interface"
                  width={768}
                  height={417}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="h-0.5 w-8 bg-[#525252] mb-3"></div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-2">~60 min → &lt;30 sec</div>
                  <div className="text-sm text-[#525252]">Reduced interpreter connection time</div>
                </div>
                <div>
                  <div className="h-0.5 w-8 bg-[#525252] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">3 enterprises</div>
                  <div className="text-sm text-[#525252]">Telecom, government, retail adoption</div>
                </div>
                <div>
                  <div className="h-0.5 w-8 bg-[#525252] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">US$1.5M</div>
                  <div className="text-sm text-[#525252]">FY23 revenue with 25% MoM growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a]">Context</h2>
              <p className="text-xl sm:text-2xl text-[#404040] leading-relaxed">
                DeafTawk&apos;s existing interpretation workflow could not reliably meet the demands of enterprise and institutional use.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[rgba(82,82,82,0.08)] inline-block px-4 py-2 rounded text-xs text-[#525252]">
                Business Risk
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#525252] w-8">01</span>
                  <p className="text-lg text-[#404040]">Long connection times reduced trust in accessibility services</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#525252] w-8">02</span>
                  <p className="text-lg text-[#404040]">Institutions lacked visibility into usage and performance</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#525252] w-8">03</span>
                  <p className="text-lg text-[#404040]">No structured way to scale interpretation beyond ad-hoc sessions</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#525252] w-8">04</span>
                  <p className="text-lg text-[#404040]">Limited leverage for long-term enterprise contracts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constraints Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center">Constraints</h2>
            
            <div className="border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-lg">
              <Image
                src="/deaftawk/dashboard-deaf.png"
                alt="Dashboard"
                width={896}
                height={503}
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="flex gap-4">
                <div className="bg-[#525252] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">1</div>
                <p className="text-base text-[#404040]">Accessibility failures directly impacted user trust</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#525252] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">2</div>
                <p className="text-base text-[#404040]">Interpreter availability varied by language and time</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#525252] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">3</div>
                <p className="text-base text-[#404040]">Enterprise stakeholders required measurable outcomes</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#525252] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">4</div>
                <p className="text-base text-[#404040]">Product changes had to work across multiple institutional contexts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Decisions Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">Strategic Decisions</h2>
          
          <div className="space-y-24 max-w-4xl mx-auto">
            {/* Decision 1 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(82,82,82,0.13)] leading-none hidden sm:block">01</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Optimise for connection speed over feature depth</h3>
                <p className="text-xl text-[#404040]">Focused design effort on reducing time-to-interpreter before expanding functionality.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Delayed secondary features</p>
                  </div>
                  <div className="border-l-2 border-[#525252] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#525252]">GAIN</div>
                    <p className="text-base text-[#404040]">Trust, repeat usage, and institutional confidence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(82,82,82,0.13)] leading-none hidden sm:block">02</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Build enterprise visibility into the core product</h3>
                <p className="text-xl text-[#404040]">Designed admin views to track usage, sessions, and interpreter performance.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Slower consumer-facing iteration</p>
                  </div>
                  <div className="border-l-2 border-[#525252] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#525252]">GAIN</div>
                    <p className="text-base text-[#404040]">B2B credibility and contract readiness</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(82,82,82,0.13)] leading-none hidden sm:block">03</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Design for multi-institution rollout</h3>
                <p className="text-xl text-[#404040]">Created flexible flows and branding layers to support different sectors.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Less rigid standardisation</p>
                  </div>
                  <div className="border-l-2 border-[#525252] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#525252]">GAIN</div>
                    <p className="text-base text-[#404040]">Faster adoption across telecom, government, and retail environments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">The System</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/deaftawk/video.png"
                  alt="Real-time Connection Layer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#525252]">01</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Real-time Connection Layer</h3>
                <p className="text-base text-[#525252]">Optimised interpreter matching and connection flow</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/deaftawk/language.png"
                  alt="Multi-Language Network"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#525252]">02</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Multi-Language Network</h3>
                <p className="text-base text-[#525252]">3,200+ interpreters across regions and languages</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/deaftawk/dashboard-deaf.png"
                  alt="Enterprise Dashboards"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#525252]">03</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Enterprise Dashboards</h3>
                <p className="text-base text-[#525252]">Usage tracking, session analytics, interpreter performance</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/deaftawk/rollout.png"
                  alt="Configurable Rollout"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#525252]">04</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Configurable Rollout</h3>
                <p className="text-base text-[#525252]">Flexible flows and branding for institutional contexts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Adoption Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a]">Institutional Adoption</h2>
              <p className="text-2xl sm:text-3xl text-[#404040]">
                Deployed across telecom, government, and retail sectors through formal partnerships.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="text-xs text-[#737373] uppercase tracking-wider">Partners</div>
              <div className="space-y-8 opacity-40">
                <div className="border-2 border-[#e5e5e5] rounded-[10px] h-28 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#171717]">JAZZ</span>
                </div>
                <div className="border-2 border-[#e5e5e5] rounded-[10px] h-28 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#171717]">PTA</span>
                </div>
                <div className="border-2 border-[#e5e5e5] rounded-[10px] h-28 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#171717]">KINGFISHER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">Impact</h2>
          
          <div className="grid sm:grid-cols-4 gap-8 sm:gap-16 mb-16">
            <div className="text-center">
              <div className="w-3 h-3 bg-[#525252] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">68,000+</div>
              <div className="text-sm text-[#525252]">users served via enterprise channels</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#525252] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">3,200+</div>
              <div className="text-sm text-[#525252]">interpreters across multiple languages</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#525252] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">US$1.5M</div>
              <div className="text-sm text-[#525252]">FY23 revenue</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#525252] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">25%</div>
              <div className="text-sm text-[#525252]">month-on-month growth</div>
            </div>
          </div>

          <div className="border-t border-[#e5e5e5] pt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Leverage Created</h3>
            <p className="text-xl text-[#404040] leading-relaxed">
              Shifted DeafTawk from appointment-based interpretation to scalable, on-demand accessibility infrastructure suitable for enterprise and public-sector use.
            </p>
          </div>
        </div>
      </section>

      {/* Relevant if you are Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a]">Relevant if you are:</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#525252] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Building accessibility or regulated products</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#525252] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Selling into enterprises or institutions</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#525252] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Scaling services where trust and latency matter</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#525252] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Turning operational workflows into platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#34A983]/5 via-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-1 bg-[#525252] rounded mx-auto mb-8"></div>
          <p className="text-3xl sm:text-4xl text-[#404040] leading-relaxed mb-12">
            If you are building a product where trust, speed, and scale matter, I can help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <TrackedCalendlyLink
              location="case_study_deaftawk"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#34A983] hover:bg-[#2A8A6B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              <span>Book Call</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </TrackedCalendlyLink>
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 rounded-full transition-all duration-300 text-lg font-medium"
            >
              <span>View More Work</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

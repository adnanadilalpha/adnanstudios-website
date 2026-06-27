'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedCalendlyLink } from '@/app/components/TrackedCalendlyLink';
import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import { siteUrl } from '@/app/lib/site';

export default function StockCaseStudy() {
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
              { label: 'Private Subscriber Product' },
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
                <div className="bg-[#404040] rounded-full w-12 h-12 flex items-center justify-center text-white text-sm font-medium">
                  03
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a0a0a] leading-tight tracking-tight">
                Private Subscriber Product
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#737373]">
                Subscriber-Only Platform
              </p>
              
              <p className="text-lg sm:text-xl text-[#404040] leading-relaxed max-w-lg">
                Designed a product experience for a restricted-access platform, explicitly available only to subscribers.
              </p>
              
              <div className="border-b border-[#e5e5e5] pb-6 space-y-4">
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Role</span>
                  <span className="text-sm text-[#171717]">Product Designer & Developer</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Scope</span>
                  <span className="text-sm text-[#171717]">End-to-end product design and implementation</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Timeline</span>
                  <span className="text-sm text-[#171717]">Pre-launch</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="/stock/login.png"
                  alt="Login screen"
                  width={768}
                  height={417}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="h-0.5 w-8 bg-[#404040] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">120+</div>
                  <div className="text-sm text-[#525252]">Active users pre-launch</div>
                </div>
                <div>
                  <div className="h-0.5 w-8 bg-[#404040] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">Next week</div>
                  <div className="text-sm text-[#525252]">Launch scheduled</div>
                </div>
                <div>
                  <div className="h-0.5 w-8 bg-[#404040] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">Restricted</div>
                  <div className="text-sm text-[#525252]">Access limited to subscribers</div>
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
              <p className="text-xl sm:text-2xl text-[#404040]">
                The product was intentionally not public.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[rgba(64,64,64,0.08)] inline-block px-4 py-2 rounded text-xs text-[#404040]">
                Goals
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#404040] w-8">01</span>
                  <p className="text-lg text-[#404040]">Serve a controlled user group</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#404040] w-8">02</span>
                  <p className="text-lg text-[#404040]">Validate functionality before wider exposure</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#404040] w-8">03</span>
                  <p className="text-lg text-[#404040]">Ship fast without public-facing marketing requirements</p>
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
                src="/stock/dashboard.png"
                alt="Dashboard"
                width={896}
                height={485}
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="flex gap-4">
                <div className="bg-[#404040] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">1</div>
                <p className="text-base text-[#404040]">No public onboarding</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#404040] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">2</div>
                <p className="text-base text-[#404040]">No organic discovery</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#404040] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">3</div>
                <p className="text-base text-[#404040]">Feedback loop limited to subscribers</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#404040] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">4</div>
                <p className="text-base text-[#404040]">Launch timeline fixed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decisions Made Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">Decisions Made</h2>
          
          <div className="space-y-24 max-w-4xl mx-auto">
            {/* Decision 1 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(64,64,64,0.13)] leading-none hidden sm:block">01</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Build for known users, not discovery</h3>
                <p className="text-xl text-[#404040]">No landing-page optimisation or SEO flows needed.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Limited growth potential</p>
                  </div>
                  <div className="border-l-2 border-[#404040] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#404040]">GAIN</div>
                    <p className="text-base text-[#404040]">Faster development cycle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(64,64,64,0.13)] leading-none hidden sm:block">02</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Prioritise core workflows over polish</h3>
                <p className="text-xl text-[#404040]">Focused on functional completeness over visual experimentation.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Less refined visual design</p>
                  </div>
                  <div className="border-l-2 border-[#404040] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#404040]">GAIN</div>
                    <p className="text-base text-[#404040]">Shipped on fixed timeline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(64,64,64,0.13)] leading-none hidden sm:block">03</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Limit access deliberately</h3>
                <p className="text-xl text-[#404040]">Kept the product gated to maintain feedback quality and control rollout.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Slower user acquisition</p>
                  </div>
                  <div className="border-l-2 border-[#404040] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#404040]">GAIN</div>
                    <p className="text-base text-[#404040]">Higher quality feedback and controlled launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Product Section */}
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">The Product</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/stock/subscriber.png"
                  alt="Subscriber-Only Access"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#404040]">01</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Subscriber-Only Access</h3>
                <p className="text-base text-[#525252]">Deliberate gating for controlled rollout</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/stock/workflow.png"
                  alt="Core Workflow Focus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#404040]">02</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Core Workflow Focus</h3>
                <p className="text-base text-[#525252]">Functional completeness prioritised</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/stock/dashboard.png"
                  alt="Dashboard view"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#404040]">03</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Dashboard view of all tickers</h3>
                <p className="text-base text-[#525252]">Limited to known subscriber group</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/stock/tickers.png"
                  alt="Tickers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#404040]">04</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">82+ tickers in sectors, caps and markets</h3>
                <p className="text-base text-[#525252]">Data that gives you insight in real time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] mb-8">Current Status</h2>
          <p className="text-2xl sm:text-3xl text-[#404040]">
            Product in active use by 120+ subscribers before public launch.
          </p>
        </div>
      </section>

      {/* Pre-Launch Outcome Section */}
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">Pre-Launch Outcome</h2>
          
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-16 mb-16">
            <div className="text-center">
              <div className="w-3 h-3 bg-[#404040] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">120+</div>
              <div className="text-sm text-[#525252]">active users before launch</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#404040] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">Next week</div>
              <div className="text-sm text-[#525252]">public launch scheduled</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#404040] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">Subscriber-only</div>
              <div className="text-sm text-[#525252]">deliberate access control</div>
            </div>
          </div>

          <div className="border-t border-[#e5e5e5] pt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Why This Case Study Exists</h3>
            <p className="text-xl text-[#404040] leading-relaxed">
              Demonstrates designing for constrained environments, shipping under fixed timelines, building for real users not hypothetical personas, and making deliberate access and rollout decisions.
            </p>
          </div>
        </div>
      </section>

      {/* This case study demonstrates Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a]">This case study demonstrates</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#404040] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Designing for constrained environments</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#404040] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Shipping under fixed timelines</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#404040] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Building for real users, not hypothetical personas</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#404040] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Making deliberate access and rollout decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#34A983]/5 via-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-1 bg-[#404040] rounded mx-auto mb-8"></div>
          <p className="text-3xl sm:text-4xl text-[#404040] leading-relaxed mb-12">
            If you are building a product where trust, speed, and scale matter, I can help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <TrackedCalendlyLink
              location="case_study_stock"
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

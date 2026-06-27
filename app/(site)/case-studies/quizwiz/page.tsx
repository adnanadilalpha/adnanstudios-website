'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedCalendlyLink } from '@/app/components/TrackedCalendlyLink';
import { Breadcrumbs } from '@/app/components/Breadcrumbs';
import { siteUrl } from '@/app/lib/site';

export default function QuizWizCaseStudy() {
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
              { label: 'QuizWiz' },
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
                <div className="bg-[#737373] rounded-full w-12 h-12 flex items-center justify-center text-white text-sm font-medium">
                  02
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#0a0a0a] leading-tight tracking-tight">
                QuizWiz
              </h1>
              
              <p className="text-xl sm:text-2xl text-[#737373]">
                AI-Powered Quiz Generator for Educators
              </p>
              
              <p className="text-lg sm:text-xl text-[#404040] leading-relaxed max-w-lg">
                QuizWiz enables educators to generate quizzes from text, PDFs, and URLs, edit the output, and export for classroom use.
              </p>
              
              <div className="border-b border-[#e5e5e5] pb-6 space-y-4">
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Role</span>
                  <span className="text-sm text-[#171717]">Lead Designer</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Scope</span>
                  <span className="text-sm text-[#171717]">Product UX, prototyping, feature prioritisation</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm text-[#737373] w-24">Timeline</span>
                  <span className="text-sm text-[#171717]">1 month</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <div className="border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="/quizwiz/login-quiz.png"
                  alt="Login screen"
                  width={768}
                  height={417}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="h-0.5 w-8 bg-[#737373] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">60k+</div>
                  <div className="text-sm text-[#525252]">Monthly visits</div>
                </div>
                <div>
                  <div className="h-0.5 w-8 bg-[#737373] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">1k+</div>
                  <div className="text-sm text-[#525252]">Active users</div>
                </div>
                <div>
                  <div className="h-0.5 w-8 bg-[#737373] mb-3"></div>
                  <div className="text-3xl sm:text-4xl font-semibold text-[#0a0a0a] mb-2">4.7★</div>
                  <div className="text-sm text-[#525252]">Average rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a]">The Problem</h2>
              <p className="text-xl sm:text-2xl text-[#404040] leading-relaxed">
                Educators needed a faster way to create quizzes from existing teaching material and reuse them in assessment tools.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[rgba(115,115,115,0.08)] inline-block px-4 py-2 rounded text-xs text-[#737373]">
                Key Problems
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#737373] w-8">01</span>
                  <p className="text-lg text-[#404040]">Manual quiz creation took 5–10 minutes per quiz</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#737373] w-8">02</span>
                  <p className="text-lg text-[#404040]">No simple way to generate quizzes from PDFs or URLs</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#737373] w-8">03</span>
                  <p className="text-lg text-[#404040]">No free entry point to evaluate quality before committing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center">Research & Discovery</h2>
            
            <div className="border border-[#e5e5e5] rounded-[10px] overflow-hidden shadow-lg">
              <Image
                src="/quizwiz/library.png"
                alt="Library"
                width={896}
                height={485}
                className="w-full h-auto"
              />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="flex gap-4">
                <div className="bg-[#737373] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">1</div>
                <p className="text-base text-[#404040]">~60k monthly visitors indicated clear demand for AI quiz generation tools</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#737373] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">2</div>
                <p className="text-base text-[#404040]">User feedback showed concerns around output quality</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#737373] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">3</div>
                <p className="text-base text-[#404040]">Need for editable questions before use identified</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#737373] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">4</div>
                <p className="text-base text-[#404040]">Competitive review showed few tools supported PDF and URL inputs</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#737373] rounded-full w-7 h-7 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">5</div>
                <p className="text-base text-[#404040]">Limited export workflows in existing solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Delivery Decisions Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">Design & Delivery Decisions</h2>
          
          <div className="space-y-24 max-w-4xl mx-auto">
            {/* Decision 1 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(115,115,115,0.13)] leading-none hidden sm:block">01</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Focus on input flexibility first</h3>
                <p className="text-xl text-[#404040]">Supported text, PDF, and URL inputs before expanding quiz types.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Delayed additional quiz format options</p>
                  </div>
                  <div className="border-l-2 border-[#737373] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#737373]">GAIN</div>
                    <p className="text-base text-[#404040]">Reduced friction for first-time users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(115,115,115,0.13)] leading-none hidden sm:block">02</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Make output editable by default</h3>
                <p className="text-xl text-[#404040]">Allowed users to modify questions and answers before export.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Added complexity to output interface</p>
                  </div>
                  <div className="border-l-2 border-[#737373] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#737373]">GAIN</div>
                    <p className="text-base text-[#404040]">Addressed quality concerns raised in feedback</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="flex gap-8 sm:gap-12">
              <div className="text-[128px] font-bold text-[rgba(115,115,115,0.13)] leading-none hidden sm:block">03</div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0a0a0a]">Introduce starter credits</h3>
                <p className="text-xl text-[#404040]">Implemented a free plan to let users test quiz quality.</p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="border-l-2 border-[#ffc9c9] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#e7000b]">TRADEOFF</div>
                    <p className="text-base text-[#404040]">Reduced immediate revenue</p>
                  </div>
                  <div className="border-l-2 border-[#737373] pl-6 space-y-3">
                    <div className="text-xs font-semibold text-[#737373]">GAIN</div>
                    <p className="text-base text-[#404040]">Reduced entry barrier without removing monetisation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">The Solution</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/quizwiz/formats.png"
                  alt="Multi-Format Input"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#737373]">01</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Multi-Format Input</h3>
                <p className="text-base text-[#525252]">Text, PDF, and URL support</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/quizwiz/quiz-formats.png"
                  alt="Multiple Quiz Formats"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#737373]">02</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Multiple Quiz Formats</h3>
                <p className="text-base text-[#525252]">MCQs, fill-in-the-blanks</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/quizwiz/output.png"
                  alt="Editable Output"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#737373]">03</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Editable Output</h3>
                <p className="text-base text-[#525252]">Modify questions and answers before export</p>
              </div>
            </div>

            <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden flex flex-col">
              <div className="bg-[#fafafa] w-full relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/quizwiz/share-forms.png"
                  alt="Export to Google Forms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="text-xs font-semibold text-[#737373]">04</div>
                <h3 className="text-2xl font-semibold text-[#0a0a0a]">Export to Google Forms</h3>
                <p className="text-base text-[#525252]">Direct integration with classroom tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] mb-8">Adoption</h2>
          <p className="text-2xl sm:text-3xl text-[#404040]">
            Subscription-based pricing with free starter credits to reduce entry barrier.
          </p>
        </div>
      </section>

      {/* Results & Impact Section */}
      <section className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a] text-center mb-16 sm:mb-24">Results & Impact</h2>
          
          <div className="grid sm:grid-cols-4 gap-8 sm:gap-16 mb-16">
            <div className="text-center">
              <div className="w-3 h-3 bg-[#737373] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">60k+</div>
              <div className="text-sm text-[#525252]">monthly visits</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#737373] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">1k+</div>
              <div className="text-sm text-[#525252]">active users</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#737373] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">4.7★</div>
              <div className="text-sm text-[#525252]">average rating</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-[#737373] rounded-full mx-auto mb-4"></div>
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a0a0a] mb-2">$8.25/mo</div>
              <div className="text-sm text-[#525252]">subscription plans up to</div>
            </div>
          </div>

          <div className="border-t border-[#e5e5e5] pt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-6">Key Impact</h3>
            <p className="text-xl text-[#404040] leading-relaxed">
              Increased engagement driven by free credits and editable output, establishing trust before monetisation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Learnings Section */}
      <section className="border-b border-[#e5e5e5] px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <h2 className="text-4xl sm:text-5xl font-medium text-[#0a0a0a]">Key Learnings</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#737373] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Editable output is required for educator trust</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#737373] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Export workflows directly affect adoption</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#737373] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Free access at launch improves trial conversion</p>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#737373] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-[#404040]">Multiple quiz formats increase repeat usage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#34A983]/5 via-blue-50/50 to-purple-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-1 bg-[#737373] rounded mx-auto mb-8"></div>
          <p className="text-3xl sm:text-4xl text-[#404040] leading-relaxed mb-12">
            If you are building a product where trust, speed, and scale matter, I can help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <TrackedCalendlyLink
              location="case_study_quizwiz"
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

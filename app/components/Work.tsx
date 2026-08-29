'use client';

import { useRef, useLayoutEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { trackCaseStudyLiveClick } from '../lib/analytics';
import { useScrollReveal } from './motion/useScrollReveal';

interface WorkProps {
  onContactClick: () => void;
}

const workData = [
  {
    id: 'lockn',
    title: 'Lockn',
    category: 'FinTech',
    year: "'24",
    image: '/images/lockn.webp',
    caseStudy: '/case-studies/lockn',
    liveUrl: 'https://locknapp.com/',
  },
  {
    id: 'ican',
    title: 'iCan',
    category: 'EdTech',
    year: "'23",
    image: '/images/ican.webp',
    liveUrl: 'https://www.icantutoring.co.uk/',
  },
  {
    id: 'moodia',
    title: 'Moodia',
    category: 'Health',
    year: "'24",
    image: '/images/moodia.webp',
    caseStudy: '/case-studies/moodia',
    liveUrl: 'https://moodia.co.uk/',
  },
];

export function Work({ onContactClick }: WorkProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const moveX = useRef<((v: number) => void) | null>(null);
  const moveY = useRef<((v: number) => void) | null>(null);

  useScrollReveal(sectionRef, { selector: '.work-row', stagger: 0.1 });

  useLayoutEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    gsap.set(preview, { xPercent: -50, yPercent: -55 });
    moveX.current = gsap.quickTo(preview, 'x', { duration: 0.5, ease: 'power3' });
    moveY.current = gsap.quickTo(preview, 'y', { duration: 0.5, ease: 'power3' });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    moveX.current?.(e.clientX);
    moveY.current?.(e.clientY);
  }, []);

  useLayoutEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    gsap.to(preview, {
      opacity: activeId ? 1 : 0,
      scale: activeId ? 1 : 0.92,
      duration: 0.35,
      ease: 'power2.out',
    });
  }, [activeId]);

  return (
    <section
      id="work"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#0a0a0a] text-white border-t border-white/[0.08] overflow-hidden"
    >
      {/* Grid texture continues */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden
      />

      <div className="site-container relative section-pad">
        <div className="flex items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Archive
              </span>
            </div>
            <h2 className="display-lg text-white">More work</h2>
          </div>
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex text-sm text-white/40 hover:text-brand transition-colors"
          >
            Start a project →
          </button>
        </div>

        <div className="border-t border-white/[0.08]">
          {workData.map((project, i) => (
            <article
              key={project.id}
              className="work-row group relative border-b border-white/[0.08]"
              onMouseEnter={() => setActiveId(project.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCaseStudyLiveClick(project.id)}
                className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[3rem_1fr_auto_auto] items-center gap-4 sm:gap-8 py-7 sm:py-9"
              >
                <span className="font-mono text-[10px] text-white/30 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex items-center gap-4 min-w-0">
                  {/* Mobile thumbnail — desktop uses the floating preview */}
                  <div className="relative w-14 h-14 shrink-0 overflow-hidden border border-white/10 lg:hidden">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white/80 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 truncate">
                    {project.title}
                  </h3>
                </div>

                <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
                  <span className="w-1 h-1 rounded-full bg-brand" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 whitespace-nowrap">
                    {project.category} · {project.year}
                  </span>
                </div>

                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/50 group-hover:border-brand group-hover:text-brand group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="absolute bottom-3 left-[3rem] sm:left-[5rem] text-[11px] font-mono uppercase tracking-[0.15em] text-white/25 hover:text-brand transition-colors"
                >
                  Case study ↗
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Floating cursor preview — desktop only */}
      <div
        ref={previewRef}
        className="fixed top-0 left-0 z-30 w-80 pointer-events-none hidden lg:block opacity-0"
        aria-hidden
      >
        <div className="relative -translate-x-0 -translate-y-0 rotate-[2deg]">
          <div className="absolute -top-2 -right-2 w-full h-full border border-brand/20" />
          <div className="relative aspect-[4/3] overflow-hidden border border-white/15 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.9)]">
            {workData.map((project) => (
              <Image
                key={project.id}
                src={project.image}
                alt=""
                fill
                sizes="320px"
                className={`object-cover object-top transition-opacity duration-300 ${
                  activeId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useLayoutEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Marquee } from './ui/Marquee';
import { useLenis } from '@/app/hooks/useLenis';

const HeroOrb = dynamic(
  () => import('./visual/HeroOrb').then((mod) => mod.HeroOrb),
  { ssr: false }
);

interface HeroProps {
  onContactClick: () => void;
  headline?: string;
  animate?: boolean;
}

const clients = [
  'DeafTawk',
  'QuizWiz',
  'OneScreen',
  'iCan Tutoring',
  'LockN',
  'Letaide',
  'ScaleX',
  'MWS',
];

const hudTags = [
  { label: 'Figma', className: 'left-[8%] top-[12%] lg:left-[16%] lg:top-[18%]' },
  { label: 'Code', className: 'right-[6%] top-[30%] lg:right-[15%] lg:top-[8%]' },
  { label: 'Top Rated', className: 'left-[12%] bottom-[24%] lg:left-[22%] lg:bottom-[30%]' },
  { label: 'WDA nominee', className: 'right-[10%] bottom-[14%] lg:right-[19%] lg:bottom-[22%]' },
];

export function Hero({
  onContactClick,
  headline = 'One studio. Figma to production.',
  animate = true,
}: HeroProps) {
  const scopeRef = useRef<HTMLElement>(null);
  const { scrollToSection } = useLenis();

  useLayoutEffect(() => {
    if (!scopeRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!animate || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-aurora', { opacity: 0, duration: 1.6, ease: 'power2.out' }, 0)
        .from('.hero-eyebrow', { y: 14, opacity: 0, duration: 0.5 }, 0.15)
        .from('.hero-word', { y: '110%', duration: 0.8, stagger: 0.08 }, 0.25)
        .from('.hero-sub', { y: 18, opacity: 0, duration: 0.5 }, 0.55)
        .from('.hero-cta', { y: 14, opacity: 0, duration: 0.45, stagger: 0.08 }, 0.65)
        .from('.hero-orb-wrap', { opacity: 0, scale: 0.94, duration: 1.2, ease: 'power2.out' }, 0.4)
        .from('.hero-hud', { opacity: 0, y: 8, duration: 0.5, stagger: 0.1 }, 1.0)
        .from('.hero-marquee-bar', { opacity: 0, duration: 0.6 }, 1.1);
    }, scopeRef);

    return () => ctx.revert();
  }, [animate]);

  return (
    <section
      id="hero"
      ref={scopeRef}
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Aurora — brand-green light rising from below */}
      <div className="hero-aurora absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-0 left-[-4%] w-[26%] h-[70%] bg-linear-to-t from-brand/50 via-brand/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-[24%] w-[16%] h-[45%] bg-linear-to-t from-brand/35 via-brand/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-[46%] w-[20%] h-[60%] bg-linear-to-t from-brand-light/40 via-brand/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-[12%] w-[18%] h-[50%] bg-linear-to-t from-brand/40 via-brand/12 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-[-6%] w-[24%] h-[72%] bg-linear-to-t from-brand-dark/55 via-brand/15 to-transparent blur-3xl" />
        {/* Glow behind the orb */}
        <div className="absolute left-1/2 bottom-[6%] -translate-x-1/2 w-[42rem] h-[42rem] max-w-[90vw] rounded-full bg-brand/15 blur-[110px]" />
        {/* Fade everything into black at the very bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Faint circuit grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden
      />

      {/* Copy — centered upper half */}
      <div className="relative z-10 flex flex-col items-center text-center site-container pt-32 sm:pt-36 pb-4">

        <h1 className="hero-display mb-6">
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">One studio.</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block">
              Design <span className="text-brand">→ Ship.</span>
            </span>
          </span>
        </h1>

        <p className="hero-sub text-sm sm:text-base text-white/45 max-w-[44ch] leading-relaxed mb-8">
          {headline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onContactClick}
            className="hero-cta group inline-flex items-center gap-2.5 bg-white text-[#0a0a0a] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors"
          >
            Start a project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-sm font-medium text-white/70 hover:text-white hover:border-white/35 transition-colors"
          >
            View work
          </button>
        </div>
      </div>

      {/* 3D centerpiece — interlocked rings: design + code, one studio */}
      <div className="relative flex-1 min-h-[38vh]">
        <div className="hero-orb-wrap absolute inset-0">
          <HeroOrb />
        </div>

        {hudTags.map((tag) => (
          <div
            key={tag.label}
            className={`hero-hud absolute ${tag.className} hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm`}
          >
            <span className="w-1 h-1 rounded-full bg-brand" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">
              {tag.label}
            </span>
          </div>
        ))}
      </div>

      {/* Client marquee */}
      <div className="hero-marquee-bar relative z-10 border-t border-white/[0.08]">
        <div className="site-container py-4">
          <Marquee speed={32}>
            {clients.map((client, i) => (
              <span
                key={i}
                className="mx-8 text-xs text-white/30 font-medium whitespace-nowrap uppercase tracking-[0.2em]"
              >
                {client}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

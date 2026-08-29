'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trackCaseStudyLiveClick } from '../lib/analytics';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  stat: string;
  statLabel: string;
  image: string;
  links: {
    caseStudy?: string;
    liveDemo?: string;
  };
}

const projects: Project[] = [
  {
    id: 'deaftawk',
    title: 'DeafTawk',
    category: 'Accessibility',
    year: "'24",
    stat: '68K',
    statLabel: 'users in production',
    image: '/images/deaftawk.webp',
    links: {
      caseStudy: '/case-studies/deaftawk',
      liveDemo: 'https://b2b.deaftawk.com/signup',
    },
  },
  {
    id: 'quizwiz',
    title: 'QuizWiz',
    category: 'EdTech',
    year: "'25",
    stat: '60K',
    statLabel: 'visits per month',
    image: '/images/quiz.webp',
    links: {
      caseStudy: '/case-studies/quizwiz',
      liveDemo: 'https://quizwiz2.onescreensolutions.com/',
    },
  },
  {
    id: 'stock',
    title: 'MWS',
    category: 'FinTech',
    year: "'25",
    stat: 'Beta',
    statLabel: 'private release',
    image: '/images/stock.webp',
    links: {
      caseStudy: '/case-studies/stock',
      liveDemo: 'https://app.myweeklystock.com/',
    },
  },
];

const DESKTOP_PIN_QUERY = '(min-width: 1024px) and (hover: hover) and (pointer: fine)';

export function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: reduce)', () => {
      setIsPinned(false);
    });

    mm.add(DESKTOP_PIN_QUERY, () => {
      setIsPinned(true);

      const ctx = gsap.context(() => {
        const slides = gsap.utils.toArray<HTMLElement>('.fw-slide', section);
        const counters = gsap.utils.toArray<HTMLElement>('.fw-count', section);

        slides.forEach((slide, i) => {
          gsap.set(slide, {
            clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
            zIndex: i + 1,
            pointerEvents: i === 0 ? 'auto' : 'none',
          });
        });
        counters.forEach((c, i) => {
          gsap.set(c, { opacity: i === 0 ? 1 : 0.25 });
        });

        gsap.utils.toArray<HTMLElement>('.fw-panel', section).forEach((panel, i) => {
          gsap.to(panel, {
            y: i % 2 === 0 ? -10 : 10,
            duration: 4 + i,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
          });
        });
        gsap.to('.fw-glow', {
          opacity: 0.7,
          scale: 1.08,
          duration: 3.5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin,
            start: 'top top',
            end: `+=${(projects.length - 1) * 100}%`,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                projects.length - 1,
                Math.round(self.progress * (projects.length - 1))
              );
              slides.forEach((s, i) => {
                s.style.pointerEvents = i === idx ? 'auto' : 'none';
              });
            },
          },
        });

        projects.forEach((_, i) => {
          if (i === 0) return;

          const slide = slides[i];
          const inner = slide.querySelectorAll('.fw-reveal');
          const panel = slide.querySelector('.fw-panel-wrap');

          tl.to(
            slide,
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power3.inOut' },
            i === 1 ? 0.12 : '>0.3'
          )
            .fromTo(
              panel,
              { xPercent: 18 },
              { xPercent: 0, duration: 1, ease: 'power3.out' },
              '<'
            )
            .fromTo(
              inner,
              { y: 40, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
              '<0.35'
            )
            .to(counters[i - 1], { opacity: 0.25, duration: 0.4 }, '<')
            .to(counters[i], { opacity: 1, duration: 0.4 }, '<');
        });
      }, section);

      const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 600);

      return () => {
        window.clearTimeout(refreshTimer);
        ctx.revert();
        setIsPinned(false);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none stage-grid" aria-hidden />

      <div
        ref={pinRef}
        className={`relative ${isPinned ? 'lg:h-screen lg:overflow-hidden' : ''}`}
      >
        {/* Header — in document flow on mobile, overlays pinned stage on desktop */}
        <div className="relative z-20 lg:absolute lg:top-0 lg:inset-x-0 pointer-events-none">
          <div className="site-container pt-14 pb-6 lg:pt-20 lg:pb-0 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-1 rounded-full bg-brand" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Work
                </span>
              </div>
              <h2 className="display-lg text-white">Selected work</h2>
            </div>

            <div className="hidden lg:flex items-center gap-4 pb-2">
              {projects.map((p, i) => (
                <span
                  key={p.id}
                  className="fw-count font-mono text-xs text-white tabular-nums"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile — horizontal snap, one card at a time */}
        <div className="lg:hidden site-container pb-10">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-1 px-1 pb-1">
            {projects.map((project, i) => (
              <article
                key={project.id}
                className="fw-slide-mobile shrink-0 snap-center w-[calc(100%-0.25rem)] border border-white/[0.08] bg-white/[0.02] overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="90vw"
                    className="object-cover object-top"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/20 pointer-events-none" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-[#0a0a0a]/70 backdrop-blur-sm">
                    <span className="w-1 h-1 rounded-full bg-brand" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {project.category} · {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-white/30 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                      {project.stat} {project.statLabel}
                    </span>
                  </div>
                  <h3 className="text-3xl font-medium tracking-tight text-white mb-5">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.links.caseStudy!}
                      className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] px-5 py-2.5 rounded-full text-sm font-medium"
                    >
                      Case study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackCaseStudyLiveClick(project.id)}
                        className="inline-flex items-center gap-1.5 text-sm text-white/50"
                      >
                        Live
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
              Swipe
            </span>
            <span className="text-white/20">→</span>
          </div>
        </div>

        {/* Desktop — pinned scrub slides */}
        <div className={`hidden lg:block ${isPinned ? 'h-screen' : ''}`}>
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`fw-slide bg-[#0a0a0a] ${
                isPinned ? 'absolute inset-0' : 'relative'
              }`}
            >
              <div
                className="fw-glow absolute right-[8%] top-1/2 -translate-y-1/2 w-[36rem] h-[26rem] max-w-[80vw] rounded-full bg-brand/[0.13] blur-[110px] pointer-events-none opacity-50"
                aria-hidden
              />

              <div className="site-container relative flex flex-col justify-center gap-8 h-screen pt-36">
                <div className="grid grid-cols-12 items-center gap-6">
                  <div className="relative z-10 col-span-5 col-start-1">
                    <div className="fw-reveal flex items-center gap-3 mb-5">
                      <span className="font-mono text-[10px] text-white/35 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-8 bg-brand/50" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                        {project.category} · {project.year}
                      </span>
                    </div>

                    <h3 className="fw-reveal text-[clamp(3rem,7vw,6.5rem)] font-medium tracking-tighter leading-[0.9] mb-6 whitespace-nowrap">
                      {project.title}
                    </h3>

                    <div className="fw-reveal flex items-baseline gap-3 mb-10">
                      <span className="text-3xl sm:text-4xl font-medium text-brand tracking-tight">
                        {project.stat}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {project.statLabel}
                      </span>
                    </div>

                    <div className="fw-reveal flex items-center gap-4">
                      <Link
                        href={project.links.caseStudy!}
                        className="group inline-flex items-center gap-2.5 bg-white text-[#0a0a0a] px-6 py-3 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors"
                      >
                        Case study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      {project.links.liveDemo && (
                        <a
                          href={project.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackCaseStudyLiveClick(project.id)}
                          className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-brand transition-colors"
                        >
                          Live site
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="fw-panel-wrap relative col-span-7 col-start-6">
                    <div className="fw-panel relative rotate-[1.5deg]">
                      <div
                        className="absolute -top-3 -right-3 w-full h-full border border-brand/15 pointer-events-none"
                        aria-hidden
                      />
                      <div className="relative aspect-[16/10] overflow-hidden border border-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="55vw"
                          className="object-cover object-top"
                          priority={i === 0}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/25 pointer-events-none" />
                        <div className="absolute inset-0 bg-brand/[0.06] mix-blend-multiply pointer-events-none" />

                        <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0a0a0a]/70 backdrop-blur-sm">
                          <span className="w-1 h-1 rounded-full bg-brand" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                            Shipped {project.year}
                          </span>
                        </div>
                      </div>

                      <p
                        className="absolute -bottom-8 -left-4 text-[clamp(3rem,6vw,5rem)] font-medium leading-none tracking-tighter text-white/[0.06] pointer-events-none select-none"
                        aria-hidden
                      >
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

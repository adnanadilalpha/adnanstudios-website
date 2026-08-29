'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Metric = {
  label: string;
  highlight?: boolean;
  compact?: boolean;
} & (
  | { value: number; suffix: string; display?: never }
  | { display: string; value?: never; suffix?: never }
);

const metrics: Metric[] = [
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 100, suffix: '%', label: 'Job success score' },
  { display: 'Top Rated', label: 'Upwork freelancer', highlight: true, compact: true },
  { value: 3, suffix: '×', label: 'WDA nominee' },
];

export function MetricStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.metric-item', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      });

      el.querySelectorAll<HTMLElement>('.metric-num').forEach((num) => {
        const target = Number(num.dataset.value ?? 0);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => {
            num.textContent = String(Math.round(counter.v));
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Credibility"
      className="relative bg-[#0a0a0a] text-white border-t border-white/[0.08] overflow-hidden"
    >
      {/* Continue the hero's faint grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden
      />
      {/* Soft green wash bleeding down from the hero */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[50rem] h-64 rounded-full bg-brand/10 blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="site-container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`metric-item py-10 sm:py-14 px-5 sm:px-6 border-white/[0.08] ${
                i > 0 ? 'border-l max-lg:odd:border-l-0' : ''
              } max-lg:[&:nth-child(n+3)]:border-t`}
            >
              <p
                className={`font-medium tracking-tight leading-none ${
                  m.compact
                    ? 'text-[1.65rem] sm:text-4xl lg:text-[2.35rem]'
                    : 'text-4xl sm:text-5xl'
                } ${m.highlight ? 'text-brand' : 'text-white'}`}
              >
                {m.value != null ? (
                  <>
                    <span className="metric-num" data-value={m.value}>
                      {m.value}
                    </span>
                    {m.suffix}
                  </>
                ) : (
                  m.display
                )}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span
                  className={`w-1 h-1 rounded-full ${
                    m.highlight ? 'bg-brand' : 'bg-white/25'
                  }`}
                />
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

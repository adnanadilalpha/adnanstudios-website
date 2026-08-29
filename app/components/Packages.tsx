'use client';

import { useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { trackPackageClick } from '../lib/analytics';

gsap.registerPlugin(ScrollTrigger);

interface PackagesProps {
  onContactClick: () => void;
}

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$5K',
    weeks: '4–6 wk',
    scope: 35,
    specs: ['10 screens', '2 revisions', 'Design + build'],
    highlight: false,
  },
  {
    id: 'professional',
    name: 'Pro',
    price: '$15K',
    weeks: '6–8 wk',
    scope: 85,
    specs: ['30 screens', 'User testing', '2 wk support'],
    highlight: true,
    badge: 'Most shipped',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    weeks: 'Flexible',
    scope: 100,
    specs: ['Full product', 'Ongoing', 'Priority'],
    highlight: false,
  },
];

export function Packages({ onContactClick }: PackagesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('.tier-meter', { scaleX: 1 });
        return;
      }

      gsap.from('.tier-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      });

      gsap.utils.toArray<HTMLElement>('.tier-meter', section).forEach((meter) => {
        gsap.fromTo(
          meter,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: 'power3.out',
            transformOrigin: 'left center',
            scrollTrigger: { trigger: section, start: 'top 70%', once: true },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] text-white border-t border-white/[0.08] overflow-hidden"
    >
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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Pricing
              </span>
            </div>
            <h2 className="display-lg text-white">Packages</h2>
          </div>
          <p className="text-sm text-white/30 uppercase tracking-[0.2em] font-mono">
            Design + build included
          </p>
        </div>

        <div className="grid md:grid-cols-3 border border-white/[0.08]">
          {tiers.map((tier, i) => (
            <div
              key={tier.id}
              className={`tier-card tile-spotlight group relative overflow-hidden p-7 sm:p-9 flex flex-col min-h-[380px] border-white/[0.08] ${
                i > 0 ? 'max-md:border-t md:border-l' : ''
              } ${tier.highlight ? 'bg-brand/[0.05]' : ''}`}
            >
              {/* Highlight glow for the Pro tier */}
              {tier.highlight && (
                <>
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand to-transparent" />
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full bg-brand/15 blur-[80px] pointer-events-none" />
                </>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
                  <span className="w-1 h-1 rounded-full bg-brand" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                    {tier.name}
                  </span>
                </div>
                {tier.badge && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                    {tier.badge}
                  </span>
                )}
              </div>

              <p
                className={`text-5xl sm:text-6xl font-medium tracking-tight mb-1 ${
                  tier.highlight ? 'text-brand' : 'text-white'
                }`}
              >
                {tier.price}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 mb-8">
                {tier.weeks}
              </p>

              <ul className="space-y-2.5 mb-8">
                {tier.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-center gap-2.5 text-sm text-white/50"
                  >
                    <span className="w-3 h-px bg-brand/60" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-2 mb-7">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                  <span>Scope</span>
                  <span>{tier.scope}%</span>
                </div>
                <div className="h-px bg-white/10 overflow-hidden">
                  <div
                    className="tier-meter h-full bg-brand origin-left"
                    style={{ width: `${tier.scope}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  trackPackageClick(tier.name);
                  onContactClick();
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  tier.highlight
                    ? 'bg-white text-[#0a0a0a] hover:bg-brand hover:text-white'
                    : 'border border-white/15 text-white/70 hover:border-brand hover:text-brand'
                }`}
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

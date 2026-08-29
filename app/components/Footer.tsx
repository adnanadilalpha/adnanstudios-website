'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, ArrowUpRight, Github, Globe, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { TrackedLink } from './TrackedLink';
import { TrackedCalendlyLink } from './TrackedCalendlyLink';

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.838-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.703 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c0 1.406-1.14 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.592H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

interface FooterProps {
  onContactClick?: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Karachi',
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const socialLinks = [
    { label: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/adnan-adil-syed/' },
    { label: 'Upwork', icon: UpworkIcon, url: 'https://www.upwork.com/freelancers/adnanux?mp_source=share' },
    { label: 'Contra', icon: Globe, url: 'https://contra.com/adnanadiil?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=adnanadiil' },
    { label: 'GitHub', icon: Github, url: 'https://github.com/adnanadilalpha' },
  ];

  const indexLinks = [
    { name: 'Selected work', href: '/#projects' },
    { name: 'Archive', href: '/#work' },
    { name: 'Packages', href: '/#packages' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const statusRows = [
    { key: 'Status', value: 'Booking 2026', live: true },
    { key: 'Local time', value: time ?? '--:--:--', mono: true },
    { key: 'Response', value: 'Under 24 hrs' },
    { key: 'Upwork', value: 'Top Rated' },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-white border-t border-white/[0.08] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden
      />

      <div className="site-container relative pt-20 sm:pt-28">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-10 sm:mb-14">
          <span className="w-1 h-1 rounded-full bg-brand" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            End of transmission
          </span>
        </div>

        {/* CTA + status console */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-medium tracking-tighter leading-[0.95] mb-10">
              Have a product
              <br />
              to ship<span className="text-brand">?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <TrackedCalendlyLink
                location="footer"
                className="group inline-flex items-center gap-2.5 bg-white text-[#0a0a0a] px-8 py-4 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors"
              >
                Book a call
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </TrackedCalendlyLink>
              {onContactClick && (
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 border border-white/15 px-8 py-4 rounded-full text-sm text-white/70 hover:border-brand hover:text-brand transition-colors"
                >
                  Send a brief
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Status board */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08]">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                  Studio status
                </span>
                <span className="flex gap-1.5" aria-hidden>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                </span>
              </div>
              {statusRows.map((row) => (
                <div
                  key={row.key}
                  className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] last:border-b-0"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {row.key}
                  </span>
                  <span
                    className={`flex items-center gap-2 text-sm ${
                      row.mono ? 'font-mono tabular-nums text-white/80' : 'text-white/80'
                    }`}
                  >
                    {row.live && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    )}
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid sm:grid-cols-3 gap-10 sm:gap-6 border-t border-white/[0.08] pt-10 pb-14">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              Index
            </p>
            <ul className="space-y-2.5">
              {indexLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    <span className="w-3 h-px bg-brand/0 group-hover:bg-brand transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/insights"
                  className="group inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
                >
                  <span className="w-3 h-px bg-brand/0 group-hover:bg-brand transition-colors" />
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              Elsewhere
            </p>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TrackedLink
                    href={link.url}
                    platform={link.label.toLowerCase()}
                    className="group inline-flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors"
                  >
                    <link.icon className="w-3.5 h-3.5 text-white/30 group-hover:text-brand transition-colors" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              Legal
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-sm text-white/55 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/55 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-2.5 mt-8">
              <Logo className="w-7 h-5 text-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                © 2026 Adnan Adil
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cropped giant wordmark — the sign-off */}
      <div className="relative select-none pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-brand/12 to-transparent" />
        <div className="relative h-[13vw] min-h-[70px] overflow-hidden">
          <p
            className="absolute top-0 left-1/2 -translate-x-1/2 text-[15.5vw] leading-[0.78] font-medium tracking-tighter whitespace-nowrap text-transparent"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.14)' }}
          >
            ADNAN&nbsp;ADIL
          </p>
        </div>
      </div>
    </footer>
  );
}

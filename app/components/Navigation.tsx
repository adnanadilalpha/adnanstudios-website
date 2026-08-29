'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLenis } from '@/app/hooks/useLenis';

interface NavigationProps {
  onContactClick: () => void;
  variant?: 'home' | 'subpage';
}

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'services', label: 'Ships' },
  { id: 'projects', label: 'Work' },
  { id: 'work', label: 'Archive' },
  { id: 'packages', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

const navItems = [
  { label: 'Services', id: 'services' },
  { label: 'Work', id: 'projects' },
  { label: 'Packages', id: 'packages' },
];

export function Navigation({ onContactClick, variant = 'home' }: NavigationProps) {
  const pathname = usePathname();
  const isSubpage = variant === 'subpage' || pathname !== '/';
  const isInsights = pathname.startsWith('/insights');
  const isArticle = pathname.startsWith('/insights/') && pathname !== '/insights';

  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const { scrollToSection, subscribeScroll } = useLenis();

  useEffect(() => {
    const update = (scrollPosition: number) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(scrollPosition / max, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      if (isSubpage) return;

      const marker = scrollPosition + window.innerHeight / 3;
      let current = 'hero';
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= marker) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    const unsubscribe = subscribeScroll(update);
    update(window.scrollY);
    return unsubscribe;
  }, [subscribeScroll, isSubpage]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    if (isSubpage) {
      setMobileMenuOpen(false);
      return;
    }
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  const sectionIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const readout = SECTIONS[Math.max(sectionIndex, 0)];

  const subpageReadout = isArticle ? 'Article' : isInsights ? 'Insights' : 'Page';

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="flex justify-center px-4 pt-4 sm:pt-5">
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="pointer-events-auto relative flex items-center gap-1 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl pl-4 pr-1.5 py-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Scroll progress — thin green line along the capsule floor */}
            <div className="absolute bottom-0 left-5 right-5 h-px bg-white/[0.06]">
              <div
                ref={progressRef}
                className="h-full w-full bg-brand origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>

            {isSubpage ? (
              <Link href="/" className="flex items-center gap-2.5 pr-2" aria-label="Back to home">
                <Logo className="w-7 h-5 text-brand" />
                <span className="hidden md:block text-sm font-medium tracking-tight text-white">
                  Adnan Adil
                </span>
              </Link>
            ) : (
              <button
                onClick={() => handleNavClick('hero')}
                className="flex items-center gap-2.5 pr-2"
                aria-label="Back to top"
              >
                <Logo className="w-7 h-5 text-brand" />
                <span className="hidden md:block text-sm font-medium tracking-tight text-white">
                  Adnan Adil
                </span>
              </button>
            )}

            <span className="hidden lg:block w-px h-4 bg-white/10 mx-1" aria-hidden />

            <nav className="hidden lg:flex items-center" aria-label="Main">
              {navItems.map((item) => {
                const isActive = !isSubpage && activeSection === item.id;
                const className = `relative flex items-center gap-1.5 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                }`;

                if (isSubpage) {
                  return (
                    <Link key={item.id} href={`/#${item.id}`} className={className}>
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <button key={item.id} onClick={() => handleNavClick(item.id)} className={className}>
                    <motion.span
                      animate={{
                        scale: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="w-1 h-1 rounded-full bg-brand"
                    />
                    {item.label}
                  </button>
                );
              })}
              <Link
                href="/insights"
                className={`px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                  isInsights ? 'text-white' : 'text-white/40 hover:text-white/80'
                }`}
              >
                {isInsights && (
                  <span className="inline-block w-1 h-1 rounded-full bg-brand mr-1.5 align-middle" />
                )}
                Insights
              </Link>
            </nav>

            <span className="hidden lg:block w-px h-4 bg-white/10 mx-1" aria-hidden />

            {/* Live section readout */}
            <div
              className="hidden lg:flex items-center gap-2 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 tabular-nums select-none"
              aria-hidden
            >
              {isSubpage ? (
                <span>{subpageReadout}</span>
              ) : (
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={readout.id}
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="inline-block"
                  >
                    {String(Math.max(sectionIndex, 0) + 1).padStart(2, '0')} · {readout.label}
                  </motion.span>
                </AnimatePresence>
              )}
            </div>

            <span
              className="lg:hidden px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 tabular-nums"
              aria-hidden
            >
              {isSubpage
                ? subpageReadout
                : `${String(Math.max(sectionIndex, 0) + 1).padStart(2, '0')}/${String(SECTIONS.length).padStart(2, '0')}`}
            </span>

            <button
              onClick={onContactClick}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0a0a0a] text-xs font-medium hover:bg-brand hover:text-white transition-colors"
            >
              Let&apos;s talk
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/70 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="relative w-3.5 h-2.5">
                <span
                  className={`absolute left-0 top-0 w-full h-px bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? 'translate-y-[5px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 w-full h-px bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </motion.div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0a0a0a]/97 backdrop-blur-xl flex flex-col"
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
            <div
              className="absolute bottom-0 inset-x-0 h-1/3 bg-linear-to-t from-brand/15 to-transparent pointer-events-none"
              aria-hidden
            />

            <nav
              className="relative flex-1 flex flex-col justify-center px-8 gap-1"
              aria-label="Mobile"
            >
              {[...navItems, { label: 'Insights', id: '__insights' }].map((item, i) => {
                  const isInsightsLink = item.id === '__insights';
                  const inner = (
                    <motion.span
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-baseline gap-4"
                    >
                      <span className="font-mono text-[11px] text-brand tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-4xl font-medium tracking-tight text-white">
                        {item.label}
                      </span>
                    </motion.span>
                  );

                  if (isInsightsLink) {
                    return (
                      <Link
                        key={item.id}
                        href="/insights"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-3 text-left"
                      >
                        {inner}
                      </Link>
                    );
                  }

                  if (isSubpage) {
                    return (
                      <Link
                        key={item.id}
                        href={`/#${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-3 text-left"
                      >
                        {inner}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="py-3 text-left"
                    >
                      {inner}
                    </button>
                  );
                })}
            </nav>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative px-8 pb-10 flex flex-col gap-4"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white text-[#0a0a0a] text-sm font-medium"
              >
                Let&apos;s talk
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Booking 2026 · Zero handoff
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

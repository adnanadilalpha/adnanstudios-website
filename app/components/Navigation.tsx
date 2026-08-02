'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Logo } from './Logo';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const navY = useTransform(scrollYProgress, [0, 0.08], [0, -2]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);

          const sections = ['hero', 'projects', 'process', 'packages'];
          const scrollPosition = window.scrollY + window.innerHeight / 3;

          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]);
            if (element && element.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Work', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'Packages', id: 'packages' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-5 pointer-events-none">
        <motion.div style={{ y: navY }} className="pointer-events-auto max-w-7xl mx-auto">
          <motion.div
            animate={{
              backgroundColor: scrolled
                ? 'rgba(255, 255, 255, 0.88)'
                : 'rgba(255, 255, 255, 0.72)',
              borderColor: scrolled
                ? 'rgba(11, 31, 25, 0.12)'
                : 'rgba(11, 31, 25, 0.08)',
            }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl border shadow-[0_10px_40px_-24px_rgba(11,31,25,0.35)]"
          >
            <div className="hidden lg:flex items-center justify-between px-6 py-3.5">
              <motion.button
                onClick={() => scrollToSection('hero')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3"
                aria-label="Adnan Studios home"
              >
                <Logo className="w-9 h-7 text-brand" />
                <span className="text-sm tracking-[0.18em] uppercase text-foreground/80">
                  Adnan Studios
                </span>
              </motion.button>

              <nav className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      whileHover={{ y: -1 }}
                      className={`relative px-5 py-2 text-sm transition-colors ${
                        isActive
                          ? 'text-brand'
                          : 'text-gray-700 hover:text-brand'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute left-5 right-5 -bottom-0.5 h-px bg-brand"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      )}
                      {item.label}
                    </motion.button>
                  );
                })}
                <Link
                  href="/insights"
                  className="px-5 py-2 text-sm text-gray-700 hover:text-brand transition-colors"
                >
                  Insights
                </Link>
              </nav>

              <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm hover:bg-brand-dark transition-colors"
              >
                Let&apos;s Talk
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            <div className="lg:hidden flex items-center justify-between px-4 py-3">
              <motion.button
                onClick={() => scrollToSection('hero')}
                whileTap={{ scale: 0.95 }}
                aria-label="Adnan Studios home"
              >
                <Logo className="w-8 h-6 text-brand" />
              </motion.button>

              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-700 hover:text-brand transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-2 border border-foreground/10 bg-white/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="py-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-5 py-3.5 text-sm transition-colors ${
                        isActive
                          ? 'text-brand bg-brand/5'
                          : 'text-gray-700 hover:text-brand hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <Link
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-5 py-3.5 text-sm text-gray-700 hover:text-brand hover:bg-muted"
                >
                  Insights
                </Link>
                <div className="px-4 py-3">
                  <button
                    onClick={onContactClick}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand text-white text-sm hover:bg-brand-dark transition-colors"
                  >
                    Let&apos;s Talk
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="h-20 md:h-24" />
    </>
  );
}

'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Linkedin, ArrowUpRight, Github, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { TrackedLink } from './TrackedLink';
import { TrackedCalendlyLink } from './TrackedCalendlyLink';

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.838-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.703 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c0 1.406-1.14 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.592H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

export function Footer() {
  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const socialLinks = [
    {
      label: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/adnan-adil-syed/',
    },
    {
      label: 'Upwork',
      icon: UpworkIcon,
      url: 'https://www.upwork.com/freelancers/adnanux?mp_source=share',
    },
    {
      label: 'Contra',
      icon: Globe,
      url: 'https://contra.com/adnanadiil?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=adnanadiil',
    },
    {
      label: 'GitHub',
      icon: Github,
      url: 'https://github.com/adnanadilalpha',
    },
  ];

  const quickLinks = [
    { name: 'Work', id: 'projects' },
    { name: 'Process', id: 'process' },
    { name: 'Packages', id: 'packages' },
    { name: 'Insights', href: '/insights' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-white py-16 md:py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(52,169,131,0.18),_transparent_55%)]" />
      <div className="studio-grain opacity-[0.08]" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3rem,14vw,12rem)] tracking-[-0.06em] text-white/[0.06] select-none whitespace-nowrap"
        >
          ADNAN STUDIOS
        </motion.h2>
      </div>

      <div className="studio-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="text-center mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Logo className="w-10 h-8 text-brand" />
            </div>
            <p className="text-base text-white/60 max-w-xl mx-auto mb-4">
              A product design and development studio. Zero Handoff from Figma
              to Next.js, Flutter, or WordPress.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-white/50">
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
            {quickLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-brand transition-colors studio-link-underline"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-sm text-white/55 hover:text-brand transition-colors studio-link-underline"
                >
                  {link.name}
                </button>
              )
            )}
          </div>

          <div className="flex justify-center mb-10">
            <TrackedCalendlyLink
              location="footer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white text-sm transition-colors"
            >
              Book a call
              <ArrowUpRight className="w-3.5 h-3.5" />
            </TrackedCalendlyLink>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <TrackedLink
                key={link.label}
                href={link.url}
                platform={link.label.toLowerCase()}
                className="group flex items-center gap-2 px-4 py-2.5 border border-white/10 hover:border-brand/50 hover:bg-white/5 transition-colors text-sm text-white/70"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </TrackedLink>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/40">
              © 2026 Adnan Studios. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="/privacy" className="hover:text-brand transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-brand transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Linkedin, ArrowUpRight, Github, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { TrackedLink } from './TrackedLink';
import { TrackedCalendlyLink } from './TrackedCalendlyLink';

// Custom Upwork Icon
const UpworkIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.838-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.703 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c0 1.406-1.14 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.592H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
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
    { label: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/adnan-adil-syed/' },
    { label: 'Upwork', icon: UpworkIcon, url: 'https://www.upwork.com/freelancers/adnanux?mp_source=share' },
    { label: 'Contra', icon: Globe, url: 'https://contra.com/adnanadiil?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=adnanadiil' },
    { label: 'GitHub', icon: Github, url: 'https://github.com/adnanadilalpha' }
  ];

  const quickLinks = [
    { name: 'Work', id: 'projects' },
    { name: 'Process', id: 'process' },
    { name: 'Packages', id: 'packages' },
    { name: 'Insights', href: '/insights' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#34A983]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* MASSIVE NAME AS BACKGROUND - Centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/5 select-none whitespace-nowrap px-4"
          style={{ lineHeight: '0.9' }}
        >
          ADNAN ADIL
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Logo, Links & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          {/* Logo & Tagline */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Logo className="w-8 sm:w-9 md:w-10 h-6 sm:h-7 md:h-8 text-[#34A983]" />
            </div>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-3 sm:mb-4 px-4">
              Zero Handoff product design and development. One person from Figma to Next.js, Flutter, or WordPress.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-[#34A983] animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 px-4">
            {quickLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm sm:text-base text-gray-400 hover:text-[#34A983] transition-colors group"
                >
                  <span className="flex items-center gap-1">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-sm sm:text-base text-gray-400 hover:text-[#34A983] transition-colors group"
                >
                  <span className="flex items-center gap-1">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
              )
            )}
          </div>

          <div className="flex justify-center mb-8 sm:mb-10">
            <TrackedCalendlyLink
              location="footer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#34A983] hover:bg-[#2A8A6B] text-white rounded-full text-sm transition-colors"
            >
              Book a call
              <ArrowUpRight className="w-3 h-3" />
            </TrackedCalendlyLink>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            {socialLinks.map((link) => (
              <TrackedLink
                key={link.label}
                href={link.url}
                platform={link.label.toLowerCase()}
                className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-xs sm:text-sm"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </TrackedLink>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 sm:pt-10 md:pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 px-4">
            <div className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © 2026 Adnan Adil. All rights reserved.
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-[#34A983] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#34A983] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
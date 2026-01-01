'use client';

import { motion } from 'motion/react';
import { Linkedin, Dribbble, Mail, ArrowUpRight, Globe } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { label: 'LinkedIn', icon: Linkedin, url: '#' },
    { label: 'Dribbble', icon: Dribbble, url: '#' },
    { label: 'Behance', icon: Globe, url: '#' },
    { label: 'Contra', icon: Globe, url: '#' }
  ];

  const quickLinks = [
    { name: 'Work', id: 'projects' },
    { name: 'Process', id: 'process' },
    { name: 'Packages', id: 'packages' },
    { name: 'Contact', id: 'contact' }
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
              Crafting digital experiences that scale, convert, and generate real revenue.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-[#34A983] animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 px-4">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm sm:text-base text-gray-400 hover:text-[#34A983] transition-colors group"
              >
                <span className="flex items-center gap-1">
                  {link.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-xs sm:text-sm"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
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
              <button className="hover:text-[#34A983] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#34A983] transition-colors">Terms of Service</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
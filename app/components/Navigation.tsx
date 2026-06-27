'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Logo } from './Logo';
import Link from 'next/link';
import { Briefcase, Zap, Package, ArrowRight, Menu, X, BookOpen } from 'lucide-react';

interface NavigationProps {
  onContactClick: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const navScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          
          // Detect active section
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
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Work', id: 'projects', icon: Briefcase },
    { label: 'Process', id: 'process', icon: Zap },
    { label: 'Packages', id: 'packages', icon: Package },
  ];

  return (
    <>
      {/* Main Navigation - Clean Centered Design */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          style={{ scale: navScale, opacity: navOpacity }}
          className="pointer-events-auto"
        >
          <motion.div
            animate={{
              backdropFilter: scrolled ? 'blur(20px)' : 'blur(16px)',
              backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.90)',
            }}
            transition={{ duration: 0.3 }}
            className="relative bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg w-[70vw]"
          >
          {/* Desktop Layout (lg and above) */}
          <div className="hidden lg:flex items-center justify-between gap-6 px-6 lg:px-8 py-3.5">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <motion.button
                onClick={() => scrollToSection('hero')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Logo className="w-9 h-7 text-[#34A983] transition-colors duration-200" />
              </motion.button>
            </div>

            {/* Navigation Items - Center */}
            <nav className="flex items-center gap-1 justify-center flex-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    className="relative px-5 lg:px-6 py-2.5 rounded-full transition-all duration-200"
                  >
                    {/* Active Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-[#34A983]/10 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Content */}
                    <span className={`relative z-10 flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-[#34A983]' 
                        : 'text-gray-700 hover:text-[#34A983]'
                    }`}>
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                );
              })}
            </nav>

            {/* CTA Button - Right */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link
                href="/insights"
                className="hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-gray-700 hover:text-[#34A983] hover:bg-[#34A983]/10 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Insights
              </Link>
              <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 lg:px-7 py-2.5 rounded-full bg-[#34A983] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#2A8A6B] transition-all duration-200 whitespace-nowrap"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>

          {/* Tablet & Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3">
            <motion.button
              onClick={() => scrollToSection('hero')}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Logo className="w-8 h-6 text-[#34A983]" />
            </motion.button>

            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-700 hover:text-[#34A983] hover:bg-gray-100/50 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
          </motion.div>

          {/* Mobile & Tablet Menu Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="py-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#34A983] bg-[#34A983]/10'
                          : 'text-gray-700 hover:text-[#34A983] hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
                <motion.button
                  onClick={onContactClick}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 mt-2 mx-2 mb-2 rounded-xl bg-[#34A983] text-white text-sm font-semibold shadow-md hover:bg-[#2A8A6B] transition-colors"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
                <Link
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center gap-3 px-5 py-3 text-sm font-medium text-gray-700 hover:text-[#34A983] hover:bg-gray-50"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Insights</span>
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-20 md:h-24" />
    </>
  );
}

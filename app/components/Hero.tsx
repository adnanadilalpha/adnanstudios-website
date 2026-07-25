'use client';

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { deliveryStackOr } from '@/app/lib/site';

interface HeroProps {
  onContactClick: () => void;
  headline?: string;
  title?: string;
  subhead?: string;
}

export function Hero({
  onContactClick,
  headline = 'A product design and development studio. No handoff gap.',
  title = 'Zero Handoff product design and development.',
  subhead = `We design in Figma and ship in ${deliveryStackOr}. One studio from wireframe to production.`,
}: HeroProps) {
  const scrollToProjects = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToPackages = () => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById('packages');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#34A983]/10 via-blue-50 to-purple-50 -z-10" />
      
      {/* Subtle animated shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#34A983]/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-tight tracking-tight">
            ADNAN STUDIOS
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            {headline}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl mb-3 max-w-3xl mx-auto leading-relaxed"
          >
            {title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {subhead}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPackages}
              className="w-full sm:w-auto bg-[#34A983] hover:bg-[#2A8A6B] text-white px-8 py-4 rounded-[12px] transition-all shadow-sm hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              See packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-[12px] transition-all"
            >
              Contact
            </button>
          </div>
        </motion.div>

        {/* Scroll to explore */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={scrollToProjects}
          className="mb-16 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors group"
        >
          Scroll to explore
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>

        {/* Trusted by Section - Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {/* Client Names/Testimonials */}
            <div className="text-lg tracking-tight">DeafTawk</div>
            <div className="text-lg tracking-tight">QuizWiz</div>
            <div className="text-lg tracking-tight">OneScreen</div>
            <div className="text-lg tracking-tight">iCan Tutoring</div>
            <div className="text-lg tracking-tight">LockN</div>
            <div className="text-lg tracking-tight">Letaide</div>
            <div className="text-lg tracking-tight">ScaleX</div>
            <div className="text-lg tracking-tight">MWS</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Testimonials - Positioned lower */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-32 left-8 hidden lg:block"
      >
        <div className="bg-white rounded-[16px] shadow-lg p-4 max-w-[280px]">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
          <p className="text-xs text-gray-600 mb-3">
            "Incredible work with this B2B we won the Global MediaTech Pitch Day would love to work again"
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs">
              AS
            </div>
            <div>
              <div className="text-xs">Ali Shabbar</div>
              <div className="text-[10px] text-gray-500">CEO, DeafTawk</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-32 right-8 hidden lg:block"
      >
        <div className="bg-white rounded-[16px] shadow-lg p-4 max-w-[280px]">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
          <p className="text-xs text-gray-600 mb-3">
            "Adnan transformed our app into a scalable AI quiz platform."
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs">
              MA
            </div>
            <div>
              <div className="text-xs">Muhammad Ashar</div>
              <div className="text-[10px] text-gray-500">CTO, OneScreen</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
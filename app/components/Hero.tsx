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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 pb-10 pt-28 md:pt-32"
    >
      {/* Full-bleed atmospheric plane */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(52,169,131,0.18),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(11,31,25,0.06),_transparent_50%),linear-gradient(180deg,#f7fbf9_0%,#ffffff_55%,#f4f8f6_100%)]" />
      <div className="studio-grid -z-10" />
      <div className="studio-grain -z-10" />

      <motion.div
        className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl -z-10"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-brand-dark/10 blur-3xl -z-10"
        animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="studio-container w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end min-h-[70vh]">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.5rem,12vw,9.5rem)] leading-[0.88] tracking-[-0.04em] mb-6"
            >
              ADNAN
              <br />
              STUDIOS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl"
            >
              {headline}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left h-px w-24 md:w-40 bg-brand mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-foreground/90 max-w-2xl mb-4 text-balance"
            >
              {title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 text-balance"
            >
              {subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button onClick={scrollToPackages} className="studio-button-primary group">
                See packages
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button onClick={onContactClick} className="studio-button-secondary">
                Contact
              </button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-foreground transition-colors"
            >
              Scroll to explore
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:justify-self-end w-full max-w-md"
          >
            <div className="border border-foreground/10 bg-white/70 backdrop-blur-sm p-6 md:p-7 space-y-5">
              <div>
                <div className="flex gap-1 mb-2 text-brand text-sm" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  &ldquo;Incredible work with this B2B we won the Global MediaTech Pitch Day would love to work again&rdquo;
                </p>
                <div className="text-xs">
                  <div className="text-foreground">Ali Shabbar</div>
                  <div className="text-gray-500">CEO, DeafTawk</div>
                </div>
              </div>
              <div className="border-t border-foreground/10 pt-5">
                <div className="flex gap-1 mb-2 text-brand text-sm" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  &ldquo;Adnan transformed our app into a scalable AI quiz platform.&rdquo;
                </p>
                <div className="text-xs">
                  <div className="text-foreground">Muhammad Ashar</div>
                  <div className="text-gray-500">CTO, OneScreen</div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-16 md:mt-20 border-t border-foreground/10 pt-8"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-5">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:text-base tracking-tight text-foreground/55">
            {[
              'DeafTawk',
              'QuizWiz',
              'OneScreen',
              'iCan Tutoring',
              'LockN',
              'Letaide',
              'ScaleX',
              'MWS',
            ].map((name) => (
              <div key={name}>{name}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

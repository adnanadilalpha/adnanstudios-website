'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackCaseStudyLiveClick } from '../lib/analytics';

interface WorkProps {
  onContactClick: () => void;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  caseStudy?: string;
  liveUrl: string;
}

const workData = {
  'Landing Pages': [
    {
      id: 'lockn',
      title: 'Lockn Fintech',
      description: 'High-conversion landing page for a private FinTech product focused on secure individual and group savings, designed to communicate trust, simplicity, and escrow protection.',
      image: '/images/lockn.webp',
      metrics: [
        { label: 'Conversion', value: 'High' },
        { label: 'Trust Score', value: '95%' }
      ],
      tags: ['Web Design', 'Development', 'FinTech'],
      caseStudy: '/case-studies/lockn',
      liveUrl: 'https://locknapp.com/',
    },
    {
      id: 'ican',
      title: 'iCan Tutoring',
      description: 'High-trust landing page for a UK tutoring provider offering premium tuition across core subjects, designed to convert parents while clearly communicating outcomes and credibility.',
      image: '/images/ican.webp',
      metrics: [
        { label: 'Trust', value: 'High' },
        { label: 'Engagement', value: '4.5min' }
      ],
      tags: ['Landing Page', 'UX/UI Design', 'Web Development'],
      liveUrl: 'https://icantutoring.com/',
    },
    {
      id: 'moodia',
      title: 'Moodia Website',
      description: 'Product website and platform experience for a UK-based mental health ecosystem, designed to clearly communicate purpose, trust, and privacy across multiple audiences.',
      image: '/images/moodia.webp',
      metrics: [
        { label: 'User Trust', value: '98%' },
        { label: 'Engagement', value: '5.2min' }
      ],
      tags: ['Product & Web Design', 'Information Architecture', 'Web Development'],
      caseStudy: '/case-studies/moodia',
      liveUrl: 'https://moodiaapp.com/',
    }
  ]
};

export function Work({ onContactClick }: WorkProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="studio-section bg-muted/40 relative">
      <div className="studio-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 max-w-3xl"
        >
          <p className="studio-kicker mb-4">Selected work</p>
          <h2 className="studio-heading mb-4">Selected Projects</h2>
          <p className="studio-subhead">
            Products and platforms designed and shipped by Adnan Studios
          </p>
        </motion.div>

        {/* Projects Stacking Container */}
        <div ref={containerRef} className="relative min-h-screen">
          {workData['Landing Pages'].map((project, index) => (
            <StackingCard 
              key={project.id} 
              project={project} 
              index={index}
              total={workData['Landing Pages'].length}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-20 text-center px-4"
        >
          <p className="text-base sm:text-lg opacity-60 mb-6">
            Like what you see? Let&apos;s build your next product with Adnan Studios
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-ink hover:bg-brand text-white transition-colors duration-300 text-sm sm:text-base"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function StackingCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Calculate the scale based on scroll position
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1, 1]
  );

  // Calculate the opacity
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 1]
  );

  // Calculate vertical offset for stacking effect
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        y,
        zIndex: index + 10,
      }}
      className="group lg:sticky lg:top-20 mb-8 sm:mb-10 md:mb-12"
    >
      {/* Theatre Screen Container */}
      <div className="relative bg-ink p-5 sm:p-6 md:p-8 lg:p-12 overflow-hidden border border-white/10">
        {/* Ambient Light Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(52,169,131,0.2),_transparent_50%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Screen Border Glow */}
        <div className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-brand/40 transition-all duration-500" />

        <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 order-2 lg:order-1">
            {/* Project Number */}
            <div className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-light text-white/10 group-hover:text-teal-400/20 transition-colors duration-500">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-teal-300 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-teal-400/20 hover:border-teal-400/30 transition-all duration-300 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6 md:pt-6 lg:pt-6 border-t border-white/10">
              {project.metrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-teal-300 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-teal-400/40 text-white rounded-full text-sm transition-colors"
                >
                  View Case Study
                </Link>
              )}
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCaseStudyLiveClick(project.id)}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#34A983] hover:bg-[#2d9372] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#34A983]/30 text-sm sm:text-base"
              >
                <span>Live Website</span>
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Screen Side */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden bg-gray-900 shadow-2xl ring-1 ring-white/20">
              {/* Screen Image */}
              <Image
                src={project.image}
                alt={`${project.title} project screenshot showing ${project.id === 'lockn' ? 'fintech savings landing page with trust and escrow messaging' : project.id === 'moodia' ? 'mental health platform homepage with privacy-focused design' : 'UK tutoring landing page with credibility and outcomes messaging'}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Screen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Theatre Base */}
            <div className="mt-3 sm:mt-4 h-1.5 sm:h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
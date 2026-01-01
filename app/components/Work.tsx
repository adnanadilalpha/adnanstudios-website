'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const workData = {
  'Landing Pages': [
    {
      id: 'lp-1',
      title: 'FinTech Launch',
      description: 'High-converting landing page for a financial technology startup, achieving 42% conversion rate',
      image: 'https://images.unsplash.com/photo-1679643468165-5a147719d4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMHdlYnNpdGV8ZW58MXx8fHwxNzY3Mjg4NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Conversion Rate', value: '42%' },
        { label: 'Bounce Rate', value: '-35%' }
      ],
      tags: ['Web Design', 'Conversion Optimization', 'FinTech']
    },
    {
      id: 'lp-2',
      title: 'SaaS Product Launch',
      description: 'Clean, modern landing page that increased sign-ups by 280% in first month',
      image: 'https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbGF5b3V0fGVufDF8fHx8MTc2NzI4ODU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Sign-ups', value: '+280%' },
        { label: 'Engagement', value: '4.2min' }
      ],
      tags: ['Landing Page', 'SaaS', 'UI/UX']
    },
    {
      id: 'lp-3',
      title: 'E-Commerce Launch',
      description: 'Conversion-focused design that drove 150% increase in first-day purchases',
      image: 'https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjcxNzk1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Sales Increase', value: '+150%' },
        { label: 'AOV', value: '$127' }
      ],
      tags: ['E-Commerce', 'Conversion', 'Branding']
    }
  ],
  'SaaS': [
    {
      id: 'saas-1',
      title: 'Analytics Dashboard',
      description: 'Enterprise-grade analytics platform with intuitive data visualization and real-time insights',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NzI1ODY1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'User Satisfaction', value: '94%' },
        { label: 'Task Completion', value: '+67%' }
      ],
      tags: ['Dashboard', 'Data Viz', 'Enterprise']
    },
    {
      id: 'saas-2',
      title: 'Project Management Suite',
      description: 'Collaborative workspace that streamlined team workflows and boosted productivity by 45%',
      image: 'https://images.unsplash.com/photo-1763568258752-fe55f4ab7267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NjcyODAxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Productivity', value: '+45%' },
        { label: 'User Retention', value: '89%' }
      ],
      tags: ['Productivity', 'Collaboration', 'SaaS']
    },
    {
      id: 'saas-3',
      title: 'Mobile CRM Platform',
      description: 'Mobile-first customer relationship management system with seamless cross-device experience',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY3MjQ3NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      metrics: [
        { label: 'Mobile Users', value: '72%' },
        { label: 'NPS Score', value: '+58' }
      ],
      tags: ['Mobile', 'CRM', 'UX Strategy']
    }
  ]
};

export function Work() {
  const [activeTab, setActiveTab] = useState<'Landing Pages' | 'SaaS'>('Landing Pages');
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = ['Landing Pages', 'SaaS'] as const;

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="inline-block px-4 py-2 bg-[#34A983]/10 rounded-full mb-4">
            <span className="text-sm text-[#34A983]">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">Work</h2>
          <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto px-4">
            Showcasing impactful design solutions across various digital platforms
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 flex-wrap px-4"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#34A983] text-white shadow-lg shadow-[#34A983]/30'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Stacking Container */}
        <div ref={containerRef} className="relative min-h-screen">
          {workData[activeTab].map((project, index) => (
            <StackingCard 
              key={project.id} 
              project={project} 
              index={index}
              total={workData[activeTab].length}
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
            Like what you see? Let's create something amazing together
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-gray-900 text-white rounded-full transition-all duration-300 hover:shadow-xl text-sm sm:text-base"
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
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden">
        {/* Ambient Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#34A983]/10 via-transparent to-[#34A983]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Screen Border Glow */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/10 group-hover:ring-[#34A983]/30 transition-all duration-500" />

        <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 order-2 lg:order-1">
            {/* Project Number */}
            <div className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-light text-white/10 group-hover:text-[#34A983]/20 transition-colors duration-500">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-[#34A983] transition-colors duration-300">
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
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-[#34A983]/20 hover:border-[#34A983]/30 transition-all duration-300 cursor-default"
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
                  <div className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl text-[#34A983] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View Case Study CTA */}
            <motion.button 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#34A983] hover:bg-[#2d9372] text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#34A983]/30 text-sm sm:text-base"
            >
              <span>View Case Study</span>
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

          {/* Screen Side */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden bg-gray-900 shadow-2xl ring-1 ring-white/20">
              {/* Screen Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
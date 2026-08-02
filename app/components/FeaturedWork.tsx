'use client';

import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { trackCaseStudyLiveClick } from '../lib/analytics';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  links: {
    caseStudy?: string;
    liveDemo?: string;
  };
}

const projects: Project[] = [
  {
    id: 'deaftawk',
    title: 'DeafTawk',
    category: 'Accessibility Tech',
    year: '2024',
    description:
      'B2B Accessibility Dashboard - Instant sign language interpretation and enterprise analytics across 68K+ users and 3,200+ interpreters',
    stats: [
      { value: '68k+', label: 'users' },
      { value: '3,200+', label: 'interpreters' },
      { value: 'US$1.5M FY23', label: 'revenue' },
    ],
    testimonial: {
      quote:
        'We initially made sure you get the interpreter in a maximum of 60 minutes. But now... just 30 seconds.',
      author: 'Ali Shabbar',
      role: 'CEO, DeafTawk',
    },
    image: '/images/deaftawk.webp',
    links: {
      caseStudy: '/case-studies/deaftawk',
      liveDemo: 'https://b2b.deaftawk.com/signup',
    },
  },
  {
    id: 'quizwiz',
    title: 'QuizWiz',
    category: 'EdTech',
    year: '2025',
    description:
      'AI-Powered Quiz Generator - Instantly generate quizzes from text, PDFs, or URLs; used by ~60K monthly visitors',
    stats: [
      { value: '60k+', label: 'monthly Visits' },
      { value: '4.7 ✭', label: 'review' },
      { value: '1k+ 🙎🏻\u200d♂️', label: 'active User' },
    ],
    testimonial: {
      quote:
        'Adnan transformed our quiz app into a smart AI quiz generator, scalable, and well-executed.',
      author: 'Muhammad Ashar',
      role: 'CTO, OneScreen',
    },
    image: '/images/quiz.webp',
    links: {
      caseStudy: '/case-studies/quizwiz',
      liveDemo: 'https://quizwiz2.onescreensolutions.com/',
    },
  },
  {
    id: 'stock',
    title: 'Private Subscriber Product',
    category: 'FinTech',
    year: '2025',
    description:
      'Subscriber-Only Platform - Designed a product experience for a restricted-access platform, explicitly available only to subscribers',
    stats: [
      { value: '120+', label: 'active users' },
      { value: 'Next week', label: 'launch scheduled' },
      { value: 'Restricted', label: 'subscriber access' },
    ],
    testimonial: {
      quote:
        'Designed for constrained environments, shipping under fixed timelines, building for real users not hypothetical personas.',
      author: 'Product Team',
      role: 'Private Subscriber Product',
    },
    image: '/images/stock.webp',
    links: {
      caseStudy: '/case-studies/stock',
      liveDemo: 'https://app.myweeklystock.com/',
    },
  },
];

export function FeaturedWork() {
  return (
    <section id="projects" className="studio-section bg-white">
      <div className="studio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="studio-kicker mb-4">01 — Work</p>
          <h2 className="studio-heading mb-4">Featured Work</h2>
          <p className="studio-subhead mb-6">
            Studio projects designed and shipped end to end
          </p>
          <ul className="space-y-2 text-sm md:text-base text-gray-600 max-w-2xl">
            <li>
              DeafTawk serves 68,000+ users with interpreter connection under 30
              seconds.
            </li>
            <li>
              QuizWiz receives 60,000+ monthly visits with a 4.7 star review
              rating.
            </li>
            <li>
              DeafTawk generated US$1.5M in FY23 revenue with 25% month-over-month
              growth.
            </li>
          </ul>
        </motion.div>

        <div className="space-y-24 md:space-y-36">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted group">
                  <Image
                    src={project.image}
                    alt={
                      project.id === 'deaftawk'
                        ? 'DeafTawk enterprise accessibility dashboard showing real-time sign language interpretation'
                        : project.id === 'quizwiz'
                          ? 'QuizWiz AI quiz generator interface showing multi-format quiz creation'
                          : 'Private subscriber fintech platform dashboard with restricted access workflow'
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 720px"
                    className="object-cover transition-transform duration-700 ease-studio group-hover:scale-[1.04]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-brand" />
                  <span>{project.year}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-foreground/10">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-xl md:text-2xl tracking-tight mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {project.testimonial && (
                  <blockquote className="border-l-2 border-brand pl-5 mb-8 py-1">
                    <p className="italic text-foreground/90 mb-4 leading-relaxed">
                      {project.testimonial.quote}
                    </p>
                    <footer>
                      <div className="text-sm">{project.testimonial.author}</div>
                      <div className="text-sm text-gray-500">
                        {project.testimonial.role}
                      </div>
                    </footer>
                  </blockquote>
                )}

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.links.caseStudy!}
                    className="studio-button-primary group !px-6 !py-3"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {project.links.liveDemo && (
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCaseStudyLiveClick(project.id)}
                      className="studio-button-secondary !px-6 !py-3"
                    >
                      Live Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

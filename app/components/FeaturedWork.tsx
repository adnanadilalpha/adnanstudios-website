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
    description: 'B2B Accessibility Dashboard - Instant sign language interpretation and enterprise analytics across 68K+ users and 3,200+ interpreters',
    stats: [
      { value: '68k+', label: 'users' },
      { value: '3,200+', label: 'interpreters' },
      { value: 'US$1.5M FY23', label: 'revenue' }
    ],
    testimonial: {
      quote: 'We initially made sure you get the interpreter in a maximum of 60 minutes. But now... just 30 seconds.',
      author: 'Ali Shabbar',
      role: 'CEO, DeafTawk'
    },
    image: '/images/deaftawk.webp',
    links: {
      caseStudy: '/case-studies/deaftawk',
      liveDemo: 'https://b2b.deaftawk.com/signup'
    }
  },
  {
    id: 'quizwiz',
    title: 'QuizWiz',
    category: 'EdTech',
    year: '2025',
    description: 'AI-Powered Quiz Generator - Instantly generate quizzes from text, PDFs, or URLs; used by ~60K monthly visitors',
    stats: [
      { value: '60k+', label: 'monthly Visits' },
      { value: '4.7 ✭', label: 'review' },
      { value: '1k+ 🙎🏻\u200d♂️', label: 'active User' }
    ],
    testimonial: {
      quote: 'Adnan transformed our quiz app into a smart AI quiz generator, scalable, and well-executed.',
      author: 'Muhammad Ashar',
      role: 'CTO, OneScreen'
    },
    image: '/images/quiz.webp',
    links: {
      caseStudy: '/case-studies/quizwiz',
      liveDemo: 'https://quizwiz2.onescreensolutions.com/'
    }
  },
  {
    id: 'stock',
    title: 'Private Subscriber Product',
    category: 'FinTech',
    year: '2025',
    description: 'Subscriber-Only Platform - Designed a product experience for a restricted-access platform, explicitly available only to subscribers',
    stats: [
      { value: '120+', label: 'active users' },
      { value: 'Next week', label: 'launch scheduled' },
      { value: 'Restricted', label: 'subscriber access' }
    ],
    testimonial: {
      quote: 'Designed for constrained environments, shipping under fixed timelines, building for real users not hypothetical personas.',
      author: 'Product Team',
      role: 'Private Subscriber Product'
    },
    image: '/images/stock.webp',
    links: {
      caseStudy: '/case-studies/stock',
      liveDemo: 'https://app.myweeklystock.com/'
    }
  }
];

export function FeaturedWork() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl mb-4">Featured Work</h2>
          <p className="text-xl opacity-60">Studio projects designed and shipped end to end</p>
          <ul className="mt-4 space-y-1 text-sm opacity-70 max-w-2xl">
            <li>DeafTawk serves 68,000+ users with interpreter connection under 30 seconds.</li>
            <li>QuizWiz receives 60,000+ monthly visits with a 4.7 star review rating.</li>
            <li>DeafTawk generated US$1.5M in FY23 revenue with 25% month-over-month growth.</li>
          </ul>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                  />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-6 text-sm opacity-60">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>

                <div className="flex gap-6 mb-8">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-2xl mb-1">{stat.value}</div>
                      <div className="text-sm opacity-60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-4xl mb-4">{project.title}</h3>
                <p className="opacity-60 mb-8">{project.description}</p>

                {project.testimonial && (
                  <div className="border-l-2 border-black pl-6 mb-8 py-4">
                    <p className="italic mb-4">{project.testimonial.quote}</p>
                    <div>
                      <div>{project.testimonial.author}</div>
                      <div className="text-sm opacity-60">{project.testimonial.role}</div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <Link 
                    href={project.links.caseStudy!}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#34A983] hover:bg-[#2A8A6B] text-white rounded-full transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {project.links.liveDemo && (
                    <a 
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackCaseStudyLiveClick(project.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      Live Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
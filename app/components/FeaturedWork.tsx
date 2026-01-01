import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1749353709979-7f169131254e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjBpbnRlcnByZXRlcnxlbnwxfHx8fDE3NjcyODIzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    links: {
      caseStudy: '#',
      liveDemo: '#'
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
    image: 'https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBxdWl6JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY3MjgyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    links: {
      caseStudy: '#',
      liveDemo: '#'
    }
  },
  {
    id: 'dubdubai',
    title: 'DubDubai Marketplace',
    category: 'E-commerce',
    year: '2025',
    description: 'UAE Free Classifieds Platform - A Dubai focused classifieds site for Cars, Property, Jobs, Pets & more free ads, secure listings',
    stats: [
      { value: '2025', label: 'launched' },
      { value: '8+', label: 'categories' },
      { value: '8k+', label: 'listings' }
    ],
    testimonial: {
      quote: 'Adnan\'s expertise in e-commerce and UX design helped us create a secure, user-friendly platform that meets the needs of our local market.',
      author: 'Maherzad G.Sanai',
      role: 'CEO, DubDubai'
    },
    image: 'https://images.unsplash.com/photo-1726796065574-c9075a0ca791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMG1hcmtldHBsYWNlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzY3MjgyMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    links: {
      caseStudy: '#',
      liveDemo: '#'
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
          <p className="text-xl opacity-60">Crafting Digital Experiences</p>
          <p className="mt-2 opacity-50 max-w-2xl">
            Transforming complex problems into elegant solutions through strategic design and user-centered innovation
          </p>
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
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                  <a 
                    href={project.links.caseStudy}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#34A983] hover:bg-[#2A8A6B] text-white rounded-full transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {project.links.liveDemo && (
                    <a 
                      href={project.links.liveDemo}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                    >
                      Live Demo
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
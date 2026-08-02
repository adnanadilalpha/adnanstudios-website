'use client';

import { motion } from 'motion/react';
import { Lightbulb, Users, Palette, Code, Rocket, BarChart } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Research before a single Figma frame',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Define',
    description: 'Scope the stack — Next.js, Flutter, or WordPress',
    icon: Users,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Figma systems that map to components',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Our studio builds in your stack',
    icon: Code,
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Launch and optimization',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Iterate',
    description: 'Measure and improve',
    icon: BarChart,
  },
];

export function DesignProcess() {
  return (
    <section id="process" className="studio-section bg-muted/60">
      <div className="studio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="studio-kicker mb-4">02 — Process</p>
          <h2 className="studio-heading mb-4">Studio Process</h2>
          <p className="studio-subhead">
            One studio workflow from Figma to production. Next.js, Flutter, or
            WordPress — no agency handoff between design and code.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-foreground/10" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative group"
                >
                  <div className="hidden lg:flex absolute -top-1 left-0 w-3 h-3 rounded-full bg-brand ring-4 ring-muted z-10" />
                  <div className="lg:pt-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-sm tracking-[0.2em] text-gray-400">
                        {step.number}
                      </span>
                      <Icon className="w-5 h-5 text-brand/80 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="text-2xl tracking-tight mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="h-px w-24 bg-brand/50 mx-auto mb-8" />
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The same studio that frames the UX ships the production build in
            Next.js, Flutter, or WordPress. That removes the handoff gap where
            intent gets lost between design files and production code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

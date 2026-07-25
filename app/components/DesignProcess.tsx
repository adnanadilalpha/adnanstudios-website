import { motion } from 'motion/react';
import { Lightbulb, Users, Palette, Code, Rocket, BarChart } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Research before a single Figma frame',
    icon: Lightbulb
  },
  {
    number: '02',
    title: 'Define',
    description: 'Scope the stack — Next.js, Flutter, or WordPress',
    icon: Users
  },
  {
    number: '03',
    title: 'Design',
    description: 'Figma systems that map to components',
    icon: Palette
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Our studio builds in your stack',
    icon: Code
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Launch and optimization',
    icon: Rocket
  },
  {
    number: '06',
    title: 'Iterate',
    description: 'Measure and improve',
    icon: BarChart
  }
];

export function DesignProcess() {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl mb-4">Studio Process</h2>
          <p className="text-xl opacity-60">One studio workflow from Figma to production. Next.js, Flutter, or WordPress — no agency handoff between design and code.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-gray-300 transition-colors h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-sm opacity-40 tracking-wider">{step.number}</span>
                    <Icon className="w-6 h-6 opacity-60" />
                  </div>
                  <h3 className="text-2xl mb-2">{step.title}</h3>
                  <p className="opacity-60">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <div className="h-px w-32 bg-gray-300 mx-auto mb-8"></div>
            <p className="text-sm opacity-60 max-w-2xl mx-auto">
              The same studio that frames the UX ships the production build in Next.js, Flutter, or WordPress. That removes the handoff gap where intent gets lost between design files and production code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

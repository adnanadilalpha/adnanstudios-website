'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { TrackedCalendlyLink } from './TrackedCalendlyLink';

export function ScheduleCall() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(52,169,131,0.12),_transparent_60%),linear-gradient(180deg,#ffffff_0%,#f6f8f7_100%)]" />
      <div className="studio-grid -z-10 opacity-70" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand/25 bg-brand/5 mb-6">
            <Clock className="w-4 h-4 text-brand" />
            <span className="text-sm text-brand font-medium">
              Schedule Instantly
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            Want to move fast?
          </h2>

          <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Schedule a call right away
          </p>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No need to wait for us to get back to you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="border border-foreground/10 bg-white/80 backdrop-blur-sm p-8 sm:p-12 md:p-16"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-brand flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl tracking-tight mb-4">
                Book Your Call
              </h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Pick a time that works for you. Our studio will be there.
              </p>
            </div>

            <TrackedCalendlyLink
              location="schedule_call_section"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-brand hover:bg-brand-dark text-white transition-colors text-lg"
            >
              <span>Book Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </TrackedCalendlyLink>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <span>Instant booking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <span>No back-and-forth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <span>Available now</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

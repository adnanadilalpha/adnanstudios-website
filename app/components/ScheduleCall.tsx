'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { TrackedCalendlyLink } from './TrackedCalendlyLink';

export function ScheduleCall() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#34A983]/5 via-blue-50/50 to-purple-50/50 -z-10" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-[#34A983]/10 to-transparent rounded-full blur-3xl"
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

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#34A983]/10 rounded-full mb-6"
          >
            <Clock className="w-4 h-4 text-[#34A983]" />
            <span className="text-sm text-[#34A983] font-medium">Schedule Instantly</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 md:p-16"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#34A983] to-[#2A8A6B] rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                Book Your Call
              </h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Pick a time that works for you. Our studio will be there.
              </p>
            </div>

            <TrackedCalendlyLink
              location="schedule_call_section"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#34A983] hover:bg-[#2A8A6B] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl shadow-[#34A983]/30 text-lg font-medium"
            >
              <span>Book Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </TrackedCalendlyLink>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#34A983]"></div>
                <span>Instant booking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#34A983]"></div>
                <span>No back-and-forth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#34A983]"></div>
                <span>Available now</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

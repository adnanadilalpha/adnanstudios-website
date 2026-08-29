'use client';

import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { TrackedCalendlyLink } from './TrackedCalendlyLink';
import { SectionLabel } from './ui/SectionLabel';
import { FadeUp } from './ui/FadeUp';

interface ScheduleCallProps {
  onContactClick?: () => void;
}

export function ScheduleCall({ onContactClick }: ScheduleCallProps) {
  return (
    <section className="section-pad border-t border-foreground/10">
      <div className="site-container max-w-3xl">
        <div className="text-center mb-10">
          <SectionLabel className="mb-5 justify-center">Let&apos;s Talk</SectionLabel>
          <FadeUp as="h2" className="display-lg mb-4">
            Want to move fast?
          </FadeUp>
          <FadeUp as="p" className="body-lg" delay={0.1}>
            Schedule a call right away — no need to wait for me to get back to you.
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="rounded-3xl border border-foreground/10 bg-white p-8 sm:p-10 text-center">
            <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-5">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2">Book Your Call</h3>
            <p className="body-lg mb-6">Pick a time that works for you. I&apos;ll be there.</p>

            <TrackedCalendlyLink
              location="schedule_call_section"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-sm font-medium hover:bg-brand transition-colors"
            >
              Book Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </TrackedCalendlyLink>

            {onContactClick && (
              <button
                onClick={onContactClick}
                className="block mx-auto mt-4 text-sm text-foreground/40 hover:text-foreground transition-colors"
              >
                Or send a message instead
              </button>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

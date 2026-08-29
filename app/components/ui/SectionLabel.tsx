'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-foreground/40 ${className}`}
    >
      <motion.span
        className="text-brand"
        initial={{ opacity: 0, x: -6 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {'{'}
      </motion.span>
      <span>{children}</span>
      <motion.span
        className="text-brand"
        initial={{ opacity: 0, x: 6 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 6 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {'}'}
      </motion.span>
    </motion.div>
  );
}

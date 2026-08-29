'use client';

import { motion, type HTMLMotionProps } from 'motion/react';

type FadeUpTag = 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: FadeUpTag;
  /** Use on hero / above-the-fold content */
  animateOnMount?: boolean;
}

const tags: Record<FadeUpTag, typeof motion.div> = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  div: motion.div,
  span: motion.span,
};

export function FadeUp({
  children,
  className = '',
  delay = 0,
  as = 'div',
  animateOnMount = false,
}: FadeUpProps) {
  const Component = tags[as];

  const motionProps: HTMLMotionProps<'div'> = {
    className,
    initial: { opacity: 0, y: 28 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    ...(animateOnMount
      ? { animate: { opacity: 1, y: 0 } }
      : {
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.35 },
        }),
  };

  return <Component {...motionProps}>{children}</Component>;
}

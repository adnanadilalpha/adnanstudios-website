'use client';

import { useLayoutEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealOptions {
  selector?: string;
  stagger?: number;
  y?: number;
  start?: string;
}

export function useScrollReveal(
  scopeRef: RefObject<HTMLElement | null>,
  {
    selector = '.reveal',
    stagger = 0.08,
    y = 28,
    start = 'top 82%',
  }: UseScrollRevealOptions = {}
) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const elements = gsap.utils.toArray<Element>(selector, scope);
    if (elements.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(elements, { clearProps: 'all', opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(elements, { opacity: 0, y });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scope,
          start,
          once: true,
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef, selector, stagger, y, start]);
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGsapContext(
  setup: (ctx: gsap.Context) => void,
  deps: unknown[] = []
) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scopeRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(setup, scopeRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scopeRef;
}

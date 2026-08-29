'use client';

import { useLayoutEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UsePinnedStackOptions {
  sectionRef: RefObject<HTMLElement | null>;
  pinRef: RefObject<HTMLElement | null>;
  itemSelector: string;
  scrollPerItem?: number;
  onReducedMotion?: () => boolean;
}

/**
 * Scroll-pinned stack: items crossfade as user scrolls.
 * Falls back to normal layout when prefers-reduced-motion is set.
 */
export function usePinnedStack({
  sectionRef,
  pinRef,
  itemSelector,
  scrollPerItem = 100,
}: UsePinnedStackOptions) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const items = gsap.utils.toArray<HTMLElement>(itemSelector, section);
    if (items.length === 0) return;

    if (prefersReducedMotion) {
      items.forEach((item) => {
        gsap.set(item, { clearProps: 'all' });
        item.classList.remove('pinned-stack-item');
        item.classList.add('pinned-stack-item-static');
      });
      return;
    }

    items.forEach((item) => {
      item.classList.add('pinned-stack-item');
      item.classList.remove('pinned-stack-item-static');
    });

    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        if (i === 0) {
          gsap.set(item, { opacity: 1, y: 0, zIndex: items.length - i });
        } else {
          gsap.set(item, { opacity: 0, y: 40, zIndex: items.length - i });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: pin,
          start: 'top top',
          end: `+=${(items.length - 1) * scrollPerItem}%`,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      items.forEach((item, i) => {
        if (i === 0) return;

        const prev = items[i - 1];
        const position = i === 1 ? 0 : '>';

        tl.to(
          prev,
          { opacity: 0, y: -30, duration: 1, ease: 'power2.inOut' },
          position
        ).to(
          item,
          { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' },
          '<'
        );
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const refreshTimer = window.setTimeout(refresh, 600);

    return () => {
      window.removeEventListener('load', refresh);
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [sectionRef, pinRef, itemSelector, scrollPerItem]);
}

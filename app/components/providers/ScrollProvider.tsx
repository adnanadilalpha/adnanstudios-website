'use client';

import { useEffect, useRef, useState, useCallback, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollContext, type ScrollCallback, type ScrollContextValue } from '@/app/hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const listenersRef = useRef(new Set<ScrollCallback>());
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isTouch =
      window.matchMedia('(hover: none), (pointer: coarse)').matches ||
      window.matchMedia('(max-width: 1023px)').matches;

    setReducedMotion(prefersReducedMotion);

    // Native scroll on touch / mobile — Lenis fights touch momentum and creates dead zones
    if (prefersReducedMotion || isTouch) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: false,
    });
    lenisRef.current = lenis;

    const onLenisScroll = (e: { scroll: number }) => {
      setScrollY(e.scroll);
      listenersRef.current.forEach((cb) => cb(e.scroll));
      ScrollTrigger.update();
    };

    lenis.on('scroll', onLenisScroll);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const scrollToSection = useCallback((id: string, offset = 80) => {
    const element = document.getElementById(id);
    if (!element) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: -offset, duration: 1.2 });
    } else {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const subscribeScroll = useCallback((callback: ScrollCallback) => {
    listenersRef.current.add(callback);
    return () => listenersRef.current.delete(callback);
  }, []);

  const value: ScrollContextValue = {
    lenis: lenisRef.current,
    reducedMotion,
    scrollY,
    scrollToSection,
    subscribeScroll,
  };

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}

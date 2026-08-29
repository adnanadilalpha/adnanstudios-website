'use client';

import { createContext, useContext } from 'react';
import type Lenis from 'lenis';

export type ScrollCallback = (scrollY: number) => void;

export interface ScrollContextValue {
  lenis: Lenis | null;
  scrollToSection: (id: string, offset?: number) => void;
  reducedMotion: boolean;
  scrollY: number;
  subscribeScroll: (callback: ScrollCallback) => () => void;
}

export const ScrollContext = createContext<ScrollContextValue>({
  lenis: null,
  scrollToSection: () => {},
  reducedMotion: false,
  scrollY: 0,
  subscribeScroll: () => () => {},
});

export function useLenis() {
  return useContext(ScrollContext);
}

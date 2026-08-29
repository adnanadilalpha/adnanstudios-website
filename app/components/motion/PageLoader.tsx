'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      document.body.style.overflow = '';
      setVisible(false);
      onCompleteRef.current();
    };

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      finish();
      return;
    }

    document.body.style.overflow = 'hidden';
    const fallback = window.setTimeout(finish, 4200);

    const ctx = gsap.context(() => {
      // Two rings spinning on different 3D axes — the studio mark
      gsap.to('.loader-ring-a', {
        rotateX: 360,
        rotateY: 180,
        duration: 2.6,
        repeat: -1,
        ease: 'none',
      });
      gsap.to('.loader-ring-b', {
        rotateY: -360,
        rotateX: -140,
        duration: 2.1,
        repeat: -1,
        ease: 'none',
      });
      gsap.to('.loader-core', {
        scale: 1.25,
        opacity: 0.9,
        duration: 1.1,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      // Counter 0 → 100
      const counter = { v: 0 };
      const counterEl = rootRef.current?.querySelector('.loader-count');

      const tl = gsap.timeline({ onComplete: finish });

      tl.fromTo(
        '.loader-scene',
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      )
        .fromTo(
          '.loader-label span',
          { y: '110%' },
          { y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' },
          0.15
        )
        .to(
          counter,
          {
            v: 100,
            duration: 1.7,
            ease: 'power2.inOut',
            onUpdate: () => {
              if (counterEl) {
                counterEl.textContent = String(Math.round(counter.v)).padStart(3, '0');
              }
            },
          },
          0.2
        )
        // Exit: rings blow up toward the camera, overlay wipes upward
        .to('.loader-scene', {
          scale: 2.6,
          opacity: 0,
          duration: 0.55,
          ease: 'power3.in',
        })
        .to(
          '.loader-hud',
          { opacity: 0, y: -12, duration: 0.3 },
          '<'
        )
        .to('.loader-overlay', {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.65,
          ease: 'power3.inOut',
        });
    }, rootRef);

    return () => {
      window.clearTimeout(fallback);
      document.body.style.overflow = '';
      if (!finished) ctx.revert();
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={rootRef}>
      <div
        className="loader-overlay fixed inset-0 z-[100] bg-[#0a0a0a] text-white flex flex-col items-center justify-center"
        style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      >
        {/* Faint grid — same stage as the site */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
          aria-hidden
        />

        {/* 3D rings */}
        <div
          className="loader-scene relative w-40 h-40 sm:w-48 sm:h-48 mb-12"
          style={{ perspective: '700px' }}
        >
          <div
            className="loader-ring-a absolute inset-0 rounded-full border-[3px] border-white/25"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <div
            className="loader-ring-b absolute inset-[12%] rounded-full border-[3px] border-brand"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 40px rgba(52,169,131,0.25)',
            }}
          />
          <div className="loader-core absolute inset-[42%] rounded-full bg-brand/70 blur-[6px]" />
        </div>

        <div className="loader-hud flex flex-col items-center gap-5">
          <div className="loader-label flex items-center gap-3 overflow-hidden">
            <span className="inline-block text-sm sm:text-base font-medium tracking-[0.3em] uppercase">
              Adnan
            </span>
            <span className="inline-block text-sm sm:text-base font-medium tracking-[0.3em] uppercase text-brand">
              Adil
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-brand animate-pulse" />
            <span className="loader-count font-mono text-[11px] tabular-nums text-white/50">
              000
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Zero handoff
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

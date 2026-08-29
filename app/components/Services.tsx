'use client';

import { useRef, useLayoutEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CODE_LINES = ['<Ship', '  to="prod"', '/>'];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleTileMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const tile = e.currentTarget;
      const rect = tile.getBoundingClientRect();
      tile.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      tile.style.setProperty('--my', `${e.clientY - rect.top}px`);
    },
    []
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.bento-tile', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      });

      /* ---- Design tile: frames drift + a designer's cursor at work ---- */
      gsap.to('.ghost-frame-1', {
        x: 6,
        y: -5,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
      gsap.to('.ghost-frame-2', {
        x: -5,
        y: 6,
        duration: 6.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      const cursor = section.querySelector('.design-cursor');
      const selection = section.querySelector('.design-selection');
      if (cursor && selection) {
        const cursorTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
        cursorTl
          .set(selection, { opacity: 0, scaleX: 0, scaleY: 0 })
          .fromTo(
            cursor,
            { left: '18%', top: '70%' },
            { left: '30%', top: '32%', duration: 1.4, ease: 'power2.inOut' }
          )
          .to(selection, { opacity: 1, duration: 0.15 }, '<75%')
          .fromTo(
            selection,
            { scaleX: 0, scaleY: 0, transformOrigin: 'top left' },
            { scaleX: 1, scaleY: 1, duration: 1.1, ease: 'power2.inOut' }
          )
          .to(
            cursor,
            { left: '72%', top: '58%', duration: 1.1, ease: 'power2.inOut' },
            '<'
          )
          .to({}, { duration: 0.8 })
          .to(selection, { opacity: 0, duration: 0.4 })
          .to(
            cursor,
            { left: '48%', top: '78%', duration: 1.2, ease: 'power2.inOut' },
            '<'
          );
      }

      /* ---- Develop tile: code types itself, caret blinks ---- */
      const codeEl = section.querySelector<HTMLElement>('.dev-code');
      if (codeEl) {
        const chars: Array<{ line: number; text: string }> = [];
        CODE_LINES.forEach((line, li) => {
          for (let i = 1; i <= line.length; i++) {
            chars.push({ line: li, text: line.slice(0, i) });
          }
        });
        const state = { i: 0 };
        const render = () => {
          const upto = Math.floor(state.i);
          const lines = ['', '', ''];
          for (let c = 0; c <= Math.min(upto, chars.length - 1); c++) {
            lines[chars[c].line] = chars[c].text;
          }
          codeEl.innerHTML = lines
            .map((l) => l.replace(/</g, '&lt;'))
            .join('<br/>');
        };
        gsap.to(state, {
          i: chars.length - 1,
          duration: 2.4,
          ease: 'none',
          repeat: -1,
          repeatDelay: 2.5,
          onUpdate: render,
          scrollTrigger: { trigger: section, start: 'top 70%', once: true },
        });
      }
      gsap.to('.dev-caret', {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)',
      });

      /* ---- Zero Handoff tile: the 0 breathes ---- */
      gsap.to('.ghost-zero', {
        scale: 1.06,
        opacity: 0.22,
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      /* ---- Motion tile: wave flows forever ---- */
      const wave = section.querySelector<SVGPathElement>('.motion-wave');
      if (wave) {
        const len = wave.getTotalLength();
        gsap.set(wave, { strokeDasharray: `${len / 2} ${len / 2}` });
        gsap.to(wave, {
          strokeDashoffset: -len,
          duration: 4,
          repeat: -1,
          ease: 'none',
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
        aria-hidden
      />

      <div className="site-container relative section-pad">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Services
              </span>
            </div>
            <h2 className="display-lg text-white max-w-[10ch]">What ships</h2>
          </div>
          <p className="text-sm text-white/30 uppercase tracking-[0.2em] font-mono">
            Figma → Production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[minmax(150px,1fr)] border border-white/[0.08] md:min-h-[480px]">
          {/* ---- Design ---- */}
          <div
            onMouseMove={handleTileMove}
            className="bento-tile tile-spotlight group relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[220px] border-white/[0.08] md:col-span-2 md:row-span-2"
          >
            <div className="absolute right-6 top-6 bottom-16 left-[38%] pointer-events-none">
              <div className="ghost-frame-1 absolute inset-0 border border-white/[0.07]" />
              <div className="ghost-frame-2 absolute inset-0 border border-white/[0.1] translate-x-2 translate-y-2" />
              <div className="absolute inset-0 border border-brand/25 bg-brand/[0.03]">
                <div className="absolute top-3 left-3 right-1/3 h-px bg-white/15" />
                <div className="absolute top-6 left-3 right-1/2 h-px bg-white/10" />
                <div className="absolute bottom-3 left-3 w-10 h-4 rounded-full border border-brand/40" />
                {/* selection box the cursor "draws" */}
                <div className="design-selection absolute left-[30%] top-[32%] w-[42%] h-[26%] border border-brand/60 bg-brand/[0.06] opacity-0">
                  <span className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-brand" />
                  <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-brand" />
                  <span className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-brand" />
                  <span className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-brand" />
                </div>
                {/* designer's cursor */}
                <div className="design-cursor absolute left-[18%] top-[70%]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M1 1L11 5.5L6.5 6.5L5 11L1 1Z" fill="#34A983" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative z-10 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                Figma systems
              </span>
            </div>
            <h3 className="relative z-10 text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-brand transition-colors duration-300">
              Design
            </h3>
          </div>

          {/* ---- Develop ---- */}
          <div
            onMouseMove={handleTileMove}
            className="bento-tile tile-spotlight group relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[180px] border-white/[0.08] max-md:border-t md:border-l"
          >
            <p className="absolute right-5 top-1/2 -translate-y-1/2 font-mono text-[10px] leading-relaxed text-white/25 pointer-events-none select-none text-left min-w-[5.5rem]" aria-hidden>
              <span className="dev-code" />
              <span className="dev-caret inline-block w-[6px] h-[11px] bg-brand/70 align-middle ml-0.5" />
            </p>

            <div className="relative z-10 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                Next · Flutter · WP
              </span>
            </div>
            <h3 className="relative z-10 text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-brand transition-colors duration-300">
              Develop
            </h3>
          </div>

          {/* ---- Zero Handoff ---- */}
          <div
            onMouseMove={handleTileMove}
            className="bento-tile tile-spotlight group relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[180px] border-white/[0.08] max-md:border-t md:border-l"
          >
            <span
              className="ghost-zero absolute -right-2 -bottom-6 text-[7rem] font-medium leading-none tracking-tighter text-brand/[0.14] pointer-events-none select-none"
              aria-hidden
            >
              0
            </span>

            <div className="relative z-10 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                Same person
              </span>
            </div>
            <h3 className="relative z-10 text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-brand transition-colors duration-300">
              Zero Handoff
            </h3>
          </div>

          {/* ---- Motion ---- */}
          <div
            onMouseMove={handleTileMove}
            className="bento-tile tile-spotlight group relative overflow-hidden p-6 sm:p-7 flex flex-col justify-between min-h-[180px] border-white/[0.08] max-md:border-t md:col-span-2 md:border-l md:border-t"
          >
            <div className="absolute right-6 bottom-8 pointer-events-none" aria-hidden>
              <svg className="w-40 h-10 overflow-visible" viewBox="0 0 160 40" fill="none">
                <path
                  className="motion-wave"
                  d="M0 20 C 13 4, 27 4, 40 20 S 67 36, 80 20 S 107 4, 120 20 S 147 36, 160 20"
                  stroke="rgb(52 169 131 / 0.55)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="relative z-10 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                Scroll & micro
              </span>
            </div>
            <h3 className="relative z-10 text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-brand transition-colors duration-300">
              Motion
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

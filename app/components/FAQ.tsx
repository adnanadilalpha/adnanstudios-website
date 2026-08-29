'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { Plus } from 'lucide-react';
import { gsap } from 'gsap';
import { faqSchema } from '../lib/schema';
import { defaultFaqItems } from '@/lib/faq-defaults';

interface FAQProps {
  items?: Array<{ question: string; answer: string }>;
}

export function FAQ({ items = defaultFaqItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    items.forEach((_, i) => {
      const el = contentRefs.current[i];
      const icon = iconRefs.current[i];
      if (!el) return;
      const isOpen = openIndex === i;

      gsap.to(el, {
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        duration: isOpen ? 0.4 : 0.28,
        ease: isOpen ? 'power2.out' : 'power2.in',
      });
      if (icon) {
        gsap.to(icon, {
          rotate: isOpen ? 135 : 0,
          duration: 0.35,
          ease: 'power2.out',
        });
      }
    });
  }, [openIndex, items]);

  return (
    <section
      id="faq"
      className="relative bg-[#0a0a0a] text-white border-t border-white/[0.08] overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }}
      />
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
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-1 rounded-full bg-brand" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Questions
              </span>
            </div>
            <h2 className="display-lg text-white lg:sticky lg:top-28">FAQ</h2>
          </div>

          <div className="lg:col-span-8">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="border-t border-white/[0.08] last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-5 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-[10px] text-white/30 tabular-nums shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex-1 text-base sm:text-lg font-medium pr-4 transition-colors ${
                        isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      ref={(el) => {
                        iconRefs.current[index] = el;
                      }}
                      className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
                        isOpen
                          ? 'border-brand text-brand'
                          : 'border-white/15 text-white/40 group-hover:border-white/35 group-hover:text-white/70'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="overflow-hidden"
                    style={{
                      height: index === 0 ? 'auto' : 0,
                      opacity: index === 0 ? 1 : 0,
                    }}
                  >
                    <p className="pb-7 pl-9 sm:pl-10 text-white/40 text-sm sm:text-base leading-relaxed max-w-[60ch]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

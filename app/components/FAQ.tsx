'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { faqSchema } from '../lib/schema'
import { defaultFaqItems } from '@/lib/faq-defaults'

interface FAQProps {
  items?: Array<{ question: string; answer: string }>
}

export function FAQ({ items = defaultFaqItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="studio-section bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(items)),
        }}
      />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="studio-kicker mb-4">04 — FAQ</p>
          <h2 className="studio-heading mb-4">Common Questions</h2>
          <p className="studio-subhead">
            Direct answers about how Zero Handoff works.
          </p>
        </motion.div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="border border-foreground/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-foreground/5 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

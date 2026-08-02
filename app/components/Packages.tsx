'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Sparkles, Crown, Clock, Users } from 'lucide-react';
import { trackPackageClick } from '../lib/analytics';
import { TrackedCalendlyLink } from './TrackedCalendlyLink';

interface Package {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  price: string;
  priceNote?: string;
  tagline: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

interface PackagesProps {
  onContactClick: () => void;
  sectionTitle?: string;
  sectionDescription?: string;
}

const packages: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Zap,
    price: '$5,000',
    tagline: 'Figma to shipped MVP. One studio, no handoff.',
    deliveryTime: '4-6 weeks',
    revisions: '2 rounds',
    features: [
      'UX Research & Strategy',
      'Wireframes & Prototypes',
      'Up to 10 screens',
      'Basic Design System',
      'Mobile Responsive',
      'Email Support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: Sparkles,
    price: '$15,000',
    tagline: 'Full Zero Handoff from research to shipped product',
    deliveryTime: '6-8 weeks',
    revisions: '4 rounds',
    features: [
      'Everything in Starter',
      'User Testing & Analytics',
      'Up to 30 screens',
      'Advanced Design System',
      'Micro-interactions',
      'Production build included (Next.js, Flutter, or WordPress)',
      '2 weeks post-launch support',
    ],
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    priceNote: "Let's discuss your needs",
    tagline: 'Custom Zero Handoff for complex products at scale',
    deliveryTime: 'Flexible',
    revisions: 'Unlimited',
    features: [
      'Everything in Professional',
      'Unlimited screens',
      'Design System + Docs',
      'Accessibility Audit',
      'A/B Testing Strategy',
      'Developer Collaboration',
      '3 months maintenance',
      'Team Training',
    ],
  },
];

export function Packages({
  onContactClick,
  sectionTitle = 'Studio Packages',
  sectionDescription = 'Every tier includes Figma design and production development by our studio — Next.js, Flutter, or WordPress. No separate agency handoff.',
}: PackagesProps) {
  return (
    <section id="packages" className="studio-section bg-white">
      <div className="studio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="studio-kicker mb-4">03 — Packages</p>
          <h2 className="studio-heading mb-4">{sectionTitle}</h2>
          <p className="studio-subhead">{sectionDescription}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 mb-20">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative bg-white p-8 transition-all ${
                  pkg.highlighted
                    ? 'border-2 border-brand shadow-[0_24px_60px_-28px_rgba(52,169,131,0.55)] lg:-translate-y-2'
                    : 'border border-foreground/10 hover:border-foreground/25'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1.5 text-xs tracking-[0.14em]">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className={`inline-flex p-3 mb-4 ${
                      pkg.highlighted ? 'bg-brand/10' : 'bg-muted'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        pkg.highlighted ? 'text-brand' : 'text-gray-700'
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl tracking-tight mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-600">{pkg.tagline}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-foreground/10">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl tracking-tight">{pkg.price}</span>
                    {pkg.id !== 'enterprise' && (
                      <span className="text-sm text-gray-500">per project</span>
                    )}
                  </div>
                  {pkg.priceNote && (
                    <p className="text-sm text-gray-500 mt-2">{pkg.priceNote}</p>
                  )}
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>
                      <span className="text-gray-500">Delivery:</span>{' '}
                      {pkg.deliveryTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>
                      <span className="text-gray-500">Revisions:</span>{' '}
                      {pkg.revisions}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    trackPackageClick(pkg.name);
                    onContactClick();
                  }}
                  className={`w-full py-4 mb-8 transition-all flex items-center justify-center gap-2 group ${
                    pkg.highlighted
                      ? 'bg-brand hover:bg-brand-dark text-white'
                      : 'border border-foreground hover:bg-foreground hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="space-y-3">
                  <div className="text-sm text-gray-500 mb-4">
                    What&apos;s included:
                  </div>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          pkg.highlighted ? 'text-brand' : 'text-foreground'
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative overflow-hidden bg-ink p-10 md:p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(52,169,131,0.35),_transparent_55%)]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl text-white tracking-tight mb-4">
                Not sure which package fits?
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Let&apos;s chat! Book a free 30-minute consultation to discuss
                your project and find the perfect fit.
              </p>
              <TrackedCalendlyLink
                location="packages_cta"
                className="bg-white text-brand px-8 py-4 hover:bg-muted transition-colors inline-flex items-center gap-2 group"
              >
                Schedule Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </TrackedCalendlyLink>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>No strings attached</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>30-minute call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Expert advice</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

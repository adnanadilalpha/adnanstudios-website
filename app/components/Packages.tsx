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
      'Email Support'
    ]
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
      '2 weeks post-launch support'
    ],
    highlighted: true,
    badge: 'MOST POPULAR'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    priceNote: 'Let\'s discuss your needs',
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
      'Team Training'
    ]
  }
];

export function Packages({
  onContactClick,
  sectionTitle = 'Studio Packages',
  sectionDescription = 'Every tier includes Figma design and production development by our studio — Next.js, Flutter, or WordPress. No separate agency handoff.',
}: PackagesProps) {
  return (
    <section id="packages" className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">{sectionTitle}</h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 ${
                  pkg.highlighted 
                    ? 'border-2 border-[#34A983] shadow-xl ring-4 ring-[#34A983]/10' 
                    : 'border border-gray-200 shadow-sm hover:shadow-md'
                } transition-all`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#34A983] text-white px-4 py-1.5 rounded-full text-xs tracking-wide">
                    {pkg.badge}
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-2xl mb-4 ${
                    pkg.highlighted ? 'bg-[#34A983]/10' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${pkg.highlighted ? 'text-[#34A983]' : 'text-gray-700'}`} />
                  </div>
                  <h3 className="text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-sm opacity-60">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl">{pkg.price}</span>
                    {pkg.id !== 'enterprise' && (
                      <span className="text-sm opacity-60">per project</span>
                    )}
                  </div>
                  {pkg.priceNote && (
                    <p className="text-sm opacity-60 mt-2">{pkg.priceNote}</p>
                  )}
                </div>

                {/* Quick Info */}
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 opacity-60" />
                    <span><span className="opacity-60">Delivery:</span> {pkg.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 opacity-60" />
                    <span><span className="opacity-60">Revisions:</span> {pkg.revisions}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    trackPackageClick(pkg.name);
                    onContactClick();
                  }}
                  className={`w-full py-4 rounded-xl mb-8 transition-all flex items-center justify-center gap-2 group ${
                    pkg.highlighted
                      ? 'bg-[#34A983] hover:bg-[#2A8A6B] text-white shadow-md hover:shadow-lg'
                      : 'border-2 border-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Features */}
                <div className="space-y-3">
                  <div className="text-sm opacity-60 mb-4">What's included:</div>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        pkg.highlighted ? 'text-[#34A983]' : 'text-gray-900'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#34A983] to-[#2A8A6B] rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl text-white mb-4">
                Not sure which package fits?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                Let's chat! Book a free 30-minute consultation to discuss your project and find the perfect fit.
              </p>
              <TrackedCalendlyLink
                location="packages_cta"
                className="bg-white text-[#34A983] px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 group"
              >
                Schedule Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </TrackedCalendlyLink>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
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

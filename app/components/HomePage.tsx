'use client';

import { useState, useCallback, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { MetricStrip } from './visual/MetricStrip';
import { Services } from './Services';
import { FeaturedWork } from './FeaturedWork';
import { Work } from './Work';
import { Packages } from './Packages';
import { ContactModal } from './ContactModal';
import { Footer } from './Footer';
import { FAQ } from './FAQ';
import { ScrollProvider } from './providers/ScrollProvider';
import { PageLoader } from './motion/PageLoader';
import type { SiteContent } from '@/lib/site-content';

interface HomePageProps {
  content: SiteContent;
}

export function HomePage({ content }: HomePageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
    setHeroReady(true);
  }, []);

  useEffect(() => {
    if (!loaderDone) return;
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => window.clearTimeout(timer);
  }, [loaderDone]);

  return (
    <ScrollProvider>
      {!loaderDone && <PageLoader onComplete={handleLoaderComplete} />}

      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navigation onContactClick={openContactModal} />
        <Hero
          onContactClick={openContactModal}
          headline={content.heroHeadline}
          animate={heroReady}
        />
        <MetricStrip />
        <Services />
        <FeaturedWork />
        <Work onContactClick={openContactModal} />
        <Packages onContactClick={openContactModal} />
        <FAQ items={content.faqItems} />
        <Footer onContactClick={openContactModal} />

        <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      </div>
    </ScrollProvider>
  );
}

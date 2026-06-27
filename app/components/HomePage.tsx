'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { FeaturedWork } from './FeaturedWork';
import { ContactModal } from './ContactModal';
import { Footer } from './Footer';
import { FAQ } from './FAQ';
import type { SiteContent } from '@/lib/site-content';

const Work = dynamic(() => import('./Work').then((mod) => mod.Work), {
  loading: () => <div className="min-h-[50vh]" />,
});
const DesignProcess = dynamic(
  () => import('./DesignProcess').then((mod) => mod.DesignProcess),
  { loading: () => <div className="min-h-[40vh]" /> }
);
const ScheduleCall = dynamic(
  () => import('./ScheduleCall').then((mod) => mod.ScheduleCall),
  { loading: () => <div className="min-h-[30vh]" /> }
);
const Packages = dynamic(
  () => import('./Packages').then((mod) => mod.Packages),
  { loading: () => <div className="min-h-[40vh]" /> }
);

interface HomePageProps {
  content: SiteContent;
}

export function HomePage({ content }: HomePageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk']">
      <Navigation onContactClick={openContactModal} />
      <Hero
        onContactClick={openContactModal}
        headline={content.heroHeadline}
        title={content.heroTitle}
        subhead={content.heroSubhead}
      />
      <FeaturedWork />
      <Work onContactClick={openContactModal} />
      <DesignProcess />
      <ScheduleCall />
      <Packages
        onContactClick={openContactModal}
        sectionTitle={content.packagesTitle}
        sectionDescription={content.packagesDescription}
      />
      <FAQ items={content.faqItems} />
      <Footer />

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}

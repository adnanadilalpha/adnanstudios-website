'use client';

import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Work } from './components/Work';
import { Packages } from './components/Packages';
import { DesignProcess } from './components/DesignProcess';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk']">
      <Navigation onContactClick={openContactModal} />
      <Hero onContactClick={openContactModal} />
      <FeaturedWork />
      <Work />
      <DesignProcess />
      <Packages onContactClick={openContactModal} />
      <Footer />
      
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}


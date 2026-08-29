'use client';

import { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ContactModal } from './ContactModal';
import { ScrollProvider } from './providers/ScrollProvider';

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
        <Navigation
          variant="subpage"
          onContactClick={() => setIsContactModalOpen(true)}
        />
        {children}
        <Footer onContactClick={() => setIsContactModalOpen(true)} />
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </ScrollProvider>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EquipmentSection } from './components/EquipmentSection';
import { GallerySection } from './components/GallerySection';
import { MembershipSection } from './components/MembershipSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BmiCalculator } from './components/BmiCalculator';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [isFreeTrialModalOpen, setIsFreeTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar onOpenFreeTrial={() => setIsFreeTrialModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenFreeTrial={() => setIsFreeTrialModalOpen(true)} />
        <EquipmentSection />
        <GallerySection />
        <MembershipSection onOpenFreeTrial={() => setIsFreeTrialModalOpen(true)} />
        <ReviewsSection />
        <BmiCalculator />
        <ContactSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <MobileBottomBar onOpenFreeTrial={() => setIsFreeTrialModalOpen(true)} />

      {/* Free 1-Day Trial Booking Modal */}
      <FreeTrialModal
        isOpen={isFreeTrialModalOpen}
        onClose={() => setIsFreeTrialModalOpen(false)}
      />
    </div>
  );
}


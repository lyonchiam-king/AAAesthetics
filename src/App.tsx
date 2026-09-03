import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HighlightsStrip } from './components/HighlightsStrip';
import { Credentials } from './components/Credentials';
import { TreatmentMenu } from './components/TreatmentMenu';
import { TreatmentModal } from './components/TreatmentModal';
import { TreatmentFinder } from './components/TreatmentFinder';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { LocationMap } from './components/LocationMap';
import { FAQAccordion } from './components/FAQAccordion';
import { BookingModal } from './components/BookingModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Footer } from './components/Footer';
import { Treatment, FinderSelections } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeTreatmentModal, setActiveTreatmentModal] = useState<Treatment | null>(null);
  const [preselectedBookingTreatment, setPreselectedBookingTreatment] = useState('Consultation');
  const [activeFinderSelections, setActiveFinderSelections] = useState<FinderSelections | null>(null);

  const handleOpenBooking = (treatmentName: string = 'Consultation') => {
    setPreselectedBookingTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  const handleBookWithFinderSelections = (
    selections: FinderSelections, 
    recommendedTreatment: string
  ) => {
    setActiveFinderSelections(selections);
    setPreselectedBookingTreatment(recommendedTreatment);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#2C3E50] font-sans-inter flex flex-col antialiased">
      
      {/* Top Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking('Consultation')} />

      <main className="flex-1">
        {/* 1. Hero -- Overlay -- Headline, CTA, Trust Badges */}
        <Hero onOpenBooking={() => handleOpenBooking('Consultation')} />

        {/* Highlights Strip directly under hero */}
        <HighlightsStrip />

        {/* 2. Credentials -- Two Column -- Amy's Medical Background, Clinic Hygiene */}
        <Credentials />

        {/* 3. Treatment Menu -- Card Grid -- Botox, Skin, Consultation */}
        <TreatmentMenu 
          onSelectTreatment={(treatment) => setActiveTreatmentModal(treatment)}
          onOpenBooking={() => handleOpenBooking('Consultation')}
        />

        {/* The Interactive Piece -- Treatment Finder */}
        <TreatmentFinder 
          onBookWithSelections={handleBookWithFinderSelections}
        />

        {/* 4. Results -- Slider -- Instagram Before/After */}
        <BeforeAfterSlider />

        {/* 5. Location -- Map -- Marsh Wall Address, Hours */}
        <LocationMap />

        {/* 6. FAQ -- Accordion -- Safety, Pain, Downtime */}
        <FAQAccordion />
      </main>

      {/* Footer with clinic details and Google Sheets connector link */}
      <Footer />

      {/* Floating Bottom Bar on Mobile */}
      <FloatingMobileBar onOpenBooking={() => handleOpenBooking('Consultation')} />

      {/* Treatment Detail Modal */}
      <TreatmentModal
        treatment={activeTreatmentModal}
        onClose={() => setActiveTreatmentModal(null)}
        onSelectForBooking={(treatmentName) => handleOpenBooking(treatmentName)}
      />

      {/* Direct Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTreatment={preselectedBookingTreatment}
        finderSelections={activeFinderSelections}
      />

    </div>
  );
}

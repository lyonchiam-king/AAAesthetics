import React from 'react';
import { ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#FFFFFF] border-b border-[#E0E0E0] overflow-hidden">
      {/* Background Image Container with Soft Clinical Light Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600" 
          alt="Bright modern medical clinic interior at Marsh Wall" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-[#FFFFFF]/60" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl">
          {/* Medical Credentials Pill */}
          <div className="inline-flex items-center space-x-2 bg-[#F9F9F9] border border-[#E0E0E0] px-3 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-[#D4A5A5]" />
            <span className="text-xs font-semibold text-[#2C3E50] tracking-wide">
              Medical Practitioner • 77 Marsh Wall, Canary Wharf
            </span>
          </div>

          {/* Exact Required Headline */}
          <h1 className="font-serif-display text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] font-bold text-[#2C3E50] mb-5">
            Medical Aesthetics, Done Safely by Amy
          </h1>

          {/* Exact Required Subcopy */}
          <p className="text-base sm:text-lg text-[#6B7C89] font-normal leading-relaxed mb-8 max-w-xl">
            Professional skin treatments and Botox at Marsh Wall. No pressure, just medical expertise.
          </p>

          {/* Action CTA & Quick Assurance */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center bg-[#D4A5A5] hover:bg-[#B88B8B] text-[#FFFFFF] text-base font-semibold px-8 py-3.5 rounded-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer shadow-2xs min-h-[48px]"
            >
              Book Consultation
            </button>

            <a
              href={CLINIC_INFO.telUrl}
              className="inline-flex items-center justify-center bg-[#FFFFFF] hover:bg-[#F9F9F9] text-[#2C3E50] border border-[#E0E0E0] text-sm font-semibold px-5 py-3.5 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-[#D4A5A5] min-h-[48px]"
            >
              <span>Call Amy: {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 border-t border-[#E0E0E0] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#6B7C89]">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4A5A5] shrink-0" />
              <span>Full Medical Screening</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#D4A5A5] shrink-0" />
              <span>5-Min Walk from DLR</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#D4A5A5] shrink-0" />
              <span>Hygiene First Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

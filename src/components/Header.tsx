import React from 'react';
import { Phone, Instagram, MapPin, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E0E0E0] shadow-2xs">
      <div className="max-w-[900px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand logo & tagline */}
        <a 
          href="#" 
          className="flex flex-col group focus-visible:ring-2 focus-visible:ring-[#D4A5A5] rounded-xs p-1 -ml-1"
          aria-label="AA Aesthetics Home"
        >
          <span className="font-serif-display text-xl font-bold tracking-tight text-[#2C3E50] group-hover:text-[#B88B8B] transition-colors">
            AA Aesthetics
          </span>
          <span className="text-[11px] font-sans-inter text-[#6B7C89] uppercase tracking-wider font-semibold -mt-1">
            Medical Aesthetics by Amy
          </span>
        </a>

        {/* Desktop / Tablet Quick Contacts & CTA */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Location pill hidden on tiny phones */}
          <a 
            href={CLINIC_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-xs text-[#6B7C89] hover:text-[#2C3E50] transition-colors py-1 px-2.5 rounded-full bg-[#F9F9F9] border border-[#E0E0E0]"
            title="View Marsh Wall clinic on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#D4A5A5]" />
            <span>Marsh Wall, E14</span>
          </a>

          {/* Phone link */}
          <a 
            href={CLINIC_INFO.telUrl}
            className="hidden sm:flex items-center text-xs font-semibold text-[#2C3E50] hover:text-[#B88B8B] transition-colors p-2"
            aria-label={`Call Amy at ${CLINIC_INFO.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 mr-1.5 text-[#D4A5A5]" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>

          {/* Instagram Link */}
          <a 
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7C89] hover:text-[#2C3E50] transition-colors p-2 rounded-md hover:bg-[#F9F9F9]"
            aria-label="AA Aesthetics Instagram reels and photos"
            title="Instagram @aa.aestheticsldn"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center bg-[#D4A5A5] hover:bg-[#B88B8B] text-[#FFFFFF] text-xs sm:text-sm font-semibold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer shadow-2xs min-h-[40px]"
          >
            <Calendar className="w-4 h-4 mr-1.5 hidden sm:inline" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </header>
  );
};

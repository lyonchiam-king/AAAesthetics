import React from 'react';
import { MapPin, Phone, Instagram, FileSpreadsheet, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E0E0E0] py-12 pb-24 sm:pb-12 text-xs text-[#6B7C89]">
      <div className="max-w-[900px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[#E0E0E0]">
          
          {/* Column 1: Brand & Practitioner */}
          <div className="space-y-3">
            <h3 className="font-serif-display text-lg font-bold text-[#2C3E50]">
              AA Aesthetics
            </h3>
            <p className="text-xs text-[#6B7C89] leading-relaxed">
              Medical Aesthetics, Done Safely by Amy. Professional skin treatments and Botox at Marsh Wall, Canary Wharf.
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] font-semibold text-[#2C3E50] bg-[#F9F9F9] border border-[#E0E0E0] px-2.5 py-1 rounded">
              <span>Medical Practitioner Lead</span>
            </div>
          </div>

          {/* Column 2: Location & Contact */}
          <div className="space-y-2.5">
            <h4 className="font-serif-display font-bold text-sm text-[#2C3E50] mb-2">
              Clinic Location
            </h4>
            <div className="flex items-start space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4A5A5] shrink-0 mt-0.5" />
              <span className="text-xs text-[#2C3E50]">{CLINIC_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#D4A5A5] shrink-0" />
              <a href={CLINIC_INFO.telUrl} className="text-xs text-[#2C3E50] hover:text-[#B88B8B] transition-colors font-medium">
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
            <div>
              <a 
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[11px] font-semibold text-[#D4A5A5] hover:text-[#B88B8B] transition-colors mt-1"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Column 3: Social & Owner Tools */}
          <div className="space-y-3">
            <h4 className="font-serif-display font-bold text-sm text-[#2C3E50] mb-2">
              Social & Clinic Admin
            </h4>
            
            {/* Instagram Link */}
            <a 
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#2C3E50] hover:text-[#B88B8B] transition-colors bg-[#F9F9F9] border border-[#E0E0E0] px-3 py-2 rounded-md w-full"
            >
              <Instagram className="w-4 h-4 text-[#D4A5A5]" />
              <span>Instagram @aa.aestheticsldn</span>
            </a>

            {/* Google Sheets Connector Download */}
            <a 
              href="/api/bookings/export-csv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#2C3E50] hover:text-[#B88B8B] transition-colors bg-[#F9F9F9] border border-[#E0E0E0] px-3 py-2 rounded-md w-full"
              title="Download live bookings spreadsheet for clinic owner"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#128C7E]" />
              <span>Google Sheets CSV Export</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B7C89]">
          <p>© {new Date().getFullYear()} AA Aesthetics London. All rights reserved.</p>
          <p>Medical Aesthetics at 77 Marsh Wall, Canary Wharf E14.</p>
        </div>

      </div>
    </footer>
  );
};

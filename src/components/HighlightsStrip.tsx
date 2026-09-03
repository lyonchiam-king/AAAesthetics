import React from 'react';
import { Award, MapPin, Sparkles } from 'lucide-react';

export const HighlightsStrip: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] border-b border-[#E0E0E0] py-4">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="flex items-center justify-center sm:justify-start space-x-2.5 bg-[#F9F9F9] border border-[#E0E0E0] px-4 py-2.5 rounded-md">
            <Award className="w-4 h-4 text-[#D4A5A5] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#2C3E50]">
              Medical Expertise
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-start space-x-2.5 bg-[#F9F9F9] border border-[#E0E0E0] px-4 py-2.5 rounded-md">
            <MapPin className="w-4 h-4 text-[#D4A5A5] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#2C3E50]">
              Canary Wharf
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-start space-x-2.5 bg-[#F9F9F9] border border-[#E0E0E0] px-4 py-2.5 rounded-md">
            <Sparkles className="w-4 h-4 text-[#D4A5A5] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#2C3E50]">
              Clean Clinic
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, ShieldCheck, Check, Sparkles, Calendar } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onSelectForBooking: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onSelectForBooking,
}) => {
  if (!treatment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-xs">
        {/* Backdrop click */}
        <motion.div 
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div 
          className="relative w-full max-w-xl bg-[#FFFFFF] rounded-md border border-[#E0E0E0] shadow-lg overflow-hidden z-10 max-h-[90vh] flex flex-col"
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          layoutId={`card-${treatment.id}`}
        >
          {/* Header Image */}
          <div className="relative h-48 sm:h-56 bg-[#F9F9F9] shrink-0">
            <img 
              src={treatment.image} 
              alt={treatment.imageAlt} 
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#2C3E50] border border-[#E0E0E0] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-xs border border-[#E0E0E0] px-3 py-1 rounded-full text-xs font-semibold text-[#2C3E50] flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4A5A5]" />
              <span>{treatment.subtitle}</span>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div>
              <h3 className="font-serif-display text-2xl font-bold text-[#2C3E50] mb-2">
                {treatment.name}
              </h3>
              <p className="text-sm text-[#6B7C89] leading-relaxed">
                {treatment.description}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5">
              {treatment.badges.map((badge, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-semibold bg-[#F9F9F9] text-[#2C3E50] border border-[#E0E0E0] px-2.5 py-1 rounded-md"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Clinical Overview Grid */}
            <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#F9F9F9] rounded-md border border-[#E0E0E0] text-xs">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                <div>
                  <span className="text-[#6B7C89] block">Duration</span>
                  <span className="font-semibold text-[#2C3E50]">{treatment.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                <div>
                  <span className="text-[#6B7C89] block">Downtime</span>
                  <span className="font-semibold text-[#2C3E50]">{treatment.downtime}</span>
                </div>
              </div>
            </div>

            {/* Medical Context */}
            <div className="p-3.5 bg-[#F9F9F9] rounded-md border border-[#E0E0E0]">
              <span className="text-xs font-semibold text-[#D4A5A5] uppercase tracking-wider block mb-1">
                Medical Context
              </span>
              <p className="text-xs text-[#2C3E50] leading-relaxed">
                {treatment.medicalContext}
              </p>
            </div>

            {/* Ideal For */}
            <div>
              <h4 className="font-serif-display text-sm font-semibold text-[#2C3E50] mb-2.5">
                Ideal For
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C3E50]">
                {treatment.details.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#D4A5A5] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to expect & Aftercare */}
            <div className="space-y-3 text-xs text-[#2C3E50] border-t border-[#E0E0E0] pt-4">
              <div>
                <span className="font-semibold text-[#2C3E50] block mb-0.5">What to Expect:</span>
                <p className="text-[#6B7C89] leading-relaxed">{treatment.details.whatToExpect}</p>
              </div>
              <div>
                <span className="font-semibold text-[#2C3E50] block mb-0.5">Aftercare Guidance:</span>
                <p className="text-[#6B7C89] leading-relaxed">{treatment.details.aftercare}</p>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 bg-[#F9F9F9] border-t border-[#E0E0E0] flex items-center justify-between gap-3 shrink-0">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-[#6B7C89] hover:text-[#2C3E50] px-3 py-2 rounded transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(treatment.name);
              }}
              className="inline-flex items-center justify-center bg-[#D4A5A5] hover:bg-[#B88B8B] text-[#FFFFFF] text-sm font-semibold px-5 py-2.5 rounded-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              <span>Book {treatment.name} Consultation</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

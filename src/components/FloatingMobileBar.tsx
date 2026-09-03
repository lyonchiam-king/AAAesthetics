import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero section (e.g. 350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E0E0E0] p-3 shadow-lg block sm:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="max-w-[900px] mx-auto flex items-center justify-between gap-2">
            {/* Call Amy Button */}
            <a
              href={CLINIC_INFO.telUrl}
              className="flex-1 inline-flex items-center justify-center bg-[#F9F9F9] hover:bg-[#E0E0E0] text-[#2C3E50] border border-[#E0E0E0] text-xs font-semibold py-2.5 px-3 rounded-md transition-colors active:scale-95 text-center min-h-[44px]"
              aria-label="Call Amy"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#D4A5A5] shrink-0" />
              <span>Call Amy</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-[#FFFFFF] text-xs font-semibold py-2.5 px-3 rounded-md transition-colors active:scale-95 text-center min-h-[44px]"
              aria-label="WhatsApp Amy"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Book Consultation */}
            <button
              onClick={onOpenBooking}
              className="flex-1 inline-flex items-center justify-center bg-[#D4A5A5] hover:bg-[#B88B8B] text-[#FFFFFF] text-xs font-semibold py-2.5 px-3 rounded-md transition-colors active:scale-95 text-center cursor-pointer min-h-[44px]"
            >
              <Calendar className="w-3.5 h-3.5 mr-1 shrink-0" />
              <span>Book</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

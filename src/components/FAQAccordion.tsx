import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E0E0E0]">
      <div className="max-w-[900px] mx-auto px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A5A5] mb-2 block">
            Common Questions
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#6B7C89]">
            Clear answers regarding safety, discomfort, recovery, and practitioner credentials.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#F9F9F9] transition-colors focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                    <span className="font-serif-display font-semibold text-sm sm:text-base text-[#2C3E50]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#6B7C89] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#D4A5A5]' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-[#E0E0E0]/60 text-xs sm:text-sm text-[#6B7C89] leading-relaxed">
                        <p>{faq.answer}</p>
                        <div className="mt-3 inline-flex items-center space-x-1 text-[11px] font-semibold text-[#2C3E50] bg-[#F9F9F9] border border-[#E0E0E0] px-2 py-0.5 rounded">
                          <ShieldCheck className="w-3 h-3 text-[#D4A5A5]" />
                          <span>Category: {faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

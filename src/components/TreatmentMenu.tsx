import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { Treatment } from '../types';
import { TREATMENTS } from '../data/clinicData';

interface TreatmentMenuProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: () => void;
}

export const TreatmentMenu: React.FC<TreatmentMenuProps> = ({
  onSelectTreatment,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E0E0E0]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A5A5] mb-2 block">
            What We Offer
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-3">
            Treatment Menu
          </h2>
          <p className="text-sm sm:text-base text-[#6B7C89]">
            Targeted medical aesthetic solutions conducted safely in our bright Marsh Wall clinic. Tap any treatment to view clinical details.
          </p>
        </div>

        {/* 3 Treatment Cards in exact requested order */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TREATMENTS.map((treatment) => (
            <motion.div
              key={treatment.id}
              variants={itemVariants}
              layoutId={`card-${treatment.id}`}
              className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-md overflow-hidden flex flex-col justify-between hover:border-[#D4A5A5] transition-all group"
            >
              <div>
                {/* Image Area */}
                <div className="relative h-44 bg-[#F9F9F9] overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.imageAlt} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#E0E0E0] px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#2C3E50] flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-[#D4A5A5]" />
                    <span>{treatment.subtitle}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-serif-display text-xl font-bold text-[#2C3E50] mb-2 group-hover:text-[#B88B8B] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-xs text-[#6B7C89] leading-relaxed mb-4 line-clamp-3">
                    {treatment.description}
                  </p>

                  {/* Small Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {treatment.badges.map((badge, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-semibold text-[#2C3E50] bg-[#F9F9F9] border border-[#E0E0E0] px-2 py-0.5 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-4 bg-[#F9F9F9] border-t border-[#E0E0E0] flex items-center justify-between">
                <div className="flex items-center text-[11px] text-[#6B7C89]">
                  <Clock className="w-3.5 h-3.5 mr-1 text-[#D4A5A5]" />
                  <span>{treatment.duration}</span>
                </div>

                <button
                  onClick={() => onSelectTreatment(treatment)}
                  className="inline-flex items-center text-xs font-semibold text-[#2C3E50] hover:text-[#B88B8B] transition-colors focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer"
                  aria-label={`View details for ${treatment.name}`}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

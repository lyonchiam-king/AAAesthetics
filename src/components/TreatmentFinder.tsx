import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ArrowRight, RotateCcw, Calendar, ShieldCheck } from 'lucide-react';
import { FinderSelections } from '../types';

interface TreatmentFinderProps {
  onBookWithSelections: (selections: FinderSelections, recommendedTreatment: string) => void;
}

const CONCERNS = [
  { id: 'wrinkles', label: 'Fine lines & wrinkles', icon: '✨' },
  { id: 'texture', label: 'Skin texture & dullness', icon: '🌿' },
  { id: 'volume', label: 'Loss of volume or firm contours', icon: '💎' },
  { id: 'refresh', label: 'General skin & facial refresh', icon: '🌸' }
];

const AREAS = [
  { id: 'forehead', label: 'Forehead & Crow\'s feet' },
  { id: 'midface', label: 'Cheeks & Mid-face' },
  { id: 'lips', label: 'Lips & Perioral area' },
  { id: 'fullface', label: 'Full face & Neck' }
];

const DOWNTIMES = [
  { id: 'zero', label: 'Zero downtime (Back to Canary Wharf office same day)', detail: '10-15 mins, no visible marks' },
  { id: 'mild', label: 'Mild 12-24h pinkness', detail: 'Slight glow or redness, settles overnight' },
  { id: 'flexible', label: 'Flexible / Weekend recovery', detail: 'Deep skin rejuvenation' }
];

export const TreatmentFinder: React.FC<TreatmentFinderProps> = ({ onBookWithSelections }) => {
  const [step, setStep] = useState<number>(1);
  const [selections, setSelections] = useState<FinderSelections>({
    concern: '',
    area: '',
    downtime: ''
  });

  const handleSelectConcern = (concernLabel: string) => {
    setSelections(prev => ({ ...prev, concern: concernLabel }));
    setStep(2);
  };

  const handleSelectArea = (areaLabel: string) => {
    setSelections(prev => ({ ...prev, area: areaLabel }));
    setStep(3);
  };

  const handleSelectDowntime = (downtimeLabel: string) => {
    setSelections(prev => ({ ...prev, downtime: downtimeLabel }));
    setStep(4); // Finished -> Recommendation view
  };

  const handleReset = () => {
    setSelections({ concern: '', area: '', downtime: '' });
    setStep(1);
  };

  // Determine logic recommendation
  const getRecommendation = () => {
    if (selections.concern.includes('wrinkles') || selections.area.includes('Forehead')) {
      return {
        name: 'Botox Treatment',
        subtitle: 'Wrinkle Relaxing & Precision Smoothing',
        reasoning: 'Ideal for softening fine lines and forehead furrows with zero office downtime.',
        badge: 'Safe & Consistent'
      };
    } else if (selections.concern.includes('texture') || selections.concern.includes('refresh')) {
      return {
        name: 'Medical Skin Rejuvenation',
        subtitle: 'Microneedling & Skin Boosters',
        reasoning: 'Best for restoring skin radiance, collagen production, and smooth texture.',
        badge: 'Medical Grade'
      };
    } else {
      return {
        name: '1-on-1 Medical Consultation',
        subtitle: 'Personalised Assessment with Amy',
        reasoning: 'A dedicated consultation to evaluate your skin structure and design a custom treatment plan.',
        badge: 'Tailored Plan'
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section id="treatment-finder" className="py-16 sm:py-20 bg-[#F9F9F9] border-b border-[#E0E0E0]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-md p-6 sm:p-8 shadow-2xs">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E0E0E0]">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#D4A5A5] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Tool</span>
              </div>
              <h2 className="font-serif-display text-2xl font-bold text-[#2C3E50]">
                Interactive Treatment Finder
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7C89] mt-1">
                3 quick questions to discover your recommended aesthetic solution for Canary Wharf.
              </p>
            </div>

            {/* Step indicator */}
            <div className="flex items-center space-x-2 shrink-0">
              {[1, 2, 3].map((s) => (
                <div 
                  key={s}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    step === s 
                      ? 'bg-[#D4A5A5] text-[#FFFFFF]' 
                      : step > s 
                        ? 'bg-[#2C3E50] text-[#FFFFFF]' 
                        : 'bg-[#F9F9F9] text-[#6B7C89] border border-[#E0E0E0]'
                  }`}
                >
                  {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                </div>
              ))}
            </div>
          </div>

          {/* Active Selections Summary Strip */}
          {(selections.concern || selections.area || selections.downtime) && (
            <div className="mb-6 p-3 bg-[#F9F9F9] border border-[#E0E0E0] rounded-md flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-[#6B7C89]">Your Choices:</span>
                {selections.concern && (
                  <span className="bg-[#FFFFFF] text-[#2C3E50] border border-[#E0E0E0] px-2.5 py-0.5 rounded-full font-medium">
                    Concern: {selections.concern}
                  </span>
                )}
                {selections.area && (
                  <span className="bg-[#FFFFFF] text-[#2C3E50] border border-[#E0E0E0] px-2.5 py-0.5 rounded-full font-medium">
                    Area: {selections.area}
                  </span>
                )}
                {selections.downtime && (
                  <span className="bg-[#FFFFFF] text-[#2C3E50] border border-[#E0E0E0] px-2.5 py-0.5 rounded-full font-medium">
                    Downtime: {selections.downtime}
                  </span>
                )}
              </div>

              <button
                onClick={handleReset}
                className="text-[#6B7C89] hover:text-[#2C3E50] flex items-center text-xs font-medium cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Reset
              </button>
            </div>
          )}

          {/* QUESTION 1: CONCERN */}
          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-serif-display text-lg font-bold text-[#2C3E50] mb-4">
                1. What is your primary skin or aesthetic concern?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONCERNS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectConcern(item.label)}
                    className="flex items-center justify-between p-4 bg-[#FFFFFF] hover:bg-[#F9F9F9] border border-[#E0E0E0] hover:border-[#D4A5A5] rounded-md text-left transition-all active:scale-98 focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer min-h-[56px]"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-[#2C3E50]">{item.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* QUESTION 2: AREA */}
          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif-display text-lg font-bold text-[#2C3E50]">
                  2. Which facial area would you like to focus on?
                </h3>
                <button 
                  onClick={() => setStep(1)} 
                  className="text-xs text-[#6B7C89] hover:text-[#2C3E50] underline cursor-pointer"
                >
                  Back
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AREAS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectArea(item.label)}
                    className="flex items-center justify-between p-4 bg-[#FFFFFF] hover:bg-[#F9F9F9] border border-[#E0E0E0] hover:border-[#D4A5A5] rounded-md text-left transition-all active:scale-98 focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer min-h-[56px]"
                  >
                    <span className="text-sm font-semibold text-[#2C3E50]">{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* QUESTION 3: DOWNTIME */}
          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif-display text-lg font-bold text-[#2C3E50]">
                  3. What is your preferred recovery / downtime allowance?
                </h3>
                <button 
                  onClick={() => setStep(2)} 
                  className="text-xs text-[#6B7C89] hover:text-[#2C3E50] underline cursor-pointer"
                >
                  Back
                </button>
              </div>
              <div className="space-y-3">
                {DOWNTIMES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectDowntime(item.label)}
                    className="w-full flex items-center justify-between p-4 bg-[#FFFFFF] hover:bg-[#F9F9F9] border border-[#E0E0E0] hover:border-[#D4A5A5] rounded-md text-left transition-all active:scale-98 focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer min-h-[56px]"
                  >
                    <div>
                      <span className="text-sm font-semibold text-[#2C3E50] block">{item.label}</span>
                      <span className="text-xs text-[#6B7C89]">{item.detail}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: RECOMMENDATION RESULT */}
          {step === 4 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.25 }}
              className="bg-[#F9F9F9] border border-[#E0E0E0] p-6 rounded-md"
            >
              <div className="inline-flex items-center space-x-1.5 bg-[#FFFFFF] border border-[#E0E0E0] px-3 py-1 rounded-full text-xs font-semibold text-[#2C3E50] mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A5A5]" />
                <span>Recommended by Amy</span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-[#2C3E50] mb-1">
                {recommendation.name}
              </h3>
              <p className="text-xs font-semibold text-[#D4A5A5] uppercase tracking-wider mb-3">
                {recommendation.subtitle}
              </p>

              <p className="text-sm text-[#2C3E50] leading-relaxed mb-6">
                {recommendation.reasoning}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onBookWithSelections(selections, recommendation.name)}
                  className="inline-flex items-center justify-center bg-[#D4A5A5] hover:bg-[#B88B8B] text-[#FFFFFF] text-sm font-semibold px-6 py-3 rounded-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A5A5] cursor-pointer min-h-[48px]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book Consultation with My Choices</span>
                </button>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center bg-[#FFFFFF] hover:bg-[#F9F9F9] text-[#2C3E50] border border-[#E0E0E0] text-xs font-semibold px-4 py-3 rounded-md transition-colors cursor-pointer min-h-[48px]"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1.5 text-[#6B7C89]" />
                  <span>Start Over</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

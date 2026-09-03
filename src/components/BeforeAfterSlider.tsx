import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';

export const BeforeAfterSlider: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos(prev => Math.min(100, prev + 5));
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E0E0E0]">
      <div className="max-w-[900px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A5A5] mb-2 block">
            Signature Moment
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-3">
            Real Patient Results
          </h2>
          <p className="text-sm text-[#6B7C89]">
            Drag the handle thumb left or right to reveal actual procedure outcomes from our Instagram feed.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center mb-8 gap-2 overflow-x-auto pb-2 no-scrollbar">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer border ${
                activeCaseIndex === idx
                  ? 'bg-[#2C3E50] text-[#FFFFFF] border-[#2C3E50]'
                  : 'bg-[#F9F9F9] text-[#6B7C89] border-[#E0E0E0] hover:text-[#2C3E50]'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Before / After Interactive Container */}
        <div className="bg-[#F9F9F9] border border-[#E0E0E0] rounded-md p-4 sm:p-6 shadow-2xs max-w-2xl mx-auto">
          
          <div 
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={(e) => handleMove(e.touches[0].clientX)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-valuenow={sliderPos}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Before and after comparison slider"
            className="relative h-72 sm:h-96 w-full rounded-md overflow-hidden select-none cursor-ew-resize border border-[#E0E0E0] touch-none focus-visible:ring-2 focus-visible:ring-[#D4A5A5]"
          >
            {/* After Image (Background layer) */}
            <img 
              src={activeCase.afterImage} 
              alt={`After treatment: ${activeCase.title}`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#E0E0E0] px-3 py-1 rounded-full text-xs font-semibold text-[#2C3E50] shadow-2xs pointer-events-none">
              AFTER
            </div>

            {/* Before Image (Clipped layer) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src={activeCase.beforeImage} 
                alt={`Before treatment: ${activeCase.title}`}
                className="absolute top-0 left-0 h-full max-w-none object-cover object-center"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <div className="absolute top-3 left-3 bg-[#2C3E50]/90 backdrop-blur-xs text-[#FFFFFF] px-3 py-1 rounded-full text-xs font-semibold shadow-2xs">
                BEFORE
              </div>
            </div>

            {/* Drag Handle Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-[#FFFFFF] shadow-md pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#E0E0E0] shadow-md flex items-center justify-center text-[#2C3E50]">
                <SlidersHorizontal className="w-4 h-4 text-[#D4A5A5]" />
              </div>
            </div>
          </div>

          {/* Details below slider */}
          <div className="mt-4 pt-4 border-t border-[#E0E0E0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <div className="flex items-center space-x-1.5 font-semibold text-[#2C3E50]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4A5A5]" />
                <span>{activeCase.treatmentName}</span>
              </div>
              <p className="text-[#6B7C89] mt-0.5">{activeCase.description}</p>
            </div>
            <div className="shrink-0">
              <span className="text-[10px] font-semibold text-[#6B7C89] uppercase tracking-wider bg-[#FFFFFF] border border-[#E0E0E0] px-2 py-1 rounded">
                Area: {activeCase.area}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck, Stethoscope, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, VERIFIED_PROOF } from '../data/clinicData';

export const Credentials: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: 'easeOut',
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F9F9F9] border-b border-[#E0E0E0]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A5A5] mb-2 block">
            Verified Credentials & Standards
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-3">
            Medical Safety & Clinical Standards
          </h2>
          <p className="text-sm sm:text-base text-[#6B7C89]">
            Designed specifically for busy Canary Wharf professionals who require absolute peace of mind, clinical qualifications, and transparent care.
          </p>
        </div>

        {/* Two Column Layout: Amy's Medical Background | Clinic Hygiene */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: Amy's Medical Background */}
          <motion.div 
            className="bg-[#FFFFFF] p-6 sm:p-8 rounded-md border border-[#E0E0E0] flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#F9F9F9] border border-[#E0E0E0] flex items-center justify-center text-[#D4A5A5]">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#2C3E50]">
                    Amy's Medical Background
                  </h3>
                  <p className="text-xs text-[#6B7C89]">Practitioner Lead & Medical Aesthetics Expert</p>
                </div>
              </div>

              <p className="text-sm text-[#2C3E50] leading-relaxed mb-6">
                Amy delivers every treatment personally. Rather than delegated salon therapy, your consultation and procedure are led by a qualified medical practitioner focused on facial anatomy, precise dosage, and medical ethics.
              </p>

              <ul className="space-y-3 text-xs text-[#2C3E50] mb-6">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A5A5] shrink-0 mt-0.5" />
                  <span>Full medical history screening & facial muscle mapping before treatment.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A5A5] shrink-0 mt-0.5" />
                  <span>Prescription-only regulated aesthetics (MHRA compliant).</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A5A5] shrink-0 mt-0.5" />
                  <span>Honest advice: Amy will advise against procedures if not clinically beneficial.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E0E0E0] flex items-center justify-between text-xs text-[#6B7C89]">
              <span className="font-semibold text-[#2C3E50]">Qualifications Verified</span>
              <span className="bg-[#F9F9F9] px-2.5 py-1 rounded border border-[#E0E0E0]">1-on-1 Care</span>
            </div>
          </motion.div>

          {/* Column 2: Clinic Hygiene */}
          <motion.div 
            className="bg-[#FFFFFF] p-6 sm:p-8 rounded-md border border-[#E0E0E0] flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#F9F9F9] border border-[#E0E0E0] flex items-center justify-center text-[#D4A5A5]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#2C3E50]">
                    Clinic Hygiene & Safety
                  </h3>
                  <p className="text-xs text-[#6B7C89]">77 Marsh Wall Clinical Environment</p>
                </div>
              </div>

              <p className="text-sm text-[#2C3E50] leading-relaxed mb-6">
                Located in a bright, modern setting on Marsh Wall, the clinic maintains hospital-grade sanitisation protocols. Every instrument is single-use, sterile, and unboxed right in front of you.
              </p>

              <ul className="space-y-3 text-xs text-[#2C3E50] mb-6">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A5A5] shrink-0 mt-0.5" />
                  <span>Spotless, quiet environment designed for complete privacy and calm.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A5A5] shrink-0 mt-0.5" />
                  <span>Hospital-grade infection control and sterile single-use equipment.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A5A5] shrink-0 mt-0.5" />
                  <span>Complimentary 2-week follow-up review for every Botox treatment.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E0E0E0] flex items-center justify-between text-xs text-[#6B7C89]">
              <span className="font-semibold text-[#2C3E50]">Sterile Protocol</span>
              <span className="bg-[#F9F9F9] px-2.5 py-1 rounded border border-[#E0E0E0]">Canary Wharf E14</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Verified Proof Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {VERIFIED_PROOF.map((proof, idx) => (
            <div key={idx} className="bg-[#FFFFFF] p-4 rounded-md border border-[#E0E0E0]">
              <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#D4A5A5]" />
                <h4 className="font-serif-display font-semibold text-sm text-[#2C3E50]">
                  {proof.title}
                </h4>
              </div>
              <p className="text-xs text-[#6B7C89] leading-relaxed mb-3">
                {proof.detail}
              </p>
              <span className="inline-block text-[10px] font-semibold text-[#2C3E50] bg-[#F9F9F9] border border-[#E0E0E0] px-2 py-0.5 rounded">
                {proof.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

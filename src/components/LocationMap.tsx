import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationMap: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F9F9F9] border-b border-[#E0E0E0]">
      <div className="max-w-[900px] mx-auto px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A5A5] mb-2 block">
            Clinic Location & Hours
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2C3E50] mb-3">
            Visit Us at Marsh Wall
          </h2>
          <p className="text-sm text-[#6B7C89]">
            Conveniently located in Canary Wharf, perfect for a quick lunchtime treatment or post-work consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Location & Contact Info Card */}
          <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-md border border-[#E0E0E0] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#F9F9F9] border border-[#E0E0E0] flex items-center justify-center text-[#D4A5A5] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-display font-bold text-base text-[#2C3E50] mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C3E50] font-medium leading-relaxed mb-2">
                    {CLINIC_INFO.address}
                  </p>
                  <a 
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-[#D4A5A5] hover:text-[#B88B8B] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-3.5 border-t border-[#E0E0E0] pt-5">
                <div className="w-9 h-9 rounded-full bg-[#F9F9F9] border border-[#E0E0E0] flex items-center justify-center text-[#D4A5A5] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-display font-bold text-base text-[#2C3E50] mb-1">
                    Direct Contact
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <a 
                      href={CLINIC_INFO.telUrl}
                      className="text-xs sm:text-sm font-semibold text-[#2C3E50] hover:text-[#B88B8B] transition-colors"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                    <a 
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold bg-[#25D366]/10 text-[#128C7E] px-2.5 py-1 rounded border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 mr-1" />
                      <span>WhatsApp Amy</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5 border-t border-[#E0E0E0] pt-5">
                <div className="w-9 h-9 rounded-full bg-[#F9F9F9] border border-[#E0E0E0] flex items-center justify-center text-[#D4A5A5] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-display font-bold text-base text-[#2C3E50] mb-2">
                    Opening Hours
                  </h3>
                  <ul className="space-y-1.5 text-xs text-[#2C3E50]">
                    {CLINIC_INFO.hours.map((h, idx) => (
                      <li key={idx} className="flex items-center justify-between gap-4">
                        <span className="font-medium text-[#6B7C89]">{h.days}:</span>
                        <span className="font-semibold text-[#2C3E50]">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Transport Note */}
            <div className="mt-6 pt-4 border-t border-[#E0E0E0] bg-[#F9F9F9] p-3 rounded-md text-xs text-[#6B7C89] flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-[#D4A5A5] shrink-0" />
              <span>5 min walk from South Quay DLR & Canary Wharf Jubilee / Elizabeth Line stations.</span>
            </div>
          </div>

          {/* Interactive Directions & Map Visual */}
          <div className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-md overflow-hidden flex flex-col justify-between">
            <div className="p-6">
              <h3 className="font-serif-display font-bold text-lg text-[#2C3E50] mb-2">
                Marsh Wall E14 Location
              </h3>
              <p className="text-xs text-[#6B7C89] mb-4">
                Positioned in the heart of Isle of Dogs / Canary Wharf financial district. Clean, quiet, and private entrance.
              </p>

              {/* Map Canvas Frame */}
              <div className="relative h-64 bg-[#F9F9F9] rounded-md overflow-hidden border border-[#E0E0E0] flex items-center justify-center">
                <iframe
                  title="AA Aesthetics Marsh Wall Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.585721990815!2d-0.0178385!3d51.5024469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b9e6f3d1b5%3A0x2617f168b97d21ca!2s77%20Marsh%20Wall%2C%20London%20E14%209SH%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <div className="p-4 bg-[#F9F9F9] border-t border-[#E0E0E0] text-center">
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-[#2C3E50] hover:text-[#B88B8B] transition-colors"
              >
                <span>Get Walking Directions from Canary Wharf Station</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#D4A5A5]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

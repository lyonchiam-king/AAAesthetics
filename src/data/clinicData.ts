import { Treatment, BeforeAfterItem, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: "AA Aesthetics",
  practitioner: "Amy",
  role: "Medical Aesthetics Practitioner",
  phone: "+44 7903 843098",
  phoneDisplay: "+44 7903 843098",
  whatsappUrl: "https://wa.me/447903843098",
  telUrl: "tel:+447903843098",
  address: "126a SQB, Type, 77 Marsh Wall, London E14 9SH, UK",
  locationShort: "Marsh Wall, Canary Wharf",
  mapsUrl: "https://maps.google.com/?cid=2745969936019290378&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  instagramUrl: "https://www.instagram.com/aa.aestheticsldn/reels",
  instagramHandle: "@aa.aestheticsldn",
  hours: [
    { days: "Monday - Friday", hours: "10:00 - 19:00 (Lunchtime slots available)" },
    { days: "Saturday", hours: "10:00 - 16:00" },
    { days: "Sunday", hours: "Closed" }
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: "botox",
    name: "Botox",
    subtitle: "Safe, Consistent",
    badges: ["Safety Focused", "Wrinkle Relaxing", "Natural Finish", "Minimal Downtime"],
    description: "Targeted wrinkle relaxing treatments administered with medical precision for smooth, natural results that preserve your natural facial expressions.",
    medicalContext: "Prescription-only muscle relaxant administered following a full medical consultation and facial muscle dynamics mapping.",
    duration: "20 - 30 mins",
    downtime: "None (Back to office in 15 mins)",
    priceInfo: "Consultation required prior to prescription",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Clean medical treatment room setup at Marsh Wall clinic",
    details: {
      idealFor: ["Forehead lines", "Crow's feet around eyes", "Frown lines between brows", "Masseter / jaw slimming"],
      whatToExpect: "Gentle, microscopic injections using ultra-fine needles. Results develop gradually over 7–14 days, creating a refreshed, well-rested appearance.",
      aftercare: "Remain upright for 4 hours post-treatment. Avoid intense cardio or sauna for 24 hours."
    }
  },
  {
    id: "skin-treatments",
    name: "Skin Treatments",
    subtitle: "Medical Grade",
    badges: ["Medical Grade", "Microneedling & Peels", "Skin Boosters", "Hygiene First"],
    description: "Clinical skin rejuvenation protocols including medical microneedling, bio-rejuvenating skin boosters, and chemical peels formulated for collagen production and tone improvement.",
    medicalContext: "Clinical dermal therapy designed to stimulate deep cellular renewal safely under strict infection control standards.",
    duration: "45 - 60 mins",
    downtime: "Mild pinkness for 12-24 hours",
    priceInfo: "Tailored treatment plan after clinical skin assessment",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Bright, pristine treatment bed and medical grade skin products",
    details: {
      idealFor: ["Dullness & uneven skin tone", "Fine lines & loss of firmness", "Acne scarring & textural irregularities", "Deep skin hydration"],
      whatToExpect: "Thorough skin sanitisation, topical numbing for comfort, and precision application of medical-grade active ingredients or sterile microneedling.",
      aftercare: "Apply physical SPF 50+ daily. Gentle hydration serum provided for post-procedure care."
    }
  },
  {
    id: "consultation",
    name: "Consultation",
    subtitle: "Personalised Plan",
    badges: ["1-on-1 with Amy", "No Pressure", "Full Facial Assessment", "Tailored Plan"],
    description: "A comprehensive medical consultation where Amy listens to your aesthetic concerns, reviews medical history, and designs an honest, step-by-step treatment outline.",
    medicalContext: "Crucial medical screening phase ensuring procedure suitability, setting realistic expectations, and answering every safety concern without sales pressure.",
    duration: "30 mins",
    downtime: "None",
    priceInfo: "Direct 1-on-1 session with practitioner Amy",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    imageAlt: "Private medical consultation room at 77 Marsh Wall",
    details: {
      idealFor: ["First-time aesthetic patients", "Canary Wharf professionals seeking advice on lunch break", "Patients prioritizing safety & medical qualifications", "Custom multi-treatment planning"],
      whatToExpect: "Unhurried conversation in a quiet, bright clinical setting. Facial mapping, medical check, and clear explanation of options.",
      aftercare: "You receive a written treatment summary and prescription recommendation if proceeding."
    }
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: "case-1",
    title: "Forehead Smooth & Refreshed",
    treatmentName: "Botox (Forehead & Glabella)",
    area: "Upper Face",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    description: "Natural softening of deep dynamic forehead furrows while preserving natural eyebrow motion and facial warmth."
  },
  {
    id: "case-2",
    title: "Perioral Refresh & Hydration",
    treatmentName: "Skin Booster Rejuvenation",
    area: "Mid & Lower Face",
    beforeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600",
    description: "Deep dermal hydration reducing fine lines around the perioral zone, delivering a healthy, luminous glow."
  },
  {
    id: "case-3",
    title: "Crow's Feet & Eye Brightening",
    treatmentName: "Micro-Botox & Eye Rejuvenation",
    area: "Periorbital Region",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    description: "Targeted smoothing of lateral canthal lines with zero downtime for a vibrant, well-rested look."
  }
];

export const VERIFIED_PROOF = [
  {
    title: "Medical Expertise",
    detail: "Treatments delivered directly by Amy, focusing on clinical anatomy, strict sterile protocols, and natural proportions.",
    badge: "Qualified Practitioner"
  },
  {
    title: "Clean Clinic",
    detail: "Spotless, modern treatment space located at 77 Marsh Wall in Canary Wharf, adhering to hospital-grade hygiene standards.",
    badge: "Marsh Wall Location"
  },
  {
    title: "Consistent Results",
    detail: "Focusing on conservative, elegant enhancements. Every patient receives tailored dosing and a 2-week follow-up option.",
    badge: "4.5+ Verified Feedback"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is Botox safe, and who performs the procedure?",
    answer: "Yes. Every treatment at AA Aesthetics is conducted directly by Amy following a thorough medical history check. We use genuine, regulated products administered with sterile, single-use clinical equipment.",
    category: "Safety"
  },
  {
    question: "Does the treatment hurt?",
    answer: "Injections use microscopic, ultra-fine needles. Most patients describe it as a quick 2-second pinch. For skin treatments, top-grade topical numbing cream is applied so you feel completely comfortable.",
    category: "Pain"
  },
  {
    question: "How much downtime will I need before returning to work in Canary Wharf?",
    answer: "Zero to minimal downtime. Botox takes 10-15 minutes and leaves tiny bumps that fade within 20 minutes. You can walk straight back to your office at Marsh Wall or South Quay without anyone noticing.",
    category: "Downtime"
  },
  {
    question: "Will I look fake or frozen?",
    answer: "No. Amy's ethos is 'no pressure, natural results'. We preserve your natural facial expressions and movement, enhancing your skin's health without over-treating.",
    category: "Credentials"
  },
  {
    question: "How do I book a consultation?",
    answer: "You can tap 'Book Consultation' anywhere on this site, use our interactive Treatment Finder tool, or send a quick message directly to Amy on WhatsApp at +44 7903 843098.",
    category: "Safety"
  }
];

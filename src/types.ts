export interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  badges: string[];
  description: string;
  medicalContext: string;
  duration: string;
  downtime: string;
  priceInfo: string;
  image: string;
  imageAlt: string;
  details: {
    idealFor: string[];
    whatToExpect: string;
    aftercare: string;
  };
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  treatmentName: string;
  area: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface FinderSelections {
  concern: string;
  area: string;
  downtime: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  concern: string;
  area: string;
  downtime: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Safety' | 'Pain' | 'Downtime' | 'Credentials';
}

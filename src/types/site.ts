export interface NavItem {
  label: string;
  href: string;
}

export interface HighlightCard {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tag?: string;
  featuredOnHome?: boolean;
}

export interface ScheduleDay {
  day: string;
  hours: string;
  note?: string;
}

export interface PricingItem {
  title: string;
  price: string;
  description: string;
  badge?: string;
}

export interface LocationCard {
  name: string;
  city: string;
  sector: string;
  address: string;
  consultationMode: string;
  contactPhone: string;
  mapLink: string;
}

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPageContent {
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  bookingUrl: string;
  whatsappNumber: string;
  whatsappMessage: string;
  phone: string;
  email: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    trustMicrocopy: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    profile: {
      fullName: string;
      role: string;
      registration: string;
      experience: string;
      audience: string;
      modalities: string;
    };
    philosophyTitle: string;
    philosophyBody: string;
    highlights: HighlightCard[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  practicalInfo: {
    eyebrow: string;
    title: string;
    description: string;
  };
  schedule: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    days: ScheduleDay[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    ctaLabel: string;
    items: PricingItem[];
  };
  lowCostProgram: {
    eyebrow: string;
    title: string;
    description: string;
    criteriaNote: string;
    ctaLabel: string;
  };
  locations: {
    eyebrow: string;
    title: string;
    description: string;
    items: LocationCard[];
  };
  intakeForm: {
    eyebrow: string;
    title: string;
    description: string;
    successTitle: string;
    successMessage: string;
    submitLabel: string;
    consentText: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  ctaBanner: {
    title: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  footer: {
    quickLinksTitle: string;
    contactTitle: string;
    hoursTitle: string;
    legalLinksTitle: string;
    legalLinks: NavItem[];
    privacyLinkLabel: string;
    legalLinkLabel: string;
    copyright: string;
  };
  legal: {
    privacy: LegalPageContent;
    legalNotice: LegalPageContent;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

export interface Property {
  id: string;
  title: string;
  type: 'Residential' | 'Commercial' | 'Land' | 'Luxury Residence';
  status: 'For Sale' | 'Prime Land' | 'Luxury Investment' | 'Off-Plan Development' | 'Exclusive';
  location: string;
  city: 'Abuja' | 'Lagos';
  price: string; // e.g. "₦350,000,000" or "Price on Request"
  rawPrice: number; // for filtering/sorting
  bedrooms?: number;
  bathrooms?: number;
  size: string; // e.g. "650 sqm" or "1,200 sqm"
  mainImage: string;
  videoUrl?: string; // HTML5 Video Tour file URL
  galleryImages: string[];
  description: string;
  features: string[];
  amenities: string[];
  featured?: boolean;
}

export interface Metric {
  label: string;
  value: string;
}

export interface AddressInfo {
  label: string;
  address: string;
}

export interface CompanyConfig {
  brandName: string;
  legalName: string;
  rcNumber: string;
  tagline: string;
  phones: string[];
  whatsappNumber: string; // formatted e.g. "2348000000000"
  whatsappDisplay: string;
  email: string;
  addresses: AddressInfo[];
  businessHours: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
    linkedin: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FlowDifferenceStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyChoosePoint {
  number: string;
  title: string;
  description: string;
}

import { CompanyConfig, Metric, ServiceItem, FlowDifferenceStep, WhyChoosePoint } from '../types';

export const companyConfig: CompanyConfig = {
  brandName: "FLOW REALTOR",
  legalName: "FLOW REALTOR & Properties Limited",
  rcNumber: "RC: 9618247",
  tagline: "Find Property. Build Wealth. Invest With Confidence.",
  phones: [
    "+234 708 557 5255"
  ],
  whatsappNumber: "2347085575255",
  whatsappDisplay: "+234 708 557 5255",
  email: "info@flowproperty.ng",
  addresses: [
    {
      label: "Abuja Office",
      address: "Plot 22, 13 Isah Mohammed Road, Gudu / Durumi District, Abuja 900110, Federal Capital Territory, Nigeria"
    }
  ],
  businessHours: "Monday – Saturday: 8:00 AM – 6:00 PM (WAT)",
  socialLinks: {
    facebook: "https://facebook.com/FlowPropertyLtd",
    instagram: "https://instagram.com/flowproperty",
    tiktok: "https://tiktok.com/@flowproperty",
    youtube: "https://youtube.com/@FlowProperty",
    linkedin: "https://linkedin.com/company/flowproperty"
  }
};

export const trustMetrics: Metric[] = [
  {
    value: "40+",
    label: "Properties Sold"
  },
  {
    value: "10+",
    label: "Prime Areas"
  },
  {
    value: "100%",
    label: "Client Focus"
  }
];

export const companyServices: ServiceItem[] = [
  {
    id: "property-sales",
    number: "01",
    title: "Property Sales",
    description: "Helping clients find and purchase suitable residential and commercial properties with complete transparency and verified legal title.",
    iconName: "Home"
  },
  {
    id: "investment-advisory",
    number: "02",
    title: "Property Investment Advisory",
    description: "Helping investors identify opportunities based on location, value, growth potential and long-term capital appreciation objectives.",
    iconName: "TrendingUp"
  },
  {
    id: "property-sourcing",
    number: "03",
    title: "Property Sourcing",
    description: "Finding bespoke properties based on specific client budgets, desired neighborhoods, architectural preferences and unique requirements.",
    iconName: "Search"
  },
  {
    id: "land-development",
    number: "04",
    title: "Land & Development Opportunities",
    description: "Connecting clients with carefully selected, high-yield land parcels and strategic development opportunities across Abuja and Lagos.",
    iconName: "MapPin"
  },
  {
    id: "property-management",
    number: "05",
    title: "Property Management",
    description: "Professional support, tenant management, and asset upkeep for clients who own or invest in premium real estate.",
    iconName: "ShieldCheck"
  },
  {
    id: "real-estate-consulting",
    number: "06",
    title: "Real Estate Consulting",
    description: "Personalized strategic guidance for buyers, sellers, diaspora investors and commercial enterprises navigating the Nigerian property market.",
    iconName: "Compass"
  }
];

export const whyChoosePoints: WhyChoosePoint[] = [
  {
    number: "01",
    title: "Abuja & Lagos Expertise",
    description: "We possess deep knowledge of the Abuja and Lagos property markets, helping clients identify high-yield opportunities that align with their lifestyle or investment strategy."
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description: "Every client is different. We take the time to understand individual requirements, budgets and long-term goals before recommending suitable properties."
  },
  {
    number: "03",
    title: "Integrity at the Core",
    description: "We pride ourselves on ethical practice, professionalism, transparency and appropriate legal diligence throughout the property process."
  },
  {
    number: "04",
    title: "Seamless Process",
    description: "From property discovery and site inspections to documentation and final handover, we help manage the complexities of the market for a smoother client experience."
  }
];

export const flowDifferenceSteps: FlowDifferenceStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We gain an in-depth understanding of your specific lifestyle, spatial, and financial goals."
  },
  {
    number: "02",
    title: "Explore",
    description: "We curate and present verified, high-yield residential, commercial, or land opportunities."
  },
  {
    number: "03",
    title: "Evaluate",
    description: "We provide strategic guidance through physical/virtual inspections, title verification, and valuation."
  },
  {
    number: "04",
    title: "Close",
    description: "We manage legal documentation and transaction details for a smooth, transparent handover."
  }
];

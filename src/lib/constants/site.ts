type SiteConfig = {
  name: string;
  shortName: string;
  legalName: string;
  description: string;
  url: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  location: string;
  region: string;
  country: string;
  pricingNote: string;
  businessHours: string;
  serviceArea: string;
  responseTime: string;
  themeColor: string;
  backgroundColor: string;
  ogImagePath: string;
  keywords: string[];
  trustHighlights: string[];
  buyerAssurances: string[];
  supportTopics: string[];
  orderFlow: string[];
};

export const siteConfig: SiteConfig = {
  name: "Bankey Bihari Boxwala",
  shortName: "BBB",
  legalName: "Bankey Bihari Boxwala",
  description:
    "Premium jewellery stock box manufacturer for wholesale buyers across India.",
  url: "https://example.com", // TODO: replace with real domain
  whatsappNumber: "919999999999", // TODO: replace with real WhatsApp number
  whatsappDisplay: "+91 99999 99999", // TODO: replace with real display number
  email: "sales@bankeybihariboxwala.com", // TODO: replace if needed
  location: "Bihar, India",
  region: "Bihar",
  country: "India",
  pricingNote: "Prices shown are per piece. GST extra.",
  businessHours: "Monday to Saturday · 10:00 AM to 7:00 PM IST",
  serviceArea: "Wholesale enquiries served across India",
  responseTime: "Fast response on WhatsApp for wholesale enquiries",
  themeColor: "#6f1d2b",
  backgroundColor: "#fbf7f2",
  ogImagePath: "/opengraph-image",
  keywords: [
    "jewellery stock box",
    "jewellery packaging",
    "wholesale jewellery box",
    "stock boxes manufacturer",
    "Bankey Bihari Boxwala",
    "jewellery box supplier India",
    "premium jewellery packaging",
    "bulk jewellery boxes",
    "jewellery stock box manufacturer",
    "wholesale jewellery packaging India",
  ],
  trustHighlights: [
    "Wholesale-first order flow",
    "Jewellery-focused catalogue",
    "Premium presentation language",
    "Direct WhatsApp business handling",
    "Clear price direction",
    "India-first trade support",
  ],
  buyerAssurances: [
    "Built for wholesale buyers, not retail confusion",
    "Premium catalogue experience for better first impression",
    "Direct enquiry flow for faster business discussion",
    "Clearer product presentation for easier decision-making",
  ],
  supportTopics: [
    "Bulk quantity discussion",
    "Category selection support",
    "Product availability enquiry",
    "Price clarification",
    "Repeat wholesale ordering",
    "Custom discussion for business buyers",
  ],
  orderFlow: [
    "Browse the collection and shortlist relevant products.",
    "Open the product page and review price direction, sizes, colours, and finish.",
    "Start the WhatsApp conversation for quantity, availability, and final discussion.",
    "Continue direct business handling for closing the order smoothly.",
  ],
};
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  pricePerPiece: number;
  gstNote: string;
  sizes: string[];
  colours: string[];
  material: string;
  finish: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  whatsappLabel: string;
};

export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  description: string;
};
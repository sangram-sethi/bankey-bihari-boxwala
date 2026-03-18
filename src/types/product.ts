export type ProductCategory =
  | 'stock-boxes'
  | 'ring-boxes'
  | 'earring-boxes'
  | 'necklace-boxes'
  | 'bangle-boxes'
  | 'gift-packaging';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  badge?: string;
  material: string;
  finish: string;
  moq: string;
  priceLabel: string;
  sizes: string[];
  colours: string[];
  features: string[];
  applications: string[];
  image: string;
  gallery: string[];
  featured?: boolean;
};
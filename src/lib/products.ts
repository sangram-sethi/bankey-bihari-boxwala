import { products } from '@/data/products';
import { Product, ProductCategory } from '@/types/product';

export const productCategories: {
  value: ProductCategory;
  label: string;
}[] = [
  { value: 'stock-boxes', label: 'Jewellery Stock Boxes' },
  { value: 'ring-boxes', label: 'Ring Boxes' },
  { value: 'earring-boxes', label: 'Earring Boxes' },
  { value: 'necklace-boxes', label: 'Necklace Boxes' },
  { value: 'bangle-boxes', label: 'Bangle Boxes' },
  { value: 'gift-packaging', label: 'Gift Packaging Boxes' },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

export function getCategoryLabel(category: ProductCategory): string {
  return (
    productCategories.find((item) => item.value === category)?.label ?? category
  );
}

export function getRelatedProducts(
  currentProduct: Product,
  limit = 3
): Product[] {
  return products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.category === currentProduct.category
    )
    .slice(0, limit);
}
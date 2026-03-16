import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProductCard } from "@/components/collection/product-card";
import { categories } from "@/features/products/data/categories";
import { products } from "@/features/products/data/products";

export default function CollectionPage() {
  return (
    <main className="py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Collection"
          title="Jewellery stock boxes designed for wholesale buyers."
          description="Browse the current starter catalogue, compare categories, and open any product to continue your enquiry flow."
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category.id}
              className="rounded-full border border-(--border) bg-white/80 px-4 py-2 text-sm text-(--foreground)"
            >
              {category.name}
            </span>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </main>
  );
}
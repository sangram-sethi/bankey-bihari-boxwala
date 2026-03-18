import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProductCard } from "@/components/collection/product-card";
import { products } from "@/features/products/data/products";

const featuredProducts = products.filter((product) => product.featured);

export function FeaturedProducts() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Featured Products"
          title="Selected products that define our premium wholesale catalogue."
          description="These featured designs set the tone for the collection: elegant presentation, showroom-friendly appeal, and a cleaner buying flow for jewellery businesses."
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
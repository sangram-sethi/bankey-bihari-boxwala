import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { ProductCard } from "@/components/collection/product-card";
import { categories } from "@/features/products/data/categories";
import { products } from "@/features/products/data/products";

const featuredProducts = products.filter((product) => product.featured);

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-(--border)">
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-(--border) bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-(--gold)">
                Manufacturer • Wholesale • Premium Luxury
              </span>

              <h1 className="max-w-4xl font-serif text-5xl leading-tight text-(--foreground) sm:text-6xl">
                Royal packaging for modern jewellery businesses.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-[rgba(31,27,24,0.72)] sm:text-lg">
                Premium jewellery stock box manufacturer for wholesale buyers
                across India. Explore elegant box styles, view per-piece pricing,
                and place your order directly on WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/collection">View Collection</Button>
              <Button href="/whatsapp-order" variant="secondary">
                Order on WhatsApp
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-[rgba(31,27,24,0.7)]">
              <span>Per-piece pricing</span>
              <span>GST extra</span>
              <span>India only</span>
            </div>
          </div>

          <div className="rounded-4xl border border-(--border) bg-linear-to-br from-[#fff8ef] via-[#f5e8d3] to-[#ead6b3] p-8 shadow-sm">
            <div className="rounded-[28px] border border-white/50 bg-white/40 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-(--gold)">
                Signature Category
              </span>
              <h2 className="mt-4 font-serif text-4xl text-(--foreground)">
                Jewellery Stock Boxes
              </h2>
              <p className="mt-4 text-sm leading-7 text-[rgba(31,27,24,0.72)]">
                Crafted to help jewellery shops present products with elegance,
                order in bulk with ease, and maintain a refined premium image.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Collections"
            title="Explore our signature stock box categories"
            description="A focused wholesale range shaped for jewellery businesses that want both presentation value and practical ordering."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="rounded-[28px] border border-(--border) bg-white/80 p-6 shadow-sm"
              >
                <h3 className="font-serif text-2xl text-(--foreground)">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(31,27,24,0.72)]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-white/55 py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Products"
            title="Selected designs for premium retail presentation"
            description="A first curated set of products for your launch version. We will expand and refine these later."
          />

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 rounded-4xl border border-(--border) bg-[rgba(255,255,255,0.7)] p-8 lg:grid-cols-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-(--gold)">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-serif text-4xl text-(--foreground)">
              Built for jewellery businesses, not retail shoppers.
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-7 text-[rgba(31,27,24,0.72)]">
            <p>Manufacturer pricing for wholesale buyers</p>
            <p>Luxury-inspired visual presentation</p>
            <p>Per-piece price visibility on site</p>
          </div>

          <div className="space-y-4 text-sm leading-7 text-[rgba(31,27,24,0.72)]">
            <p>Bulk orders discussed directly on WhatsApp</p>
            <p>Clear product categorisation</p>
            <p>Premium brand feel with practical buying flow</p>
          </div>
        </Container>
      </section>
    </main>
  );
}
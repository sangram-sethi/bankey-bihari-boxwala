import { createPageMetadata } from "@/features/seo/metadata";
import { Hero } from "@/components/home/hero";
import { CategoryGrid } from "@/components/home/category-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedProducts } from "@/components/home/featured-products";
import { OrderProcess } from "@/components/home/order-process";
import { CtaStrip } from "@/components/home/cta-strip";

export const metadata = createPageMetadata({
  title: "Premium Jewellery Stock Boxes",
  description:
    "Premium jewellery stock box manufacturer for wholesale buyers across India. Explore elegant packaging categories, featured products, and direct WhatsApp order flow.",
  path: "/",
  keywords: [
    "jewellery stock box manufacturer",
    "wholesale jewellery packaging India",
    "premium jewellery boxes",
  ],
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <WhyChooseUs />
      <FeaturedProducts />
      <OrderProcess />
      <CtaStrip />
    </main>
  );
}
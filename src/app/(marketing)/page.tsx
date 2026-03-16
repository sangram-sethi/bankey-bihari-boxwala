import { Hero } from "@/components/home/hero";
import { CategoryGrid } from "@/components/home/category-grid";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { FeaturedProducts } from "@/components/home/featured-products";
import { OrderProcess } from "@/components/home/order-process";
import { CtaStrip } from "@/components/home/cta-strip";

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
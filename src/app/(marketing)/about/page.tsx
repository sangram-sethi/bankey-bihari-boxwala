import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

export default function AboutPage() {
  return (
    <main className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="About Us"
          title="A premium manufacturer focused on jewellery stock box presentation."
          description="Bankey Bihari Boxwala is being positioned as a trusted wholesale manufacturer for jewellery businesses that want elegant stock boxes with a premium visual identity."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-(--border) bg-white/80 p-8">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Our Positioning
            </h2>
            <p className="mt-4 text-sm leading-7 text-[rgba(31,27,24,0.72)]">
              We are not building a retail e-commerce store. We are building a
              wholesale-first manufacturer website where jewellery shops can
              discover products, check per-piece pricing, and place enquiries
              directly on WhatsApp.
            </p>
          </div>

          <div className="rounded-[28px] border border-(--border) bg-white/80 p-8">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Our Promise
            </h2>
            <p className="mt-4 text-sm leading-7 s">
              Premium look, manufacturer clarity, and a buying journey designed
              for serious trade customers across India.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
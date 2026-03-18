import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

export default function AboutPage() {
  return (
    <main className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="About Us"
          title="A premium wholesale-first brand for jewellery stock box presentation."
          description="Bankey Bihari Boxwala is positioned for jewellery businesses that want elegant packaging, premium visual appeal, and a smoother product enquiry experience."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-(--border) bg-white/80 p-8">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Our Positioning
            </h2>
            <p className="mt-4 text-sm leading-8 text-[rgba(31,27,24,0.72)]">
              We are not trying to build a generic retail e-commerce website.
              This platform is designed as a premium manufacturer catalogue where
              wholesale buyers can discover products, understand the packaging
              style, review price direction, and move directly into a business
              conversation.
            </p>
          </div>

          <div className="rounded-[28px] border border-(--border) bg-white/80 p-8">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Our Promise
            </h2>
            <p className="mt-4 text-sm leading-8 text-[rgba(31,27,24,0.72)]">
              Premium presentation, manufacturer clarity, and a smoother buying
              flow for serious jewellery businesses. Every page is meant to make
              the brand feel more trustworthy, the products feel more valuable,
              and the enquiry process feel easier.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
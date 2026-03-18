import type { Metadata } from "next";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bankey Bihari Boxwala, a premium wholesale-first jewellery stock box manufacturer focused on elegant presentation and direct business enquiries.",
};

const brandPillars = [
  {
    title: "Wholesale-first approach",
    description:
      "This website is designed for jewellers, resellers, retailers, and trade buyers who want clarity, speed, and premium presentation without retail-store clutter.",
  },
  {
    title: "Premium visual language",
    description:
      "Our packaging positioning is rooted in royal tradition, modern luxury, and a polished showroom-ready feel that helps products look more valuable at first glance.",
  },
  {
    title: "Simple buying journey",
    description:
      "Instead of forcing a complex checkout flow, we guide buyers from collection discovery to direct WhatsApp discussion for faster conversion and better business handling.",
  },
];

const trustPoints = [
  "Premium manufacturer positioning",
  "Wholesale and bulk-order friendly",
  "Jewellery-focused catalogue structure",
  "Clear pricing direction with GST note",
  "WhatsApp-based direct enquiry flow",
  "India-first business presence",
];

export default function AboutPage() {
  return (
    <main className="py-20 sm:py-24">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="About Us"
          title="A premium manufacturer brand built for wholesale jewellery packaging."
          description="Bankey Bihari Boxwala is being positioned as a jewellery stock box manufacturer for serious trade buyers who want elegant packaging, premium perception, and a friction-free enquiry journey."
        />

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-4xl border border-(--border) bg-white/80 p-8 shadow-(--shadow-card) sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--gold)">
              Our Positioning
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-(--foreground)">
              Not a generic packaging website.
              <br />
              A focused B2B catalogue experience.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-[rgba(31,27,24,0.72)] sm:text-base">
              <p>
                We are not building a retail e-commerce store. We are building a
                wholesale-first manufacturer website where jewellery businesses
                can explore the collection, understand the design language, and
                move quickly into a direct order conversation.
              </p>

              <p>
                The experience is designed to feel premium, trustworthy, and
                uncluttered so buyers can focus on what matters: product style,
                category fit, per-piece pricing direction, and bulk enquiry.
              </p>

              <p>
                Every page should reinforce one idea: better packaging helps
                jewellery feel more premium before the box is even opened.
              </p>
            </div>
          </div>

          <div className="rounded-4xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--gold)">
              Our Promise
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-(--foreground)">
              Premium look.
              <br />
              Manufacturer clarity.
              <br />
              Trade-buyer convenience.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[rgba(31,27,24,0.72)] sm:text-base">
              The brand promise is simple: present jewellery packaging in a way
              that feels elevated, business-ready, and easy to enquire about.
              That means cleaner communication, stronger visual confidence, and
              a direct path to WhatsApp for order discussion.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/70 bg-white/65 px-4 py-3 text-sm text-(--foreground)"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--gold)">
              Brand Pillars
            </p>
            <h2 className="mt-3 font-serif text-4xl text-(--foreground)">
              What this website is trying to do well
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {brandPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[28px] border border-(--border) bg-white/80 p-8 shadow-(--shadow-card)"
              >
                <h3 className="font-serif text-2xl text-(--foreground)">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-(--muted)">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
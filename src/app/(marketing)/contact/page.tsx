import type { Metadata } from "next";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bankey Bihari Boxwala for wholesale jewellery packaging enquiries, product questions, and bulk order discussions.",
};

const enquiryTopics = [
  "Bulk quantity discussion",
  "Category selection help",
  "Pricing clarification",
  "Product availability enquiry",
  "Wholesale business discussion",
  "Custom order conversation",
];

const orderSteps = [
  "Browse the collection and shortlist the products you like.",
  "Open the product detail page and review the category, price direction, and specifications.",
  "Start the WhatsApp conversation and share your quantity requirement.",
  "Continue final discussion directly for business closure.",
];

export default function ContactPage() {
  return (
    <main className="py-20 sm:py-24">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="Contact"
          title="Start your wholesale order conversation."
          description="For bulk quantity enquiries, product questions, and order discussion, contact us directly through our premium WhatsApp-first enquiry flow."
        />

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-4xl border border-(--border) bg-white/80 p-8 shadow-(--shadow-card) sm:p-10">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Business Information
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-8 text-[rgba(31,27,24,0.72)] sm:text-base">
              <p>
                <strong className="text-(--foreground)">Brand:</strong>{" "}
                {siteConfig.name}
              </p>
              <p>
                <strong className="text-(--foreground)">Location:</strong>{" "}
                {siteConfig.location}
              </p>
              <p>
                <strong className="text-(--foreground)">Email:</strong>{" "}
                {siteConfig.email}
              </p>
              <p>
                <strong className="text-(--foreground)">Pricing Note:</strong>{" "}
                {siteConfig.pricingNote}
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-(--border) bg-[#fcf7f1] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
                Best For
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {enquiryTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-(--border) bg-white px-4 py-2 text-sm text-(--foreground)"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-8 sm:p-10">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Preferred Order Flow
            </h2>

            <div className="mt-6 space-y-4">
              {orderSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[22px] border border-white/70 bg-white/65 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--foreground) text-sm font-semibold text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-7 text-[rgba(31,27,24,0.78)]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={getWhatsAppHref(
                  "Hello, I want to discuss a wholesale order for jewellery stock boxes."
                )}
              >
                Chat on WhatsApp
              </Button>

              <Button href="/collection" variant="secondary">
                Browse Collection
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
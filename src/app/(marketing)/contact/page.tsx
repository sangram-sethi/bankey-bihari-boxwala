import type { Metadata } from "next";

import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bankey Bihari Boxwala for wholesale jewellery packaging enquiries, business discussions, and bulk order support.",
};

export default function ContactPage() {
  return (
    <main className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Start your wholesale order conversation with confidence."
          description="This website is built for business buyers who want clear product presentation, direct communication, and a smoother wholesale enquiry experience."
        />

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-4xl border border-(--border) bg-white/80 p-8 shadow-(--shadow-card) sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
              Business Information
            </p>

            <h2 className="mt-3 font-serif text-3xl text-(--foreground)">
              Direct details for serious enquiries
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-(--muted) sm:text-base">
              <p>
                <strong className="text-(--foreground)">Brand:</strong>{" "}
                {siteConfig.legalName}
              </p>
              <p>
                <strong className="text-(--foreground)">Location:</strong>{" "}
                {siteConfig.location}
              </p>
              <p>
                <strong className="text-(--foreground)">Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-(--maroon)"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <strong className="text-(--foreground)">WhatsApp:</strong>{" "}
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-(--maroon)"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </p>
              <p>
                <strong className="text-(--foreground)">Business Hours:</strong>{" "}
                {siteConfig.businessHours}
              </p>
              <p>
                <strong className="text-(--foreground)">Service Area:</strong>{" "}
                {siteConfig.serviceArea}
              </p>
              <p>
                <strong className="text-(--foreground)">Pricing Note:</strong>{" "}
                {siteConfig.pricingNote}
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-(--border) bg-[#fcf7f1] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
                Common Enquiry Topics
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {siteConfig.supportTopics.map((topic) => (
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

          <div className="rounded-4xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-8 shadow-(--shadow-card) sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
              Preferred Order Flow
            </p>

            <h2 className="mt-3 font-serif text-3xl text-(--foreground)">
              A smoother process for wholesale buyers
            </h2>

            <div className="mt-6 space-y-4">
              {siteConfig.orderFlow.map((step, index) => (
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
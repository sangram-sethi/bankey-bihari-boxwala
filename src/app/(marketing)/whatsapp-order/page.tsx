import type { Metadata } from "next";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export const metadata: Metadata = {
  title: "WhatsApp Order",
  description:
    "Place your jewellery packaging enquiry directly on WhatsApp and continue the wholesale order discussion with Bankey Bihari Boxwala.",
};

const benefits = [
  {
    title: "Faster conversation",
    description:
      "Skip slow back-and-forth forms and move directly into product and quantity discussion.",
  },
  {
    title: "Business-friendly flow",
    description:
      "A direct chat works better for wholesale buyers who need clarity on products, quantity, and pricing.",
  },
  {
    title: "Low-friction conversion",
    description:
      "The website acts as a premium catalogue while WhatsApp handles the final enquiry and closing flow.",
  },
];

const messageTemplates = [
  {
    label: "General wholesale enquiry",
    message:
      "Hello, I want to place a wholesale enquiry for jewellery stock boxes.",
  },
  {
    label: "Price and quantity enquiry",
    message:
      "Hello, I want pricing and quantity details for jewellery stock boxes. Please share more information.",
  },
  {
    label: "Custom discussion",
    message:
      "Hello, I want to discuss a customised bulk requirement for jewellery packaging.",
  },
];

export default function WhatsAppOrderPage() {
  return (
    <main className="py-20 sm:py-24">
      <Container className="space-y-14">
        <SectionHeading
          eyebrow="WhatsApp Order"
          title="Place your product enquiry directly on WhatsApp."
          description="This website is intentionally designed as a premium catalogue and enquiry platform. Final wholesale discussion happens directly on WhatsApp for speed, clarity, and better conversion."
        />

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-4xlrder border-(--border) bg-white/80 p-8 shadow-(--shadow-card) sm:p-10">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Why this flow works
            </h2>

            <div className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-3xlrder border-(--border) bg-[#fcf7f1] p-5"
                >
                  <h3 className="font-serif text-2xl text-(--foreground)">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-8 sm:p-10">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Start the conversation
            </h2>

            <p className="mt-4 text-sm leading-8 text-[rgba(31,27,24,0.74)] sm:text-base">
              Choose the most relevant enquiry type below and continue directly
              on WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              {messageTemplates.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/70 bg-white/65 p-5"
                >
                  <p className="text-lg font-medium text-(--foreground)">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-(--muted)">
                    {item.message}
                  </p>

                  <div className="mt-4">
                    <Button href={getWhatsAppHref(item.message)} size="sm">
                      Continue on WhatsApp
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/collection" variant="secondary">
                Back to Collection
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
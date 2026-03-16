import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";

const steps = [
  {
    number: "01",
    title: "Browse the collection",
    description:
      "Explore available stock box categories and compare the premium presentation styles.",
  },
  {
    number: "02",
    title: "Choose your preferred design",
    description:
      "Open the product page, review the per-piece price, and note the colours, sizes, and finish.",
  },
  {
    number: "03",
    title: "Place enquiry on WhatsApp",
    description:
      "Send your product and quantity requirement directly on WhatsApp to continue the order conversation.",
  },
];

export function OrderProcess() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-5">
            <Badge variant="gold">Order Process</Badge>

            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-(--foreground) sm:text-5xl">
              A simple buying journey designed for wholesale orders.
            </h2>

            <p className="max-w-2xl text-sm leading-8 text-(--muted) sm:text-base">
              We keep the website clean and fast. Product discovery happens on
              the site, while the final order discussion happens on WhatsApp.
            </p>
          </div>

          <Button href="/whatsapp-order" variant="secondary">
            Start Order Enquiry
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-(--radius-card) border border-(--border) bg-white/80 p-6 shadow-(--shadow-soft)"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
                Step {step.number}
              </span>

              <h3 className="mt-4 font-serif text-2xl text-(--foreground)">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-(--muted)">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
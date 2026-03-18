import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

const enquiryOptions = [
  {
    title: "General wholesale enquiry",
    description:
      "Start a conversation if you want to know more about available stock boxes and the order process.",
    message:
      "Hello, I want to place a wholesale enquiry for jewellery stock boxes.",
  },
  {
    title: "Product and pricing discussion",
    description:
      "Use this if you already have shortlisted products and want to discuss quantity, pricing, or availability.",
    message:
      "Hello, I want to discuss product details, pricing, and availability for jewellery stock boxes.",
  },
  {
    title: "Custom business discussion",
    description:
      "Use this if you want to discuss a more specific or customised wholesale requirement.",
    message:
      "Hello, I want to discuss a custom wholesale requirement for jewellery packaging.",
  },
];

export default function WhatsAppOrderPage() {
  return (
    <main className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="WhatsApp Order"
          title="Continue your wholesale enquiry directly on WhatsApp."
          description="This website is designed to help buyers discover products smoothly. Final quantity, availability, and order discussion happens directly on WhatsApp for faster business handling."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {enquiryOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-[28px] border border-(--border) bg-white/80 p-8"
            >
              <h2 className="font-serif text-3xl text-(--foreground)">
                {option.title}
              </h2>

              <p className="mt-4 text-sm leading-8 text-[rgba(31,27,24,0.72)]">
                {option.description}
              </p>

              <div className="mt-8">
                <Button href={getWhatsAppHref(option.message)}>
                  Continue on WhatsApp
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
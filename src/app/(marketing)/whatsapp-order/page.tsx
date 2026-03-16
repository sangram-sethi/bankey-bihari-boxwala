import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export default function WhatsAppOrderPage() {
  return (
    <main className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="WhatsApp Order"
          title="Place your product enquiry directly on WhatsApp."
          description="This website is designed as a premium catalogue and enquiry platform. Final order discussion happens directly on WhatsApp."
        />

        <div className="rounded-4xl border border-(--border) bg-white/80 p-8">
          <div className="space-y-4 text-sm leading-8 text-[rgba(31,27,24,0.72)]">
            <p>Browse the product collection.</p>
            <p>Open the product you are interested in.</p>
            <p>Use the WhatsApp button to send your enquiry instantly.</p>
          </div>

          <div className="mt-8">
            <Button
              href={getWhatsAppHref(
                "Hello, I want to place a wholesale enquiry for jewellery stock boxes."
              )}
            >
              Continue to WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
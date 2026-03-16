import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/lib/constants/site";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export default function ContactPage() {
  return (
    <main className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Start your wholesale order conversation."
          description="For bulk quantity enquiries, product questions, and order discussions, contact us directly on WhatsApp."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-(--border) bg-white/80 p-8">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Business Information
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[rgba(31,27,24,0.72)]">
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
                <strong className="text-(--foreground)">Pricing:</strong>{" "}
                {siteConfig.pricingNote}
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-(--border) bg-white/80 p-8">
            <h2 className="font-serif text-3xl text-(--foreground)">
              Preferred Order Flow
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[rgba(31,27,24,0.72)]">
              <p>1. Explore products on the website</p>
              <p>2. Select the design you like</p>
              <p>3. Contact us on WhatsApp for quantity and order discussion</p>
            </div>

            <div className="mt-8">
              <Button
                href={getWhatsAppHref(
                  "Hello, I want to discuss a wholesale order for jewellery stock boxes."
                )}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
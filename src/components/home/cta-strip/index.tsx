import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";

export function CtaStrip() {
  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <Container>
        <div className="overflow-hidden rounded-4xl border border-(--border) bg-[linear-gradient(135deg,#6f1d2b_0%,#8b2c3d_55%,#b08d57_100%)] px-6 py-10 text-white shadow-(--shadow-card) sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.78)]">
                Wholesale Enquiry
              </p>

              <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                Ready to discuss premium stock boxes for your business?
              </h2>

              <p className="max-w-2xl text-sm leading-8 text-[rgba(255,255,255,0.82)] sm:text-base">
                Browse the collection, shortlist the right products, and
                continue directly on WhatsApp for quantity, availability, and
                final order discussion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/collection"
                variant="secondary"
                className="border-white/30 bg-white text-(--foreground) hover:bg-white"
              >
                View Collection
              </Button>

              <Button
                href="/whatsapp-order"
                className="bg-white/15 text-white hover:bg-white/20"
              >
                Enquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
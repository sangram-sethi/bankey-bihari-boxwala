import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-(--border)">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(111,29,43,0.08),transparent_26%)]" />

      <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="space-y-8">
          <div className="space-y-5">
            <Badge variant="gold">
              Manufacturer • Wholesale • Premium Luxury
            </Badge>

            <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] text-(--foreground) sm:text-6xl lg:text-7xl">
              Royal packaging for modern jewellery businesses.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
              Explore premium jewellery stock boxes designed for wholesale
              buyers across India. View per-piece pricing, discover elegant
              styles, and place your enquiry directly on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="/collection" size="lg">
              View Collection
            </Button>

            <Button href="/whatsapp-order" variant="secondary" size="lg">
              Order on WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-(--muted)">
            <span>Per-piece pricing</span>
            <span>GST extra</span>
            <span>India only</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[rgba(176,141,87,0.15)] blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[rgba(111,29,43,0.14)] blur-3xl" />

          <div className="relative rounded-4xl border border-(--border) bg-linear-to-br from-[#fff9f2] via-[#f6ead8] to-[#ead6b3] p-6 shadow-(--shadow-soft) sm:p-8">
            <div className="rounded-[28px] border border-white/60 bg-[rgba(255,255,255,0.45)] p-6 sm:p-8">
              <Badge variant="soft">Signature Category</Badge>

              <h2 className="mt-5 font-serif text-3xl text-(--foreground) sm:text-4xl">
                Jewellery Stock Boxes
              </h2>

              <p className="mt-4 text-sm leading-7 text-(--muted) sm:text-base">
                Designed for jewellery shops that want elegant stock handling,
                premium counter presentation, and a cleaner brand image.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-(--muted-soft)">
                    Best For
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--foreground)">
                    Jewellery counters, showroom display, organised stock
                    presentation
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/55 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-(--muted-soft)">
                    Order Flow
                  </p>
                  <p className="mt-2 text-sm leading-6 text-(--foreground)">
                    Browse online, confirm quantity on WhatsApp, place bulk
                    order directly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
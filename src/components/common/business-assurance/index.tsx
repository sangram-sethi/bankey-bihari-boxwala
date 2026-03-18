import { Container } from "@/components/common/container";
import { siteConfig } from "@/lib/constants/site";

export function BusinessAssurance() {
  return (
    <section className="pb-8 pt-2 sm:pb-10">
      <Container>
        <div className="overflow-hidden rounded-4xl border border-(--border) bg-white/80 shadow-(--shadow-card)">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--gold)">
                Business Assurance
              </p>

              <h2 className="font-serif text-3xl leading-tight text-(--foreground) sm:text-4xl">
                Built to feel premium. Designed to work smoothly for wholesale buyers.
              </h2>

              <p className="max-w-2xl text-sm leading-8 text-(--muted) sm:text-base">
                Every part of the website is meant to reduce friction: clearer
                product browsing, stronger business trust, and a direct path to
                WhatsApp for faster order conversations.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="rounded-full border border-(--border) bg-[#fcf7f1] px-4 py-2 text-sm text-(--foreground)">
                  {siteConfig.location}
                </span>
                <span className="rounded-full border border-(--border) bg-[#fcf7f1] px-4 py-2 text-sm text-(--foreground)">
                  {siteConfig.businessHours}
                </span>
                <span className="rounded-full border border-(--border) bg-[#fcf7f1] px-4 py-2 text-sm text-(--foreground)">
                  {siteConfig.responseTime}
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.buyerAssurances.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-5"
                >
                  <p className="text-sm leading-7 text-(--foreground)">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
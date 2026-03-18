import { Badge } from "@/components/common/badge";
import { Container } from "@/components/common/container";

const points = [
  "Wholesale-first website flow designed for business buyers",
  "Premium visual presentation that strengthens product impression",
  "Per-piece pricing direction visible for faster shortlisting",
  "Focused jewellery packaging catalogue instead of a cluttered store",
  "Direct WhatsApp enquiry for quicker quantity and order discussion",
  "Clear brand language built to feel reliable, polished, and serious",
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-(--border) bg-white/55 py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <Badge variant="wine">Why Choose Us</Badge>

          <h2 className="font-serif text-4xl leading-tight text-(--foreground) sm:text-5xl">
            A better buying experience for wholesale jewellery businesses.
          </h2>

          <p className="max-w-xl text-sm leading-8 text-(--muted) sm:text-base">
            This website is intentionally built for trade buyers who want
            premium presentation, faster comparison, and a smoother path to
            enquiry. The goal is simple: make product discovery easier and
            business discussion faster.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-(--border) bg-white/80 p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-(--gold)" />
                <p className="text-sm leading-7 text-(--foreground)">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import { Badge } from "@/components/common/badge";
import { Container } from "@/components/common/container";

const points = [
  "Manufacturer pricing for wholesale buyers",
  "Luxury-inspired visual presentation",
  "Per-piece price visibility on site",
  "Bulk orders handled directly on WhatsApp",
  "Focused catalogue built for jewellery shops",
  "Premium brand feel with practical buying flow",
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-(--border) bg-white/55 py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <Badge variant="wine">Why Choose Us</Badge>

          <h2 className="font-serif text-4xl leading-tight text-(--foreground) sm:text-5xl">
            Built for jewellery businesses, not retail shoppers.
          </h2>

          <p className="max-w-xl text-sm leading-8 text-(--muted) sm:text-base">
            This website is shaped as a premium wholesale catalogue where serious
            buyers can discover products quickly, understand pricing clearly,
            and move straight into a WhatsApp order conversation.
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
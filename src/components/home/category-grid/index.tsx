import { Badge } from "@/components/common/badge";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { categories } from "@/features/products/data/categories";

export function CategoryGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Collections"
          title="Explore our signature stock box categories"
          description="A focused wholesale range shaped for jewellery businesses that want both presentation value and practical ordering."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <article
              key={category.id}
              className="group rounded-(--radius-card) border border-(--border) bg-white/80 p-6 shadow-(--shadow-soft) transition duration-300 hover:-translate-y-1"
            >
              <div className="space-y-5">
                <Badge variant={index % 2 === 0 ? "soft" : "gold"}>
                  Category {String(index + 1).padStart(2, "0")}
                </Badge>

                <div>
                  <h3 className="font-serif text-2xl text-(--foreground) transition group-hover:text-(--maroon)">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    {category.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
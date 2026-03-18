import Link from "next/link";

import { ProductCard } from "@/components/collection/product-card";
import { CollectionFilters } from "@/components/collection/collection-filters";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { categories } from "@/features/products/data/categories";
import { products } from "@/features/products/data/products";

type CollectionPageProps = {
  searchParams: Promise<{
    category?: string | string[];
    q?: string | string[];
  }>;
};

function getSingleParam(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export default async function CollectionPage({
  searchParams,
}: CollectionPageProps) {
  const resolvedSearchParams = await searchParams;

  const rawCategory = getSingleParam(resolvedSearchParams.category);
  const query = getSingleParam(resolvedSearchParams.q)?.trim() ?? "";

  const activeCategory = categories.some(
    (category) => category.slug === rawCategory
  )
    ? rawCategory
    : undefined;

  const normalizedQuery = query.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const categoryMatch = activeCategory
      ? product.category === activeCategory
      : true;

    const searchableText = [
      product.name,
      product.shortDescription,
      product.fullDescription,
      product.category,
      product.material,
      product.finish,
      ...product.colours,
      ...product.sizes,
    ]
      .join(" ")
      .toLowerCase();

    const queryMatch = normalizedQuery
      ? searchableText.includes(normalizedQuery)
      : true;

    return categoryMatch && queryMatch;
  });

  const activeCategoryData = activeCategory
    ? categories.find((category) => category.slug === activeCategory)
    : undefined;

  return (
    <main className="py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Collection"
          title="Jewellery stock boxes designed for wholesale buyers."
          description="Browse the current catalogue, narrow products by category, and search quickly to reach the right wholesale enquiry faster."
        />

        <CollectionFilters
          activeCategory={activeCategory}
          query={query}
          filteredCount={filteredProducts.length}
        />

        {activeCategoryData ? (
          <section className="rounded-4xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
              Active Category
            </p>

            <h2 className="mt-3 font-serif text-3xl text-(--foreground)">
              {activeCategoryData.name}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-[rgba(31,27,24,0.72)] sm:text-base">
              {activeCategoryData.description}
            </p>
          </section>
        ) : null}

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
                Product Results
              </p>
              <h2 className="mt-2 font-serif text-3xl text-(--foreground)">
                {filteredProducts.length} product
                {filteredProducts.length === 1 ? "" : "s"} found
              </h2>
            </div>

            {(activeCategory || query) && (
              <Link
                href="/collection"
                className="text-sm font-medium text-(--maroon) transition hover:opacity-80"
              >
                Reset filters
              </Link>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-4xl border border-(--border) bg-white/80 p-10 text-center shadow-(--shadow-card)">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
                No Products Found
              </p>

              <h3 className="mt-3 font-serif text-3xl text-(--foreground)">
                No matching products in this view
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-(--muted) sm:text-base">
                Try a broader keyword, switch category, or clear the current
                filters to explore the full wholesale collection again.
              </p>

              <div className="mt-6">
                <Link
                  href="/collection"
                  className="inline-flex items-center justify-center rounded-full bg-(--maroon) px-5 py-3 text-sm font-medium text-white shadow-(--shadow-card) transition hover:-translate-y-0.5 hover:bg-(--maroon-dark)"
                >
                  View Full Collection
                </Link>
              </div>
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}
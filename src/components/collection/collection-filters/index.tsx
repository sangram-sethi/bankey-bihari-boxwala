import Link from "next/link";

import { Button } from "@/components/common/button";
import { categories } from "@/features/products/data/categories";
import { products } from "@/features/products/data/products";

type CollectionFiltersProps = {
  activeCategory?: string;
  query?: string;
  filteredCount: number;
};

function buildCollectionHref({
  category,
  query,
}: {
  category?: string;
  query?: string;
}) {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (query?.trim()) {
    params.set("q", query.trim());
  }

  const search = params.toString();

  return search ? `/collection?${search}` : "/collection";
}

export function CollectionFilters({
  activeCategory,
  query,
  filteredCount,
}: CollectionFiltersProps) {
  const hasActiveFilters = Boolean(activeCategory || query?.trim());

  return (
    <section className="space-y-6 rounded-4xl border border-(--border) bg-white/75 p-6 shadow-(--shadow-card) sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form action="/collection" method="get" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
              Search Collection
            </p>
            <h3 className="mt-2 font-serif text-2xl text-(--foreground)">
              Find the right stock box faster
            </h3>
          </div>

          {activeCategory ? (
            <input type="hidden" name="category" value={activeCategory} />
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search by product name, material, colour, finish..."
              className="min-h-12 flex-1 rounded-full border border-(--border) bg-white px-5 text-sm text-(--foreground) outline-none transition placeholder:text-(--muted-soft) focus:border-(--gold)"
            />

            <Button type="submit">Search</Button>
          </div>
        </form>

        <div className="rounded-3xl border border-(--border) bg-[#fcf7f1] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
            Result Summary
          </p>

          <div className="mt-4 space-y-3 text-sm leading-7 text-(--muted)">
            <p>
              Showing{" "}
              <span className="font-semibold text-(--foreground)">
                {filteredCount}
              </span>{" "}
              product{filteredCount === 1 ? "" : "s"} from the current
              catalogue.
            </p>

            <p>
              Use category filters for quick browsing, or search by product
              terms like velvet, transparent, maroon, matte, or rigid board.
            </p>
          </div>

          {hasActiveFilters ? (
            <div className="mt-5">
              <Button href="/collection" variant="secondary" size="sm">
                Clear All Filters
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href={buildCollectionHref({ query })}
          className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm transition ${
            !activeCategory
              ? "border-[rgba(111,29,43,0.18)] bg-[rgba(111,29,43,0.08)] text-(--maroon)"
              : "border-(--border) bg-white text-(--foreground) hover:bg-[#fcf7f1]"
          }`}
        >
          <span className="font-medium">All Products</span>
          <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs">
            {products.length}
          </span>
        </Link>

        {categories.map((category) => {
          const count = products.filter(
            (product) => product.category === category.slug
          ).length;

          const isActive = activeCategory === category.slug;

          return (
            <Link
              key={category.id}
              href={buildCollectionHref({
                category: category.slug,
                query,
              })}
              className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-[rgba(111,29,43,0.18)] bg-[rgba(111,29,43,0.08)] text-(--maroon)"
                  : "border-(--border) bg-white text-(--foreground) hover:bg-[#fcf7f1]"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs">
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
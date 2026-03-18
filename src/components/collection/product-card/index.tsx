import Link from "next/link";

import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import type { Product } from "@/features/products/types/product.types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productHref = `/collection/${product.slug}`;

  return (
    <article className="group overflow-hidden rounded-(--radius-card) border border-(--border) bg-white/80 shadow-(--shadow-card) transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(111,29,43,0.12)]">
      <div className="flex aspect-4/3 items-end bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-6">
        <div className="space-y-4">
          <Badge variant="soft">{product.category.replaceAll("-", " ")}</Badge>

          <div>
            <Link
              href={productHref}
              prefetch={true}
              className="inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(176,141,87,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6ede3]"
            >
              <h3 className="font-serif text-2xl text-(--foreground) transition group-hover:text-(--maroon)">
                {product.name}
              </h3>
            </Link>

            <p className="mt-2 max-w-md text-sm leading-7 text-(--muted)">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-wrap gap-2">
          {product.colours.slice(0, 3).map((colour) => (
            <span
              key={colour}
              className="rounded-full border border-(--border) bg-white px-3 py-1 text-xs text-(--muted-soft)"
            >
              {colour}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-(--muted-soft)">
              Price Per Piece
            </p>
            <p className="mt-1 text-2xl font-semibold text-(--foreground)">
              ₹{product.pricePerPiece}
            </p>
            <p className="text-sm text-(--muted-soft)">{product.gstNote}</p>
          </div>

          <Button
            href={productHref}
            variant="secondary"
            size="sm"
            prefetch={true}
            aria-label={`View details for ${product.name}`}
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
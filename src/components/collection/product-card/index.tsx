import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import type { Product } from "@/features/products/types/product.types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-(--radius-card) border border-(--border) bg-white/80 shadow-(--shadow-card) transition duration-300 hover:-translate-y-1">
      <div className="flex aspect-4/3 items-end bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-6">
        <div className="space-y-4">
          <Badge variant="soft">{product.category.replaceAll("-", " ")}</Badge>

          <div>
            <h3 className="font-serif text-2xl text-(--foreground)">
              {product.name}
            </h3>
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

          <Button href={`/collection/${product.slug}`} variant="secondary" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
import { Button } from "@/components/common/button";
import type { Product } from "@/features/products/types/product.types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-(--border) bg-white/80 shadow-sm">
      <div className="flex aspect-4/3 items-end bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-6">
        <div>
          <span className="mb-3 inline-flex rounded-full border border-[rgba(31,27,24,0.12)] bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-(--gold)">
            {product.category.replaceAll("-", " ")}
          </span>
          <h3 className="font-serif text-2xl text-foreground">
            {product.name}
          </h3>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <p className="text-sm leading-7 text-[rgba(31,27,24,0.72)]">
          {product.shortDescription}
        </p>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[rgba(31,27,24,0.55)]">
              Price Per Piece
            </p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              ₹{product.pricePerPiece}
            </p>
            <p className="text-sm text-[rgba(31,27,24,0.6)]">{product.gstNote}</p>
          </div>

          <Button href={`/collection/${product.slug}`} variant="secondary">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
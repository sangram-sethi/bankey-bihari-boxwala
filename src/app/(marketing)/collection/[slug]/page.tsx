import { notFound } from "next/navigation";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { ProductCard } from "@/components/collection/product-card";
import { products } from "@/features/products/data/products";
import { getWhatsAppHref } from "@/lib/constants/whatsapp";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.slug !== product.slug
    )
    .slice(0, 3);

  const message = `Hello, I want to enquire about ${product.whatsappLabel}. Please share details for bulk order.`;

  return (
    <main className="py-20">
      <Container className="space-y-14">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-4xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-10">
            <div className="flex min-h-90 items-end rounded-[28px] border border-white/60 bg-white/35 p-8">
              <div>
                <span className="inline-flex rounded-full border border-[rgba(31,27,24,0.12)] bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-(--gold)">
                  {product.category.replaceAll("-", " ")}
                </span>
                <h1 className="mt-4 font-serif text-5xl text-(--foreground)">
                  {product.name}
                </h1>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-(--gold)">
                Product Details
              </p>
              <h2 className="mt-3 font-serif text-4xl text-(--foreground)">
                ₹{product.pricePerPiece} / piece
              </h2>
              <p className="mt-2 text-sm text-[rgba(31,27,24,0.6)]">
                {product.gstNote}
              </p>
            </div>

            <p className="text-sm leading-8 text-[rgba(31,27,24,0.72)]">
              {product.fullDescription}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-(--border) bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[rgba(31,27,24,0.55)]">
                  Material
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.material}
                </p>
              </div>

              <div className="rounded-3xl border border-(--border) bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[rgba(31,27,24,0.55)]">
                  Finish
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.finish}
                </p>
              </div>

              <div className="rounded-3xl border border-(--border) bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[rgba(31,27,24,0.55)]">
                  Sizes
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.sizes.join(", ")}
                </p>
              </div>

              <div className="rounded-3xl border border-(--border) bg-white/80 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[rgba(31,27,24,0.55)]">
                  Colours
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.colours.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href={getWhatsAppHref(message)}>Order on WhatsApp</Button>
              <Button href="/collection" variant="secondary">
                Back to Collection
              </Button>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 ? (
          <section className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-(--gold)">
                Related Products
              </p>
              <h2 className="mt-3 font-serif text-4xl text-(--foreground)">
                More in this category
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </main>
  );
}
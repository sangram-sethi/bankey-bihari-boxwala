import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/collection/product-card";
import { ProductEnquiryPanel } from "@/components/collection/product-enquiry-panel";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import { categories } from "@/features/products/data/categories";
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

  const categoryData = categories.find(
    (category) => category.slug === product.category
  );

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.slug !== product.slug
    )
    .slice(0, 3);

  const whatsappMessage = `Hello, I want to enquire about ${product.whatsappLabel}. Please share details for bulk order.`;

  const idealFor = [
    "Jewellery counters and showroom presentation",
    "Wholesale buyers looking for repeat-ready packaging",
    `Businesses that want a ${product.finish.toLowerCase()} premium look`,
    product.sizes.length > 1
      ? "Buyers who need multiple size options"
      : "Buyers who want a simple standard-size option",
  ];

  const buyingNotes = [
    "Pricing shown here is directional per-piece pricing for easier catalogue browsing.",
    "Final quantity, dispatch, and availability discussion happens directly on WhatsApp.",
    `This product is offered in ${product.colours.join(", ")} colour options.`,
    `Material and finish combination: ${product.material} with ${product.finish.toLowerCase()} styling.`,
  ];

  return (
    <main className="py-16 sm:py-20">
      <Container className="space-y-14">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-(--muted-soft)">
          <Link href="/" className="transition hover:text-(--foreground)">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/collection"
            className="transition hover:text-(--foreground)"
          >
            Collection
          </Link>
          <span>/</span>
          <span className="text-(--foreground)">{product.name}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[36px] border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-6 shadow-(--shadow-card) sm:p-8">
              <div className="flex min-h-105 flex-col justify-between rounded-[28px] border border-white/60 bg-white/35 p-6 sm:p-8">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="soft">
                    {categoryData?.name ?? product.category.replaceAll("-", " ")}
                  </Badge>

                  <Badge variant={product.inStock ? "gold" : "soft"}>
                    {product.inStock ? "In Stock" : "Availability on Request"}
                  </Badge>
                </div>

                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
                    Premium Wholesale Product
                  </p>

                  <h1 className="mt-4 font-serif text-4xl leading-tight text-(--foreground) sm:text-5xl">
                    {product.name}
                  </h1>

                  <p className="mt-5 max-w-2xl text-sm leading-8 text-[rgba(31,27,24,0.72)] sm:text-base">
                    {product.fullDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-3xl border border-(--border) bg-white/80 p-5 shadow-(--shadow-card)">
                <p className="text-xs uppercase tracking-[0.22em] text-(--muted-soft)">
                  Material
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.material}
                </p>
              </div>

              <div className="rounded-3xl border border-(--border) bg-white/80 p-5 shadow-(--shadow-card)">
                <p className="text-xs uppercase tracking-[0.22em] text-(--muted-soft)">
                  Finish
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.finish}
                </p>
              </div>

              <div className="rounded-3xl border border-(--border) bg-white/80 p-5 shadow-(--shadow-card)">
                <p className="text-xs uppercase tracking-[0.22em] text-(--muted-soft)">
                  Sizes
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.sizes.join(", ")}
                </p>
              </div>

              <div className="rounded-3xl border border-(--border) bg-white/80 p-5 shadow-(--shadow-card)">
                <p className="text-xs uppercase tracking-[0.22em] text-(--muted-soft)">
                  Colours
                </p>
                <p className="mt-2 text-lg text-(--foreground)">
                  {product.colours.join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <ProductEnquiryPanel
              productName={product.name}
              pricePerPiece={product.pricePerPiece}
              gstNote={product.gstNote}
              inStock={product.inStock}
              whatsappHref={getWhatsAppHref(whatsappMessage)}
            />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-4xl border border-(--border) bg-white/80 p-8 shadow-(--shadow-card)">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
              Ideal For
            </p>

            <h2 className="mt-3 font-serif text-3xl text-(--foreground)">
              Where this product fits best
            </h2>

            <div className="mt-6 space-y-3">
              {idealFor.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[22px] border border-(--border) bg-[#fcf7f1] px-4 py-4"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-(--gold)" />
                  <p className="text-sm leading-7 text-(--foreground)">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-4xl border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-8 shadow-(--shadow-card)">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
              Wholesale Buying Notes
            </p>

            <h2 className="mt-3 font-serif text-3xl text-(--foreground)">
              Helpful before you enquire
            </h2>

            <div className="mt-6 space-y-3">
              {buyingNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[22px] border border-white/70 bg-white/65 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-[rgba(31,27,24,0.78)]">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={getWhatsAppHref(whatsappMessage)}>
                Start WhatsApp Enquiry
              </Button>

              <Button href="/collection" variant="secondary">
                Back to Collection
              </Button>
            </div>
          </article>
        </section>

        {categoryData ? (
          <section className="rounded-4xl border border-(--border) bg-white/80 p-8 shadow-(--shadow-card) sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
              Category Context
            </p>

            <h2 className="mt-3 font-serif text-3xl text-(--foreground)">
              {categoryData.name}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-(--muted) sm:text-base">
              {categoryData.description}
            </p>
          </section>
        ) : null}

        {relatedProducts.length > 0 ? (
          <section className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-(--gold)">
                  Related Products
                </p>
                <h2 className="mt-3 font-serif text-4xl text-(--foreground)">
                  Continue exploring this category
                </h2>
              </div>

              <Link
                href="/collection"
                className="text-sm font-medium text-(--maroon) transition hover:opacity-80"
              >
                View full collection
              </Link>
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
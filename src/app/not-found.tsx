import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";

export default function NotFound() {
  return (
    <main className="py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[36px] border border-(--border) bg-white/80 px-8 py-12 text-center shadow-(--shadow-card) sm:px-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
            404
          </span>

          <h1 className="mt-4 font-serif text-4xl text-(--foreground) sm:text-5xl">
            This page is not available
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-(--muted) sm:text-base">
            The page may have moved, the link may be outdated, or the route may
            not exist yet. You can continue browsing the collection or go back
            to the homepage.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/collection">Browse Collection</Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
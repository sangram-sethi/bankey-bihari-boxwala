import { Container } from "@/components/common/container";
import { Button } from "@/components/common/button";

export default function NotFound() {
  return (
    <main className="py-24">
      <Container className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
          404
        </span>
        <h1 className="mt-4 font-serif text-4xl text-(--foreground) sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[rgba(31,27,24,0.72)] sm:text-base">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </main>
  );
}
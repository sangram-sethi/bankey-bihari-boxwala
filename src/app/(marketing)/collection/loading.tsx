import { Container } from "@/components/common/container";

export default function CollectionLoading() {
  return (
    <main className="py-20">
      <Container className="space-y-12 animate-pulse">
        <div className="space-y-4">
          <div className="h-3 w-28 rounded-full bg-[rgba(176,141,87,0.18)]" />
          <div className="h-12 max-w-2xl rounded-2xl bg-white/80" />
          <div className="h-6 max-w-3xl rounded-2xl bg-white/70" />
        </div>

        <section className="rounded-4xl border border-(--border) bg-white/75 p-6 shadow-(--shadow-card) sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="h-3 w-32 rounded-full bg-[rgba(176,141,87,0.18)]" />
              <div className="h-9 w-72 rounded-2xl bg-white/80" />
              <div className="h-12 rounded-full bg-white" />
            </div>

            <div className="rounded-3xl border border-(--border) bg-[#fcf7f1] p-5">
              <div className="h-3 w-28 rounded-full bg-[rgba(176,141,87,0.18)]" />
              <div className="mt-4 h-5 w-full rounded-xl bg-white/80" />
              <div className="mt-3 h-5 w-4/5 rounded-xl bg-white/70" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-36 rounded-full border border-(--border) bg-white"
              />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-(--radius-card) border border-(--border) bg-white/80 shadow-(--shadow-card)"
            >
              <div className="aspect-4/3 bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf]" />
              <div className="space-y-4 p-6">
                <div className="h-6 w-2/3 rounded-xl bg-white" />
                <div className="h-4 w-full rounded-xl bg-white/80" />
                <div className="h-4 w-5/6 rounded-xl bg-white/70" />
                <div className="h-10 w-32 rounded-full bg-white" />
              </div>
            </article>
          ))}
        </section>
      </Container>
    </main>
  );
}
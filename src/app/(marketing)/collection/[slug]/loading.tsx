import { Container } from "@/components/common/container";

export default function ProductDetailLoading() {
  return (
    <main className="py-16 sm:py-20">
      <Container className="space-y-14 animate-pulse">
        <div className="h-4 w-56 rounded-full bg-white/80" />

        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[36px] border border-(--border) bg-linear-to-br from-white via-[#f6ede3] to-[#ead7bf] p-6 shadow-(--shadow-card) sm:p-8">
              <div className="min-h-105 rounded-[28px] border border-white/60 bg-white/35 p-6 sm:p-8">
                <div className="h-full space-y-5">
                  <div className="h-8 w-44 rounded-full bg-white/80" />
                  <div className="h-14 max-w-2xl rounded-2xl bg-white/80" />
                  <div className="h-5 max-w-3xl rounded-xl bg-white/70" />
                  <div className="h-5 max-w-2xl rounded-xl bg-white/70" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-(--border) bg-white/80 p-5 shadow-(--shadow-card)"
                >
                  <div className="h-3 w-20 rounded-full bg-white/70" />
                  <div className="mt-3 h-6 w-28 rounded-xl bg-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-(--border) bg-white/85 p-6 shadow-(--shadow-card) sm:p-8">
            <div className="h-8 w-40 rounded-full bg-white/80" />
            <div className="mt-6 h-12 w-44 rounded-2xl bg-white" />
            <div className="mt-3 h-4 w-40 rounded-xl bg-white/70" />

            <div className="mt-6 rounded-3xl border border-(--border) bg-[#fcf7f1] p-5">
              <div className="h-4 w-full rounded-xl bg-white/80" />
              <div className="mt-3 h-4 w-5/6 rounded-xl bg-white/70" />
            </div>

            <div className="mt-6 space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-14 rounded-[20px] border border-(--border) bg-white"
                />
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <div className="h-11 rounded-full bg-(--maroon)/25" />
              <div className="h-11 rounded-full bg-white" />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow ? (
        <div
          className={`flex items-center gap-3 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-px w-10 bg-[rgba(176,141,87,0.45)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2 className="max-w-3xl font-serif text-3xl leading-tight text-(--foreground) sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-(--muted) sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
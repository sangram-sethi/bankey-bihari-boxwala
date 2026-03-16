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
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-(--gold)">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="max-w-3xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-[rgba(31,27,24,0.72)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
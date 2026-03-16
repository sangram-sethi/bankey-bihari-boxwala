type BadgeProps = {
  children: React.ReactNode;
  variant?: "gold" | "soft" | "wine";
  className?: string;
};

const variantClasses = {
  gold:
    "border-[color:rgba(176,141,87,0.28)] bg-[color:rgba(234,215,176,0.35)] text-[var(--gold)]",
  soft:
    "border-[color:rgba(31,27,24,0.12)] bg-white/80 text-[color:rgba(31,27,24,0.7)]",
  wine:
    "border-[color:rgba(111,29,43,0.2)] bg-[color:rgba(111,29,43,0.08)] text-[var(--maroon)]",
};

export function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
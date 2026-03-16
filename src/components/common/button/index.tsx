import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";

const variantClasses = {
  primary:
    "bg-[var(--maroon)] text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[color:rgba(111,29,43,0.2)]",
  secondary:
    "border border-[color:var(--border)] bg-white/80 text-[var(--foreground)] hover:bg-white",
  ghost: "text-[var(--maroon)] hover:bg-white/60",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
import Link, { type LinkProps } from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
  prefetch?: LinkProps["prefetch"];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(176,141,87,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] active:scale-[0.99]";

const sizeClasses = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-6 py-3.5 text-sm sm:text-base",
};

const variantClasses = {
  primary:
    "bg-[var(--maroon)] text-white shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:bg-[var(--maroon-dark)]",
  secondary:
    "border border-[color:var(--border)] bg-white/80 text-[var(--foreground)] hover:bg-white hover:-translate-y-0.5",
  ghost:
    "text-[var(--maroon)] hover:bg-[color:rgba(111,29,43,0.06)] hover:-translate-y-0.5",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  type,
  target,
  rel,
  prefetch,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const isExternal = href ? /^https?:\/\//.test(href) : false;

  if (href && isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        prefetch={prefetch}
      >
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
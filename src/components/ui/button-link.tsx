import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center border px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)";

  const variants = {
    primary:
      "border-(--accent) bg-(--accent) text-zinc-100 hover:-translate-y-0.5 hover:bg-transparent hover:text-(--accent)",
    secondary:
      "border-zinc-500 bg-transparent text-zinc-100 hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)",
    ghost:
      "border-zinc-700 bg-transparent text-zinc-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-50",
  };

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

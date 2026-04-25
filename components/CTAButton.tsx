"use client";

import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className
}: CTAButtonProps) {
  const isPrimary = variant === "primary";

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300 ease-out transform hover:-translate-y-0.5 hover:scale-[1.01]";
  const variantClass = isPrimary
    ? "bg-[#d4af37] text-black shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:bg-[#e0be5b]"
    : "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10";

  return (
    <Link href={href} className={`${base} ${variantClass} ${className ?? ""}`}>
      {children}
    </Link>
  );
}

"use client";

import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";

const items = [
  { href: "#why", label: "Why" },
  { href: "#retail", label: "Retail" },
  { href: "#luxury", label: "Luxury" },
  { href: "#dining", label: "Dining" },
  { href: "#entertainment", label: "Entertainment" },
  { href: "#events", label: "Events" },
  { href: "#booking", label: "Booking" }
];

export default function Navbar() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: [0.2, 0.35, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl sm:px-5">
        <a href="#hero" className="display-title text-xl tracking-wide text-white">
          Dubai Mall
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {items.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] transition ${
                  isActive
                    ? "bg-[#d4af37] text-black"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <CTAButton href="#booking" className="hidden sm:inline-flex">
          Book a Viewing
        </CTAButton>
      </div>
    </header>
  );
}

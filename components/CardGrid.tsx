"use client";

import { useInViewOnce } from "@/components/useInViewOnce";

export type CardGridItem = {
  title: string;
  description: string;
  meta?: string;
  accent?: string;
  image?: string;
};

type CardGridProps = {
  items: CardGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

export default function CardGrid({ items, columns = 3, className }: CardGridProps) {
  const columnClass =
    columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={`grid gap-4 sm:gap-5 ${columnClass} ${className ?? ""}`}>
      {items.map((item, index) => (
        <CardGridCard key={`${item.title}-${index}`} item={item} delay={index * 0.06} />
      ))}
    </div>
  );
}

function CardGridCard({ item, delay }: { item: CardGridItem; delay: number }) {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.15);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`group rounded-[26px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/[0.055] reveal ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      <div className="flex h-full min-h-[220px] flex-col justify-between">
        <div>
          {item.meta ? <p className="eyebrow mb-4 text-[0.62rem]">{item.meta}</p> : null}
          <h3 className="display-title text-2xl">{item.title}</h3>
          <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.35em] text-white/35">Explore</span>
          <span className="h-9 w-9 rounded-full border border-white/12 bg-white/5 transition group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10" />
        </div>
      </div>
    </article>
  );
}

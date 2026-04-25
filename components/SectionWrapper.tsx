"use client";

import { useInViewOnce } from "@/components/useInViewOnce";

type SectionWrapperProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  className,
  children
}: SectionWrapperProps) {
  const { ref, isVisible } = useInViewOnce<HTMLElement>(0.18);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-gap relative scroll-mt-28 ${className ?? ""}`}
    >
      <div className="luxury-container">
        <div className={`mb-10 max-w-3xl reveal ${isVisible ? "reveal-visible" : ""}`}>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="display-title text-4xl leading-none sm:text-5xl lg:text-7xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

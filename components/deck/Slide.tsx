import type { ReactNode } from "react";

type SlideProps = {
  id: string;
  active?: boolean;
  children: ReactNode;
  className?: string;
  setRef?: (node: HTMLElement | null) => void;
};

export default function Slide({
  id,
  active = false,
  children,
  className,
  setRef
}: SlideProps) {
  return (
    <section
      ref={setRef}
      id={id}
      className={`deck-frame ${className ?? ""}`}
      data-active={active ? "true" : "false"}
    >
      {children}
    </section>
  );
}

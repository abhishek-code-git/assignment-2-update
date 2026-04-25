"use client";

import type { ReactNode } from "react";

type SlideContainerProps = {
  children: ReactNode;
};

export default function SlideContainer({ children }: SlideContainerProps) {
  return <div className="deck-shell">{children}</div>;
}

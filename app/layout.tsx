import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Dubai Mall | Global Destination Sales Deck",
  description:
    "A cinematic, slide-based sales presentation for tenants, sponsors, and event partners."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">{children}</body>
    </html>
  );
}

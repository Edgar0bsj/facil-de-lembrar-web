import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Facil de Lembrar",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/gsap.min.js"></Script>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groeivonk | Ontwikkelplatform voor basisscholen",
  description:
    "Groeivonk helpt basisscholen ieder kind beter te begrijpen, zonder de werkdruk van leerkrachten te verhogen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

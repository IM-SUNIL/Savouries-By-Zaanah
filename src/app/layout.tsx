import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savouries By Zaanah - Handmade, Heartfelt, Halal.",
  description: "Savouries By Zaanah is a Cape Town–based home business serving freshly made savouries, sweet treats, and authentic South African flavours, all handmade with love and care. Located at 27 Wabash Rd, Manenberg, Cape Town, 7767, South Africa.",
  keywords: "savouries, bakery, Cape Town, halal, handmade, sweet treats, snacks, South Africa, samoosas, pies, pastries, Ramadan, Eid, party platters, Zaanah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  title: "VanHout Bakery - Baking Joy, Serving Comfort",
  description: "Serving the community of Athabasca with homemade meals, fresh bakery goods, and warm smiles. Located at 4908 51 ST, Athabasca, AB.",
  keywords: "bakery, restaurant, Athabasca, Alberta, homemade meals, fresh bakery, donuts, pizza, burgers, fried chicken",
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gardencorner.ma"),
  title: {
    default: "Garden Corner Casablanca – Restaurants, Brunch, Pâtisserie & Déco au Parc du Vélodrome",
    template: "%s | Garden Corner",
  },
  description:
    "Garden Corner réunit Garden Brunch, Garden Bake's, Garden Eataly et Garden Home au Parc du Vélodrome à Casablanca. Restauration faite maison et art de vivre, 7j/7.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Garden Corner",
    locale: "fr_MA",
    url: "https://gardencorner.ma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

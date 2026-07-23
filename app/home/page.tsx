import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Garden Home – Boutique Déco & Art de Vivre à Casablanca | Vélodrome",
  },
  description:
    "Décoration, art de la table et objets déco soigneusement sélectionnés au Parc du Vélodrome, Casablanca. Le concept store art de vivre de Garden Corner.",
  alternates: { canonical: "/home" },
  openGraph: {
    type: "website",
    url: "https://gardencorner.ma/home",
    siteName: "Garden Corner",
    title: "Garden Home – Boutique Déco & Art de Vivre à Casablanca | Vélodrome",
    description:
      "Décoration, art de la table et objets déco soigneusement sélectionnés au Parc du Vélodrome, Casablanca. Le concept store art de vivre de Garden Corner.",
    locale: "fr_MA",
    images: [{ url: "/gardenhome.jpg", width: 1200, height: 630, alt: "Garden Home, boutique déco et art de vivre au Parc du Vélodrome, Casablanca" }],
  },
};

export default function GardenHomePage() {
  return <HomeClient />;
}

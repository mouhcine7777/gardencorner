import type { Metadata } from "next";
import BakesClient from "./BakesClient";

const GLOVO_URL = "https://glovoapp.com/en/ma/casablanca/stores/garden-bakes-cas";
const INSTAGRAM_URL = "https://www.instagram.com/garden_bakes/";

export const metadata: Metadata = {
  title: {
    absolute: "Garden Bake's – Boulangerie & Pâtisserie Artisanale | Casablanca Vélodrome",
  },
  description:
    "Viennoiseries, pains maison, tartes, crêpes & gaufres 100% faits maison au Parc du Vélodrome, Casablanca. Ouvert 7j/7 de 8h à 22h. Sur place, à emporter ou via Glovo.",
  alternates: { canonical: "/bakes" },
  keywords: [
    "boulangerie Casablanca",
    "pâtisserie Casablanca",
    "pâtisserie artisanale Casablanca",
    "boulangerie Vélodrome",
    "pâtisserie Racine Casablanca",
    "viennoiserie Casablanca",
    "pain artisanal Casablanca",
    "baguette tradition Casablanca",
    "tarte artisanale Casablanca",
    "cookies brownies Casablanca",
    "boulangerie café Casablanca",
    "goûter Casablanca",
    "boulangerie livraison Glovo Casablanca",
    "bakery Casablanca",
    "best pastries Casablanca",
    "artisan bakery Velodrome",
  ],
  openGraph: {
    type: "website",
    url: "https://gardencorner.ma/bakes",
    siteName: "Garden Corner",
    title: "Garden Bake's – Boulangerie & Pâtisserie Artisanale | Casablanca Vélodrome",
    description:
      "Viennoiseries, pains maison, tartes, crêpes & gaufres 100% faits maison au Parc du Vélodrome, Casablanca. Ouvert 7j/7 de 8h à 22h. Sur place, à emporter ou via Glovo.",
    locale: "fr_MA",
    images: [{ url: "/gardenbakes.jpg", width: 1200, height: 630, alt: "Garden Bake's, boulangerie-pâtisserie artisanale au Parc du Vélodrome, Casablanca" }],
  },
};

// ─── Structured data (Schema.org Bakery) ──────────────────────────────────────
const bakeryJsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Garden Bake's",
  description:
    "Boulangerie-pâtisserie artisanale au Parc du Vélodrome, Casablanca : viennoiseries croustillantes, pains tradition, sandwichs, tartes et gâteaux 100% faits maison.",
  url: "https://gardencorner.ma/bakes",
  image: [
    "https://gardencorner.ma/gardenbakes.jpg",
    "https://gardencorner.ma/bakes/feature-breakfast.jpg",
    "https://gardencorner.ma/bakes/feature-lunch.jpg",
    "https://gardencorner.ma/bakes/feature-gouter.jpg",
  ],
  telephone: "+212667422603",
  email: "contact@gardenbakes.ma",
  servesCuisine: ["Boulangerie", "Pâtisserie", "Viennoiserie", "Sandwicherie", "Café", "Goûter"],
  priceRange: "$$",
  hasMenu: "https://gardencorner.ma/bakes/menu",
  menu: "https://gardencorner.ma/bakes/menu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parc du Vélodrome, Av. Ahmed Charci",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5895662,
    longitude: -7.6454948,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  potentialAction: {
    "@type": "OrderAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: GLOVO_URL,
      inLanguage: "fr-MA",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
  },
  sameAs: [INSTAGRAM_URL, GLOVO_URL],
};

export default function GardenBakesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd).replace(/</g, "\\u003c") }}
      />
      <BakesClient />
    </>
  );
}

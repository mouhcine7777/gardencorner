import type { Metadata } from "next";
import BrunchClient from "./BrunchClient";

export const metadata: Metadata = {
  title: {
    absolute: "Garden Brunch Casablanca – Brunch, Business Lunch & Tea Time au Vélodrome",
  },
  description:
    "Brunch fait maison, business lunch et tea time dans un cadre verdoyant au Parc du Vélodrome, Casablanca. Ouvert 7j/7 de 8h à 23h. Réservation : 06 67 42 26 03.",
  alternates: { canonical: "/brunch" },
  keywords: [
    "brunch Casablanca",
    "meilleur brunch Casablanca",
    "brunch Vélodrome",
    "brunch Racine Casablanca",
    "petit déjeuner Casablanca",
    "business lunch Casablanca",
    "tea time Casablanca",
    "salon de thé Casablanca",
    "café jardin Casablanca",
    "brunch en terrasse Casablanca",
    "restaurant Parc du Vélodrome",
    "garden brunch Casablanca",
  ],
  openGraph: {
    type: "website",
    url: "https://gardencorner.ma/brunch",
    siteName: "Garden Corner",
    title: "Garden Brunch Casablanca – Brunch, Business Lunch & Tea Time au Vélodrome",
    description:
      "Brunch fait maison, business lunch et tea time dans un cadre verdoyant au Parc du Vélodrome, Casablanca. Ouvert 7j/7 de 8h à 23h.",
    locale: "fr_MA",
    images: [{ url: "/gardenbrunch.jpg", width: 1200, height: 630, alt: "Garden Brunch au Parc du Vélodrome, Casablanca" }],
  },
};

// ─── Structured data (Schema.org) ─────────────────────────────────────────────
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Garden Brunch",
  description:
    "Brunch fait maison, petit déjeuner, business lunch et tea time dans un cadre verdoyant au Parc du Vélodrome, Casablanca.",
  url: "https://gardencorner.ma/brunch",
  image: "https://gardencorner.ma/gardenbrunch.jpg",
  telephone: "+212667422603",
  servesCuisine: ["Brunch", "Petit-déjeuner", "Business Lunch", "Tea Time", "Café", "Pâtisseries"],
  priceRange: "$$",
  hasMenu: "https://gardencorner.ma/brunch/menu",
  menu: "https://gardencorner.ma/brunch/menu",
  acceptsReservations: true,
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
      closes: "23:00",
    },
  ],
  sameAs: ["https://www.instagram.com/gardenbrunch_casablanca/"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Peut-on réserver une table à Garden Brunch ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la réservation est possible et recommandée, en particulier le week-end. Appelez-nous au 06 67 42 26 03 pour réserver votre table sur notre terrasse ou dans notre salon.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il un parking à proximité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, un parking est disponible à proximité immédiate, au Parc du Vélodrome (Av. Ahmed Charci), pour un accès facile que vous veniez de Racine, Gauthier ou Maârif.",
      },
    },
    {
      "@type": "Question",
      name: "Disposez-vous d'une terrasse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Garden Brunch vous accueille sur une terrasse ombragée entourée de jardins, l'un des cadres les plus verdoyants de Casablanca, ainsi que dans un salon cosy à l'intérieur.",
      },
    },
    {
      "@type": "Question",
      name: "Le wifi est-il disponible ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, le wifi gratuit est à votre disposition — idéal pour un déjeuner d'affaires ou une réunion informelle pendant le business lunch, du lundi au vendredi de 12h à 15h.",
      },
    },
    {
      "@type": "Question",
      name: "Les enfants et les familles sont-ils les bienvenus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Notre formule brunch à partager du week-end est le rendez-vous des familles et des amis, dans une ambiance chaleureuse et en plein air, loin de l'agitation de la ville.",
      },
    },
  ],
};

export default function BrunchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <BrunchClient />
    </>
  );
}

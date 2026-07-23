import type { Metadata } from "next";
import EatalyClient from "./EatalyClient";

const INSTAGRAM_URL = "https://www.instagram.com/gardeneataly/";
const GLOVO_URL =
  "https://glovo.go.link/open?adjust_deeplink=glovoapp%3A%2F%2Fopen%3Flink_type%3Dstore%26store_id%3D565707&adjust_t=s321jkn";
const MENU_URL = "https://gardencorner.ma/eataly/menu";

export const metadata: Metadata = {
  title: {
    absolute: "Garden Eataly – Pizzeria au Four à Bois & Pasta au Vélodrome | Casablanca",
  },
  description:
    "Pizzas artisanales au four à bois, pâtes fraîches et dolci italiens à prix doux, en terrasse au cœur du Parc du Vélodrome à Casablanca. Midi et soir, sur place ou à emporter.",
  alternates: { canonical: "/eataly" },
  keywords: [
    "garden eataly",
    "garden eataly casablanca",
    "garden eataly vélodrome",
    "eataly vélodrome",
    "pizzeria Casablanca",
    "pizza au four à bois Casablanca",
    "pizzeria familiale Casablanca",
    "pizzeria terrasse Casablanca",
    "pizza Vélodrome",
    "pâtes fraîches Casablanca",
    "restaurant italien pas cher Casablanca",
    "tiramisu Casablanca",
    "calzone Nutella Casablanca",
  ],
  openGraph: {
    title: "Garden Eataly – Pizzeria au Four à Bois dans le Jardin | Casablanca",
    description:
      "La pizzeria familiale du Parc du Vélodrome : pizzas au feu de bois, pâtes fraîches et desserts italiens à prix accessibles.",
    url: "https://gardencorner.ma/eataly",
    siteName: "Garden Corner",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/gardeneataly.jpg",
        width: 1200,
        height: 630,
        alt: "Pizza au four à bois Garden Eataly Casablanca",
      },
    ],
  },
};

// ─── Structured data (Schema.org) ─────────────────────────────────────────────
// "Pizza" leads servesCuisine — that ordering is the repositioning signal.
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Garden Eataly",
  description:
    "Pizzeria au four à bois et restaurant italien au Parc du Vélodrome, Casablanca : pizzas artisanales, pâtes fraîches et dolci italiens à prix doux, en terrasse.",
  url: "https://gardencorner.ma/eataly",
  image: "https://gardencorner.ma/gardeneataly.jpg",
  telephone: "+212667422603",
  email: "contact@gardeneataly.ma",
  servesCuisine: ["Pizza", "Italian"],
  priceRange: "$$",
  hasMenu: MENU_URL,
  menu: MENU_URL,
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
      opens: "12:00",
      closes: "23:00",
    },
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Garden Corner",
    url: "https://gardencorner.ma",
  },
  sameAs: [INSTAGRAM_URL, GLOVO_URL],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Peut-on réserver une table chez Garden Eataly ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, la réservation est possible et recommandée le week-end. Appelez-nous au 06 67 42 26 03 pour réserver votre table en terrasse, sous les arbres du Parc du Vélodrome.",
      },
    },
    {
      "@type": "Question",
      name: "Les enfants et les familles sont-ils les bienvenus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Garden Eataly est une pizzeria familiale : c'est l'adresse où l'on emmène les enfants le week-end, dans le seul jardin de Casablanca où l'on mange les pieds dans la verdure.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on commander à emporter ou en livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nos pizzas au four à bois et nos pâtes fraîches sont disponibles sur place ou à emporter, le midi comme le soir, ainsi qu'en livraison via Glovo.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il un parking à proximité ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, un parking est disponible à proximité immédiate, au Parc du Vélodrome (Av. Ahmed Charci), avec un accès facile depuis Racine, Gauthier et Maârif.",
      },
    },
    {
      "@type": "Question",
      name: "Disposez-vous d'une terrasse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Notre terrasse se trouve sous les arbres, au cœur du Parc du Vélodrome — l'un des cadres les plus verdoyants de Casablanca, en plein air et à l'ombre.",
      },
    },
  ],
};

export default function GardenEatalyPage() {
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
      <EatalyClient />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StickyMenu from "../../components/StickyMenu";
import Footer from "../../components/Footer";
import MenuIcon from "./MenuIcons";
import { menuSections } from "./menuData";

const GLOVO_URL =
  "https://glovo.go.link/open?adjust_deeplink=glovoapp%3A%2F%2Fopen%3Flink_type%3Dstore%26store_id%3D565707&adjust_t=s321jkn";

export const metadata: Metadata = {
  title: {
    absolute: "Carte & Prix – Garden Eataly | Pizzeria au Four à Bois, Casablanca Vélodrome",
  },
  description:
    "La carte complète de Garden Eataly au Parc du Vélodrome, Casablanca : pizzas au four à bois, pâtes fraîches, entrées, dolci, cafés et jus. Prix à jour, midi et soir, sur place ou à emporter.",
  alternates: { canonical: "/eataly/menu" },
  keywords: [
    "carte Garden Eataly",
    "prix pizzeria Casablanca",
    "menu pizza Casablanca",
    "pizza margherita Casablanca",
    "pizza four à bois prix Casablanca",
    "lasagna bolognese Casablanca",
    "tiramisu Casablanca",
    "calzone Nutella Casablanca",
    "pâtes fraîches Vélodrome",
    "restaurant italien pas cher Casablanca",
  ],
  openGraph: {
    type: "website",
    url: "https://gardencorner.ma/eataly/menu",
    siteName: "Garden Corner",
    title: "Carte & Prix – Garden Eataly, Pizzeria au Four à Bois au Vélodrome",
    description:
      "Pizzas au four à bois, pâtes fraîches, dolci et cafés italiens. La carte complète et les prix de Garden Eataly, Casablanca.",
    locale: "fr_MA",
    images: [{ url: "/gardeneataly.jpg", width: 1200, height: 630, alt: "Carte de Garden Eataly, Casablanca" }],
  },
};

// ─── Structured data: the full carte, priced ──────────────────────────────────
const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Carte Garden Eataly",
  url: "https://gardencorner.ma/eataly/menu",
  inLanguage: "fr-MA",
  provider: {
    "@type": "Restaurant",
    name: "Garden Eataly",
    url: "https://gardencorner.ma/eataly",
  },
  hasMenuSection: menuSections.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.note ? `${item.name} (${item.note})` : item.name,
      offers: {
        "@type": "Offer",
        price: item.price.replace(",", ".").replace("+", ""),
        priceCurrency: "MAD",
      },
    })),
  })),
};

const RED = "#961A1A";
const CREAM = "#fbf6ee";
const INK = "#2f2a28";

export default function EatalyMenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd).replace(/</g, "\\u003c") }}
      />
      <StickyMenu solid />

      {/* paddingTop clears the fixed 80px header, which is opaque on this light page. */}
      <main style={{ backgroundColor: CREAM, minHeight: "100vh", paddingTop: "80px" }}>

        {/* ── AWNING ───────────────────────────────────────────────────────── */}
        <div aria-hidden="true">
          <div style={{
            height: "34px",
            background: `repeating-linear-gradient(90deg, ${RED} 0 40px, #f6e9e2 40px 80px)`,
          }} />
          <div style={{
            height: "22px",
            background: `repeating-linear-gradient(90deg, ${RED} 0 40px, #f6e9e2 40px 80px)`,
            WebkitMaskImage: "radial-gradient(circle 20px at 20px 0, #000 0 19.5px, transparent 20px)",
            WebkitMaskSize: "40px 22px",
            WebkitMaskRepeat: "repeat-x",
            maskImage: "radial-gradient(circle 20px at 20px 0, #000 0 19.5px, transparent 20px)",
            maskSize: "40px 22px",
            maskRepeat: "repeat-x",
          }} />
        </div>

        {/* ── HEADER ───────────────────────────────────────────────────────── */}
        <header style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div style={{ flex: "1 1 320px", minWidth: 0 }}>
            {/* Dark logo variant — garden-eataly-logo.png is white, for the hero. */}
            <Image
              src="/logos/eataly.png"
              alt="Garden Eataly"
              width={260}
              height={130}
              priority
              style={{ maxHeight: "104px", width: "auto", marginBottom: "1rem" }}
            />
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(0.6rem, 1.1vw, 0.7rem)",
              color: INK,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}>
              Pizzeria · Pasta · Dolci
            </p>
            <div style={{ width: "56px", height: "1px", backgroundColor: RED, marginBottom: "0.9rem" }} />
            <p style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              color: "#6b5f5a",
            }}>
              La dolce vita à Casablanca.
            </p>
          </div>

          {/* Hours badge */}
          <div style={{
            border: `1px solid ${RED}`,
            borderRadius: "999px",
            padding: "0.85rem 1.6rem",
            textAlign: "center",
            backgroundColor: "rgba(150,26,26,0.06)",
          }}>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.6rem",
              color: RED,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              marginBottom: "3px",
            }}>
              Vélodrome
            </p>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              color: INK,
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}>
              12:00 – 23:00
            </p>
          </div>
        </header>

        {/* ── MENU GRID ────────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem) clamp(2rem, 4vw, 3rem)",
        }}>
          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
            fontWeight: 400,
            color: RED,
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}>
            Notre carte
          </h1>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.95rem",
            color: "#6b5f5a",
            fontWeight: 300,
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}>
            Tous nos prix sont en dirhams (DH), taxes comprises.
          </p>

          <div style={{
            columnWidth: "330px",
            columnGap: "clamp(2rem, 4vw, 3.5rem)",
          }}>
            {menuSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                style={{
                  breakInside: "avoid",
                  pageBreakInside: "avoid",
                  marginBottom: "clamp(2rem, 3.5vw, 2.75rem)",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                {/* Section head */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.4rem" }}>
                  <MenuIcon name={section.icon} color={RED} />
                  <h2 style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: RED,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    {section.title}
                  </h2>
                </div>
                <div style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${RED} 0%, rgba(150,26,26,0.15) 100%)`,
                  marginBottom: "1rem",
                }} />

                {/* Items */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.items.map((item) => (
                    <li
                      key={`${section.id}-${item.name}`}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "6px",
                        padding: "0.4rem 0",
                      }}
                    >
                      <span style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "0.92rem",
                        color: INK,
                        fontWeight: 300,
                        lineHeight: 1.45,
                      }}>
                        {item.name}
                        {item.note && (
                          <span style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "0.75rem",
                            color: "#a1928c",
                            fontStyle: "italic",
                            marginLeft: "6px",
                          }}>
                            ({item.note})
                          </span>
                        )}
                      </span>
                      <span
                        aria-hidden="true"
                        style={{
                          flex: 1,
                          minWidth: "12px",
                          borderBottom: "1px dotted rgba(47,42,40,0.3)",
                          transform: "translateY(-3px)",
                        }}
                      />
                      <span style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "0.88rem",
                        color: RED,
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        letterSpacing: "0.02em",
                      }}>
                        {item.price} DH
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        {/* ── ORDER CTAs ───────────────────────────────────────────────────── */}
        <section style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "stretch",
        }}>
          <a
            href={GLOVO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: "1 1 220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "1.5rem",
              backgroundColor: "#f9a825",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.95rem",
              color: "#1a2e1e",
              fontWeight: 500,
            }}>
              Je commande
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/glovo.png" alt="Glovo" style={{ height: "20px", width: "auto", objectFit: "contain" }} />
          </a>

          <Link
            href="/eataly"
            style={{
              flex: "1 1 220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "1.5rem",
              backgroundColor: RED,
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Retour
            </span>
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
              color: "#fff",
              fontWeight: 300,
            }}>
              Garden Eataly
            </span>
          </Link>
        </section>

        {/* ── QUALITY BAND ─────────────────────────────────────────────────── */}
        <div style={{
          backgroundColor: RED,
          padding: "1.25rem clamp(1.25rem, 4vw, 3rem)",
        }}>
          <div style={{
            maxWidth: "1120px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem clamp(1.5rem, 4vw, 3rem)",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {["Pâte fraîche maturée", "Four à bois traditionnel", "Prix doux"].map((label, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "clamp(1rem, 3vw, 2.5rem)" }}>
                {i > 0 && <span style={{ width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.3)" }} />}
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.62rem",
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

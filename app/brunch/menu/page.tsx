import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StickyMenu from "../../components/StickyMenu";
import Footer from "../../components/Footer";
import MenuIcon from "./MenuIcons";
import { menuSections } from "./menuData";

export const metadata: Metadata = {
  title: {
    absolute: "Menu & Prix – Garden Brunch | Brunch, Business Lunch & Tea Time, Casablanca",
  },
  description:
    "La carte complète de Garden Brunch au Parc du Vélodrome, Casablanca : formules brunch, petit déjeuner, starters, burgers, plats, desserts, jus pressés et cafés. Prix à jour, ouvert 7j/7 de 8h à 23h.",
  alternates: { canonical: "/brunch/menu" },
  keywords: [
    "menu Garden Brunch",
    "prix brunch Casablanca",
    "carte brunch Vélodrome",
    "formule brunch Casablanca",
    "petit déjeuner Casablanca prix",
    "business lunch Casablanca",
    "jus détox Casablanca",
    "pain perdu Casablanca",
    "pancakes Casablanca",
    "brunch weekend Casablanca",
  ],
  openGraph: {
    type: "website",
    url: "https://gardencorner.ma/brunch/menu",
    siteName: "Garden Corner",
    title: "Menu & Prix – Garden Brunch au Parc du Vélodrome, Casablanca",
    description:
      "Formules brunch, petit déjeuner, starters, burgers, plats, desserts et jus pressés. La carte complète et les prix de Garden Brunch.",
    locale: "fr_MA",
    images: [{ url: "/gardenbrunch.jpg", width: 1200, height: 630, alt: "Menu de Garden Brunch, Casablanca" }],
  },
};

// ─── Structured data: the full carte, priced ──────────────────────────────────
const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Menu Garden Brunch",
  url: "https://gardencorner.ma/brunch/menu",
  inLanguage: "fr-MA",
  provider: {
    "@type": "Restaurant",
    name: "Garden Brunch",
    url: "https://gardencorner.ma/brunch",
  },
  hasMenuSection: menuSections.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    ...(section.note ? { description: section.note } : {}),
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.price
        ? { offers: { "@type": "Offer", price: item.price.replace(",", "."), priceCurrency: "MAD" } }
        : {}),
    })),
  })),
};

const GREEN = "#3f6e4b";
const INK = "#1a2e1e";
const CREAM = "#f4efe4";

export default function BrunchMenuPage() {
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
            background: `repeating-linear-gradient(90deg, ${GREEN} 0 40px, #dfe8da 40px 80px)`,
          }} />
          <div style={{
            height: "22px",
            background: `repeating-linear-gradient(90deg, ${GREEN} 0 40px, #dfe8da 40px 80px)`,
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
            {/* Dark logo variant — garden-brunch-logo.png is white, for the hero. */}
            <Image
              src="/logos/brunch.png"
              alt="Garden Brunch"
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
              Brunch · Business Lunch · Tea Time
            </p>
            <div style={{ width: "56px", height: "1px", backgroundColor: GREEN, marginBottom: "0.9rem" }} />
            <p style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              color: "#5b6b58",
            }}>
              Du premier café au dernier plat.
            </p>
          </div>

          {/* Hours badge */}
          <div style={{
            border: `1px solid ${GREEN}`,
            borderRadius: "999px",
            padding: "0.85rem 1.6rem",
            textAlign: "center",
            backgroundColor: "rgba(63,110,75,0.06)",
          }}>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.6rem",
              color: GREEN,
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
              08:00 – 23:00
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
            color: INK,
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}>
            Notre carte
          </h1>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.95rem",
            color: "#5b6b58",
            fontWeight: 300,
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}>
            Tous nos prix sont en dirhams (DH), taxes comprises.
          </p>

          <div style={{
            columnWidth: "360px",
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
                  <MenuIcon name={section.icon} color={GREEN} />
                  <h2 style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: INK,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    {section.title}
                  </h2>
                </div>
                <div style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${GREEN} 0%, rgba(63,110,75,0.15) 100%)`,
                  marginBottom: section.note ? "0.75rem" : "1rem",
                }} />

                {section.note && (
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.72rem",
                    color: GREEN,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    marginBottom: "1rem",
                  }}>
                    {section.note}
                  </p>
                )}

                {/* Items */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.items.map((item) => (
                    <li key={`${section.id}-${item.name}`} style={{ padding: "0.45rem 0" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                        <span style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "0.92rem",
                          color: INK,
                          fontWeight: 400,
                          lineHeight: 1.4,
                        }}>
                          {item.name}
                        </span>
                        <span
                          aria-hidden="true"
                          style={{
                            flex: 1,
                            minWidth: "12px",
                            borderBottom: "1px dotted rgba(26,46,30,0.28)",
                            transform: "translateY(-3px)",
                          }}
                        />
                        {item.price && (
                          <span style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "0.88rem",
                            color: GREEN,
                            fontWeight: 400,
                            whiteSpace: "nowrap",
                            letterSpacing: "0.02em",
                          }}>
                            {item.price} DH
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p style={{
                          fontFamily: "Georgia, serif",
                          fontSize: "0.78rem",
                          color: "#5f6e5f",
                          fontWeight: 300,
                          lineHeight: 1.55,
                          marginTop: "2px",
                          paddingRight: "2.5rem",
                        }}>
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>

                {section.footnote && (
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.72rem",
                    color: "#5f6e5f",
                    fontStyle: "italic",
                    lineHeight: 1.55,
                    marginTop: "0.85rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(63,110,75,0.14)",
                  }}>
                    {section.footnote}
                  </p>
                )}
              </section>
            ))}
          </div>
        </section>

        {/* ── CTAs ─────────────────────────────────────────────────────────── */}
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
            href="tel:+212667422603"
            style={{
              flex: "1 1 220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "1.5rem",
              border: `1px solid ${GREEN}`,
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.6rem",
              color: GREEN,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Réserver
            </span>
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
              color: INK,
              fontWeight: 300,
            }}>
              06 67 42 26 03
            </span>
          </a>

          <Link
            href="/brunch"
            style={{
              flex: "1 1 220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "1.5rem",
              backgroundColor: GREEN,
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.6rem",
              color: "#b4caad",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}>
              Retour
            </span>
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
              color: "#f4efe4",
              fontWeight: 300,
            }}>
              Garden Brunch
            </span>
          </Link>
        </section>

        {/* ── QUALITY BAND ─────────────────────────────────────────────────── */}
        <div style={{
          backgroundColor: INK,
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
            {["Fait maison", "Produits frais", "Terrasse au jardin"].map((label, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "clamp(1rem, 3vw, 2.5rem)" }}>
                {i > 0 && <span style={{ width: "1px", height: "14px", backgroundColor: "rgba(180,202,173,0.3)" }} />}
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.62rem",
                  color: "#b4caad",
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

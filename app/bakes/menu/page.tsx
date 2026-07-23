import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StickyMenu from "../../components/StickyMenu";
import Footer from "../../components/Footer";
import MenuIcon from "./MenuIcons";
import { menuSections } from "./menuData";

export const metadata: Metadata = {
  title: {
    absolute: "Menu & Prix – Garden Bake's | Boulangerie Pâtisserie Casablanca Vélodrome",
  },
  description:
    "Le menu complet de Garden Bake's au Parc du Vélodrome, Casablanca : viennoiseries, pains, quiches, pâtisseries, crêpes & gaufres, glaces, jus frais et cafés. Prix à jour, ouvert 7j/7 de 8h à 22h.",
  alternates: { canonical: "/bakes/menu" },
  keywords: [
    "menu Garden Bake's",
    "prix boulangerie Casablanca",
    "carte pâtisserie Casablanca",
    "croissant aux amandes Casablanca",
    "baguette tradition Casablanca",
    "tarte citron Casablanca",
    "gaufre Nutella Casablanca",
    "bubble stick Casablanca",
    "jus frais Casablanca",
    "petit déjeuner Vélodrome Casablanca",
  ],
  openGraph: {
    type: "website",
    url: "https://gardencorner.ma/bakes/menu",
    siteName: "Garden Corner",
    title: "Menu & Prix – Garden Bake's, Boulangerie Pâtisserie au Vélodrome",
    description:
      "Viennoiseries, pains, quiches, pâtisseries, crêpes & gaufres, glaces et jus frais. Le menu complet et les prix de Garden Bake's, Casablanca.",
    locale: "fr_MA",
    images: [{ url: "/gardenbakes.jpg", width: 1200, height: 630, alt: "Menu de Garden Bake's, Casablanca" }],
  },
};

// ─── Structured data: the full menu, priced ───────────────────────────────────
const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Menu Garden Bake's",
  url: "https://gardencorner.ma/bakes/menu",
  inLanguage: "fr-MA",
  provider: {
    "@type": "Bakery",
    name: "Garden Bake's",
    url: "https://gardencorner.ma/bakes",
  },
  hasMenuSection: menuSections.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.note ? `${item.name} (${item.note})` : item.name,
      offers: {
        "@type": "Offer",
        price: item.price.replace(",", "."),
        priceCurrency: "MAD",
      },
    })),
  })),
};

const CREAM = "#fdf8ea";
const GREEN = "#1a2e1e";
const GOLD = "#c99a2e";

export default function BakesMenuPage() {
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
            background: "repeating-linear-gradient(90deg, #eab942 0 40px, #fbeec3 40px 80px)",
          }} />
          <div style={{
            height: "22px",
            background: "repeating-linear-gradient(90deg, #eab942 0 40px, #fbeec3 40px 80px)",
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
            {/* Dark logo variant — the garden-bakes-logo.png used on the hero is white. */}
            <Image
              src="/logos/bakes.png"
              alt="Garden Bake's"
              width={260}
              height={130}
              priority
              style={{ maxHeight: "104px", width: "auto", marginBottom: "1rem" }}
            />
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(0.6rem, 1.1vw, 0.7rem)",
              color: GREEN,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}>
              Boulangerie · Pâtisserie · Sandwicherie
            </p>
            <div style={{ width: "56px", height: "1px", backgroundColor: GOLD, marginBottom: "0.9rem" }} />
            <p style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              color: "#5b6b58",
            }}>
              Fait avec passion, servi avec le cœur.
            </p>
          </div>

          {/* Hours badge */}
          <div style={{
            border: `1px solid ${GOLD}`,
            borderRadius: "999px",
            padding: "0.85rem 1.6rem",
            textAlign: "center",
            backgroundColor: "rgba(234,185,66,0.08)",
          }}>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.6rem",
              color: GOLD,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              marginBottom: "3px",
            }}>
              Vélodrome
            </p>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              color: GREEN,
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}>
              08:00 – 22:00
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
            color: GREEN,
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
                  <MenuIcon name={section.icon} />
                  <h2 style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: GREEN,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    {section.title}
                  </h2>
                </div>
                <div style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${GOLD} 0%, rgba(201,154,46,0.15) 100%)`,
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
                        color: "#3d4b3d",
                        fontWeight: 300,
                        lineHeight: 1.45,
                      }}>
                        {item.name}
                        {item.note && (
                          <span style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "0.75rem",
                            color: "#93a08f",
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
                          borderBottom: "1px dotted rgba(26,46,30,0.28)",
                          transform: "translateY(-3px)",
                        }}
                      />
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
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        {/* ── NOTE + ORDER CTA ─────────────────────────────────────────────── */}
        <section style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3rem) clamp(3rem, 5vw, 4rem)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          alignItems: "stretch",
        }}>
          <div style={{
            flex: "1 1 280px",
            border: `1px solid rgba(201,154,46,0.4)`,
            borderRadius: "8px",
            padding: "1.5rem 1.75rem",
            backgroundColor: "rgba(234,185,66,0.07)",
          }}>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.6rem",
              color: GOLD,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}>
              À noter
            </p>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.92rem",
              color: "#3d4b3d",
              lineHeight: 1.7,
              fontWeight: 300,
            }}>
              Les crêpes salées ont été supprimées de la carte. Certains pains sont disponibles
              uniquement sur commande.
            </p>
          </div>

          <a
            href="https://glovoapp.com/en/ma/casablanca/stores/garden-bakes-cas"
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
              color: GREEN,
              fontWeight: 500,
            }}>
              Je commande
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/glovo.png" alt="Glovo" style={{ height: "20px", width: "auto", objectFit: "contain" }} />
          </a>

          <Link
            href="/bakes"
            style={{
              flex: "1 1 220px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "1.5rem",
              backgroundColor: "#3f6e4b",
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
              Garden Bake&apos;s
            </span>
          </Link>
        </section>

        {/* ── QUALITY BAND ─────────────────────────────────────────────────── */}
        <div style={{
          backgroundColor: GREEN,
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
            {["Produits frais & maison", "Fait avec passion", "Qualité & saveurs"].map((label, i) => (
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

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import StickyMenu from "../components/StickyMenu";
import Footer from "../components/Footer";

// ─── Auto-scrolling gallery images ───────────────────────────────────────────
const galleryImages = [
  { src: "/home/gallery-1.jpg", alt: "Mobilier en osier" },
  { src: "/home/gallery-2.jpg", alt: "Décoration raphia" },
  { src: "/home/gallery-3.jpg", alt: "Céramique artisanale" },
  { src: "/home/gallery-4.jpg", alt: "Fauteuil bohème" },
  { src: "/home/gallery-5.jpg", alt: "Vases en céramique" },
];

// ─── Points de vente ──────────────────────────────────────────────────────────
const pointsOfSale = [
  {
    name: "Garden Bake's",
    href: "/bakes",
    logo: "/logos/garden-bakes-logo.png",
  },
  {
    name: "Garden Brunch",
    href: "/brunch",
    logo: "/logos/garden-brunch-logo.png",
  },
  {
    name: "Garden Eataly",
    href: "/eataly",
    logo: "/logos/garden-eataly-logo.png",
  },
];

// ─── Feature sections (matières premières) ───────────────────────────────────
const features = [
  {
    id: "osier",
    tag: "L'osier",
    title: "Un osier travaillé avec finesse",
    body: "À la fois léger et résistant, il apporte une touche naturelle et authentique à votre intérieur. Le savoir-faire d'artisans qui sculptent la matière avec patience.",
    image: "/home/feature-osier.jpg",
    imageAlt: "Osier travaillé Garden Home",
    imageRight: false,
  },
  {
    id: "raphia",
    tag: "Le raphia",
    title: "Un raphia délicat et texturé",
    body: "Pour une ambiance douce et chaleureuse, inspirée des matières naturelles. Une fibre noble qui habille vos espaces d'une élégance discrète et intemporelle.",
    image: "/home/feature-raphia.jpg",
    imageAlt: "Raphia Garden Home",
    imageRight: true,
  },
  {
    id: "ceramique",
    tag: "La céramique",
    title: "Une céramique élégante et travaillée",
    body: "Aux finitions soignées, elle apporte du caractère et une touche artisanale à vos espaces. Chaque pièce, façonnée à la main, raconte une histoire unique.",
    image: "/home/feature-ceramique.jpg",
    imageAlt: "Céramique Garden Home",
    imageRight: false,
  },
];

// ─── Infinite scroll strip ────────────────────────────────────────────────────
function GalleryStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const SPEED = 0.5;
  const ITEM_WIDTH = 280 + 12;

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const totalWidth = ITEM_WIDTH * galleryImages.length;
    const animate = () => {
      posRef.current += SPEED;
      if (posRef.current >= totalWidth) posRef.current = 0;
      strip.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const doubled = [...galleryImages, ...galleryImages];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={stripRef}
        style={{ display: "flex", gap: "12px", willChange: "transform" }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "280px",
              height: "340px",
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function GardenHomePage() {
  const terracotta = "#3f6e4b";
  const darkBg = "#1a2e1e";
  const cream = "#f4efe4";
  const warmBeige = "#eee8da";

  return (
    <>
      <StickyMenu />
      <main style={{ backgroundColor: cream, minHeight: "100vh" }}>

        {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
        <section style={{ position: "relative", height: "clamp(380px, 55vw, 640px)", overflow: "hidden" }}>
          <img
            src="/gardenhome.jpg"
            alt="Garden Home"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, rgba(26,46,30,0.25) 0%, rgba(26,46,30,0.6) 100%)`,
          }} />

          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "center",
            padding: "0 1.5rem clamp(2rem, 5vw, 4rem)",
          }}>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              The Garden Corner
            </p>
            <Image
              src="/logos/garden-home-logo.png"
              alt="Garden Home"
              width={220}
              height={110}
              style={{
                filter: "brightness(0) invert(1)",
                maxHeight: "90px",
                width: "auto",
                marginBottom: "1.5rem",
              }}
            />
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                "Des meubles qui subliment vos espaces",
                "Une touche naturelle et authentique",
                "Un esprit bohème pour dedans comme dehors",
              ].map((tag) => (
                <span key={tag} style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT + CATALOGUE ────────────────────────────────────────── */}
        <section style={{ backgroundColor: darkBg, padding: "clamp(2.5rem, 5vw, 4rem) 1.5rem" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
              borderBottom: "1px solid rgba(180,202,173,0.15)",
              paddingBottom: "2.5rem",
            }}>
              {[
                { label: "Appelez-nous", value: "06 67 42 26 03", href: "tel:+212667422603" },
                { label: "Écrivez-nous", value: "contact@gardenhome.ma", href: "mailto:contact@gardenhome.ma" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    padding: "1.25rem 2.5rem",
                    border: "1px solid rgba(180,202,173,0.2)",
                    borderRadius: "4px",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                    minWidth: "200px",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#b4caad")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(180,202,173,0.2)")}
                >
                  <span style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.6rem",
                    color: "#b4caad",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.9rem",
                    color: cream,
                    fontWeight: 300,
                  }}>
                    {item.value}
                  </span>
                </a>
              ))}

              {/* Catalogue CTA */}
              <a
                href="https://gardenroom.govelodrome.ma/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  padding: "1.25rem 2.5rem",
                  backgroundColor: terracotta,
                  borderRadius: "4px",
                  textDecoration: "none",
                  border: "1px solid transparent",
                  transition: "background-color 0.2s",
                  minWidth: "200px",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4d8a5c")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = terracotta)}
              >
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.6rem",
                  color: "rgba(244,239,228,0.7)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}>
                  Découvrir
                </span>
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  color: cream,
                  fontWeight: 300,
                }}>
                  Notre Catalogue
                </span>
              </a>
            </div>

            {/* Points de vente */}
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2.5rem", justifyContent: "center" }}>
                <span style={{ width: "32px", height: "1px", backgroundColor: "#b4caad" }} />
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.65rem",
                  color: "#b4caad",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}>
                  Points de vente
                </p>
                <span style={{ width: "32px", height: "1px", backgroundColor: "#b4caad" }} />
              </div>

              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.95rem",
                color: "rgba(244,239,228,0.7)",
                textAlign: "center",
                marginBottom: "2.5rem",
                fontWeight: 300,
                lineHeight: 1.6,
              }}>
                Retrouvez nos créations dans nos adresses partenaires
              </p>

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                justifyContent: "center",
              }}>
                {pointsOfSale.map((pos) => (
                  <a
                    key={pos.name}
                    href={pos.href}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      padding: "1.75rem 2rem",
                      border: "1px solid rgba(180,202,173,0.2)",
                      borderRadius: "6px",
                      textDecoration: "none",
                      transition: "all 0.25s",
                      minWidth: "220px",
                      flex: "1 1 220px",
                      maxWidth: "280px",
                      backgroundColor: "rgba(244,239,228,0.02)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "#b4caad";
                      e.currentTarget.style.backgroundColor = "rgba(244,239,228,0.04)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(180,202,173,0.2)";
                      e.currentTarget.style.backgroundColor = "rgba(244,239,228,0.02)";
                    }}
                  >
                    <span style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.6rem",
                      color: "#b4caad",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}>
                      Disponible chez
                    </span>
                    <Image
                      src={pos.logo}
                      alt={pos.name}
                      width={140}
                      height={70}
                      style={{
                        filter: "brightness(0) invert(1)",
                        maxHeight: "55px",
                        width: "auto",
                        opacity: 0.9,
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURE SECTIONS ─────────────────────────────────────────── */}
        {features.map((feat, idx) => (
          <section
            key={feat.id}
            style={{
              backgroundColor: idx % 2 === 0 ? cream : warmBeige,
              padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 5vw, 4rem)",
            }}
          >
            <div style={{
              maxWidth: "1120px",
              margin: "0 auto",
              display: "flex",
              flexDirection: feat.imageRight ? "row" : "row-reverse",
              gap: "clamp(2rem, 5vw, 5rem)",
              alignItems: "center",
              flexWrap: "wrap",
            }}>
              {/* Image */}
              <div style={{
                flex: "1 1 340px",
                minWidth: 0,
                aspectRatio: "4/3",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
              }}>
                <img
                  src={feat.image}
                  alt={feat.imageAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(26,46,30,0.08) 0%, transparent 60%)",
                }} />
              </div>

              {/* Text */}
              <div style={{ flex: "1 1 300px", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                  <span style={{ width: "28px", height: "1px", backgroundColor: terracotta }} />
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.62rem",
                    color: terracotta,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                  }}>
                    {feat.tag}
                  </p>
                </div>
                <h2 style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                  fontWeight: 400,
                  color: darkBg,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}>
                  {feat.title}
                </h2>
                <div style={{ width: "40px", height: "1px", backgroundColor: "#b4caad", marginBottom: "1.25rem" }} />
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                  color: "#4a5c4d",
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}>
                  {feat.body}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* ── GALLERY STRIP ────────────────────────────────────────────── */}
        <section style={{ backgroundColor: darkBg, padding: "clamp(3rem, 5vw, 5rem) 0" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "32px", height: "1px", backgroundColor: "#b4caad" }} />
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.65rem",
                color: "#b4caad",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}>
                Nos Créations
              </p>
            </div>
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              fontWeight: 400,
              color: cream,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginTop: "1rem",
            }}>
              Mobilier, décoration, accessoires<br />
              <span style={{ color: "#b4caad" }}>& bien plus encore.</span>
            </h2>
          </div>

          <GalleryStrip />
        </section>

      </main>
      <Footer />
    </>
  );
}
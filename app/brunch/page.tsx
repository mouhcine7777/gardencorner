"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import StickyMenu from "../components/StickyMenu";
import Footer from "../components/Footer";

// ─── Auto-scrolling gallery images ───────────────────────────────────────────
const galleryImages = [
  { src: "/brunch/gallery-1.jpg", alt: "Brunch gourmand" },
  { src: "/brunch/gallery-2.jpg", alt: "Tea time élégant" },
  { src: "/brunch/gallery-3.jpg", alt: "Business lunch" },
  { src: "/brunch/gallery-4.jpg", alt: "Café & viennoiseries" },
  { src: "/brunch/gallery-5.jpg", alt: "Gâteaux maison" },
  { src: "/brunch/gallery-6.jpg", alt: "Petit déjeuner" },
  { src: "/brunch/gallery-7.jpg", alt: "Brunch du weekend" },
  { src: "/brunch/gallery-8.jpg", alt: "Pâtisseries" },
];

// ─── Hours data ───────────────────────────────────────────────────────────────
const hours = [
  {
    label: "Tous les jours",
    time: "8h00 – 23h00",
  },
  {
    label: "Petit déjeuner à pouce",
    sublabel: "Lun – Ven (hors weekend & jours fériés)",
    time: "8h00 – 11h00",
  },
  {
    label: "Brunch",
    sublabel: "Lun – Ven · Weekend & jours fériés jusqu'à 14h",
    time: "8h00 – 13h00",
  },
  {
    label: "Business Lunch",
    sublabel: "Lun – Ven",
    time: "12h00 – 15h00",
  },
  {
    label: "Tea Time",
    sublabel: "Lun – Ven",
    time: "16h00 – 19h00",
  },
];

// ─── Feature sections ─────────────────────────────────────────────────────────
const features = [
  {
    id: "brunch",
    tag: "Brunch & Petit déjeuner",
    title: "Des matins gourmands",
    body: "Entre petit-déjeuner savoureux et brunch à partager, dans une ambiance chaleureuse où chaque instant se déguste.",
    image: "/brunch/feature-brunch.jpg",
    imageAlt: "Brunch gourmand",
    imageRight: false,
  },
  {
    id: "business",
    tag: "Business Lunch",
    title: "Le rendez-vous du midi des professionnels",
    body: "Où efficacité rime avec gourmandise. Un moment pensé pour savourer une pause de qualité dans une ambiance élégante.",
    image: "/brunch/feature-business.jpg",
    imageAlt: "Business lunch",
    imageRight: true,
  },
  {
    id: "teatime",
    tag: "Tea Time",
    title: "Une expérience gourmande et raffinée",
    body: "Un moment suspendu entre plaisir et finesse, où chaque détail est pensé pour sublimer votre pause.",
    image: "/brunch/feature-teatime.jpg",
    imageAlt: "Tea time",
    imageRight: false,
  },
];

// ─── Glovo Pop-up ─────────────────────────────────────────────────────────────
function GlovoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "clamp(1.25rem, 4vw, 2rem)",
        right: "clamp(1.25rem, 4vw, 2rem)",
        zIndex: 9999,
        animation: "slideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <button
        onClick={() => setVisible(false)}
        aria-label="Fermer"
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          backgroundColor: "#1a2e1e",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1 1l8 8M9 1L1 9" stroke="#f4efe4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <a
        href="https://glovo.go.link/open?link_type=store&store_id=566071&adjust_t=s321jkn"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "1rem 1.5rem",
          backgroundColor: "#f9a825",
          borderRadius: "8px",
          textDecoration: "none",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.22)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)";
        }}
      >
        {/* Glovo logo in white circle */}
        <div style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
        }}>
          <img
            src="/glovo.png"
            alt="Glovo"
            style={{
              width: "70%",
              height: "70%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.95rem",
          color: "#1a2e1e",
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}>
          Je commande
        </p>

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: "4px" }}>
          <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

// ─── Infinite scroll strip ────────────────────────────────────────────────────
function GalleryStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const SPEED = 0.5; // px per frame
  const ITEM_WIDTH = 280 + 12; // width + gap

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

  // Duplicate images for seamless loop
  const doubled = [...galleryImages, ...galleryImages];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={stripRef}
        style={{
          display: "flex",
          gap: "12px",
          willChange: "transform",
        }}
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
export default function BrunchPage() {
  return (
    <>
    <StickyMenu />
    <GlovoPopup />
    <main style={{ backgroundColor: "#f4efe4", minHeight: "100vh" }}>

      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "clamp(380px, 55vw, 640px)", overflow: "hidden" }}>
        <img
          src="/gardenbrunch.jpg"
          alt="Garden Brunch"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(26,46,30,0.25) 0%, rgba(26,46,30,0.6) 100%)",
        }} />

        {/* Title block */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "clamp(2rem, 5vw, 4rem)",
          textAlign: "center",
          padding: "0 1.5rem clamp(2rem, 5vw, 4rem)",
        }}>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.7rem",
            color: "white",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}>
            The Garden Corner
          </p>
          <Image
            src="/logos/garden-brunch-logo.png"
            alt="Garden Brunch"
            width={220}
            height={110}
            style={{
              maxHeight: "90px",
              width: "auto",
              marginBottom: "1.5rem",
            }}
          />
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
            {["Une adresse du quotidien", "Un lieu de rendez-vous professionnel", "Une alternative élégante"].map((tag) => (
              <span key={tag} style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.65rem",
                color: "white",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT + HOURS ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a2e1e", padding: "clamp(2.5rem, 5vw, 4rem) 1.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

          {/* Top row: contact + menu CTA */}
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
              { label: "Écrivez-nous", value: "contact@gardenbrunch.ma", href: "mailto:contact@gardenbrunch.ma" },
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
                  color: "#f4efe4",
                  fontWeight: 300,
                }}>
                  {item.value}
                </span>
              </a>
            ))}

            {/* Glovo CTA */}
            <a
              href="https://glovo.go.link/open?link_type=store&store_id=566071&adjust_t=s321jkn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "1.25rem 2.5rem",
                backgroundColor: "#f9a825",
                borderRadius: "4px",
                textDecoration: "none",
                border: "1px solid transparent",
                transition: "background-color 0.2s",
                minWidth: "200px",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#fbb830")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f9a825")}
            >
              <span style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.6rem",
                color: "#1a2e1e",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: 0.75,
              }}>
                Commander sur
              </span>
              <img
                src="/glovo.png"
                alt="Glovo"
                style={{
                  height: "20px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>

            {/* Menu CTA */}
            <a
              href="https://gardenbrunch.ma/menu-pdf/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                padding: "1.25rem 2.5rem",
                backgroundColor: "#3f6e4b",
                borderRadius: "4px",
                textDecoration: "none",
                border: "1px solid transparent",
                transition: "background-color 0.2s",
                minWidth: "200px",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4d8a5c")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#3f6e4b")}
            >
              <span style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.6rem",
                color: "#b4caad",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}>
                Consulter
              </span>
              <span style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.9rem",
                color: "#f4efe4",
                fontWeight: 300,
              }}>
                Notre Menu
              </span>
            </a>
          </div>

          {/* Hours grid */}
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem", justifyContent: "center" }}>
              <span style={{ width: "32px", height: "1px", backgroundColor: "#b4caad" }} />
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.65rem",
                color: "#b4caad",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}>
                Horaires
              </p>
              <span style={{ width: "32px", height: "1px", backgroundColor: "#b4caad" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {hours.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    padding: "1.1rem 0",
                    borderBottom: i < hours.length - 1 ? "1px solid rgba(180,202,173,0.1)" : "none",
                  }}
                >
                  <div>
                    <p style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.85rem",
                      color: "#f4efe4",
                      fontWeight: 400,
                      marginBottom: h.sublabel ? "3px" : "0",
                    }}>
                      {h.label}
                    </p>
                    {h.sublabel && (
                      <p style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "0.65rem",
                        color: "rgba(244,239,228,0.4)",
                        letterSpacing: "0.05em",
                      }}>
                        {h.sublabel}
                      </p>
                    )}
                  </div>
                  <span style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.85rem",
                    color: "#b4caad",
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                  }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTIONS ─────────────────────────────────────────────────── */}
      {features.map((feat, idx) => (
        <section
          key={feat.id}
          style={{
            backgroundColor: idx % 2 === 0 ? "#f4efe4" : "#eee8da",
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
              {/* subtle tint */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(26,46,30,0.08) 0%, transparent 60%)",
              }} />
            </div>

            {/* Text */}
            <div style={{ flex: "1 1 300px", minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                <span style={{ width: "28px", height: "1px", backgroundColor: "#3f6e4b" }} />
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.62rem",
                  color: "#3f6e4b",
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
                color: "#1a2e1e",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}>
                {feat.title}
              </h2>
              {/* decorative line */}
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

      {/* ── GALLERY STRIP ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a2e1e", padding: "clamp(3rem, 5vw, 5rem) 0" }}>
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
              Nos Moments
            </p>
          </div>
          <h2 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
            fontWeight: 400,
            color: "#f4efe4",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginTop: "1rem",
          }}>
            Brunch, Tea Time, Business Lunch<br />
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
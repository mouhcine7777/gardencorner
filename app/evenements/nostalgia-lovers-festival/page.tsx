"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import StickyMenu from "../../components/StickyMenu";
import Footer from "../../components/Footer";

// ─── Gallery images ────────────────────────────────────────────────────────────
const photos = [
  { src: "/nostalgia/photo-1.jpg", alt: "Nostalgia Lovers – scène" },
  { src: "/nostalgia/photo-2.jpg", alt: "Nostalgia Lovers – public" },
  { src: "/nostalgia/photo-3.jpg", alt: "Nostalgia Lovers – lumières" },
  { src: "/nostalgia/photo-4.jpg", alt: "Nostalgia Lovers – artiste" },
  { src: "/nostalgia/photo-5.jpg", alt: "Nostalgia Lovers – ambiance" },
  { src: "/nostalgia/photo-6.jpg", alt: "Nostalgia Lovers – festival" },
  { src: "/nostalgia/photo-7.jpg", alt: "Nostalgia Lovers – soirée" },
  { src: "/nostalgia/photo-8.jpg", alt: "Nostalgia Lovers – vélodrome" },
];

// ─── Auto-scrolling infinite strip ────────────────────────────────────────────
function ImageSlider() {
  const stripRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef(0);
  const ITEM_W = 380 + 12;

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const totalWidth = ITEM_W * photos.length;
    const animate = () => {
      posRef.current += 0.6;
      if (posRef.current >= totalWidth) posRef.current = 0;
      strip.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const doubled = [...photos, ...photos];

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        ref={stripRef}
        style={{ display: "flex", gap: "12px", willChange: "transform" }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "380px",
              height: "480px",
              borderRadius: "8px",
              overflow: "hidden",
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

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function NostalgiaLoversPage() {
  return (
    <>
      <StickyMenu />
      <main style={{ backgroundColor: "#f4efe4", minHeight: "100vh", color: "#1a2e1e" }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", height: "clamp(420px, 60vw, 700px)", overflow: "hidden" }}>
          <img
            src="/nostalgialovers.jpg"
            alt="Nostalgia Lovers"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
          {/* Multi-layer gradient */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(26,46,30,0.3) 0%, rgba(26,46,30,0.1) 40%, rgba(26,46,30,0.85) 100%)",
          }} />
          {/* Subtle vignette sides */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(26,46,30,0.4) 100%)",
          }} />

          {/* Hero text */}
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 1.5rem clamp(2.5rem, 5vw, 4.5rem)",
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.65rem",
              color: "#ffffff",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Évènements — Garden Corner
            </p>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              fontWeight: 400,
              color: "#f4efe4",
              letterSpacing: "0.06em",
              lineHeight: 1,
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}>
              Nostalgia
            </h1>
            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              fontWeight: 400,
              color: "#b4caad",
              letterSpacing: "0.06em",
              lineHeight: 1,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Lovers
            </h1>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
              color: "#ffffff",
              letterSpacing: "0.1em",
              fontStyle: "italic",
            }}>
              Les souvenirs des années 80/90, réunis en un seul festival
            </p>
          </div>
        </section>

        {/* ── DESCRIPTION ───────────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: "#1a2e1e",
          padding: "clamp(4rem, 7vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
        }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>

            {/* Decorative top */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "2.5rem", justifyContent: "center" }}>
              <span style={{ flex: 1, height: "1px", backgroundColor: "rgba(180,202,173,0.25)" }} />
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3" fill="#b4caad" opacity="0.6" />
                <circle cx="9" cy="9" r="8" stroke="#b4caad" strokeWidth="0.5" opacity="0.3" />
              </svg>
              <span style={{ flex: 1, height: "1px", backgroundColor: "rgba(180,202,173,0.25)" }} />
            </div>

            <p style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              color: "rgba(244,239,228,0.85)",
              lineHeight: 1.9,
              fontWeight: 300,
              textAlign: "center",
              letterSpacing: "0.01em",
            }}>
              Le Vélodrome de Casablanca plonge dans l'atmosphère inoubliable d'une époque qui a marqué toute une génération avec le <em style={{ color: "#b4caad", fontStyle: "italic" }}>Nostalgia Lovers Festival</em>. Le temps d'une soirée, les souvenirs des années 80 et 90 reprennent vie à travers une expérience immersive, où chaque note, chaque lumière et chaque performance ravivent l'émotion des grands moments d'hier.
            </p>

            <div style={{ height: "2rem" }} />

            <p style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              color: "rgba(244,239,228,0.85)",
              lineHeight: 1.9,
              fontWeight: 300,
              textAlign: "center",
              letterSpacing: "0.01em",
            }}>
              Entre tubes cultes et icônes internationales, le festival invite le public à revivre ces décennies emblématiques, à chanter, danser et se reconnecter à une époque où la musique créait des souvenirs intemporels. Une véritable parenthèse nostalgique, où le passé se célèbre au présent.
            </p>

            {/* Decorative bottom */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "2.5rem", justifyContent: "center" }}>
              <span style={{ flex: 1, height: "1px", backgroundColor: "rgba(180,202,173,0.25)" }} />
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3" fill="#b4caad" opacity="0.6" />
                <circle cx="9" cy="9" r="8" stroke="#b4caad" strokeWidth="0.5" opacity="0.3" />
              </svg>
              <span style={{ flex: 1, height: "1px", backgroundColor: "rgba(180,202,173,0.25)" }} />
            </div>
          </div>
        </section>

        {/* ── GALLERY — desktop masonry, mobile strip ───────────────────────── */}
        <section style={{ backgroundColor: "#f4efe4", padding: "clamp(3rem, 5vw, 5rem) 0" }}>
          {/* Section header */}
          <div style={{
            padding: "0 clamp(1.5rem, 5vw, 4rem)",
            marginBottom: "2.5rem",
            maxWidth: "1200px",
            margin: "0 auto 2.5rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "32px", height: "1px", backgroundColor: "#3f6e4b" }} />
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.62rem",
                color: "#3f6e4b",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}>
                Photos
              </p>
            </div>
            <h2 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              fontWeight: 400,
              color: "#1a2e1e",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              marginTop: "0.75rem",
            }}>
              Revivez la soirée
            </h2>
          </div>

          <div style={{ padding: "0 clamp(1.5rem, 3vw, 3rem)", maxWidth: "1200px", margin: "0 auto" }}>
            <ImageSlider />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
"use client";

import { useRef, useEffect } from "react";
import StickyMenu from "../../components/StickyMenu";
import Footer from "../../components/Footer";

// ─── Gallery images ────────────────────────────────────────────────────────────
const photos = [
  { src: "/fanzone/photo-1.jpg", alt: "Fanzone Arena – ambiance" },
  { src: "/fanzone/photo-2.jpg", alt: "Fanzone Arena – écran géant" },
  { src: "/fanzone/photo-3.jpg", alt: "Fanzone Arena – supporters" },
  { src: "/fanzone/photo-4.jpg", alt: "Fanzone Arena – célébration" },
  { src: "/fanzone/photo-5.jpg", alt: "Fanzone Arena – foule" },
  { src: "/fanzone/photo-6.jpg", alt: "Fanzone Arena – nuit" },
  { src: "/fanzone/photo-7.jpg", alt: "Fanzone Arena – nuit" },
  { src: "/fanzone/photo-8.jpg", alt: "Fanzone Arena – nuit" },
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
export default function FanzonePage() {
  return (
    <>
      <StickyMenu />
      <main style={{ backgroundColor: "#f4efe4", minHeight: "100vh", color: "#1a2e1e" }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", height: "clamp(420px, 60vw, 700px)", overflow: "hidden" }}>
          <img
            src="/fanzone/photo-2.jpg"
            alt="Fanzone Arena"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
          {/* Multi-layer gradient — deeper, more dramatic for a football mood */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,22,40,0.35) 0%, rgba(10,22,40,0.1) 35%, rgba(10,22,40,0.88) 100%)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 45%, rgba(10,22,40,0.45) 100%)",
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
              Fanzone
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
              Arena
            </h1>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
              color: "#ffffff",
              letterSpacing: "0.1em",
              fontStyle: "italic",
            }}>
              La Coupe d'Afrique des Nations 2025, vécue ensemble au Vélodrome
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
              Pour la <em style={{ color: "#b4caad", fontStyle: "italic" }}>Coupe d'Afrique des Nations 2025</em>, Garden Corner a transformé le Vélodrome de Casablanca en une véritable arène de supporters. Soir après soir, des milliers de fans se sont retrouvés pour vivre les matchs ensemble dans une atmosphère électrique, entre cris de joie, tambours et étendards aux couleurs du continent.
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
              Écrans géants, animations live, restauration et ambiance festive : la Fanzone Arena a offert bien plus qu'un simple visionnage. C'était un rendez-vous de communion, où chaque but devenait une fête partagée et chaque match, un souvenir gravé dans la mémoire collective de Casablanca.
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

        {/* ── HIGHLIGHT QUOTE ───────────────────────────────────────────────── */}
        <section style={{
          backgroundColor: "#f4efe4",
          padding: "clamp(3.5rem, 6vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" style={{ marginBottom: "1.5rem", opacity: 0.35 }}>
              <path d="M0 20V12C0 5.373 4.477 1.12 13.43 0L14 2C9.477 2.747 7.213 5.12 7.213 8.667H12V20H0ZM16 20V12C16 5.373 20.477 1.12 29.43 0L30 2C25.477 2.747 23.213 5.12 23.213 8.667H28V20H16Z" fill="#3f6e4b"/>
            </svg>
            <p style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
              fontWeight: 400,
              color: "#1a2e1e",
              lineHeight: 1.75,
              fontStyle: "italic",
              letterSpacing: "0.01em",
            }}>
              Le football unit. La Fanzone Arena en a fait la preuve soirée après soirée, sous les étoiles de Casablanca.
            </p>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.65rem",
              color: "#3f6e4b",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginTop: "1.5rem",
            }}>
              Garden Corner — Can 2025
            </p>
          </div>
        </section>

        {/* ── GALLERY ───────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#f4efe4", padding: "clamp(1rem, 2vw, 2rem) 0 clamp(3rem, 5vw, 5rem)" }}>
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
              Revivez la Fanzone
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
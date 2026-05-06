"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import StickyMenu from "../../components/StickyMenu";
import Footer from "../../components/Footer";

// ─── Gallery images ────────────────────────────────────────────────────────────
const photos = [
  { src: "/magicgarden/photo-1.jpg", alt: "Magic Garden – lanternes" },
  { src: "/magicgarden/photo-2.jpg", alt: "Magic Garden – parcours lumineux" },
  { src: "/magicgarden/photo-3.jpg", alt: "Magic Garden – installations" },
  { src: "/magicgarden/photo-4.jpg", alt: "Magic Garden – ambiance nocturne" },
  { src: "/magicgarden/photo-5.jpg", alt: "Magic Garden – jeux de lumières" },
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
export default function MagicGardenPage() {
  return (
    <>
      <StickyMenu />
      <main style={{ backgroundColor: "#f4efe4", minHeight: "100vh", color: "#1a2e1e" }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", height: "clamp(420px, 60vw, 700px)", overflow: "hidden" }}>
          <img
            src="/magicgarden.jpg"
            alt="Magic Garden Light Festival"
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
              Magic
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
              Garden
            </h1>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
              color: "rgba(244,239,228,0.55)",
              letterSpacing: "0.1em",
              fontStyle: "italic",
            }}>
              Des lanternes et de la magie au Vélodrome
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
              Au cœur de Casablanca, le Vélodrome accueille le <em style={{ color: "#b4caad", fontStyle: "italic" }}>Magic Garden Light Festival</em>, une expérience immersive qui transforme le lieu en un véritable décor enchanteur dès la tombée de la nuit. À travers un parcours ponctué de lanternes lumineuses et d'installations artistiques, les visiteurs sont invités à déambuler dans un univers où la lumière devient langage.
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
              Entre scénographies féeriques et jeux de lumières soigneusement orchestrés, l'événement propose une parenthèse hors du temps, accessible à tous, où l'imaginaire s'exprime pleinement au fil des allées du Vélodrome. Des ambiances à la fois poétiques et spectaculaires, où le passé et le présent se rejoignent dans un même souffle de magie.
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

        {/* ── GALLERY ───────────────────────────────────────────────────────── */}
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
              Revivez la magie
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
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import StickyMenu from "../components/StickyMenu";
import Footer from "../components/Footer";

const GLOVO_URL = "https://glovoapp.com/en/ma/casablanca/stores/garden-bakes-cas";
const INSTAGRAM_URL = "https://www.instagram.com/garden_bakes/";

// ─── Auto-scrolling gallery images ───────────────────────────────────────────
const galleryImages = [
  { src: "/bakes/gallery-1.jpg", alt: "Viennoiseries croustillantes sorties du four, Garden Bake's Casablanca" },
  { src: "/bakes/gallery-2.jpg", alt: "Pâtisseries artisanales faites maison au Parc du Vélodrome, Casablanca" },
  { src: "/bakes/gallery-3.jpg", alt: "Jus signature pressés à froid Red Garden, Garden Beet et Garden Morning" },
  { src: "/bakes/gallery-4.jpg", alt: "Café et boissons de la boulangerie Garden Bake's, Casablanca" },
  { src: "/bakes/gallery-5.jpg", alt: "Formule déjeuner, sandwichs et quiches maison à Casablanca" },
  { src: "/bakes/gallery-6.jpg", alt: "Douceurs sucrées et gâteaux artisanaux, Garden Bake's Vélodrome" },
  { src: "/bakes/gallery-7.jpg", alt: "Pains artisanaux pétris chaque jour, boulangerie Vélodrome Casablanca" },
  { src: "/bakes/gallery-8.jpg", alt: "Goûter gourmand en terrasse au Parc du Vélodrome, Casablanca" },
];

// ─── Hours data ───────────────────────────────────────────────────────────────
const hours = [
  {
    label: "Tous les jours",
    time: "8h00 – 22h00",
  },
  {
    label: "Formule Petit déjeuner",
    sublabel: "Chaque jour",
    time: "8h00 – 11h00",
  },
  {
    label: "Formule Déjeuner",
    sublabel: "Chaque jour",
    time: "12h00 – 14h00",
  },
  {
    label: "Formule Goûter",
    sublabel: "Chaque jour",
    time: "16h00 – 19h00",
  },
];

// ─── Feature sections ─────────────────────────────────────────────────────────
// `lead` is the short punchy line; `body` is the SEO-rich descriptive paragraph.
const features = [
  {
    id: "breakfast",
    tag: "Petit déjeuner",
    title: "Des matins gourmands pour bien commencer",
    lead: "Des petits-déjeuners gourmands pour bien commencer la journée, entre douceurs fraîches, café réconfortant et moments simples.",
    body: "Chaque matin dès 8h, Garden Bake's, votre boulangerie-pâtisserie artisanale au Parc du Vélodrome de Casablanca, vous accueille pour un petit déjeuner fait maison qui sent bon le beurre frais et le café chaud. Nos viennoiseries croustillantes sortent du four tout au long de la matinée : croissants bicolores Nutella, framboise ou pistache, pains au chocolat feuilletés et brioches dorées, à accompagner d'un café réconfortant ou de l'un de nos jus signature pressés à froid — Red Garden, Garden Beet ou Garden Morning. Côté boulangerie, retrouvez nos pains artisanaux pétris chaque jour : pain complet, pain d'orge et pains sandwich au pavot, sésame ou olives. Que ce soit sur place face à la verdure du parc, à emporter sur le chemin du bureau ou en livraison via Glovo, Garden Bake's est l'adresse incontournable pour un petit déjeuner gourmand à Casablanca, du lundi au dimanche.",
    image: "/bakes/feature-breakfast.jpg",
    imageAlt: "Petit déjeuner fait maison et viennoiseries à Garden Bake's, Casablanca",
    imageRight: false,
  },
  {
    id: "lunch",
    tag: "Déjeuner",
    title: "Des déjeuners qui font plaisir",
    lead: "Entre recettes savoureuses et pauses sans complication, à savourer sur place ou à commander. Un moment pensé pour se faire plaisir sans chichi.",
    body: "À l'heure du déjeuner, Garden Bake's se fait sandwicherie artisanale et propose une pause déjeuner rapide et savoureuse au cœur du Vélodrome, à deux pas des quartiers Racine et Gauthier. Nos sandwichs frais sont préparés à la commande dans nos pains maison, et nos quiches généreuses — saumon, poulet, charcuterie ou la classique quiche lorraine — sortent du four en fin de matinée. Une formule déjeuner simple, fraîche et 100% faite maison, pensée pour les professionnels pressés comme pour les promeneurs du parc. À déguster sur notre terrasse, à emporter pour un déjeuner sur le pouce à Casablanca, ou à commander en livraison : le déjeuner comme on l'aime, sans complication et toujours avec le sourire.",
    image: "/bakes/feature-lunch.jpg",
    imageAlt: "Sandwichs artisanaux et quiches maison pour le déjeuner, Casablanca",
    imageRight: true,
  },
  {
    id: "gouter",
    tag: "Goûter",
    title: "Une pause sucrée qui fait du bien",
    lead: "Entre douceurs généreuses et instants réconfortants. Le goûter comme on l'aime : simple, savoureux, et toujours fait avec soin.",
    body: "L'après-midi, offrez-vous une pause sucrée à Casablanca dans notre pâtisserie artisanale du Vélodrome. Notre vitrine de douceurs faites maison change au fil des jours : tarte Tatin caramélisée, tarte aux framboises, tarte citron meringuée, fraisier, forêt noire, éclairs, brownies fondants, cookies pistache ou caramel et madeleines praliné-noisette, framboise ou citron. Le tout à savourer avec un café, un thé ou l'un de nos milkshakes gourmands, en terrasse face au parc ou confortablement installé à l'intérieur. Après une promenade au Parc du Vélodrome, à l'heure du goûter des enfants ou pour une simple envie de douceur, Garden Bake's s'impose comme l'un des meilleurs salons de goûter de Casablanca — simple, savoureux et toujours fait avec soin, jusqu'à 22h.",
    image: "/bakes/feature-gouter.jpg",
    imageAlt: "Tartes, gâteaux et douceurs du goûter à Garden Bake's, Vélodrome Casablanca",
    imageRight: false,
  },
];

// ─── Product range (HTML, product names are search keywords) ───────────────────
const productRange = [
  {
    title: "Viennoiseries",
    items: [
      "Croissants bicolores Nutella, framboise ou pistache",
      "Pains au chocolat feuilletés",
      "Brioches dorées",
    ],
  },
  {
    title: "Pains artisanaux",
    items: [
      "Pain complet",
      "Pain d'orge",
      "Pains sandwich au pavot, sésame ou olives",
    ],
  },
  {
    title: "Sandwicherie & quiches",
    items: [
      "Sandwichs frais préparés à la commande dans nos pains maison",
      "Quiches saumon, poulet ou charcuterie",
      "Quiche lorraine",
    ],
  },
  {
    title: "Tartes & gâteaux",
    items: [
      "Tarte Tatin caramélisée",
      "Tarte aux framboises",
      "Tarte citron meringuée",
      "Fraisier",
      "Forêt noire",
      "Éclairs",
    ],
  },
  {
    title: "Petites douceurs",
    items: [
      "Brownies fondants",
      "Cookies pistache ou caramel",
      "Madeleines praliné-noisette, framboise ou citron",
    ],
  },
  {
    title: "Boissons & jus signature",
    items: [
      "Jus pressés à froid Red Garden, Garden Beet, Garden Morning",
      "Cafés et thés",
      "Milkshakes gourmands",
    ],
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

      {/* Dismiss button */}
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
        href={GLOVO_URL}
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
          <path d="M3 8h10M9 4l4 4-4 4" stroke="#1a2e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

// ─── Product range section ────────────────────────────────────────────────────
function ProductRangeSection() {
  return (
    <section style={{ backgroundColor: "#f4efe4", padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 5vw, 4rem)" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", justifyContent: "center" }}>
          <span style={{ width: "28px", height: "1px", backgroundColor: "#3f6e4b" }} />
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.62rem",
            color: "#3f6e4b",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}>
            Notre gamme
          </p>
          <span style={{ width: "28px", height: "1px", backgroundColor: "#3f6e4b" }} />
        </div>
        <h2 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
          fontWeight: 400,
          color: "#1a2e1e",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          textAlign: "center",
          marginBottom: "2.5rem",
        }}>
          Tout ce qui sort de notre fournil
        </h2>

        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.95rem",
          color: "#4a5c4d",
          fontWeight: 300,
          textAlign: "center",
          marginTop: "-1.5rem",
          marginBottom: "2.5rem",
        }}>
          Un aperçu de notre gamme —{" "}
          <Link href="/bakes/menu" style={{ color: "#3f6e4b", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            voir la carte complète et les prix
          </Link>
          .
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(1.5rem, 3vw, 2.5rem)",
        }}>
          {productRange.map((group) => (
            <div key={group.title}>
              <h3 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "1.1rem",
                fontWeight: 400,
                color: "#1a2e1e",
                marginBottom: "0.75rem",
              }}>
                {group.title}
              </h3>
              <div style={{ width: "32px", height: "1px", backgroundColor: "#b4caad", marginBottom: "1rem" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.92rem",
                      color: "#4a5c4d",
                      lineHeight: 1.6,
                      fontWeight: 300,
                      paddingLeft: "1rem",
                      position: "relative",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{
                      position: "absolute",
                      left: 0,
                      top: "0.6em",
                      width: "5px",
                      height: "1px",
                      backgroundColor: "#b4caad",
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function BakesClient() {
  return (
    <>
      <StickyMenu />
      <GlovoPopup />
      <main style={{ backgroundColor: "#f4efe4", minHeight: "100vh" }}>

        {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
        <section style={{ position: "relative", height: "clamp(380px, 55vw, 640px)", overflow: "hidden" }}>
          <img
            src="/gardenbakes.jpg"
            alt="Garden Bake's, boulangerie et pâtisserie artisanale au Parc du Vélodrome, Casablanca"
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
              src="/logos/garden-bakes-logo.png"
              alt="Garden Bake's Casablanca"
              width={220}
              height={110}
              style={{
                maxHeight: "90px",
                width: "auto",
                marginBottom: "1.5rem",
              }}
            />
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                "Un petit moment pour soi",
                "Un coin pour se faire plaisir",
                "Une pause simple et agréable",
              ].map((tag) => (
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

        {/* ── CONTACT + CTAs ─────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#1a2e1e", padding: "clamp(2.5rem, 5vw, 4rem) 1.5rem" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

            {/* Top row: contact + CTAs */}
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
                { label: "Écrivez-nous", value: "contact@gardenbakes.ma", href: "mailto:contact@gardenbakes.ma" },
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

              {/* Instagram CTA */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
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
                  Suivez-nous
                </span>
                <span style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.9rem",
                  color: "#f4efe4",
                  fontWeight: 300,
                }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  @garden_bakes
                </span>
              </a>

              {/* Glovo CTA */}
              <a
                href={GLOVO_URL}
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
                  fontSize: "0.9rem",
                  color: "#1a2e1e",
                  fontWeight: 500,
                }}>
                  Je commande
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
              <Link
                href="/bakes/menu"
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
              </Link>
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

        {/* ── FEATURE SECTIONS ─────────────────────────────────────────── */}
        {features.map((feat, idx) => (
          <section
            key={feat.id}
            id={feat.id}
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
                <div style={{ width: "40px", height: "1px", backgroundColor: "#b4caad", marginBottom: "1.25rem" }} />
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                  color: "#1a2e1e",
                  lineHeight: 1.7,
                  fontWeight: 400,
                  marginBottom: "1.1rem",
                }}>
                  {feat.lead}
                </p>
                <p style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(0.9rem, 1.2vw, 1.02rem)",
                  color: "#4a5c4d",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}>
                  {feat.body}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* ── PRODUCT RANGE ────────────────────────────────────────────── */}
        <ProductRangeSection />

        {/* ── GALLERY STRIP ────────────────────────────────────────────── */}
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
                Nos Saveurs
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
              Sucrés, salés, boissons & jus<br />
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

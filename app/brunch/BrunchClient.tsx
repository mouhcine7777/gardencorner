"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import StickyMenu from "../components/StickyMenu";
import Footer from "../components/Footer";

// ─── Auto-scrolling gallery images ───────────────────────────────────────────
const galleryImages = [
  { src: "/brunch/gallery-1.jpg", alt: "Brunch fait maison à Garden Brunch, Parc du Vélodrome Casablanca" },
  { src: "/brunch/gallery-2.jpg", alt: "Tea time et pâtisseries maison à Casablanca" },
  { src: "/brunch/gallery-3.jpg", alt: "Business lunch en terrasse au Parc du Vélodrome, Casablanca" },
  { src: "/brunch/gallery-4.jpg", alt: "Café de spécialité et viennoiseries artisanales, Garden Brunch Casablanca" },
  { src: "/brunch/gallery-5.jpg", alt: "Gâteaux et pâtisseries maison, Garden Brunch Casablanca" },
  { src: "/brunch/gallery-6.jpg", alt: "Petit déjeuner en terrasse verdoyante à Casablanca" },
  { src: "/brunch/gallery-7.jpg", alt: "Brunch du weekend à partager au Parc du Vélodrome, Casablanca" },
  { src: "/brunch/gallery-8.jpg", alt: "Pâtisseries maison du salon de thé Garden Brunch, Casablanca" },
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
// `lead` is the short punchy line; `body` is the SEO-rich descriptive paragraph.
const features = [
  {
    id: "brunch",
    tag: "Brunch & Petit déjeuner",
    title: "Des matins gourmands",
    lead: "Entre petit-déjeuner savoureux et brunch à partager, dans une ambiance chaleureuse où chaque instant se déguste.",
    body: "Au cœur du Parc du Vélodrome, Garden Brunch vous accueille chaque matin dès 8h pour un petit déjeuner ou un brunch fait maison dans l'un des cadres les plus verdoyants de Casablanca. Sur notre terrasse ombragée, entourée de jardins, savourez nos viennoiseries artisanales, pancakes moelleux, œufs préparés à la minute, jus de fruits frais pressés et cafés de spécialité. Le week-end, notre formule brunch à partager est devenue le rendez-vous incontournable des familles et des amis en quête du meilleur brunch de Casablanca : produits frais, recettes généreuses et ambiance chaleureuse au vert, loin de l'agitation de la ville. Que vous soyez du quartier Racine, de Gauthier ou de passage à Casablanca, offrez-vous une parenthèse gourmande en plein air, tous les jours jusqu'à 13h (14h le week-end et jours fériés).",
    image: "/brunch/feature-brunch.jpg",
    imageAlt: "Brunch fait maison en terrasse au Parc du Vélodrome, Casablanca",
    imageRight: false,
  },
  {
    id: "business",
    tag: "Business Lunch",
    title: "Le rendez-vous du midi des professionnels",
    lead: "Où efficacité rime avec gourmandise. Un moment pensé pour savourer une pause de qualité dans une ambiance élégante.",
    body: "Du lundi au vendredi, de 12h à 15h, Garden Brunch se transforme en adresse de référence pour le business lunch à Casablanca. À quelques minutes des quartiers d'affaires de Racine, du Triangle d'Or et de Maârif, notre restaurant au Parc du Vélodrome offre un cadre élégant et apaisant, idéal pour un déjeuner d'affaires, une réunion informelle ou une pause déjeuner de qualité entre collègues. Notre formule du midi conjugue efficacité et gourmandise : une cuisine de saison faite maison, un service attentif et rapide, et une terrasse au calme propice aux échanges professionnels. Wifi disponible, parking à proximité et possibilité de réservation : tout est pensé pour faire de votre déjeuner professionnel à Casablanca un moment aussi productif qu'agréable.",
    image: "/brunch/feature-business.jpg",
    imageAlt: "Déjeuner d'affaires au calme à Garden Brunch, Casablanca",
    imageRight: true,
  },
  {
    id: "teatime",
    tag: "Tea Time",
    title: "Une expérience gourmande et raffinée",
    lead: "Un moment suspendu entre plaisir et finesse, où chaque détail est pensé pour sublimer votre pause.",
    body: "En fin d'après-midi, du lundi au vendredi de 16h à 19h, découvrez notre tea time à Casablanca, un moment suspendu entre douceur et raffinement au milieu de la verdure du Parc du Vélodrome. Notre carte du goûter met à l'honneur les pâtisseries maison, gâteaux signature, thés d'exception et boissons chaudes gourmandes, à déguster en terrasse ou dans notre salon cosy. Que ce soit pour un goûter entre amies, une pause sucrée après une promenade dans le parc, ou un moment de détente en famille, Garden Brunch s'impose comme l'un des meilleurs salons de thé de Casablanca. Une expérience à la croisée du café jardin et du salon de thé élégant, où chaque détail — de la vaisselle à la présentation des desserts — est pensé pour sublimer votre pause.",
    image: "/brunch/feature-teatime.jpg",
    imageAlt: "Tea time et salon de thé élégant à Garden Brunch, Casablanca",
    imageRight: false,
  },
];

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Peut-on réserver une table à Garden Brunch ?",
    a: "Oui, la réservation est possible et recommandée, en particulier le week-end. Appelez-nous au 06 67 42 26 03 pour réserver votre table sur notre terrasse ou dans notre salon.",
  },
  {
    q: "Y a-t-il un parking à proximité ?",
    a: "Oui, un parking est disponible à proximité immédiate, au Parc du Vélodrome (Av. Ahmed Charci), pour un accès facile que vous veniez de Racine, Gauthier ou Maârif.",
  },
  {
    q: "Disposez-vous d'une terrasse ?",
    a: "Oui. Garden Brunch vous accueille sur une terrasse ombragée entourée de jardins, l'un des cadres les plus verdoyants de Casablanca, ainsi que dans un salon cosy à l'intérieur.",
  },
  {
    q: "Le wifi est-il disponible ?",
    a: "Oui, le wifi gratuit est à votre disposition — idéal pour un déjeuner d'affaires ou une réunion informelle pendant le business lunch, du lundi au vendredi de 12h à 15h.",
  },
  {
    q: "Les enfants et les familles sont-ils les bienvenus ?",
    a: "Absolument. Notre formule brunch à partager du week-end est le rendez-vous des familles et des amis, dans une ambiance chaleureuse et en plein air, loin de l'agitation de la ville.",
  },
];

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

// ─── Hours section (moved lower on the page) ──────────────────────────────────
function HoursSection() {
  return (
    <section style={{ backgroundColor: "#1a2e1e", padding: "clamp(3rem, 5vw, 5rem) 1.5rem" }}>
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
    </section>
  );
}

// ─── FAQ section ──────────────────────────────────────────────────────────────
function FaqSection() {
  return (
    <section style={{ backgroundColor: "#f4efe4", padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 5vw, 4rem)" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem", justifyContent: "center" }}>
          <span style={{ width: "28px", height: "1px", backgroundColor: "#3f6e4b" }} />
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.62rem",
            color: "#3f6e4b",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}>
            Questions fréquentes
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
          Bon à savoir avant votre visite
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "1.5rem 0",
                borderBottom: i < faqs.length - 1 ? "1px solid rgba(63,110,75,0.14)" : "none",
              }}
            >
              <h3 style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "1.05rem",
                fontWeight: 400,
                color: "#1a2e1e",
                marginBottom: "0.6rem",
              }}>
                {f.q}
              </h3>
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.95rem",
                color: "#4a5c4d",
                lineHeight: 1.7,
                fontWeight: 300,
              }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function BrunchClient() {
  return (
    <>
    <StickyMenu />
    <main style={{ backgroundColor: "#f4efe4", minHeight: "100vh" }}>

      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "clamp(380px, 55vw, 640px)", overflow: "hidden" }}>
        <img
          src="/gardenbrunch.jpg"
          alt="Terrasse verdoyante de Garden Brunch au Parc du Vélodrome, Casablanca"
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
            alt="Garden Brunch Casablanca"
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

      {/* ── CONTACT + CTAs ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a2e1e", padding: "clamp(2.5rem, 5vw, 4rem) 1.5rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

          {/* Contact + menu + Instagram CTAs */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
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

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/gardenbrunch_casablanca/"
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
                @gardenbrunch_casablanca
              </span>
            </a>

            {/* Menu CTA */}
            <Link
              href="/brunch/menu"
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
        </div>
      </section>

      {/* ── FEATURE SECTIONS ─────────────────────────────────────────────────── */}
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

      {/* ── HORAIRES (moved down) ─────────────────────────────────────────────── */}
      <HoursSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <FaqSection />

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

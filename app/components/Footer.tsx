"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Garden Brunch", href: "/brunch" },
  { label: "Garden Bakes", href: "/bakes" },
  { label: "Garden Eataly", href: "/eataly" },
  { label: "Garden Home", href: "/home" },
  { label: "Évènements", href: "/evenements" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(""); }
  };

  return (
    <footer style={{ backgroundColor: "#f4efe4" }}>

      {/* Top section: newsletter + map */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — Newsletter + info */}
        <div>
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/logo.png"
              alt="Garden Corner"
              width={140}
              height={60}
              className="object-contain"
              style={{ opacity: 0.9, maxHeight: "56px", width: "auto" }}
            />
          </div>

          {/* Tagline */}
          <p style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "#1a2e1e",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            marginBottom: "12px",
          }}>
            Restez dans le jardin.
          </p>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.9rem",
            color: "rgba(26,46,30,0.45)",
            fontStyle: "italic",
            marginBottom: "36px",
          }}>
            Recevez nos actualités, événements et offres exclusives.
          </p>

          {/* Newsletter form */}
          {sent ? (
            <div className="flex items-center gap-3" style={{ marginBottom: "48px" }}>
              <span className="w-8 h-px" style={{ backgroundColor: "#b4caad" }} />
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.85rem",
                color: "#b4caad",
                letterSpacing: "0.1em",
              }}>
                Merci ! Vous êtes inscrit(e).
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-stretch" style={{ marginBottom: "48px", maxWidth: "420px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                required
                style={{
                  flex: 1,
                  backgroundColor: "rgba(26,46,30,0.05)",
                  border: "1px solid rgba(63,110,75,0.2)",
                  borderRight: "none",
                  color: "#1a2e1e",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.85rem",
                  padding: "14px 18px",
                  outline: "none",
                  letterSpacing: "0.03em",
                }}
                onFocus={e => (e.target.style.borderColor = "rgba(63,110,75,0.5)")}
                onBlur={e => (e.target.style.borderColor = "rgba(63,110,75,0.2)")}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#3f6e4b",
                  border: "1px solid #3f6e4b",
                  color: "#f4efe4",
                  fontFamily: "Georgia, serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "14px 20px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#2d5a37")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#3f6e4b")}
              >
                S'inscrire
              </button>
            </form>
          )}



          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  color: "rgba(26,46,30,0.35)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#3f6e4b")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(26,46,30,0.35)")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Map */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px" style={{ backgroundColor: "#3f6e4b" }} />
              <p style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.65rem",
                color: "#3f6e4b",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}>
                Nous trouver
              </p>
            </div>
            <p style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.3rem",
              fontWeight: 400,
              color: "#1a2e1e",
              lineHeight: 1.3,
            }}>
              Parc du Vélodrome<br />
              <span style={{ color: "rgba(26,46,30,0.45)", fontSize: "0.95rem", fontWeight: 300 }}>
                Casablanca, Maroc
              </span>
            </p>
          </div>

          {/* Map embed */}
          <div style={{
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid rgba(63,110,75,0.12)",
            flex: 1,
            minHeight: "340px",
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.1571668673882!2d-7.645494799999999!3d33.5895662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f76df51bf3%3A0x5f9dfdc4ca65a5a6!2sParc%20du%20V%C3%A9lodrome!5e1!3m2!1sfr!2sma!4v1776785317095!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "340px", filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(63,110,75,0.12)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.72rem",
            color: "rgba(26,46,30,0.35)",
            letterSpacing: "0.08em",
          }}>
            © {new Date().getFullYear()} Garden Corner · Casablanca Vélodrome. Tous droits réservés.
          </p>
        </div>
      </div>

    </footer>
  );
}
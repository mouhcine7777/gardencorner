"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const rows = [
  {
    id: "brunch",
    name: "Garden Brunch",
    logo: "/logos/garden-brunch-logo.png",

    image: "/gardenbrunch.jpg",
    tagline: "Du premier café au dernier plat",
    imageCaption: "Des saveurs du matin au soir",
    href: "/brunch",
    logoLeft: false,
    whiteFilter: false,
  },
  {
    id: "bakes",
    name: "Garden Bakes",
    logo: "/logos/garden-bakes-logo.png",

    image: "/gardenbakes.jpg",
    tagline: "Pâtisseries & viennoiseries maison",
    imageCaption: "L'art de la pâtisserie artisanale",
    href: "/bakes",
    logoLeft: true,
    whiteFilter: false,
  },
  {
    id: "eataly",
    name: "Garden Eataly",
    logo: "/logos/garden-eataly-logo.png",

    image: "/gardeneataly.jpg",
    tagline: "Saveurs italiennes & méditerranéennes",
    imageCaption: "La dolce vita à Casablanca",
    href: "/eataly",
    logoLeft: false,
    whiteFilter: false,
  },
  {
    id: "home",
    name: "Garden Home",
    logo: "/logos/garden-home-logo.png",

    image: "/gardenhome.jpg",
    tagline: "Art de vivre & décoration",
    imageCaption: "Un intérieur qui vous ressemble",
    href: "/home",
    logoLeft: true,
    whiteFilter: true,
  },
];

function Row({ row }: { row: (typeof rows)[0] }) {
  const [imgHovered, setImgHovered] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  const ImageCard = (
    <Link
      href={row.href}
      className="relative overflow-hidden block"
      style={{ borderRadius: "10px", flex: "1 1 0%", minWidth: 0 }}
      onMouseEnter={() => setImgHovered(true)}
      onMouseLeave={() => setImgHovered(false)}
    >
      <img
        src={row.image}
        alt={row.name}
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: imgHovered ? "scale(1.06)" : "scale(1)", display: "block" }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(26,46,30,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          opacity: imgHovered ? 1 : 0.6,
        }}
      />
      <div className="absolute bottom-0 left-0 p-4 md:p-7">
        <p
          className="text-white/50 text-xs uppercase tracking-widest mb-1"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}
        >
          {row.tagline}
        </p>
        <p
          className="text-white text-sm md:text-base"
          style={{ fontFamily: "Georgia, serif", fontWeight: 300 }}
        >
          {row.imageCaption}
        </p>
      </div>
      <div
        className="absolute bottom-0 right-0 p-4 md:p-7 flex items-center gap-2 transition-all duration-300"
        style={{
          opacity: imgHovered ? 1 : 0,
          transform: imgHovered ? "translateX(0)" : "translateX(6px)",
        }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "#b4caad", fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}
        >
          Découvrir
        </span>
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="#b4caad"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );

  const LogoCard = (
    <Link
      href={row.href}
      className="relative overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: "#1a2e1e", borderRadius: "10px", flex: "0 0 36%", minWidth: 0, height: "100%" }}
      onMouseEnter={() => setLogoHovered(true)}
      onMouseLeave={() => setLogoHovered(false)}
    >
      {/* Arch bg */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg viewBox="0 0 300 400" fill="none" className="w-full h-full">
          <path
            d="M60 400 L60 160 Q60 30 150 30 Q240 30 240 160 L240 400"
            stroke="#b4caad"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M90 400 L90 175 Q90 60 150 60 Q210 60 210 175 L210 400"
            stroke="#b4caad"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div
        className="relative z-10 flex flex-col items-center gap-3 md:gap-4 transition-transform duration-400"
        style={{ transform: logoHovered ? "scale(1.04)" : "scale(1)" }}
      >
        <Image
          src={row.logo}
          alt={row.name}
          width={200}
          height={100}
          className="object-contain"
          style={{
            filter: row.whiteFilter ? "brightness(0) invert(1)" : "none",
            opacity: logoHovered ? 1 : 0.85,
            maxHeight: "130px",
            width: "auto",
            transition: "opacity 0.3s ease",
          }}
        />
        <span
          className="block h-px transition-all duration-400"
          style={{ backgroundColor: "#b4caad", width: logoHovered ? "32px" : "24px" }}
        />
        <p
          className="text-xs uppercase tracking-widest text-center px-4 md:px-6"
          style={{
            color: "#b4caad",
            fontFamily: "Georgia, serif",
            letterSpacing: "0.18em",
            opacity: logoHovered ? 1 : 0.55,
            transition: "opacity 0.3s ease",
            fontSize: "10px",
          }}
        >
          {row.tagline}
        </p>
      </div>

      <div
        className="absolute bottom-4 md:bottom-6 flex items-center gap-2 transition-all duration-300"
        style={{
          opacity: logoHovered ? 1 : 0,
          transform: logoHovered ? "translateY(0)" : "translateY(6px)",
        }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "#b4caad", fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}
        >
          Découvrir
        </span>
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path
            d="M3 7h8M7 3l4 4-4 4"
            stroke="#b4caad"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );

  return (
    <>
      {/* Mobile: stacked full-width cards */}
      <div className="flex flex-col gap-3 garden-row-mobile md:hidden">
        <Link
          href={row.href}
          className="relative overflow-hidden block"
          style={{ borderRadius: "10px", height: "220px" }}
        >
          <img
            src={row.image}
            alt={row.name}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,46,30,0.80) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
            }}
          />

          <div className="absolute bottom-0 left-0 p-4">
            <p
              className="text-white/50 text-xs uppercase tracking-widest mb-1"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "0.18em" }}
            >
              {row.tagline}
            </p>
            <p
              className="text-white text-sm"
              style={{ fontFamily: "Georgia, serif", fontWeight: 300 }}
            >
              {row.imageCaption}
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#b4caad", fontFamily: "Georgia, serif", letterSpacing: "0.2em" }}
            >
              Découvrir
            </span>
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="#b4caad"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Desktop: side-by-side layout */}
      <div
        className="hidden md:flex gap-3 md:gap-4"
        style={{ height: "340px" }}
      >
        {row.logoLeft ? (
          <>{LogoCard}{ImageCard}</>
        ) : (
          <>{ImageCard}{LogoCard}</>
        )}
      </div>
    </>
  );
}

export default function GardenGrid() {
  return (
    <section className="w-full py-8 px-4 md:px-8" style={{ backgroundColor: "#f4efe4" }}>
      <div className="max-w-7xl mx-auto mb-6 flex items-center gap-3">
        <span className="w-8 h-px" style={{ backgroundColor: "#3f6e4b" }} />
        <p
          className="text-xs uppercase tracking-[0.25em]"
          style={{ fontFamily: "Georgia, serif", color: "#3f6e4b" }}
        >
          Nos Univers
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:gap-4">
        {rows.map((row) => (
          <Row key={row.id} row={row} />
        ))}
      </div>
    </section>
  );
}
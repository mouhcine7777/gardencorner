"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const events = [
  {
    id: "magic-garden",
    title: "Magic Garden Light Festival",
    date: "2026",
    tag: "Festival",
    image: "/magicgarden.jpg",
    href: "/evenements/magic-garden",
  },
  {
    id: "nostalgia-lovers",
    title: "Nostalgia Lovers",
    tag: "Festival",
    image: "/nostalgialovers.jpg",
    href: "/evenements/nostalgia-lovers-festival",
  },
  {
    id: "fanzone-arena",
    title: "Fanzone Arena",
    date: "2025",
    tag: "Sport & Fun",
    image: "/fanzone/main.jpg",
    href: "/evenements/fanzone",
  },
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function EventsSlider() {
  const [active, setActive] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goNext = () => setActive((p) => mod(p + 1, events.length));
  const goPrev = () => setActive((p) => mod(p - 1, events.length));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="w-full py-12 md:py-20 overflow-hidden" style={{ backgroundColor: "#1a2e1e" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 md:px-16 mb-10 md:mb-16 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px" style={{ backgroundColor: "#b4caad" }} />
            <p
              className="text-xs uppercase tracking-[0.25em]"
              style={{ fontFamily: "Georgia, serif", color: "#b4caad" }}
            >
              Évènements passés
            </p>
          </div>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
              fontWeight: 400,
              color: "#f4efe4",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Des événements qui ont fait<br />
            <span style={{ color: "#b4caad" }}>battre le cœur du Garden.</span>
          </h2>
        </div>

        {/* Counter — desktop only */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "3rem",
              fontWeight: 300,
              color: "#f4efe4",
              lineHeight: 1,
            }}
          >
            0{active + 1}
          </span>
          <div>
            <div className="w-px h-8 mx-auto mb-1" style={{ backgroundColor: "rgba(244,239,228,0.2)" }} />
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "rgba(244,239,228,0.3)" }}>
              0{events.length}
            </span>
          </div>
        </div>
      </div>

      {/* ── MOBILE STAGE ── single card, swipeable */}
      <div
        className="md:hidden px-5"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            height: "420px",
          }}
        >
          {events.map((event, i) => (
            <div
              key={event.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === active ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                draggable={false}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,25,15,0.92) 0%, rgba(10,25,15,0.15) 55%, transparent 100%)",
                }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.75rem" }}>
                <div
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    border: "1px solid rgba(180,202,173,0.4)",
                    borderRadius: "2px",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.65rem",
                      color: "#b4caad",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {event.tag} · {event.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.65rem",
                    fontWeight: 400,
                    color: "white",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                    marginBottom: "16px",
                  }}
                >
                  {event.title}
                </h3>
                <Link
                  href={event.href}
                  className="inline-flex items-center gap-3"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.7rem",
                      color: "#b4caad",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                    }}
                  >
                    Voir l'évènement
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP STAGE ── accordion */}
      <div
        className="hidden md:flex items-stretch justify-center gap-0"
        style={{
          height: "520px",
          paddingLeft: "calc(50vw - 560px)",
          paddingRight: "calc(50vw - 560px)",
        }}
      >
        {events.map((event, i) => {
          const offset = mod(i - active, events.length);
          const isActive = offset === 0;
          const isRight = offset === 1;
          const isLeft = offset === 2;

          let flex = "0 0 160px";
          let opacity = 0.45;
          if (isActive) { flex = "0 0 640px"; opacity = 1; }
          else if (isRight || isLeft) { flex = "0 0 180px"; opacity = 0.5; }

          return (
            <div
              key={event.id}
              onClick={() => { if (!isActive) setActive(i); }}
              style={{
                flex,
                opacity,
                transition: "flex 0.6s cubic-bezier(0.76,0,0.24,1), opacity 0.5s ease",
                cursor: isActive ? "default" : "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                margin: "0 6px",
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                  transform: isActive ? "scale(1)" : "scale(1.05)",
                }}
                draggable={false}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isActive
                    ? "linear-gradient(to top, rgba(10,25,15,0.9) 0%, rgba(10,25,15,0.15) 55%, transparent 100%)"
                    : "rgba(10,25,15,0.55)",
                  transition: "background 0.5s ease",
                }}
              />
              {isActive && (
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem" }}>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      border: "1px solid rgba(180,202,173,0.4)",
                      borderRadius: "2px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "0.65rem",
                        color: "#b4caad",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {event.tag} · {event.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "2.2rem",
                      fontWeight: 400,
                      color: "white",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      marginBottom: "20px",
                    }}
                  >
                    {event.title}
                  </h3>
                  <Link
                    href={event.href}
                    className="inline-flex items-center gap-3 group"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "0.7rem",
                        color: "#b4caad",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                      }}
                    >
                      Voir l'évènement
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
                  </Link>
                </div>
              )}
              {!isActive && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.75rem",
                      color: "rgba(244,239,228,0.7)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.title}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom nav */}
      <div className="max-w-7xl mx-auto px-5 md:px-16 mt-8 md:mt-10 flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2 items-center">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                height: "2px",
                width: i === active ? "32px" : "12px",
                backgroundColor: i === active ? "#b4caad" : "rgba(180,202,173,0.25)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
          {/* Mobile counter */}
          <span
            className="md:hidden ml-3"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "0.75rem",
              color: "rgba(244,239,228,0.4)",
            }}
          >
            0{active + 1} / 0{events.length}
          </span>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            className="w-11 h-11 flex items-center justify-center transition-all duration-200"
            style={{ border: "1px solid rgba(180,202,173,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#b4caad")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(180,202,173,0.25)")}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
              <path
                d="M10 3L5 8l5 5"
                stroke="#b4caad"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="w-11 h-11 flex items-center justify-center transition-all duration-200"
            style={{ border: "1px solid rgba(180,202,173,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#b4caad")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(180,202,173,0.25)")}
          >
            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
              <path
                d="M6 3l5 5-5 5"
                stroke="#b4caad"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
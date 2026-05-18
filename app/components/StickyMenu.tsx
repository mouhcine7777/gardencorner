"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Garden Brunch", href: "/brunch" },
  { label: "Garden Bakes", href: "/bakes" },
  { label: "Garden Eataly", href: "/eataly" },
  { label: "Garden Home", href: "/home" },
  {
    label: "Évènements",
    href: "/evenements",
    dropdown: [
      { label: "Nostalgia Lovers", href: "/evenements/nostalgia-lovers-festival" },
      { label: "Magic Garden", href: "/evenements/magic-garden" },
      { label: "Fanzone Arena", href: "/evenements/fanzone" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(244,239,228,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(63,110,75,0.12)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(26,46,30,0.07)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Garden Corner"
              width={120}
              height={52}
              className="h-12 w-auto object-contain transition-all duration-300"
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1)",
              }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger */}
                  <button
                    className="relative px-4 py-2 group flex items-center gap-1 transition-colors duration-200 cursor-pointer"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      color: scrolled ? "#3f6e4b" : "rgba(255,255,255,0.88)",
                      fontWeight: 400,
                      background: "none",
                      border: "none",
                      outline: "none",
                    }}
                    aria-expanded={dropdownOpen}
                  >
                    {item.label}
                    {/* Chevron */}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      style={{
                        transition: "transform 0.25s ease",
                        transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.7,
                      }}
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke={scrolled ? "#3f6e4b" : "rgba(255,255,255,0.88)"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* Underline */}
                    <span
                      className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{
                        backgroundColor: scrolled ? "#3f6e4b" : "#b4caad",
                      }}
                    />
                  </button>

                  {/* Dropdown Panel */}
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      minWidth: "196px",
                      background: "rgba(244,239,228,0.98)",
                      backdropFilter: "blur(16px)",
                      borderRadius: "10px",
                      boxShadow: "0 8px 32px rgba(26,46,30,0.13), 0 1px 0 rgba(63,110,75,0.08)",
                      border: "1px solid rgba(63,110,75,0.10)",
                      padding: "6px 0",
                      opacity: dropdownOpen ? 1 : 0,
                      pointerEvents: dropdownOpen ? "auto" : "none",
                      transform: dropdownOpen
                        ? "translateX(-50%) translateY(0)"
                        : "translateX(-50%) translateY(-6px)",
                      transition: "opacity 0.22s ease, transform 0.22s ease",
                      zIndex: 100,
                    }}
                  >
                    {/* Arrow tip */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-5px",
                        left: "50%",
                        transform: "translateX(-50%) rotate(45deg)",
                        width: "9px",
                        height: "9px",
                        background: "rgba(244,239,228,0.98)",
                        border: "1px solid rgba(63,110,75,0.10)",
                        borderBottom: "none",
                        borderRight: "none",
                        borderRadius: "2px 0 0 0",
                      }}
                    />
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setDropdownOpen(false)}
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "0.78rem",
                          letterSpacing: "0.05em",
                          color: "#3f6e4b",
                          fontWeight: 400,
                          textDecoration: "none",
                          borderBottom:
                            i < item.dropdown.length - 1
                              ? "1px solid rgba(63,110,75,0.08)"
                              : "none",
                          transition: "background 0.15s ease, color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background =
                            "rgba(63,110,75,0.07)";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#2a5035";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                          (e.currentTarget as HTMLAnchorElement).style.color = "#3f6e4b";
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 group transition-colors duration-200"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    color: scrolled ? "#3f6e4b" : "rgba(255,255,255,0.88)",
                    fontWeight: 400,
                  }}
                >
                  {item.label}
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{
                      backgroundColor: scrolled ? "#3f6e4b" : "#b4caad",
                    }}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-px w-6 transition-all duration-300 origin-center"
                style={{
                  backgroundColor: scrolled ? "#3f6e4b" : "white",
                  transform:
                    menuOpen && i === 0
                      ? "rotate(45deg) translate(3px, 3px)"
                      : menuOpen && i === 1
                      ? "scaleX(0)"
                      : menuOpen && i === 2
                      ? "rotate(-45deg) translate(3px, -3px)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500 flex flex-col"
        style={{
          backgroundColor: "#f4efe4",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        {/* Decorative arch */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 300 500" width="300" fill="none">
            <path
              d="M60 500 L60 200 Q60 40 180 40 Q300 40 300 200 L300 500"
              stroke="#3f6e4b"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-center h-full px-10 pt-24 pb-12 gap-2">
          {navItems.map((item, i) =>
            item.dropdown ? (
              <div key={item.href}>
                {/* Accordion trigger */}
                <button
                  onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                  className="w-full flex items-center justify-between py-4 border-b transition-colors duration-200"
                  style={{
                    borderColor: "rgba(63,110,75,0.12)",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    color: "#3f6e4b",
                    letterSpacing: "-0.01em",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(63,110,75,0.12)",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                  <svg
                    width="18"
                    height="11"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transition: "transform 0.25s ease",
                      transform: mobileEventsOpen ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                      marginLeft: "12px",
                    }}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#3f6e4b"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Accordion children */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: mobileEventsOpen ? "300px" : "0",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        paddingLeft: "16px",
                        borderBottom: "1px solid rgba(63,110,75,0.07)",
                        fontFamily: "Georgia, 'Times New Roman', serif",
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        color: "#5a8a68",
                        letterSpacing: "0.01em",
                        textDecoration: "none",
                      }}
                    >
                      — {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b transition-colors duration-200"
                style={{
                  borderColor: "rgba(63,110,75,0.12)",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "#3f6e4b",
                  letterSpacing: "-0.01em",
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                {item.label}
              </Link>
            )
          )}

          <p
            className="mt-6 text-center text-xs tracking-widest uppercase"
            style={{
              color: "#b29a7d",
              fontFamily: "Georgia, serif",
              letterSpacing: "0.2em",
            }}
          >
            Casablanca Velodrome
          </p>
        </div>
      </div>
    </>
  );
}
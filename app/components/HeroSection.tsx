"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg.mp4"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1e]/75 via-[#1a2e1e]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1e]/65 via-transparent to-transparent" />

      {/* Decorative arch SVG */}
      <div className="absolute right-0 top-0 h-full w-1/2 z-10 pointer-events-none opacity-10">
        <svg
          viewBox="0 0 500 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto ml-auto"
        >
          <path
            d="M100 900 L100 350 Q100 100 300 100 Q500 100 500 350 L500 900"
            stroke="#b4caad"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M150 900 L150 370 Q150 150 300 150 Q450 150 450 370 L450 900"
            stroke="#b4caad"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-5xl">
        {/* Tag line */}
        <div className="mb-6 inline-flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-8 h-px bg-[#b4caad]" />
          <span
            className="text-[#b4caad] uppercase tracking-[0.28em] text-xs"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The Garden Corner · Vélodrome, Casablanca
          </span>
        </div>

        {/* Main title */}
        <h1
          className="text-white mb-4 animate-fade-up"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            fontWeight: 400,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(244,239,228,0.6)",
            animationDelay: "0.2s",
          }}
        >
          Bienvenue au
        </h1>

        <h2
          className="animate-fade-up"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 400,
            color: "#f4efe4",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            marginBottom: "1.5rem",
            animationDelay: "0.28s",
          }}
        >
          Garden<br />
          <span style={{ color: "#b4caad" }}>Corner</span>
        </h2>

        {/* Divider */}
        <div
          className="animate-fade-up"
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: "#b4caad",
            marginBottom: "1.5rem",
            animationDelay: "0.38s",
          }}
        />

        {/* Subtext */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            fontWeight: 300,
            color: "rgba(244,239,228,0.75)",
            maxWidth: "440px",
            lineHeight: 1.8,
            letterSpacing: "0.01em",
            animationDelay: "0.45s",
          }}
        >
          Trois restaurants, trois façons de se régaler du matin au soir.
        </p>
      </div>

      {/* Vertical brand text — desktop only */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center gap-3">
        <span
          className="text-white/20 uppercase tracking-[0.35em] text-[0.6rem]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "Georgia, serif",
          }}
        >
          Garden Corner · Vélodrome, Casablanca
        </span>
        <span className="w-px h-20 bg-white/15" />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-up"
        style={{ animationDelay: "0.7s" }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "0.75rem",
            color: "rgba(244,239,228,0.85)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          Découvrir
        </span>

        <div className="scroll-line" />

        {/* Animated arrow down */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="arrow-bounce"
        >
          <path
            d="M2 5L8 11L14 5"
            stroke="rgba(244,239,228,0.85)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease both;
        }

        @keyframes scroll-drop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(180,202,173,0.6), transparent);
          animation: scroll-drop 1.8s ease infinite;
        }

        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0);   opacity: 0.85; }
          50%       { transform: translateY(5px); opacity: 1; }
        }
        .arrow-bounce {
          animation: arrow-bounce 1.8s ease infinite;
        }
      `}</style>
    </section>
  );
}
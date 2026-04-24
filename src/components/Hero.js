"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        padding: "140px 24px 40px",
        maxWidth: "720px",
        margin: "0 auto",
      }}
    >
      <div
        className="hero-row"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        <div style={{ position: "relative", width: "96px", height: "96px", flexShrink: 0 }}>
          <div
            style={{
              position: "absolute",
              top: "-4px",
              left: "-4px",
              width: "20px",
              height: "20px",
              borderTop: "2px solid var(--accent)",
              borderLeft: "2px solid var(--accent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              right: "-4px",
              width: "20px",
              height: "20px",
              borderBottom: "2px solid var(--accent)",
              borderRight: "2px solid var(--accent)",
            }}
          />
          <Image
            src="/avatargoku.jpg"
            width={96}
            height={96}
            alt="Giancarlo Brusca"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(30%)",
            }}
          />
        </div>

        <h1
          className="glitch"
          data-text="hola, soy gian."
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--text)",
            margin: 0,
          }}
        >
          hola, soy gian.
        </h1>
      </div>

      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Buenos Aires · 34°36&apos;S 58°22&apos;W
      </span>

      <style jsx>{`
        @media (max-width: 600px) {
          .hero-row {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

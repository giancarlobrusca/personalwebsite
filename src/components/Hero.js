"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "120px 60px 60px",
        gap: "60px",
      }}
      className="hero"
    >
      {/* Left column */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "var(--accent)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Buenos Aires, Argentina
          </span>
        </div>

        <h1
          className="glitch"
          data-text="Giancarlo"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "8px",
            color: "var(--text)",
          }}
        >
          Giancarlo
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "var(--text)",
          }}
        >
          Brusca
        </h1>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            fontWeight: 300,
            color: "var(--muted)",
            marginBottom: "24px",
            letterSpacing: "0.05em",
          }}
        >
          Frontend Lead · Builder · Escritor
        </p>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: "480px",
          }}
        >
          Diseño y construyo productos digitales. Me interesan la IA, los
          agentes, la robótica y la escritura. Siempre haciendo cosas.
        </p>
      </div>

      {/* Right column */}
      <div
        className="hero-right"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "32px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--muted)",
            writingMode: "vertical-rl",
            letterSpacing: "0.15em",
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          34°36&apos;S · 58°22&apos;W
        </span>

        {/* Avatar with decorative frame */}
        <div style={{ position: "relative", width: "280px", height: "280px" }}>
          {/* Top-left corner */}
          <div
            style={{
              position: "absolute",
              top: "-8px",
              left: "-8px",
              width: "40px",
              height: "40px",
              borderTop: "2px solid var(--accent)",
              borderLeft: "2px solid var(--accent)",
            }}
          />
          {/* Bottom-right corner */}
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              right: "-8px",
              width: "40px",
              height: "40px",
              borderBottom: "2px solid var(--accent)",
              borderRight: "2px solid var(--accent)",
            }}
          />
          <Image
            src="/avatargoku.jpg"
            width={280}
            height={280}
            alt="Giancarlo Brusca"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(30%)",
            }}
          />
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "var(--accent)",
              }}
            >
              ∞
            </div>
            <div style={{ color: "var(--muted)", marginTop: "4px" }}>ideas</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "var(--accent)",
              }}
            >
              5+
            </div>
            <div style={{ color: "var(--muted)", marginTop: "4px" }}>
              lanzados
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "var(--accent)",
              }}
            >
              3
            </div>
            <div style={{ color: "var(--muted)", marginTop: "4px" }}>
              en progreso
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr !important;
            padding: 100px 24px 40px !important;
          }
          .hero-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

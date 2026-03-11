"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      window.open(
        `https://giancarlobrusca.substack.com/subscribe?email=${encodeURIComponent(email)}`,
        "_blank"
      );
    }
  };

  return (
    <section
      id="newsletter"
      style={{
        backgroundColor: "var(--bg2)",
        padding: "80px 60px",
      }}
    >
      <div
        className="newsletter-grid fade-in"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            // Newsletter
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "2.5rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--text)",
              marginTop: "8px",
              marginBottom: "16px",
            }}
          >
            Ideas sueltas
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.8,
            }}
          >
            De vez en cuando escribo sobre cosas que se me ocurren, me interesan
            o que estoy aprendiendo. Textos más personales, sin calendario fijo.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            style={{
              flex: 1,
              padding: "14px 20px",
              backgroundColor: "transparent",
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              outline: "none",
            }}
          />
          <button
            onClick={handleSubscribe}
            style={{
              padding: "14px 28px",
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
              fontFamily: "var(--font-display)",
              fontSize: "0.8rem",
              fontWeight: 700,
              border: "none",
              cursor: "none",
              letterSpacing: "0.05em",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Suscribirse
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

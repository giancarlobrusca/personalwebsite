"use client";

const links = [
  { label: "Twitter", url: "https://x.com/gianc4_" },
  { label: "Email", url: "mailto:giancarlobrusca@gmail.com" },
  { label: "Instagram", url: "https://instagram.com/giancarlobrusca" },
];

export default function Contact() {
  return (
    <div style={{ padding: "80px 60px" }}>
      <div
        className="contact-grid fade-in"
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
            // Contacto
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--text)",
              marginTop: "8px",
              lineHeight: 1.2,
            }}
          >
            Hablemos de
            <br />
            tu próximo proyecto
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
                borderBottom: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                color: "var(--text)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.querySelector(".arrow").style.transform =
                  "translate(4px, -4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.querySelector(".arrow").style.transform =
                  "translate(0, 0)";
              }}
            >
              {link.label}
              <span
                className="arrow"
                style={{
                  transition: "transform 0.2s ease",
                }}
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

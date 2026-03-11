"use client";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background:
          "linear-gradient(to bottom, var(--bg) 0%, var(--bg) 50%, transparent 100%)",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--accent)",
          fontSize: "1.2rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        GB
      </a>
      <div className="nav-links" style={{ display: "flex", gap: "32px" }}>
        <a href="#apps" style={{ navLink }}>
          apps
        </a>
        <a href="#writing" style={{ navLink }}>
          escritura
        </a>
        <a href="#newsletter" style={{ navLink }}>
          newsletter
        </a>
        <a href="#contact" style={{ navLink }}>
          contacto
        </a>
      </div>
      <style jsx>{`
        .nav-links a {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--muted);
          transition: color 0.2s ease;
          letter-spacing: 0.02em;
        }
        .nav-links a:hover {
          color: var(--text);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

const navLink = {};

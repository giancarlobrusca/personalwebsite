"use client";

const apps = [
  {
    name: "Angelos",
    status: "En construcción",
    desc: "App de newsletters con IA. Agrega, filtra y personaliza tu consumo de información.",
    tags: ["TypeScript", "Node.js", "Claude API", "RSS"],
    url: null,
  },
  {
    name: "Trucazo",
    status: "Live",
    desc: "Prototipo jugable del truco argentino con mecánicas de cartas tipo Balatro.",
    tags: ["Web", "Juego", "Truco"],
    url: null,
  },
  {
    name: "AGSM",
    status: "Archivo · 2023",
    desc: "Archivo General Sergio Massa. Primera cuenta de Twitter con IA en una elección presidencial. 10k seguidores en una semana. NYT.",
    tags: ["IA", "Twitter", "Política"],
    url: null,
  },
];

function StatusBadge({ status }) {
  const isLive = status === "Live";
  const isBuilding = status === "En construcción";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        color: isLive
          ? "var(--accent)"
          : isBuilding
          ? "var(--accent2)"
          : "var(--muted)",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: isLive
            ? "var(--accent)"
            : isBuilding
            ? "var(--accent2)"
            : "var(--muted)",
          animation: isLive || isBuilding ? "pulse 2s infinite" : "none",
        }}
      />
      {status}
    </span>
  );
}

function AppCard({ app }) {
  return (
    <div
      className="app-card"
      style={{
        position: "relative",
        padding: "32px",
        backgroundColor: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        overflow: "hidden",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--bg2)";
        e.currentTarget.querySelector(".accent-bar").style.transform =
          "scaleX(1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--bg)";
        e.currentTarget.querySelector(".accent-bar").style.transform =
          "scaleX(0)";
      }}
    >
      <div
        className="accent-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "var(--accent)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        }}
      />
      <StatusBadge status={app.status} />
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--text)",
        }}
      >
        {app.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          fontWeight: 300,
          color: "var(--muted)",
          lineHeight: 1.6,
        }}
      >
        {app.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {app.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              padding: "4px 10px",
              letterSpacing: "0.05em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function PlaceholderCard() {
  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        minHeight: "200px",
      }}
    >
      <span
        style={{
          fontSize: "2rem",
          color: "var(--border)",
          fontFamily: "var(--font-display)",
        }}
      >
        +
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--muted)",
        }}
      >
        Próximamente
      </span>
    </div>
  );
}

export default function AppsGrid() {
  return (
    <div style={{ padding: "80px 60px" }}>
      <div
        className="fade-in"
        style={{ marginBottom: "48px" }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {"// Proyectos"}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2.5rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--text)",
            marginTop: "8px",
          }}
        >
          Apps & Experimentos
        </h2>
      </div>
      <div
        className="apps-grid fade-in"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          backgroundColor: "var(--border)",
        }}
      >
        {apps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
        <PlaceholderCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .apps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function Marquee() {
  const content =
    "Frontend Lead ✦ Builder ✦ AI/Agentes ✦ Escritura ✦ Robótica ✦ Producto ✦ Buenos Aires ✦ Open Source ✦ ";

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "20px 0",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 20s linear infinite",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "var(--muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            paddingRight: "2rem",
          }}
        >
          {content}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "var(--muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            paddingRight: "2rem",
          }}
        >
          {content}
        </span>
      </div>
    </div>
  );
}

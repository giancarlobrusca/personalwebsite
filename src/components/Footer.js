export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 60px",
        borderTop: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        color: "var(--muted)",
      }}
    >
      <span>© {new Date().getFullYear()} Giancarlo Brusca</span>
      <span>Hecho a mano · con ideas propias</span>
    </footer>
  );
}

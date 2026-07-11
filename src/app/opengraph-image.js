import { ImageResponse } from "next/og";

export const alt = "Giancarlo Brusca — Frontend Lead desde Buenos Aires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a08",
          color: "#e8e4d9",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#6b6860",
          }}
        >
          Buenos Aires · 34°36′S 58°22′W
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 700,
              lineHeight: 1,
              color: "#e8e4d9",
            }}
          >
            Giancarlo Brusca
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: 44,
              color: "#c8f04a",
            }}
          >
            Frontend Lead · builder · escritor
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#6b6860",
          }}
        >
          <span>giancarlobrusca.com</span>
          <span style={{ color: "#c8f04a" }}>@giancarlobrusca</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

import { Playfair_Display, IBM_Plex_Mono, Unbounded } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Giancarlo Brusca",
  description: "Frontend Lead, builder y escritor desde Buenos Aires.",
  icons: {
    icon: "favicongoku.png",
  },
  openGraph: {
    title: "Giancarlo Brusca",
    description: "Frontend Lead, builder y escritor desde Buenos Aires.",
    url: "https://giancarlobrusca.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${ibmMono.variable} ${unbounded.variable}`}
    >
      <body>
        {/* Noise overlay */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 9997,
            pointerEvents: "none",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          }}
        />
        {children}
      </body>
    </html>
  );
}

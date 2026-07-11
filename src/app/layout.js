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

const SITE_URL = "https://giancarlobrusca.com";
const TITLE = "Giancarlo Brusca";
const DESCRIPTION =
  "Frontend Lead, builder y escritor desde Buenos Aires. Lidero equipos de frontend, mobile y data; host de SLA, el primer new media argentino.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Giancarlo Brusca",
  },
  description: DESCRIPTION,
  keywords: [
    "Giancarlo Brusca",
    "Frontend Lead",
    "desarrollador frontend",
    "React",
    "Next.js",
    "Buenos Aires",
    "Argentina",
    "SLA",
    "421.news",
    "inteligencia artificial",
  ],
  authors: [{ name: "Giancarlo Brusca", url: SITE_URL }],
  creator: "Giancarlo Brusca",
  publisher: "Giancarlo Brusca",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicongoku.png",
    shortcut: "/favicongoku.png",
    apple: "/favicongoku.png",
  },
  openGraph: {
    type: "profile",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    locale: "es_AR",
    firstName: "Giancarlo",
    lastName: "Brusca",
    username: "giancarlobrusca",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@giancarlobrusca",
    site: "@giancarlobrusca",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0a0a08",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#giancarlo`,
      name: "Giancarlo Brusca",
      alternateName: "gian",
      url: SITE_URL,
      image: `${SITE_URL}/avatargoku.jpg`,
      email: "giancarlobrusca@gmail.com",
      jobTitle: "Frontend Lead",
      description: DESCRIPTION,
      worksFor: {
        "@type": "Organization",
        name: "Urbetrack",
        url: "https://urbetrack.com/",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Escuela Da Vinci",
        url: "https://davinci.edu.ar/",
      },
      knowsAbout: [
        "Frontend Development",
        "React",
        "JavaScript",
        "Next.js",
        "Full Stack Development",
        "Python",
        "Golang",
        "Artificial Intelligence",
        "UI Design",
        "Web Development",
      ],
      homeLocation: {
        "@type": "Place",
        name: "Buenos Aires, Argentina",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressCountry: "AR",
        },
      },
      sameAs: [
        "https://x.com/giancarlobrusca",
        "https://slatv.live",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "es",
      author: { "@id": `${SITE_URL}/#giancarlo` },
      publisher: { "@id": `${SITE_URL}/#giancarlo` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: TITLE,
      inLanguage: "es",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#giancarlo` },
      mainEntity: { "@id": `${SITE_URL}/#giancarlo` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${ibmMono.variable} ${unbounded.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

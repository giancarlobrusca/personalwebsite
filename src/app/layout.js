import "./globals.css";

export const metadata = {
  title: "giancarlo brusca",
  description: "diseñador web argentino.",
  icons: {
    icon: "logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:title" content="giancarlo brusca" />
      <meta property="og:description" content="diseñador web argentino" />
      <meta
        property="og:image"
        content="https://personalwebsite-azure.vercel.app/logo.png"
      />
      <body>{children}</body>
    </html>
  );
}

export default function manifest() {
  return {
    name: "Giancarlo Brusca",
    short_name: "Giancarlo",
    description:
      "Frontend Lead, builder y escritor desde Buenos Aires.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a08",
    theme_color: "#0a0a08",
    lang: "es",
    icons: [
      {
        src: "/favicongoku.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

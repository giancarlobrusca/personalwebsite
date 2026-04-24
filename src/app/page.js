"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Bio />
      <Footer />
      <Cursor />
    </>
  );
}

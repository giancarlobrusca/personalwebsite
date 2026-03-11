"use client";

import { useEffect } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import AppsGrid from "../components/AppsGrid";
import WritingList from "../components/WritingList";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

export default function Home() {
  // IntersectionObserver for fade-in animations
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
      <Marquee />
      <section id="apps">
        <AppsGrid />
      </section>
      <section id="writing">
        <WritingList />
      </section>
      <Newsletter />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Cursor />
    </>
  );
}

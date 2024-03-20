"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaXTwitter } from "react-icons/fa6";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <AnimatedCursor
        color="0,0,0"
        innerSize={8}
        outerSize={35}
        innerScale={2}
        outerScale={3}
        outerAlpha={1}
        outerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        clickables={["h1", "a"]}
      />
      <Main>
        <div />
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              color: clicked ? "black" : "white",
              transition: "all 0.3s ease-in-out",
            }}
            onClick={() => setClicked((current) => !current)}
          >
            giancarlo brusca.
          </h1>
          <h2
            style={{
              color: clicked ? "darkgray" : "#131313",
              transition: "all 0.3s ease-in-out",
            }}
          >
            frontend developer
          </h2>
        </div>
        <Socials
          style={{
            color: clicked ? "black" : "white",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <li>
            <a href="https://twitter.com/giancarlobrusca">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="mailto:giancarlobrusca@gmail.com">
              <FaEnvelope />
            </a>
          </li>
        </Socials>
      </Main>
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{
              backgroundColor: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 60,
              opacity: 0,
              zIndex: 0,
            }}
            animate={{ opacity: 1, width: "100vw", height: "100vh" }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!clicked && (
          <motion.div
            initial={{
              backgroundColor: "black",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 60,
              opacity: 0,
              zIndex: 0,
            }}
            animate={{ opacity: 1, width: "100vw", height: "100vh" }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const Main = styled.main`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  z-index: 1;
`;

const Socials = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  font-size: 1em;
  margin-bottom: 50px;
`;

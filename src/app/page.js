"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import AvailableSector from "../components/AvailableSection";
import Works from "../components/Works";
import Contact from "../components/Contact";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  const matches = useMediaQuery("(max-width: 750px)");

  const [clicked, setClicked] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      {!matches && (
        <AnimatedCursor
          color="0,0,0"
          innerSize={8}
          outerSize={35}
          innerScale={2}
          outerScale={5}
          outerAlpha={1}
          outerStyle={{
            backgroundColor: "#fff",
            mixBlendMode: "exclusion",
          }}
          clickables={["h1", "a", "button"]}
        />
      )}
      <Header
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
          padding: 50,
        }}
        style={{ color: clicked ? "black" : "white" }}
      >
        <div>
          <img src="logo.png" alt="My Logo" />
          v0.1.0 - 2024
        </div>
        <div>ARG</div>
        <AvailableSector />
      </Header>
      <main>
        <Name
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          clicked={clicked}
          onClick={() => setClicked((current) => !current)}
        >
          giancarlo brusca.
        </Name>
        <Presentation
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          clicked={clicked}
        >
          creando webs para <del>pagar el alquiler</del> divertirme y ser feliz.
        </Presentation>
        <Socials
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            color: clicked ? "black" : "white",
          }}
        >
          <li>
            <a href="https://github.com/giancarlobrusca">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/giancarlobrusca">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="https://read.cv/giancarlobrusca">
              <PiReadCvLogoFill />
            </a>
          </li>
          {/* <li>
            <a onClick={() => setOpenContact((current) => !current)}>
              <FaEnvelope />
            </a>
          </li> */}
        </Socials>
        <Works clicked={clicked} />
        <Contact open={openContact} setOpenContact={setOpenContact} />
      </main>
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{
              backgroundColor: "white",
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 60,
              opacity: 0,
              zIndex: 0,
            }}
            animate={{
              top: "50%",
              opacity: 1,
              width: "100vw",
              height: "100vh",
              borderRadius: 0,
            }}
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
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 60,
              opacity: 0,
              zIndex: 0,
            }}
            animate={{
              top: "50%",
              opacity: 1,
              width: "100vw",
              height: "100vh",
              borderRadius: 0,
            }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const Header = styled(motion.header)`
  font-family: "Cutive Mono", monospace;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  transition: 0.5s ease-in;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  img {
    width: 50px;
    border-radius: 60px;
  }

  @media (max-width: 750px) {
    img {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Name = styled(motion.h1)`
  max-width: 100px;
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 8em;
  color: ${({ clicked }) => (clicked ? "black" : "white")};
  transition: all 0.5s ease-in-out;
  z-index: 1;

  @media (max-width: 750px) {
    font-size: 4em;
    top: 40%;
  }
`;

const Presentation = styled(motion.p)`
  max-width: 120px;
  font-size: 1.5em;
  text-align: right;
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ clicked }) => (clicked ? "black" : "white")};
  z-index: 1;

  @media (max-width: 750px) {
    max-width: 80%;
    top: 60%;
  }
`;

const Socials = styled(motion.ul)`
  position: absolute;
  right: 50px;
  bottom: 50px;
  list-style: none;
  display: flex;
  gap: 50px;
  font-size: 2em;
  transition: all 0.5s ease-in-out;
  z-index: 1;
`;

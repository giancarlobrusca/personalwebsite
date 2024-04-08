import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import styled from "styled-components";

export default function Works({ clicked }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setOpen((current) => !current)}
        style={{ color: clicked ? "black" : "white" }}
      >
        works
      </Button>
      <AnimatePresence>
        {open && (
          <WorksPanel
            initial={{ left: -1000 }}
            animate={{ left: 0 }}
            exit={{ left: -1000 }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <button>
              <FaX
                onClick={() => setOpen((current) => !current)}
                style={{
                  position: "absolute",
                  top: 50,
                  right: 50,
                  fontSize: "2em",
                }}
              />
            </button>
            <WorksList>
              <li>
                <a href="https://pasarlabien.club/" target="_blank">
                  pasarlabien.club
                </a>
              </li>
              <li>
                <a href="https://juanruocco.com/" target="_blank">
                  juanruocco.com
                </a>
              </li>
              <li>
                <a href="https://www.magaiba.xyz/" target="_blank">
                  magaiba.xyz
                </a>
              </li>
            </WorksList>
          </WorksPanel>
        )}
      </AnimatePresence>
    </>
  );
}

const WorksPanel = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1000px;
  height: 100vh;
  border-right: 2px solid white;
  background: black;
  z-index: 2;

  button {
    color: white;
    border: none;
    background: transparent;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const WorksList = styled.ul`
  list-style: none;
  font-size: 3em;

  li {
    margin-top: 50px;
  }

  @media (max-width: 750px) {
    font-size: 2em;
  }
`;

const Button = styled(motion.button)`
  position: absolute;
  left: 50px;
  bottom: 50px;
  border: none;
  background: transparent;
  font-family: "Cutive Mono", monospace;
  font-size: 1.6em;
  z-index: 1;
`;

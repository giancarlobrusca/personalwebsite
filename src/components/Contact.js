import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import styled from "styled-components";

export default function Contact({ open, setOpenContact }) {
  return (
    <AnimatePresence>
      {open && (
        <ContactPanel
          initial={{ right: -1000 }}
          animate={{ right: 0 }}
          exit={{ right: -1000 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <button>
            <FaX
              onClick={() => setOpenContact((current) => !current)}
              style={{
                position: "absolute",
                top: 50,
                left: 50,
                fontSize: "2em",
              }}
            />
          </button>
          <ContactForm>
            <span>contact</span>
            <input required type="text" placeholder="name" />
            <input required type="text" placeholder="mail" />
            <input required type="text" placeholder="message" />
            <button>send</button>
          </ContactForm>
        </ContactPanel>
      )}
    </AnimatePresence>
  );
}

const ContactPanel = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 1000px;
  height: 100vh;
  border-left: 2px solid white;
  background: black;
  z-index: 2;

  button {
    color: white;
    border: none;
    background: transparent;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    text-align: center;
    font-size: 2em;
    margin-bottom: 50px;
  }

  input {
    color: white;
    font-size: 1em;
    width: 500px;
    padding: 20px;
    border: 2px solid white;
    background-color: black;
  }

  button {
    margin-top: 50px;
    font-size: 2em;
  }
`;

import { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function AvailableSection() {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper
      href="mailto:giancarlobrusca@gmail.com"
      rel="noreferrer"
      target="_blank"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && <HoverMessage>escribime!</HoverMessage>}
      <GreenDot />
      <div>disponible</div>
    </Wrapper>
  );
}

const HoverMessage = styled.span``;

const blinkAnimation = keyframes`
from, to {
    opacity: 0;
}
50% {
    opacity: 1;
}
`;

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GreenDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 60px;
  background-color: lightgreen;
  animation: 1s ${blinkAnimation} ease infinite;
`;

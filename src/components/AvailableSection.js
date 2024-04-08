import styled from "styled-components";
import { keyframes } from "styled-components";

export default function AvailableSection() {
  return (
    <Wrapper>
      <GreenDot />
      <div>disponible</div>
    </Wrapper>
  );
}

const blinkAnimation = keyframes`
from, to {
    opacity: 0;
}
50% {
    opacity: 1;
}
`;

const Wrapper = styled.div`
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

import React from "react";
import styled from "styled-components";

function WaveBackgound2() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/modify-wave1.svg"
        style={{ top: "50px", filter: "blur(60px)" }}
      />
      <BottomWave
        src="/images/waves/modify-wave2.svg"
        style={{ top: "600px", filter: "blur(0px)" }}
      />
    </Wrapper>
  );
}

export default WaveBackgound2;

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;

  /* fix background issues for large screen size */
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url("/images/waves/modify-wave2-dark.svg");
  }
`;

const Background = styled.div`
  background: linear-gradient(
    115.82deg,
    rgba(0, 35, 123, 0.7) 0%,
    rgba(235, 119, 118, 0.9) 93.65%
  );
  /* don't forget position bc parent wrapper is relative */
  position: absolute;
  /* don't forget to set size */
  width: 100%;
  height: 1080px;
  z-index: -1;
`;

import React from "react";
import styled from "styled-components";

const OvalBackground1 = () => {
  return (
    <Wrapper>
      <Background />
      <Oval
        src="/images/ovals/oval-bright1.svg"
        alt="background img"
        style={{ left: "00px" }}
      />
      <Oval
        src="/images/ovals/oval-dark2.svg"
        alt="background img 2"
        style={{ right: "00px" }}
      />
    </Wrapper>
  );
};

export default OvalBackground1;

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  background: linear-gradient(158.45deg, #fdd2bf 22.65%, #012443 100%);
  position: absolute;
  width: 100%;
  height: 1024px;
  z-index: -1;
`;

const Oval = styled.img`
  position: absolute;
  z-index: -1;
`;

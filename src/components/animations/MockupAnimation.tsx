import React from "react"
import styled from "styled-components"

function MockupAnimation() {
  return (
    <Wrapper>
      {/* mockups for future real pics replacement */}
      {/* <div className="mockup1"></div> */}
      <div className="mockup1" />
    </Wrapper>
  )
}

export default MockupAnimation

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    transform: scale(0.56);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.5);
    transform-origin: top left;
  }

  .mockup1 {
    /* mockup1 copied from Figma */
    position: absolute;
    width: 661px;
    height: 496px;
    left: 0px;
    top: 0px;
    background: url("/images/animations/computer-herosection.svg");
    backdrop-filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
  }

  & {
    transition: 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    filter: brightness(130%);
  }
`

import React from "react";
import styled from "styled-components";

const Button4AddRemove = (props) => {
  return (
    <Button type="button" onClick={props.onClick}>
      {props.title}
    </Button>
  );
};

export default Button4AddRemove;

const Button = styled.button`
  max-width: 200px;
  height: 33px;
  margin: 0px 30px 0 0;

  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  /* backdrop-filter: blur(40px); */
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  font-size: 15px;
  line-height: 130%;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  /* background: transparent; */
  padding: 0px 20px;

  & {
    transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  :hover {
    /* filter: hue-rotate(10deg) brightness(150%) saturate(150%); */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transform: scale(1.02);
    color: rgba(255, 255, 255, 0.95);
  }
`;

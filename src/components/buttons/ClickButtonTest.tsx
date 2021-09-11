import React from "react";
import styled from "styled-components";

const ButtonComponent = (props) => {
  const { title } = props;
  return (
    <div>
      <Button value={title} />
    </div>
  );
};

export default ButtonComponent;

const Button = styled.input`
  width: auto;
  height: 33px;
  margin: 5px 10px;

  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  font-size: 15px;
  line-height: 130%;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  /* background: transparent; */
  padding: 0px 10px;

  & {
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  :hover {
    /* filter: hue-rotate(10deg) brightness(150%) saturate(150%); */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

import React from "react";
import styled from "styled-components";

const SubmitButton = (props) => {
  const { title } = props;
  return (
    <>
      <Button type="submit" value={title} />
    </>
  );
};

export default SubmitButton;

const Button = styled.input`
  /* display: block; */
  margin: 0px 16px 0 16px;
  padding: 12px 0;

  /* position: static; */
  width: 160px;
  height: 44px;

  background: linear-gradient(270deg, #d90068 0%, rgba(0, 28, 129, 0.9) 100%);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  border: none;

  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;

  & {
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-delay: 0.1s;
  }

  :hover {
    filter: hue-rotate(10deg) brightness(110%) saturate(110%);
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.3);
  }
`;

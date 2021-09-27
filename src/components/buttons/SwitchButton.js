import React from "react";
import styled from "styled-components";

const SwitchButton = (props) => {
  return (
    <Button type="button" onClick={props.onClick}>
      {props.title || "Switch"}
    </Button>
  );
};

export default SwitchButton;

const Button = styled.button`
  /* background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%); */
  background: transparent;
  margin: 10px;
  padding: 12px 24px;
  max-width: 400px;
  /* border: none; */
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  border: 1px solid #000000;
  text-align: center;
  /* box-sizing: border-box; */

  & {
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  :focus {
    outline: none;
  }
  :hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transform: scale(1.05);
  }
`;

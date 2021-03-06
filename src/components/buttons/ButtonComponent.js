import React from "react";
import styled from "styled-components";

const ButtonComponent = (props) => {
  const { title } = props;
  return (
    <div>
      <Button>{title}</Button>
    </div>
  );
};

export default ButtonComponent;

const Button = styled.button`
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
`;

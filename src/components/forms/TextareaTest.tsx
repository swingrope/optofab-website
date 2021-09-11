import React from "react";
import styled from "styled-components";

const TextareaTest = (props) => {
  const { placeholder } = props;
  return (
    <Wrapper>
      <Icon src="/images/smallicons/courses.svg" />
      <Textarea placeholder={placeholder || "Enter here..."} />
    </Wrapper>
  );
};

export default TextareaTest;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 28px auto;
  padding: 10px;
  margin: 5px 10px;

  width: 520px;
  height: 100px;

  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;

const Icon = styled.img``;

const Textarea = styled.textarea`
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  /* get rid of input border */
  border: 0;
  /* no border highlight when typing */
  outline: none;
`;

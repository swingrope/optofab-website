import React from "react";
import styled from "styled-components";

const BasicInputTest = (props) => {
  const { label, width, placeholder } = props;
  return (
    <Wrapper>
      <Label>{label || "Input"}</Label>
      <Input style={{ maxWidth: width }} placeholder={placeholder} />
    </Wrapper>
  );
};

export default BasicInputTest;

const Wrapper = styled.div`
  display: grid;
  /* use minmax to set a range */
  grid-template-columns: minmax(50px, 200px) auto;
  align-items: center;
  margin: 10px;
`;

const Label = styled.label`
  font-weight: normal;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input`
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  margin: 0 10px;
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  /* background: transparent; */
  padding: 0px 10px;
  max-width: 180px;
  height: 33px;
  /* border: 1px solid #949494; */
  border: 0.5px solid rgba(255, 255, 255, 0.3);

  box-sizing: border-box;
  border-radius: 4px;
`;

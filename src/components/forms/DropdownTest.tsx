import React from "react";
import styled from "styled-components";
import { MediumText } from "../styles/TextStyles";

const DropdownTest = (props) => {
  const { name, ...options } = props;
  console.log(options);
  return (
    <Wrapper>
      <Select name={name} id={name + "select"}>
        <Option value="">--Please select--</Option>
        {Object.entries(options).map(([key, value], i) => (
          <Option key={i} value={value}>
            {value}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

export default DropdownTest;

const Wrapper = styled.div`
  padding: 5px;
  margin: 2px 10px;
`;

const Select = styled.select`
  /* background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0) 0%,
    rgba(24, 32, 79, 0.1) 100%
  ); */
  max-width: 250px;
  /* border: none; */
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  height: 33px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  padding: 0 10px;
`;

const Option = styled.option``;

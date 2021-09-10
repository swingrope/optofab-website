import React from "react";
import styled from "styled-components";

const DropdownTest = (props) => {
  const { name, ...options } = props;
  console.log(options);
  return (
    <Wrapper>
      <select name={name} id={name + "select"}>
        <option value="">--please select</option>
        {Object.entries(options).map(([key, value], i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default DropdownTest;

const Wrapper = styled.div``;

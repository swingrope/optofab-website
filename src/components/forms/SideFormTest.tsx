import React from "react";
import styled from "styled-components";
import TextareaTest from "./TextareaTest";

const SideForm = (props) => {
  const { descriptionLabel, description, reg, req } = props;

  return (
    <Wrapper>
      <DescriptionLabel>
        {descriptionLabel || "Description of Face"}
      </DescriptionLabel>
      {/* <TextareaWrapper
        {...reg(description, { required: req })}
        placeholder="Leave the description here"
      ></TextareaWrapper> */}
      <TextareaTest
        {...reg(description, { required: req })}
        placeholder="Leave the description here"
      />
    </Wrapper>
  );
};

export default SideForm;

const Wrapper = styled.div``;

const DescriptionLabel = styled.label``;

const TextareaWrapper = styled.input``;

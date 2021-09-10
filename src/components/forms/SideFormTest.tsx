import React from "react";
import styled from "styled-components";

const SideForm = (props) => {
  const { descriptionLabel, description, reg, req } = props;

  return (
    <Wrapper>
      <DescriptionLabel>
        {descriptionLabel || "Description of Face"}
      </DescriptionLabel>
      <TextareaWrapper
        {...reg(description, { required: req })}
        placeholder="Leave the description here"
      ></TextareaWrapper>
    </Wrapper>
  );
};

export default SideForm;

const Wrapper = styled.div``;

const DescriptionLabel = styled.label``;

const TextareaWrapper = styled.input``;

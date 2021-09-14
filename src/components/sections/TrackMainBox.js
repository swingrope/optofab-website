import React from "react";
import styled from "styled-components";
import ButtonComponent from "../buttons/ButtonComponent";
import SearchForm from "../forms/SearchForm";

const TrackFormWrapper = () => {
  return (
    <FormWrapper>
      <SearchWrapper>
        <SearchForm
          icon="/images/smallicons/help.svg"
          placeholder="Order No."
        />
      </SearchWrapper>
    </FormWrapper>
  );
};

export default TrackFormWrapper;

const FormWrapper = styled.div`
  /* Background Blur */
  position: absolute;
  width: 1300px;
  height: 768px;
  left: calc(50% - 1300px / 2);
  top: 166px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`;

const SearchWrapper = styled.div`
  position: absolute;
  left: 420px;
  top: 240px;
`;

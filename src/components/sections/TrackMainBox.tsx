import React from "react";
import styled from "styled-components";
import ButtonComponent from "../buttons/ButtonComponent";
import SearchForm from "../forms/SearchForm";

const TrackFormWrapper = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <FormWrapper>
          <SearchWrapper>
            <SearchForm
              icon="/images/smallicons/help.svg"
              placeholder="Order No."
            />
          </SearchWrapper>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default TrackFormWrapper;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  height: 1080px;
  margin: 0 auto;
  padding: 200px 30px;
`;

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

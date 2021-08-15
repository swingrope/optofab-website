import React from "react";
import styled from "styled-components";
import RequestButton from "../buttons/RequestButton";
import { H1, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Welcome to <br />
            OptoFab Portal Services
          </Title>
          <Description>
            We deliver precision full custom optics, coatings, chips, and
            systems to customer specifications with short lead times and at a
            palatable price to empower researchers, start-ups, and industrial
            users in rapid iterations of experimental setups and/or product
            development cycles. We also aspire to be a focal point for coatings
            expertise, knowledge and information dissemination for the national
            interest.
          </Description>
          <RequestButton title="Make a request" subtitle="free inquiry" />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  background: linear-gradient(158.45deg, #fdd2bf 20%, #012443 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const TextWrapper = styled.div`
  max-width: 720px;
  display: grid;
  gap: 30px;
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
`;

const Description = styled(MediumText)``;

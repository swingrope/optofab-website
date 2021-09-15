import React from "react";
import styled from "styled-components";
import OvalBackground1 from "../components/backgrounds/OvalBackground1";
import SimpleRequestButton from "../components/buttons/SimpleRequestButton";
import { H2 } from "../components/styles/TextStyles";

const SuccessSubmit = () => {
  return (
    <Wrapper>
      <OvalBackground1 />
      <ContentWrapper>
        <MessageWrapper>
          <Message>
            Your form has been sucessfully submmitted! <br />
            We'll contact you soon!
          </Message>
          <ButtonWrapper>
            <SimpleRequestButton
              title="Submit a new one"
              to="/request"
              src="/images/smallicons/pen.svg"
            />
            <SimpleRequestButton
              title="Go to homepage"
              to="/"
              src="/images/smallicons/home.svg"
            />
          </ButtonWrapper>
        </MessageWrapper>
        <SideImageWrapper></SideImageWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SuccessSubmit;

const Wrapper = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 100px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin: 100px;
`;

const SideImageWrapper = styled.div``;

const MessageWrapper = styled.div`
  display: grid;
  gap: 50px;
`;

const Message = styled(H2)`
  color: #fafafa;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

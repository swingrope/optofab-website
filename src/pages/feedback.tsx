import React from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import SidebarCard from "../components/cards/SidebarCard";
import ButtonComponent from "../components/buttons/ButtonComponent";
import SearchForm from "../components/forms/SearchForm";

const RequestPage = () => (
  <>
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <LeftSidebarWrapper>
            <SidebarCard
              title="Feel free to drop us a line and give us your feedback"
              subtitle="We are looking forward to hearing back from you"
              illustration="/images/illustrations/computer-feedback.svg"
            />
          </LeftSidebarWrapper>
          <FeedbackWrapper>
            <TextFormWrapper>
              <Icon src="/images/smallicons/chat.svg" />
              <TextForm placeholder="Leave you feedback here. We’ll get back to you soon." />
            </TextFormWrapper>
            <SubmitWrapper>
              <SearchForm
                icon="/images/smallicons/email.svg"
                placeholder="Email"
                buttonTitle="Submit"
              />
            </SubmitWrapper>
          </FeedbackWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  </>
);

export default RequestPage;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
`;
const ContentWrapper = styled.div`
  /* position: relative; */
  display: grid;
  grid-template-columns: 480px auto;
  max-width: 1234px;
  height: 1080px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const FeedbackWrapper = styled.div`
  display: grid;
  /* place-items: center; */
  gap: 30px;
  max-width: 800px;
  height: 768px;
  padding: 40px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 0px 20px 20px 0px;
`;

const TextFormWrapper = styled.div`
  display: grid;
  height: 600px;
  width: 100%;
  grid-template-columns: 28px auto;
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  padding: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
`;

const LeftSidebarWrapper = styled.div`
  /* position: absolute; */
  /* left: 70px;
  top: 166px; */
`;

const Icon = styled.img``;

const TextForm = styled.textarea`
  height: auto;
  font-size: 15px;
  line-height: 130%;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  /* get rid of input border */
  border: none;
  /* no border highlight when typing */
  outline: none;
  /*  */
  /* resize: none; */
`;

const SubmitWrapper = styled.div`
  margin: 0 0 0 60px;
`;

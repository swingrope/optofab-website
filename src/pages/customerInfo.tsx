import React, { useState } from "react";
import styled from "styled-components";
import SubmitButton from "../components/buttons/SubmitButton";
import BasicInputTest from "../components/forms/BasicInputTest";
import Layout from "../components/layout/layout";
import { themes } from "../components/styles/ColorStyles";
import { H1, H3 } from "../components/styles/TextStyles";

const customerInfo = () => {
  const [sameAdd, setSameAdd] = useState(false);

  const handleClick = () => {
    setSameAdd(!sameAdd);
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <BackgroundBlurWrapper>
            <Title>Customer Information</Title>
            <form>
              <SectionWrapper>
                <SectionTitle>Name Info</SectionTitle>
                <DetailWrapper>
                  <BasicInputTest label="First Name: " width="300px" />
                  <BasicInputTest label="Last Name: " width="300px" />
                  <BasicInputTest label="Company Name: " width="300px" />
                  <BasicInputTest label="Email: " width="300px" />
                </DetailWrapper>
              </SectionWrapper>
              <HrWrapper />
              <SectionWrapper>
                <SectionTitle>Shipping Address</SectionTitle>
                <DetailWrapper>
                  <BasicInputTest label="First Name: " width="300px" />
                  <BasicInputTest label="Last Name: " width="300px" />
                  <BasicInputTest label="Company Name: " width="300px" />
                  <BasicInputTest
                    label="Address"
                    width="400px"
                    placeholder="Line 1"
                  />
                  <BasicInputTest
                    label="Address"
                    width="400px"
                    placeholder="Line 2"
                  />
                  <BasicInputTest label="Country" width="300px" />
                  <BasicInputTest label="State" width="300px" />
                  <BasicInputTest label="City" width="300px" />
                  <BasicInputTest label="Postcode" width="300px" />
                  <CheckboxWrapper>
                    <input
                      type="checkbox"
                      id="checkSameAdd"
                      onClick={handleClick}
                      checked={sameAdd}
                    />
                    <label for="checkSameAdd">
                      Is billing address same as shipping address?
                    </label>
                  </CheckboxWrapper>
                </DetailWrapper>
              </SectionWrapper>
              <HrWrapper />
              {!sameAdd && (
                <SectionWrapper>
                  <SectionTitle>Billing Address</SectionTitle>
                  <DetailWrapper>
                    <BasicInputTest label="First Name: " width="300px" />
                    <BasicInputTest label="Last Name: " width="300px" />
                    <BasicInputTest label="Company Name: " width="300px" />
                    <BasicInputTest
                      label="Address"
                      width="400px"
                      placeholder="Line 1"
                    />
                    <BasicInputTest
                      label="Address"
                      width="400px"
                      placeholder="Line 2"
                    />
                    <BasicInputTest label="Country" width="300px" />
                    <BasicInputTest label="State" width="300px" />
                    <BasicInputTest label="City" width="300px" />
                    <BasicInputTest label="Postcode" width="300px" />
                  </DetailWrapper>
                </SectionWrapper>
              )}
              <SubmitButtonWrapper>
                <SubmitButton title="Submit" onClick={handleSubmit} />
              </SubmitButtonWrapper>
            </form>
          </BackgroundBlurWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default customerInfo;

const Title = styled(H1)`
  /* color: ${themes.dark.text1}; */
  background: linear-gradient(94.87deg, #be1e69 0%, #eb7776 53.11%);
  background-clip: text;
  --webkit-background-clip: text;
  color: transparent;
  margin: 0 0 50px 0;
`;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
`;

const ContentWrapper = styled.div`
  /* position: relative; */
  /* display: grid;
  grid-template-columns: 480px auto; */
  display: grid;
  place-items: center;
  max-width: 1234px;
  height: auto;
  margin: 0 auto;
  padding: 200px 30px;
`;

const BackgroundBlurWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 50px;
  border-radius: 30px;
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 600px;
`;

const SectionTitle = styled(H3)`
  margin: 10px;
`;

const DetailWrapper = styled.div``;

const HrWrapper = styled.hr`
  margin: 15px 0;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const CheckboxWrapper = styled.div`
  margin: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

const SubmitButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  margin: 50px;
`;

import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { v4 as uuid } from 'uuid';
import Layout from "../../../components/layout/layout";
import { MyTextInputSim } from "../fields/MyTextInputSim";
import { Caption2, H1, H3 } from "../../../components/styles/TextStyles";
import {postData} from "../Feedback";
import { createBrowserHistory } from "history";


export const customerInfoInitialValues = {
  sameAsAbove: false,
};

export default function CustomerInfo({ part }) {
  const baseURL =
    "http://localhost:8080/comp8715/optofab-website/backend/api/OrderRequest";
  const [verified, setVerified] = useState(false);
  
  // fill billing information with shipping information
  function fillBilling(values, setFieldValue) {
    values.sameAsAbove = !values.sameAsAbove;

    if (values.sameAsAbove) {
      for (const [key, value] of Object.entries(values)) {
        if (key.endsWith("Shipping")) {
          let name = key.replace("Shipping", "Billing");
          setFieldValue(name, value);
        }
      }
    } else {
      for (const [key] of Object.entries(values)) {
        if (key.endsWith("Billing")) {
          setFieldValue(key, "");
        }
      }
    }
  }

  function handleSubmitForm(values) {
    if (!verified) return;

    let data = { orderNum: uuid(), customerInfo: values };

    for (let i = 1; i < part; i++) {
      let itemName = `part${i}`;
      let item = window.localStorage.getItem(itemName);
      data[itemName] = JSON.parse(item);
    }

    // next is ajax request
    /*fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });*/
    postData(baseURL, data)
        .then((res) => {
          if (res.status === 200) {
            //console.log(res.status);
            const history = createBrowserHistory();
            history.push("success-submit");
            window.location.reload();
          }
        })
        .catch(() => {
          const history = createBrowserHistory();
          history.push("error-submit");
          window.location.reload();
        });

  }

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <Title>Customer Information</Title>
          <Formik
            initialValues={customerInfoInitialValues}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleSubmitForm(values);
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({ handleChange, values, setFieldValue, isSubmitting }) => (
              <FormWrapper>
                <Form>
                  <MyTextInputSim
                    name="firstName"
                    label="First Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="lastName"
                    label="Last Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="companyName"
                    label="Company Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="email"
                    label="Email"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="phoneNumber"
                    label="Phone Number"
                    onChange={handleChange}
                  />

                  <SectionTitle>Shipping Address</SectionTitle>
                  <MyTextInputSim
                    name="firstNameShipping"
                    label="First Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="lastNameShipping"
                    label="Last Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="companyNameShipping"
                    label="Company Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="address1Shipping"
                    label="Address"
                    onChange={handleChange}
                    placeholder="Address Line 1"
                  />
                  <MyTextInputSim
                    name="address2Shipping"
                    label="Address2"
                    onChange={handleChange}
                    placeholder="Address Line 2"
                  />
                  <MyTextInputSim
                    name="countryShipping"
                    label="Country"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="stateShipping"
                    label="State"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="cityShipping"
                    label="City"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="postcodeShipping"
                    label="PostCode"
                    onChange={handleChange}
                  />

                  <SectionTitle>Billing Address</SectionTitle>
                  <label>
                    <PromptWrapper>Same as above?</PromptWrapper>
                    <Field
                      name="sameAsAbove"
                      type="checkbox"
                      onClick={() => fillBilling(values, setFieldValue)}
                    />
                  </label>
                  <MyTextInputSim
                    name="firstNameBilling"
                    label="First Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="lastNameBilling"
                    label="Last Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="companyNameBilling"
                    label="Company Name"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="address1Billing"
                    label="Address"
                    onChange={handleChange}
                    placeholder="Address Line 1"
                  />
                  <MyTextInputSim
                    name="address2Billing"
                    label="Address2"
                    onChange={handleChange}
                    placeholder="Address Line 2"
                  />
                  <MyTextInputSim
                    name="countryBilling"
                    label="Country"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="stateBilling"
                    label="State"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="cityBilling"
                    label="City"
                    onChange={handleChange}
                  />
                  <MyTextInputSim
                    name="postcodeBilling"
                    label="PostCode"
                    onChange={handleChange}
                  />

                  <CaptchaWrapper>
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={() => setVerified(true)}
                    />
                    <FinalSubmitButton type="submit" disabled={isSubmitting}>
                      Submit
                    </FinalSubmitButton>
                  </CaptchaWrapper>
                </Form>
              </FormWrapper>
            )}
          </Formik>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(135deg, #1a2151 10%, #eb7776 90%);
  display: grid;
  place-items: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 30px;
  justify-items: center;
  max-width: 1500px;
  height: 100%;
  padding: 160px 30px;
`;

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 30px;
`;

const Title = styled(H1)`
  /* color: rgba(255, 255, 255, 0.8); */
  color: #be1e69;
  text-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled(H3)`
  color: #0f044c;
  opacity: 0.8;
  margin: 30px 0;
`;

const PromptWrapper = styled(Caption2)`
  display: inline;
  color: #a12568;
`;

const FinalSubmitButton = styled.button`
  margin: 10px;
  padding: 12px 24px;
  width: minmax(200px, 360px);
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  text-transform: uppercase;
  background: linear-gradient(135deg, #d90068 10%, rgba(0, 28, 129, 0.8) 70%);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  border: none;
  & {
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  :hover {
    filter: hue-rotate(15deg) brightness(110%) saturate(110%);
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const CaptchaWrapper = styled.div`
  display: grid;
  justify-items: right;
  gap: 20px;
  margin: 30px 0;
`;

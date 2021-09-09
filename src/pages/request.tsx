import React, { useState } from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import SubmitButton from "../components/buttons/SubmitButton";

const RequestPage = () => {
  const [serviceType, setServiceType] = useState("");
  const serviceTypes = {
    spdt: "SPDT Optic",
    optical: "Optical Coating",
    photonic: "Photonic Coating",
    integrated: "Integrated Optic Chip, Assembly and Others",
  };
  const handleRadioChange = (value) => {
    setServiceType(value);
  };
  return (
    <>
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <form>
              <input
                type="radio"
                value="spdt"
                checked={serviceType === "spdt"}
                onChange={(e) => handleRadioChange(e.target.value)}
              />
              <label>SPDT Optic</label>
              <input
                type="radio"
                value="optical"
                checked={serviceType === "optical"}
                onChange={(e) => handleRadioChange(e.target.value)}
              />
              <label>Optical Coating</label>
              <input
                type="radio"
                value="photonic"
                checked={serviceType === "photonic"}
                onChange={(e) => handleRadioChange(e.target.value)}
              />
              <label>Photonic Coating</label>
              <input
                type="radio"
                value="integrated"
                checked={serviceType === "integrated"}
                onChange={(e) => handleRadioChange(e.target.value)}
              />
              <label>Integrated Optic Chip, Assembly and Others</label>
              <br></br>
              <label>You selected: {serviceTypes[serviceType]}</label>
              {serviceType === "integrated" && (
                <p>
                  <br />
                  For any requests or info about integrated optics and chip
                  assembly please feel free to contact the following:
                  <br />
                  Node Director: A/Prof. Steve Madden <br /> Email:
                  stephen.madden@anu.edu.au <br /> Phone: (02) 612 58574 or 0404
                  932 099
                </p>
              )}
              <SubmitButton title="Submit" />
            </form>
          </ContentWrapper>
        </Wrapper>
      </Layout>
    </>
  );
};

export default RequestPage;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
`;
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`;

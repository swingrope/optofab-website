import React, { useState } from "react";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import SubmitButton from "../components/buttons/SubmitButton";
import DropdownTest from "../components/forms/DropdownTest";
import { BodyMain, H3, MediumText } from "../components/styles/TextStyles";
import TextareaTest from "../components/forms/TextareaTest";
import ClickButtonTest from "../components/buttons/ClickButtonTest";

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
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <BackgroundBlurWrapper>
            <form>
              <SectionWrapper>
                <SectionTitle>Service Type</SectionTitle>
                <DetailWrapper>
                  <InputRadio
                    type="radio"
                    value="spdt"
                    checked={serviceType === "spdt"}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  <Label>SPDT Optic</Label>
                  <InputRadio
                    type="radio"
                    value="optical"
                    checked={serviceType === "optical"}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  <Label>Optical Coating</Label>
                  <InputRadio
                    type="radio"
                    value="photonic"
                    checked={serviceType === "photonic"}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  <Label>Photonic Coating</Label>
                  <InputRadio
                    type="radio"
                    value="integrated"
                    checked={serviceType === "integrated"}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  <Label>Integrated Optic Chip, Assembly and Others</Label>
                </DetailWrapper>
              </SectionWrapper>
              <SectionWrapper>
                <SectionTitle></SectionTitle>
                <DetailWrapper>
                  <Label style={{ color: "black", fontSize: "20px" }}>
                    You selected: {serviceTypes[serviceType]}
                  </Label>
                  {serviceType === "integrated" && (
                    <MediumText>
                      <br />
                      For any requests or info about integrated optics and chip
                      assembly please feel free to contact the following:
                      <br />
                      Node Director: A/Prof. Steve Madden <br /> Email:
                      stephen.madden@anu.edu.au <br /> Phone: (02) 612 58574 or
                      0404 932 099
                    </MediumText>
                  )}
                  {serviceType === "spdt" && (
                    <div>
                      <DropdownWrapper>
                        <Label>Blank source: </Label>
                        <DropdownTest
                          name="blankSourse"
                          option1="ANFF supplied - full custom"
                          option2="Customer supplied"
                        />
                      </DropdownWrapper>
                      <DropdownWrapper>
                        <Label>Material</Label>
                        <DropdownTest
                          name="material"
                          option1="Aluminium"
                          option2="Nickel"
                          option3="Titanium"
                          option4="Copper"
                          option5="ZnSe"
                          option6="CaF2"
                          option7="BaF2"
                          option8="MgF2"
                          option9="Silicon"
                          option10="Germanium"
                          option11="PMMA"
                          option12="Polycarbonate"
                          option13="Vespel"
                          option14="Nylon"
                          option15="Delrin"
                          option16="PTFE"
                        />
                      </DropdownWrapper>
                      <HrLine />
                    </div>
                  )}
                </DetailWrapper>
              </SectionWrapper>
              {serviceType === "spdt" && (
                <SectionWrapper>
                  <SectionTitle>Side 1</SectionTitle>
                  <DetailWrapper>
                    <Label>Description of Face</Label>
                    <TextareaTest placeholder="Enter Here: Description of Face" />
                    <DropdownWrapper>
                      <Label>Curvature: </Label>
                      <DropdownTest
                        name="curvature"
                        option1="Flat"
                        option2="Parabolic"
                        option3="Spherical"
                        option4="Aspheric"
                        option5="Other"
                      />
                    </DropdownWrapper>
                    <ClickButtonWrapper>
                      <Label>Coating specification method: </Label>
                      <ClickButtonTest title="Switch" />
                    </ClickButtonWrapper>
                  </DetailWrapper>
                </SectionWrapper>
              )}
              {/* Last Section of submit buttons */}
              <HrLine />
              <SectionWrapper>
                <SectionTitle></SectionTitle>
                <SubmitWrapper>
                  <SubmitButton title="Submit" />
                </SubmitWrapper>
              </SectionWrapper>
            </form>
          </BackgroundBlurWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default RequestPage;

const Wrapper = styled.div`
  background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%);
`;
const ContentWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 200px 30px;
`;
const BackgroundBlurWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 50px;
  border-radius: 30px;
`;

const InputRadio = styled.input``;

const Label = styled.label`
  margin: 0px 20px 0px 5px;
  font-weight: 500;
  font-size: 17px;
  line-height: 130%;
  /* text-transform: uppercase; */
  color: rgba(255, 255, 255, 0.9);
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
`;

const SectionTitle = styled(H3)`
  margin: 10px;
`;

const DetailWrapper = styled.div`
  margin: 15px;
`;

const DropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  align-items: center;
  margin: 30px 30px 30px 0;
`;

const ClickButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  align-items: center;
`;

const SubmitWrapper = styled.div`
  display: grid;
  justify-items: right;
`;

const HrLine = styled.hr`
  margin: 15px 0;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

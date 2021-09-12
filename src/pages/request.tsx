import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import styled from "styled-components";
import SubmitButton from "../components/buttons/SubmitButton";
import DropdownTest from "../components/forms/DropdownTest";
import { BodyMain, H3, MediumText } from "../components/styles/TextStyles";
import TextareaTest from "../components/forms/TextareaTest";
import ClickButtonTest from "../components/buttons/ClickButtonTest";
import BasicInputTest from "../components/forms/BasicInputTest";
import UploadButton from "../components/buttons/UploadButton";

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
              <HrLine />
              {serviceType === "spdt" && (
                <SectionWrapper>
                  <SectionTitle>Spec 1</SectionTitle>
                  <DetailWrapper>
                    <LineInputWrapper>
                      <Label>Wavelength (nm)</Label>
                      <BasicInputTest label="min: " width="150px" />
                      <BasicInputTest label="max: " width="150px" />
                    </LineInputWrapper>
                    <LineDropdownWrapper>
                      <DropdownTest
                        name="refTrans"
                        option1="Reflection"
                        option2="Transmission"
                      />
                      <BasicInputTest label="min: " width="150px" />
                      <BasicInputTest label="max: " width="150px" />
                      <DropdownTest
                        name="refTransUnit"
                        option1="ppm"
                        option2="%"
                        option3="dB"
                      />
                    </LineDropdownWrapper>
                    <DropdownWrapper>
                      <Label>Polarisation: </Label>
                      <DropdownTest
                        name="polarisation"
                        option1="S"
                        option2="P"
                        option3="UNP"
                      />
                    </DropdownWrapper>
                    <LineInputWrapper>
                      <Label>Angle of Incidence: </Label>
                      <BasicInputTest label="&#952;1: " width="150px" />
                      <BasicInputTest label="&#952;2: " width="150px" />
                    </LineInputWrapper>
                    <HrLine />
                    <LineButtonWrapper>
                      <ClickButtonTest title="Add a spec" />
                      <ClickButtonTest title="Remove last spec" />
                    </LineButtonWrapper>
                    <HrLine />
                    <BasicInputTest label="Coated Area Dimension: " />
                    <BasicInputTest label="Position: " />
                    <Label>Compensation Coating</Label>
                    <TextareaTest placeholder="Enter here..." />
                    <Label>Protective Coating</Label>
                    <TextareaTest placeholder="Enter here..." />
                    <Label>Add Specification</Label>
                    <TextareaTest placeholder="Enter specifications here..." />
                    <DropdownWrapper>
                      <Label>Deposition Process: </Label>
                      <DropdownTest
                        name="depositionProcess"
                        option1="Low Temperature + Low Stress"
                        option2="High Temperature + High Stress"
                      />
                    </DropdownWrapper>
                    <HrLine />
                    <LineButtonWrapper>
                      <ClickButtonTest title="Add a side" />
                      <ClickButtonTest title="Remove last side" />
                    </LineButtonWrapper>
                    <HrLine />
                    <BasicInputTest label="Quantity: " />
                    <Label>Special Instructions</Label>
                    <TextareaTest placeholder="Leave the description here..." />
                    <HrLine />
                    <LineButtonWrapper>
                      <UploadButton title="Upload PDF/PNG file here..." />
                      <ClickButtonTest title="Add another part" />
                    </LineButtonWrapper>
                  </DetailWrapper>
                </SectionWrapper>
              )}

              {/* {serviceType === "spdt" && (
                
              )} */}

              {/* Last Section of submit buttons */}
              <HrLine />
              <SectionWrapper>
                <SectionTitle></SectionTitle>
                <SubmitWrapper>
                  <Link to="/customerInfo">
                    <SubmitButton title="All parts specified -> Next Step" />
                  </Link>
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
  grid-template-columns: minmax(120px, 200px) auto;
`;

const SectionTitle = styled(H3)`
  margin: 10px;
`;

const DetailWrapper = styled.div`
  margin: 20px;
`;

const DropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(120px, 200px) auto;
  align-items: center;
  margin: 20px 20px 20px 0;
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

const LineInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  max-width: 700px;
`;

const LineDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  max-width: 800px;
`;

const LineButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: left;
  max-width: 400px;
  /* margin: 20px; */
`;

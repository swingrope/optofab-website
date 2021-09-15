import { Formik, Form, Field, FieldArray, useFormikContext } from "formik";
import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import Geometry, { geometryInitialValues } from "./components/Geometry";
import Material, { materialInitialValues } from "./components/Material";
import Surface, { surfaceInitialValues } from "./components/Surface";
import { MyTextInput } from "./fields/MyTextInput";
import { MyTextArea } from "./fields/MyTextArea";
import { Link } from "react-router-dom";
import { validateField } from "./Helpers";
import Layout from "../../components/layout/layout";
import {
  BodyIntro,
  BodyMain,
  Caption2,
  H3,
} from "../../components/styles/TextStyles";
import SubmitButton from "../../components/buttons/SubmitButton";
import Button4AddRemove from "../../components/buttons/Button4AddRemove";

export const formInitialValues = {
  serviceType: "",
  blankSource: "",
  substrateSource: "",
  stockSize: "",
  material: materialInitialValues,
  geometry: geometryInitialValues,
  surface: [surfaceInitialValues],
  quantity: "",
  specialInstructions: "",
};

const SwitchServiceType = () => {
  const { values, setValues } = useFormikContext();

  useEffect(() => {
    const temp = values.serviceType;
    setValues({ ...formInitialValues, serviceType: temp }, false);
  }, [values.serviceType, setValues]);

  return null;
};

const setDefaultValues = (setFieldValue, values) => {
  if (values.geometry.minorDiameter === "") {
    setFieldValue("geometry.minorDiameter", values.geometry.MajorDiameter);
  }
};

export default function MainForm({ part, setPart }) {
  function handleAddPart(e, values, resetForm, setFieldValue, validateForm) {
    e.preventDefault();

    validateForm().then((errors) => {
      console.log(errors);
      if (Object.keys(errors).length === 0) {
        setDefaultValues(setFieldValue, values);
        localStorage.setItem(`part${part}`, JSON.stringify(values));
        setPart(part + 1);
        resetForm();
      }
    });
  }

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <BackgroundBlurWrapper>
            <Fragment>
              <Formik
                initialValues={formInitialValues}
                onSubmit={async (values) => {
                  console.log(values);
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({
                  values,
                  setFieldValue,
                  validateForm,
                  handleChange,
                  resetForm,
                  errors,
                }) => (
                  <Form>
                    <SwitchServiceType />
                    <SectionWrapper>
                      <SectionTitle id="service-type">
                        Service Type
                      </SectionTitle>
                      <DetailWrapper>
                        <div role="group" aria-labelledby="service-type">
                          <Label>
                            <Field
                              type="radio"
                              name="serviceType"
                              value="SPDT Optic"
                            />
                            SPDT Optic
                          </Label>
                          <Label>
                            <Field
                              type="radio"
                              name="serviceType"
                              value="Optical Coating"
                            />
                            Optical Coating
                          </Label>
                          <Label>
                            <Field
                              type="radio"
                              name="serviceType"
                              value="Photonic Coating"
                            />
                            Photonic Coating
                          </Label>
                          <Label>
                            <Field
                              type="radio"
                              name="serviceType"
                              value="Integrated Optic Chip, Assembly and Others"
                            />
                            Integrated Optic Chip, Assembly and Others
                          </Label>
                        </div>
                      </DetailWrapper>
                    </SectionWrapper>
                    <SectionWrapper>
                      <SectionTitle></SectionTitle>
                      <DetailWrapper>
                        <PickTextWrapper>
                          You picked:
                          <StrongText>{values.serviceType}</StrongText>
                        </PickTextWrapper>
                      </DetailWrapper>
                    </SectionWrapper>

                    {values.serviceType === "SPDT Optic" && (
                      <>
                        <SectionWrapper>
                          <SectionTitle></SectionTitle>
                          <DetailWrapper>
                            <Label className="required">
                              Blank source: {"  "}
                              <Field
                                validate={validateField}
                                name="blankSource"
                                as="select"
                              >
                                <option value="N/A">Please Select</option>
                                <option value="ANFF supplied">
                                  ANFF supplied – full custom
                                </option>
                                <option value="Customer supplied">
                                  Customer supplied
                                </option>
                              </Field>
                              <br />
                              <br />
                              <Material
                                serviceType="spdt"
                                handleChange={handleChange}
                                materialValues={values.material}
                              />
                              <br />
                              <Geometry
                                handleChange={handleChange}
                                geometryValues={values.geometry}
                                blankSource={values.blankSource}
                                substrateSource={"N/A"}
                              />
                            </Label>
                          </DetailWrapper>
                        </SectionWrapper>
                        <Fragment>
                          <Label>
                            <FieldArray name="surface">
                              {({ push, pop }) => (
                                <div>
                                  {values.surface.map((side, index) => (
                                    <Surface
                                      key={index}
                                      index={index}
                                      handleChange={handleChange}
                                      surfaceValues={values.surface[index]}
                                      blankSource={values.blankSource}
                                      substrateSource={"N/A"}
                                      geometry={values.geometry.geometryType}
                                    />
                                  ))}
                                  <SectionWrapper>
                                    <SectionTitle></SectionTitle>
                                    <DetailWrapper>
                                      <Button4AddRemove
                                        title="Add a side"
                                        onClick={() =>
                                          push(surfaceInitialValues)
                                        }
                                      />
                                      <Button4AddRemove
                                        title="Remove last side"
                                        onClick={() => pop()}
                                      />
                                    </DetailWrapper>
                                  </SectionWrapper>
                                </div>
                              )}
                            </FieldArray>
                            <SectionWrapper>
                              <SectionTitle></SectionTitle>
                              <DetailWrapper>
                                <MyTextInput
                                  labelClass="required"
                                  validate={validateField}
                                  label="Quantity:"
                                  name="quantity"
                                  onChange={handleChange}
                                />
                                <MyTextArea
                                  label="Special instructions:"
                                  name="specialInstructions"
                                  placeholder="Leave the description here"
                                  rows={3}
                                  onChange={handleChange}
                                />
                                <Label>Upload PDF/PNG File:</Label>
                                <input
                                  type="file"
                                  name="specialInstructionFile"
                                  accept=".pdf,.png"
                                />
                              </DetailWrapper>
                            </SectionWrapper>
                          </Label>
                        </Fragment>
                      </>
                    )}
                    {values.serviceType === "Optical Coating" && (
                      <Fragment>
                        <SectionWrapper>
                          <SectionTitle></SectionTitle>
                          <DetailWrapper>
                            <Label className="required">
                              Substrate source: {"  "}
                              <Field
                                validate={validateField}
                                name="substrateSource"
                                as="select"
                              >
                                <option value="N/A">Please select</option>
                                <option value="ANFF supplied – stock">
                                  ANFF supplied – stock
                                </option>
                                <option value="Customer supplied">
                                  Customer supplied
                                </option>
                                <option value="ANFF supplied – full custom">
                                  ANFF supplied – full custom
                                </option>
                              </Field>
                              {values.substrateSource ===
                                "ANFF supplied – stock" && (
                                <Fragment>
                                  <Label>
                                    <br />
                                    In stock:
                                    <Field
                                      name="stockSize"
                                      as="select"
                                      onChange={handleChange}
                                    >
                                      <option value="N/A">Please Select</option>
                                      <option value="12.7mm">12.7mm</option>
                                      <option value="25.4mm">25.4mm</option>
                                      <option value="50.8mm">50.8mm</option>
                                    </Field>
                                    <Material
                                      serviceType="optical"
                                      handleChange={handleChange}
                                      materialValues={values.material}
                                      isStock={true}
                                    />
                                  </Label>
                                </Fragment>
                              )}
                              {(values.substrateSource ===
                                "Customer supplied" ||
                                values.substrateSource ===
                                  "ANFF supplied – full custom") && (
                                <Fragment>
                                  <Material
                                    serviceType="optical"
                                    handleChange={handleChange}
                                    materialValues={values.material}
                                  />
                                  <Geometry
                                    handleChange={handleChange}
                                    geometryValues={values.geometry}
                                    blankSource={"N/A"}
                                    substrateSource={values.substrateSource}
                                    serviceType={values.serviceType}
                                  />
                                </Fragment>
                              )}
                            </Label>
                          </DetailWrapper>
                        </SectionWrapper>
                        <Label>
                          <FieldArray name="surface">
                            {({ push, pop }) => (
                              <div>
                                {values.surface.map((side, index) => (
                                  <Surface
                                    key={index}
                                    index={index}
                                    handleChange={handleChange}
                                    surfaceValues={values.surface[index]}
                                    blankSource={"N/A"}
                                    serviceType={values.serviceType}
                                    substrateSource={values.substrateSource}
                                    geometry={values.geometry.geometryType}
                                  />
                                ))}
                                <SectionWrapper>
                                  <SectionTitle></SectionTitle>
                                  <DetailWrapper>
                                    <Button4AddRemove
                                      title="Add a side"
                                      onClick={() => push(surfaceInitialValues)}
                                    />
                                    <Button4AddRemove
                                      title="Remove last side"
                                      onClick={() => pop()}
                                    />
                                  </DetailWrapper>
                                </SectionWrapper>
                              </div>
                            )}
                          </FieldArray>
                          {(values.substrateSource === "ANFF supplied-stock" ||
                            values.substrateSource === "Customer supplied" ||
                            values.substrateSource ===
                              "ANFF supplied – full custom") && (
                            <Fragment>
                              <br />
                              <MyTextInput
                                label="Quantity:"
                                name="quantity"
                                onChange={handleChange}
                              />
                              <MyTextArea
                                label="Special instructions:"
                                name="specialInstructions"
                                placeholder="Leave the description here"
                                rows={3}
                                onChange={handleChange}
                              />
                              <Label>Upload PDF/PNG File:</Label>
                              <input
                                type="file"
                                name="specialInstructionFile"
                                accept=".pdf,.png"
                              />
                            </Fragment>
                          )}
                        </Label>
                      </Fragment>
                    )}
                    {values.serviceType === "Photonic Coating" && (
                      <Fragment>
                        <SectionWrapper>
                          <SectionTitle></SectionTitle>
                          <DetailWrapper>
                            <Label>
                              Substrate source: {"  "}
                              <Field name="substrateSource" as="select">
                                <option value="N/A">Please select</option>
                                <option value="ANFF supplied – stock">
                                  ANFF supplied – stock
                                </option>
                                <option value="Customer supplied">
                                  Customer supplied
                                </option>
                                <option value="ANFF supplied – full custom">
                                  ANFF supplied – full custom
                                </option>
                              </Field>
                              {values.substrateSource ===
                                "ANFF supplied – stock" && (
                                <Fragment>
                                  <Label>
                                    <br />
                                    In stock:
                                    <Field
                                      name="stockSize"
                                      as="select"
                                      onChange={handleChange}
                                    >
                                      <option value="N/A">Please Select</option>
                                      <option value="(Silicon (P-type, <100>) ø100mm x 525µm">
                                        Silicon (P-type, &lt;100&gt;) ø100mm x
                                        525µm
                                      </option>
                                      <option value="5µm TOx on Silicon (P-type, <100>) ø100mm x 525µm">
                                        5µm TOx on Silicon (P-type, &lt;100&gt;)
                                        ø100mm x 525µm
                                      </option>
                                      <option value="Silicon (P-type, <100>) ø150mm x 675µm">
                                        Silicon (P-type, &lt;100&gt;) ø150mm x
                                        675µm
                                      </option>
                                    </Field>
                                  </Label>
                                </Fragment>
                              )}
                              {(values.substrateSource ===
                                "Customer supplied" ||
                                values.substrateSource ===
                                  "ANFF supplied – full custom") && (
                                <Fragment>
                                  <Material
                                    serviceType="photonic"
                                    handleChange={handleChange}
                                    materialValues={values.material}
                                  />
                                  <Geometry
                                    handleChange={handleChange}
                                    geometryValues={values.geometry}
                                    blankSource={"N/A"}
                                    substrateSource={values.substrateSource}
                                  />
                                </Fragment>
                              )}
                            </Label>
                          </DetailWrapper>
                        </SectionWrapper>
                        <Label>
                          <FieldArray name="surface">
                            {({ push, pop }) => (
                              <div>
                                {values.surface.map((side, index) => (
                                  <Surface
                                    key={index}
                                    index={index}
                                    handleChange={handleChange}
                                    surfaceValues={values.surface[index]}
                                    blankSource={"N/A"}
                                    serviceType={values.serviceType}
                                    substrateSource={values.substrateSource}
                                    geometry={values.geometry.geometryType}
                                  />
                                ))}
                                {/* <button
                                type="button"
                                onClick={() => push(surfaceInitialValues)}
                              >
                                Add a side
                              </button>
                              <button type="button" onClick={() => pop()}>
                                Remove last side
                              </button> */}
                                <SectionWrapper>
                                  <SectionTitle></SectionTitle>
                                  <DetailWrapper>
                                    <Button4AddRemove
                                      title="Add a side"
                                      onClick={() => push(surfaceInitialValues)}
                                    />
                                    <Button4AddRemove
                                      title="Remove last side"
                                      onClick={() => pop()}
                                    />
                                  </DetailWrapper>
                                </SectionWrapper>
                              </div>
                            )}
                          </FieldArray>
                          {(values.substrateSource === "ANFF supplied-stock" ||
                            values.substrateSource === "Customer supplied" ||
                            values.substrateSource ===
                              "ANFF supplied – full custom") && (
                            <Fragment>
                              <br />
                              <MyTextInput
                                labelClass="required"
                                validate={validateField}
                                label="Quantity:"
                                name="quantity"
                                onChange={handleChange}
                              />
                              <MyTextArea
                                label="Special instructions:"
                                name="specialInstructions"
                                placeholder="Leave the description here"
                                rows={3}
                                onChange={handleChange}
                              />
                              <Label>Upload PDF/PNG File:</Label>
                              <input
                                type="file"
                                name="specialInstructionFile"
                                accept=".pdf,.png"
                              />
                            </Fragment>
                          )}
                        </Label>
                      </Fragment>
                    )}
                    {values.serviceType ===
                      "Integrated Optic Chip, Assembly and Others" && (
                      <Fragment>
                        <SectionWrapper>
                          <SectionTitle></SectionTitle>
                          <DetailWrapper>
                            <Label>
                              <NoticeTitle>
                                For any requests or info about integrated optics
                                and chip assembly, please feel free to contact
                                the following:
                              </NoticeTitle>
                              <NoticeInfoWrapper>
                                <NoticeInfo>
                                  Node Director: A/Prof.{" "}
                                  <a href="mailto:stephen.madden@anu.edu.au">
                                    Steve Madden
                                  </a>
                                </NoticeInfo>
                                <NoticeInfo>
                                  Email: stephen.madden@anu.edu.au
                                </NoticeInfo>
                                <NoticeInfo>
                                  Phone: (02) 612 58574 or 0404 932 099
                                </NoticeInfo>
                              </NoticeInfoWrapper>
                            </Label>
                          </DetailWrapper>
                        </SectionWrapper>
                      </Fragment>
                    )}

                    {(values.serviceType === "SPDT Optic" ||
                      values.serviceType === "Optical Coating" ||
                      values.serviceType === "Photonic Coating") && (
                      <Fragment>
                        <SectionWrapper>
                          <SectionTitle></SectionTitle>
                          <DetailWrapper>
                            <Button4AddRemove
                              onClick={(e) =>
                                handleAddPart(
                                  e,
                                  values,
                                  resetForm,
                                  setFieldValue,
                                  validateForm
                                )
                              }
                              className="add"
                              title="Add a part"
                            />
                          </DetailWrapper>
                        </SectionWrapper>
                        <SectionWrapper>
                          <SectionTitle></SectionTitle>
                          <NextButtonWrapper>
                            <NextButton
                              onClick={(e) =>
                                handleAddPart(
                                  e,
                                  values,
                                  resetForm,
                                  setFieldValue,
                                  validateForm
                                )
                              }
                            >
                              <Link
                                style={{
                                  color: "rgba(255,255,255,0.9)",
                                }}
                                to="/customer"
                              >
                                All parts specified - Next Step
                              </Link>
                            </NextButton>
                          </NextButtonWrapper>
                        </SectionWrapper>
                      </Fragment>
                    )}
                  </Form>
                )}
              </Formik>
            </Fragment>
          </BackgroundBlurWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  /* background: linear-gradient(115.82deg, #00486f 0%, #eb7776 93.65%); */
  background: linear-gradient(135deg, #176ab1 20%, #eb7776 80%);
`;

const ContentWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const BackgroundBlurWrapper = styled.div`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding: 50px;
  border-radius: 30px;
`;

const Label = styled.label`
  margin: 0px 30px 0px 0px;
  font-weight: 500;
  font-size: 17px;
  line-height: 130%;
  /* text-transform: uppercase; */
  color: rgba(255, 255, 255, 0.95);
`;

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(210px, 250px) auto;
`;

const SectionTitle = styled(H3)`
  margin: 10px;
  color: rgba(0, 0, 0, 0.9);
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
`;

const DetailWrapper = styled.div`
  margin: 20px;
`;

const NextButton = styled.button`
  margin: 10px;
  padding: 12px 24px;
  width: minmax(200px, 360px);
  height: 44px;

  background: linear-gradient(270deg, #d90068 0%, rgba(0, 28, 129, 0.9) 100%);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  border: none;
  & {
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-delay: 0.1s;
  }
  :hover {
    filter: hue-rotate(10deg) brightness(110%) saturate(110%);
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const NextButtonWrapper = styled.div`
  display: grid;
  justify-items: right;
  margin: 0px 30px;
`;

const NoticeTitle = styled(Caption2)`
  color: rgba(0, 0, 0, 0.8);
`;

const NoticeInfoWrapper = styled.div`
  display: grid;
  background: transparent;
  padding: 50px;
  gap: 20px;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`;

const NoticeInfo = styled(BodyMain)``;

const PickTextWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 20px;
  align-items: center;
`;

const StrongText = styled(BodyIntro)`
  /* color: rgba(255, 0, 0, 0.75);
  text-shadow: 0px 10px 20 rgba(255, 0, 0, 0.8); */
  background: linear-gradient(0deg, #1a2151 0%, #be1e69 50%);
  background-clip: text;
  --webkit-background-clip: text;
  color: transparent;
`;

const OneLineDropdownWrapper = styled.div``;

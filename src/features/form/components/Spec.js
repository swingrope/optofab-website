import { Field } from "formik";
import React from "react";
import styled from "styled-components";

import { H3 } from "../../../components/styles/TextStyles";
import { validateField } from "../Helpers";

export const specInitialValues = {
  wavelengthMin: "",
  wavelengthMax: "",
  polarisation: "",
  RTSelect: "",
  min: "",
  max: "",
  unit: "",
  AOImin: "",
  AOImax: "",
};

export default function Spec({ sideIndex, index, handleChange }) {
  const specNum = index + 1;
  const formstyle = {
    fontSize: "16px",
    lineHeight: "130%",
    textAlign: "left",
    color: "rgba(0, 0, 0, 0.8)",
    background: "transparent",
    border: "0",
    outline: "none",
  };
  return (
    <div>
      <SpecTitle>Spec {specNum}</SpecTitle>
      <SpecsWrapper>
        <div className="required">
          Wavelength (nm): &nbsp;&nbsp;&nbsp;
          <label>
            min:{" "}
            <FieldWrapper>
              <Field
                style={formstyle}
                name={`surface[${sideIndex}].coating.specs[${index}].wavelengthMin`}
                validate={validateField}
                onChange={handleChange}
              />
            </FieldWrapper>
          </label>
          <label>
            max:{" "}
            <FieldWrapper>
              <Field
                style={formstyle}
                name={`surface[${sideIndex}].coating.specs[${index}].wavelengthMax`}
                validate={validateField}
                onChange={handleChange}
              />
            </FieldWrapper>
          </label>
        </div>
        <div>
          <label className="required">
            <Field
              name={`surface[${sideIndex}].coating.specs[${index}].RTSelect`}
              as="select"
              onChange={handleChange}
            >
              <option value="N/A">Please Select</option>
              <option value="Reflection">Reflection</option>
              <option value="Transmission">Transmission</option>
            </Field>
          </label>
          <label>
            min:{" "}
            <FieldWrapper>
              <Field
                style={formstyle}
                name={`surface[${sideIndex}].coating.specs[${index}].min`}
                onChange={handleChange}
              />
            </FieldWrapper>
          </label>
          <label>
            max:{" "}
            <FieldWrapper>
              <Field
                style={formstyle}
                name={`surface[${sideIndex}].coating.specs[${index}].max`}
                onChange={handleChange}
              />
            </FieldWrapper>
          </label>
          <label>
            <Field
              name={`surface[${sideIndex}].coating.specs[${index}].unit`}
              as="select"
              onChange={handleChange}
            >
              <option value="N/A">Please Select</option>
              <option value="ppm">ppm</option>
              <option value="%">%</option>
              <option value="dB">dB</option>
            </Field>
          </label>
        </div>
        <label className="required">
          Polarisation:
          <Field
            validate={validateField}
            as="select"
            name={`surface[${sideIndex}].coating.specs[${index}].polarisation`}
            onChange={handleChange}
          >
            <option value="N/A">Please select</option>
            <option value="S">S</option>
            <option value="P">P</option>
            <option value="UNP">UNP</option>
          </Field>
        </label>
        <div className="required">
          Angle of Incidence (degree): &nbsp;&nbsp;&nbsp;
          <label>
            min:{" "}
            <FieldWrapper>
              <Field
                style={formstyle}
                validate={validateField}
                name={`surface[${sideIndex}].coating.specs[${index}].AOImin`}
                onChange={handleChange}
              />
            </FieldWrapper>
          </label>
          <label>
            max:{" "}
            <FieldWrapper>
              <Field
                style={formstyle}
                validate={validateField}
                name={`surface[${sideIndex}].coating.specs[${index}].AOImax`}
                onChange={handleChange}
              />
            </FieldWrapper>
          </label>
        </div>
      </SpecsWrapper>
    </div>
  );
}

const SpecTitle = styled(H3)`
  margin-bottom: 20px;
`;

const SpecsWrapper = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
`;

const FieldWrapper = styled.div`
  display: inline;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 5px;
  margin: 0 20px 0 0;
`;

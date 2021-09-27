import { Field } from "formik";
import React from "react";
import styled from "styled-components";

import { MyTextInputForm } from "../fields/MyTextInputForm";
import { validateField } from "../Helpers";
import { H3 } from "../../../components/styles/TextStyles";

export const layerInitialValues = {
  thicknessOfLayer: "",
  thicknessTolerance: "",
  material: "",
  refractiveIndex: "",
  tolerance: "",
  wavelength: "",
};

export default function Layer({ sideIndex, index, handleChange }) {
  const layerNum = index + 1;

  return (
    <Wrapper>
      <LayerTitle>Layer {layerNum}</LayerTitle>
      <MyTextInputForm
        labelClass="required"
        validate={validateField}
        label="Thickness of Layer(nm): "
        name={`surface[${sideIndex}].coating.layers[${index}].thicknessOfLayer`}
        onChange={handleChange}
      />
      <MyTextInputForm
        labelClass="required"
        validate={validateField}
        label="Thickness Tolerance(nm): "
        name={`surface[${sideIndex}].coating.layers[${index}].thicknessTolerance`}
        onChange={handleChange}
      />
      <Label className="required">
        {"Material: "}
        <Field
          validate={validateField}
          as="select"
          name={`surface[${sideIndex}].coating.layers[${index}].material`}
          onChange={handleChange}
        >
          <option value="N/A">Please select</option>
          <option value="Silica">Silica</option>
          <option value="Tantala">Tantala</option>
        </Field>
      </Label>
      <br />
      <br />
      <MyTextInputForm
        label="Refractive index: "
        br={false}
        name={`surface[${sideIndex}].coating.layers[${index}].refractiveIndex`}
        onChange={handleChange}
      />
      <br />
      <MyTextInputForm
        label="±"
        name={`surface[${sideIndex}].coating.layers[${index}].tolerance`}
        onChange={handleChange}
      />
      <MyTextInputForm
        label="Wavelength (nm): "
        name={`surface[${sideIndex}].coating.layers[${index}].wavelength`}
        onChange={handleChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Label = styled.label`
  margin: 10px 0;
  font-weight: 500;
  font-size: 17px;
  line-height: 130%;
  /* text-transform: uppercase; */
  color: rgba(255, 255, 255, 0.95);
`;

const LayerTitle = styled(H3)`
  color: #150050;
  opacity: 0.7;
  margin-bottom: 20px;
`;

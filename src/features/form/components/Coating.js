import { Field, FieldArray } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import Button4AddRemove from "../../../components/buttons/Button4AddRemove";
import SwitchButton from "../../../components/buttons/SwitchButton";

import { MyTextArea } from "../fields/MyTextArea";
import { MyTextInputForm } from "../fields/MyTextInputForm";
import Layer, { layerInitialValues } from "./Layer";
import Spec, { specInitialValues } from "./Spec";

export const coatingInitialValues = {
  layers: [{ ...layerInitialValues }],
  specs: [{ ...specInitialValues }],
};

export default function Coating({
  coatingValues,
  handleChange,
  index,
  serviceType,
}) {
  // method1: index/thickness method2: transmission/reflection
  const [specMethod1, setSpecMethod1] = useState(
    serviceType === "Photonic Coating" ? true : false
  );

  const switchSpecMethod = (e) => {
    e.preventDefault();
    setSpecMethod1(!specMethod1);
  };
  const handleAddLayerOrSpec = (e, arrayHelpers) => {
    e.preventDefault();
    specMethod1
      ? arrayHelpers.push({ ...layerInitialValues })
      : arrayHelpers.push({ ...specInitialValues });
  };

  return (
    <div>
      <ContentWrapper>
        <label>
          Coating specification method:{" "}
          {specMethod1 ? "Index/thickness" : "Transmission/reflection"}
          <SwitchButton onClick={(e) => switchSpecMethod(e)} title="Switch" />
        </label>
        {specMethod1 ? (
          <FieldArray name={`surface.${index}.coating.layers`}>
            {(arrayHelpers) => (
              <div>
                {coatingValues.layers.map((layer, idx) => (
                  <Layer
                    key={idx}
                    sideIndex={index}
                    index={idx}
                    handleChange={handleChange}
                  />
                ))}
                <Button4AddRemove
                  onClick={(e) => handleAddLayerOrSpec(e, arrayHelpers)}
                  title="Add layer"
                />
                <Button4AddRemove
                  onClick={arrayHelpers.pop}
                  title="Remove last layer"
                />
              </div>
            )}
          </FieldArray>
        ) : (
          <FieldArray name={`surface.${index}.coating.specs`}>
            {(arrayHelpers) => (
              <div>
                {coatingValues.specs.map((spec, idx) => (
                  <Spec
                    key={idx}
                    sideIndex={index}
                    index={idx}
                    handleChange={handleChange}
                  />
                ))}
                <Button4AddRemove
                  title="Add a spec"
                  onClick={(e) => handleAddLayerOrSpec(e, arrayHelpers)}
                />
                <Button4AddRemove
                  title="Remove last spec"
                  onClick={arrayHelpers.pop}
                />
              </div>
            )}
          </FieldArray>
        )}
        <MyTextInputForm
          label="Coated Area Dimension: "
          name={`surface[${index}].coating.coatedAreaDimension`}
          onChange={handleChange}
        />
        <MyTextInputForm
          label="Position: "
          name={`surface[${index}].coating.position`}
          onChange={handleChange}
        />
        <MyTextArea
          label="Compensation Coating: "
          name={`surface[${index}].coating.compensationCoating`}
          onChange={handleChange}
        />
        <MyTextArea
          label="Protective Coating: "
          name={`surface[${index}].coating.protectiveCoating`}
          onChange={handleChange}
        />
        <MyTextArea
          label="Add Specification: "
          name={`surface[${index}].coating.addSpecification`}
          onChange={handleChange}
        />
        <label>
          {"Deposition Process: "}
          <Field
            as="select"
            name={`surface[${index}].coating.depositionProcess`}
            onChange={handleChange}
          >
            <option value="N/A">Please select</option>
            <option value="lowTempLowStress">
              Low Temperature + Low Stress
            </option>
            <option value="highTempLowLoss">High Temperature + Low Loss</option>
          </Field>
        </label>
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

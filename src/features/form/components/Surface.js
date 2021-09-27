import { Field } from "formik";
import React, { Fragment, useRef, useState } from "react";
import styled from "styled-components";
import { MyTextArea } from "../fields/MyTextArea.js";
import { MyTextInput } from "../fields/MyTextInput.js";
import Coating, { coatingInitialValues } from "./Coating.js";
import { MathComponent } from "mathjax-react";
import { validateField } from "../Helpers.js";
import { H3, MediumText } from "../../../components/styles/TextStyles";
import Button4AddRemove from "../../../components/buttons/Button4AddRemove.js";

export const surfaceInitialValues = {
  descriptionOfFace: "",
  curvature: "",
  surfaceFigure: "",
  turningAngle: 90,
  focalLength: "",
  radiusOfCurvature: "",
  cv: "",
  k: "",
  a1: "",
  a2: "",
  a4: "",
  a6: "",
  a8: "",
  a10: "",
  a12: "",
  formAccuracy: "",
  coating: coatingInitialValues,
  faceType: "",
};

export default function Surface({
  handleChange,
  index,
  surfaceValues,
  blankSource,
  serviceType,
  substrateSource,
  geometry,
}) {
  const [expand, setExpand] = useState(false);
  const [buttonText, setButtonText] = useState("show more");
  const [hasCoating, setHasCoating] = useState(false);
  const sideNumber = index + 1;

  const curvatureRefUpload = useRef(null);

  function curvatureFileUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let fileType = file.name.substring(
      file.name.indexOf(".") + 1,
      file.name.length
    );
    if (fileType !== "stp" && fileType !== "spd" && fileType !== "zmx") {
      alert("Please upload stp/spd/zmx file");
      e.target.value = "";
    } else {
      const formdata = new FormData();
      formdata.append("file", file);
      const url = "../../api/Attachment.php";
      //const url = "http://localhost:8080/comp8715/optofab-website/src/api/Attachment.php";
      fetch(url, {
        method: "POST",
        body: formdata,
      })
        .then((res) => {
          console.log(res.status);
          alert("uploaded successfully");
        })
        .catch(() => {
          alert("upload failed");
        });
    }
  }

  const handleExpand = (e) => {
    e.preventDefault();
    setExpand(!expand);
    !expand ? setButtonText("show less") : setButtonText("show more");
  };

  const handleUpload = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <SectionWrapper>
        <SectionTitle>Side {sideNumber}</SectionTitle>
        <DetailWrapper>
          <MyTextArea
            labelClass="required"
            validate={validateField}
            label="Description Of Face:"
            name={`surface.${index}.descriptionOfFace`}
            placeholder="Leave the description here"
            rows={3}
            onChange={handleChange}
          />
          {geometry === "regular polygon" && (
            <label>
              <Field as="select" name={`surface.${index}.descriptionOfFace`}>
                <option value="N/A">Please select</option>
                <option value="Polygonal face">Polygonal face</option>
                <option value="Extruded face">Extruded face</option>
              </Field>
              <br />
            </label>
          )}

          <label className="required">
            {"Curvature: "}
            <Field
              validate={validateField}
              as="select"
              name={`surface.${index}.curvature`}
              onChange={handleChange}
            >
              <option value="N/A">Please select</option>
              <option value="flat">Flat</option>
              <option value="parabolic">Parabolic</option>
              <option value="spherical">Spherical</option>
              <option value="aspheric">Aspheric</option>
              <option value="other">Other</option>
            </Field>
          </label>
          <br />
          {surfaceValues.curvature === "flat" && (
            <Fragment>
              <MyTextInput
                label="Surface Figure (nm): ±"
                name={`surface.${index}.surfaceFigure`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Surface Roughness (P-V nm): "
                name={`surface.${index}.surfaceRoughness`}
                onChange={handleChange}
              />
              <label>
                Surface Quality (Scratch-Dig):
                <Field
                  as="select"
                  name={`surface.${index}.surfaceQuality`}
                  onChange={handleChange}
                >
                  <option value="N/A">Please select</option>
                  <option value="40-20">40-20</option>
                  <option value="20-10">20-10</option>
                  <option value="10-5">10-5</option>
                </Field>
              </label>
              <Description>
                Surface Figure: Maximum deviation (figure error) of the optical
                surface from the specified shape across the clear aperture, in
                units of λ/N, where λ=632.8nm
                <br />
                <br />
                Surface Quality: Describes the number & severity of surface
                defects/imperfections within the clear aperture using the
                Scratch/Dig standard following ISO 10110-7
                <br />
                <br />
                Surface Roughness: Root mean square variation of the optical
                surface with respect to the specified shape across the clear
                aperture
              </Description>
            </Fragment>
          )}
          {surfaceValues.curvature === "parabolic" && (
            <Fragment>
              <p>Please specify the beam dimension in Description of Face</p>
              <MyTextInput
                labelClass="required"
                validate={validateField}
                label="Focal Length (mm): "
                name={`surface.${index}.focalLength`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Turning Angle (degree): "
                name={`surface.${index}.turningAngle`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Surface Figure (nm): ±"
                name={`surface.${index}.surfaceFigure`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Surface Roughness (P-V nm): "
                name={`surface.${index}.surfaceRoughness`}
                onChange={handleChange}
              />
              <label>
                Surface Quality (Scratch-Dig):
                <Field
                  as="select"
                  name={`surface.${index}.surfaceQuality`}
                  onChange={handleChange}
                >
                  <option value="N/A">Please select</option>
                  <option value="40-20">40-20</option>
                  <option value="20-10">20-10</option>
                  <option value="10-5">10-5</option>
                </Field>
              </label>
              <Description>
                Surface Figure: Maximum deviation (figure error) of the optical
                surface from the specified shape across the clear aperture, in
                units of λ/N, where λ=632.8nm
                <br />
                <br />
                Surface Quality: Describes the number & severity of surface
                defects/imperfections within the clear aperture using the
                Scratch/Dig standard following ISO 10110-7
                <br />
                <br />
                Surface Roughness: Root mean square variation of the optical
                surface with respect to the specified shape across the clear
                aperture
              </Description>
            </Fragment>
          )}
          {surfaceValues.curvature === "spherical" && (
            <Fragment>
              <MyTextInput
                labelClass="required"
                validate={validateField}
                label="Radius of Curvature(mm): "
                name={`surface.${index}.radiusOfCurvature`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Surface Figure (nm): ±"
                name={`surface.${index}.surfaceFigure`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Surface Roughness (P-V nm): "
                name={`surface.${index}.surfaceRoughness`}
                onChange={handleChange}
              />
              <label>
                Surface Quality (Scratch-Dig):
                <Field
                  as="select"
                  name={`surface.${index}.surfaceQuality`}
                  onChange={handleChange}
                >
                  <option value="N/A">Please select</option>
                  <option value="40-20">40-20</option>
                  <option value="20-10">20-10</option>
                  <option value="10-5">10-5</option>
                </Field>
              </label>
              <Description>
                Surface Figure: Maximum deviation (figure error) of the optical
                surface from the specified shape across the clear aperture, in
                units of λ/N, where λ=632.8nm
                <br />
                <br />
                Surface Quality: Describes the number & severity of surface
                defects/imperfections within the clear aperture using the
                Scratch/Dig standard following ISO 10110-7
                <br />
                <br />
                Surface Roughness: Root mean square variation of the optical
                surface with respect to the specified shape across the clear
                aperture
              </Description>
            </Fragment>
          )}
          {surfaceValues.curvature === "aspheric" && (
            <Fragment>
              Surface Form:
              <MathComponent
                tex={String.raw`Z=f(x)=\frac{C_{v}x^2}{1+\sqrt{1-(1+k)C_{v}^2x^2}}+A_{01}x+A_{02}x^2+\cdots`}
              />
              <MyTextInput
                labelClass="required"
                validate={validateField}
                label="Cv: "
                name={`surface.${index}.cv`}
                onChange={handleChange}
              />
              <MyTextInput
                labelClass="required"
                validate={validateField}
                label="k: "
                name={`surface.${index}.k`}
                onChange={handleChange}
              />
              <MyTextInput
                label="A1: "
                name={`surface.${index}.a1`}
                onChange={handleChange}
              />
              <MyTextInput
                labelClass="required"
                validate={validateField}
                label="A2: "
                name={`surface.${index}.a2`}
                onChange={handleChange}
              />
              <button onClick={(e) => handleExpand(e)}>{buttonText}</button>
              <br />
              {expand && (
                <Fragment>
                  <MyTextInput
                    label="A4: "
                    name={`surface.${index}.a4`}
                    onChange={handleChange}
                  />
                  <MyTextInput
                    label="A6: "
                    name={`surface.${index}.a6`}
                    onChange={handleChange}
                  />
                  <MyTextInput
                    label="A8: "
                    name={`surface.${index}.a8`}
                    onChange={handleChange}
                  />
                  <MyTextInput
                    label="A10: "
                    name={`surface.${index}.a10`}
                    onChange={handleChange}
                  />
                  <MyTextInput
                    label="A12: "
                    name={`surface.${index}.a12`}
                    onChange={handleChange}
                  />
                </Fragment>
              )}
              <MyTextInput
                label="Surface Figure (nm): ±"
                name={`surface.${index}.surfaceFigure`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Surface Roughness (P-V nm): "
                name={`surface.${index}.surfaceRoughness`}
                onChange={handleChange}
              />
              <label>
                Surface Quality (Scratch-Dig):
                <Field
                  as="select"
                  name={`surface.${index}.surfaceQuality`}
                  onChange={handleChange}
                >
                  <option value="N/A">Please select</option>
                  <option value="40-20">40-20</option>
                  <option value="20-10">20-10</option>
                  <option value="10-5">10-5</option>
                </Field>
              </label>
              <Description>
                Surface Figure: Maximum deviation (figure error) of the optical
                surface from the specified shape across the clear aperture, in
                units of λ/N, where λ=632.8nm
                <br />
                <br />
                Surface Quality: Describes the number & severity of surface
                defects/imperfections within the clear aperture using the
                Scratch/Dig standard following ISO 10110-7
                <br />
                <br />
                Surface Roughness: Root mean square variation of the optical
                surface with respect to the specified shape across the clear
                aperture
              </Description>
            </Fragment>
          )}
          {surfaceValues.curvature === "other" && (
            <Fragment>
              <label>Upload Zemax/Winlens File:</label>
              <input
                type="file"
                name="curvatureFile"
                accept=".zmx,.spd,.stp"
                onChange={curvatureFileUpload}
                ref={curvatureRefUpload}
              />
              <MyTextInput
                label="Surface Figure (nm): ±"
                name={`surface.${index}.surfaceFigure`}
                onChange={handleChange}
              />
              <MyTextInput
                label="Surface Roughness (nm rms): "
                name={`surface.${index}.surfaceRoughness`}
                onChange={handleChange}
              />
              <label>
                Surface Quality:
                <Field
                  as="select"
                  name={`surface.${index}.surfaceQuality`}
                  onChange={handleChange}
                >
                  <option value="N/A">Please select</option>
                  <option value="40-20">40-20</option>
                  <option value="20-10">20-10</option>
                  <option value="10-5">10-5</option>
                </Field>
              </label>
              <Description>
                Surface Figure: Maximum deviation (figure error) of the optical
                surface from the specified shape across the clear aperture, in
                units of λ/N, where λ=632.8nm
                <br />
                <br />
                Surface Quality: Describes the number & severity of surface
                defects/imperfections within the clear aperture using the
                Scratch/Dig standard following ISO 10110-7
                <br />
                <br />
                Surface Roughness: Root mean square variation of the optical
                surface with respect to the specified shape across the clear
                aperture
              </Description>
            </Fragment>
          )}
          <br />
          <Button4AddRemove
            title="Add coating"
            onClick={() => setHasCoating(!hasCoating)}
          />
          {hasCoating && (
            <Coating
              coatingValues={surfaceValues.coating}
              handleChange={handleChange}
              index={index}
              serviceType={serviceType}
            />
          )}
        </DetailWrapper>
      </SectionWrapper>
    </div>
  );
}

const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 20%) auto;
`;

const SectionTitle = styled(H3)`
  margin: 10px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
`;

const DetailWrapper = styled.div`
  margin: 20px;
`;

const Description = styled(MediumText)`
  margin: 20px 0;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 15px;
`;

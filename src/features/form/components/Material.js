import { Field } from "formik";
import React, {Fragment, useRef} from "react";
import { MyTextInput } from "../fields/MyTextInput";
import { MyTextArea } from "../fields/MyTextArea";
import { validateField } from "../Helpers";

export const materialInitialValues = {
  materialType: "",
  reactivity: "",
  toxicity: "",
  type: "",
  maxTemperature: "",
  hazards: "",
  specialInstructions: "",
  chemicalCompatibilityForCleaning: "",
  materialTransferAgreement: "",
};

export default function Material({
  serviceType,
  handleChange,
  materialValues,
  isStock,
}) {
  const MTARefUpload = useRef(null);

  function MTAFileUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let fileType = file.name.substring(
        file.name.indexOf(".") + 1,
        file.name.length
    );
    if (
        fileType !== "png" &&
        fileType !== "pdf" &&
        fileType !== "PNG" &&
        fileType !== "PDF"
    ) {
      alert("Please upload PDF or PNG file");
      e.target.value = "";
    } else {
      const formdata = new FormData();
      formdata.append("file", file);
      const url = "../../api/Attachment.php";
      //const url = "http://localhost:8080/comp8715/optofab-website/src/api/Attachment.php";
      fetch(url, {
        method: "POST",
        body: formdata
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
  return (
    <div>
      <label className="required">
        Material: {"    "}
        <Field
          validate={validateField}
          as="select"
          name="material.materialType"
          onChange={handleChange}
        >
          {(serviceType === "spdt" ||
            (serviceType === "optical" && !isStock)) && (
            <Fragment>
              <option value="N/A">Please select</option>
              <option value="Aluminium">Aluminium</option>
              <option value="Nickel">Nickel</option>
              <option value="Titanium">Titanium</option>
              <option value="Copper">Copper</option>
              <option value="ZnSe">ZnSe</option>
              <option value="CaF2">CaF2</option>
              <option value="BaF2">BaF2</option>
              <option value="MgF2">MgF2</option>
              <option value="Silicon">Silicon</option>
              <option value="Germanium">Germanium</option>
              <option value="PMMA">PMMA</option>
              <option value="Polycarbonate">Polycarbonate</option>
              <option value="Vespel">Vespel</option>
              <option value="Nylon">Nylon</option>
              <option value="Delrin">Delrin </option>
              <option value="PTFE">PTFE </option>
              {serviceType === "optical" && (
                  <>
                    <option value="Silica">Silica</option>
                    <option value="other">Other</option>
                  </>
              )}
            </Fragment>
          )}
          {serviceType === "optical" && isStock && (
            <Fragment>
              <option value="N/A">Please select</option>
              <option value="ø12.7mm x 4mm DSP UVFS">
                ø12.7mm x 4mm DSP UVFS
              </option>
              <option value="ø25.4mm x 6mm DSP UVFS">
                ø25.4mm x 6mm DSP UVFS
              </option>
              <option value="ø50.8mm x 8mm DSP UVFS">
                ø50.8mm x 8mm DSP UVFS
              </option>
            </Fragment>
          )}
          {serviceType === "photonic" && (
            <Fragment>
              <option value="other">Other</option>
              <br />
              <label>
                Please describe substrate and all existing layers in special
                instructions
              </label>
            </Fragment>
          )}
        </Field>
      </label>
      {serviceType === "photonic" && (
        <Fragment>
          <br />
          <label>
            Please describe substrate and all existing layers in special
            instructions
          </label>
          <div>
            <br />
            <label className="required">
              Toxicity:
              <Field
                as="select"
                name="material.toxicity"
                onChange={handleChange}
              >
                <Fragment>
                  <option value="N/A">Please select</option>
                  <option value="toxic">Toxic</option>
                  <option value="radioactive">Radioactive</option>
                  <option value="toxic and radioactive">
                    Toxic and Radioactive
                  </option>
                  <option value="non-toxic">
                    Non-toxic
                  </option>
                </Fragment>
              </Field>
            </label>
            <br />
            <MyTextInput
              name="material.type"
              label="Type (e.g.BK7): "
              onChange={handleChange}
            />
            <MyTextInput
              name="material.maxTemperature"
              label="Max Temperature(°C): "
              onChange={handleChange}
            />
            <MyTextArea
              name="material.hazards"
              label="Hazards: "
              onChange={handleChange}
            />
            <MyTextArea
              name="material.specialInstructions"
              label="Special Instructions: "
              onChange={handleChange}
            />
            <label className="required" id="compatibility">
              Chemical compatibility for cleaning:
              <span role="group" aria-labelledby="compatibility">
                <label>
                  <Field
                    type="radio"
                    name="material.chemicalCompatibilityForCleaning"
                    value="yes"
                  />
                  Yes
                </label>
                <label>
                  <Field
                    type="radio"
                    name="material.chemicalCompatibilityForCleaning"
                    value="no"
                  />
                  No
                </label>
              </span>
              <br />* Please tell us if any of the parts react with Liquinox
              brand detergent, DI water, acetone, isopropanol alcohol, ethanol,
              methanol, citranox, ultrasonic agitation. If you wish to have the
              substrate cleaned with a special regimen, please add full details
              to special requirements.
            </label>
            <br />
            <label className="required" id="MTA">
              <strong>Material Transfer Agreement: </strong>
              <span role="group" aria-labelledby="MTA">
                <label>
                  <Field
                    type="radio"
                    name="material.materialTransferAgreement"
                    value="standard"
                  />
                  Standard MTA
                </label>
                <label>
                  <Field
                    type="radio"
                    name="material.materialTransferAgreement"
                    value="custom"
                  />
                  Custom MTA (pdf only)
                </label>
                <label>
                  <Field
                    type="radio"
                    name="material.materialTransferAgreement"
                    value="to be agreed"
                  />
                  To Be Agreed
                </label>
              </span>
            </label>
          </div>
        </Fragment>
      )}

      {materialValues.materialType === "other" && serviceType === "optical" && (
        <div>
          <br />
          <label className="required">
            Toxicity:
            <Field as="select" name="material.toxicity" onChange={handleChange}>
              <Fragment>
                <option value="N/A">Please select</option>
                <option value="toxic">Toxic</option>
                <option value="radioactive">Radioactive</option>
                <option value="toxic and radioactive">
                  Toxic and Radioactive
                </option>
                <option value="non-toxic">
                  Non-toxic
                </option>
              </Fragment>
            </Field>
          </label>
          <br />
          <MyTextInput
            name="material.type"
            label="Type (e.g.BK7): "
            onChange={handleChange}
          />
          <MyTextInput
            name="material.maxTemperature"
            label="Max Temperature(°C): "
            onChange={handleChange}
          />
          <MyTextArea
            name="material.hazards"
            label="Hazards: "
            onChange={handleChange}
          />
          <MyTextArea
            name="material.specialInstructions"
            label="Special Instructions: "
            onChange={handleChange}
          />
          <label className="required" id="compatibility">
            Chemical compatibility for cleaning:
            <span role="group" aria-labelledby="compatibility">
              <label>
                <Field
                  type="radio"
                  name="material.chemicalCompatibilityForCleaning"
                  value="yes"
                />
                Yes
              </label>
              <label>
                <Field
                  type="radio"
                  name="material.chemicalCompatibilityForCleaning"
                  value="no"
                />
                No
              </label>
            </span>
            <br />* Please tell us if any of the parts react with Liquinox brand
            detergent, DI water, acetone, isopropanol alcohol, ethanol,
            methanol, citranox, ultrasonic agitation. If you wish to have the
            substrate cleaned with a special regimen, please add full details to
            special requirements.
          </label>
          <br />
          <label className="required" id="MTA">
            <strong>Material Transfer Agreement: </strong>
            <span role="group" aria-labelledby="MTA">
              <label>
                <Field
                  type="radio"
                  name="material.materialTransferAgreement"
                  value="standard"
                />
                Standard MTA
              </label>
              <label>
                <Field
                  type="radio"
                  name="material.materialTransferAgreement"
                  value="custom"
                />
                Custom MTA (pdf only)
              </label>
              <label>
                <Field
                  type="radio"
                  name="material.materialTransferAgreement"
                  value="to be agreed"
                />
                To Be Agreed
              </label>
            </span>
          </label>
        </div>
      )}
      {materialValues.materialType === "other" &&
        (serviceType === "optical" || serviceType === "photonic") &&
        materialValues.materialTransferAgreement === "standard" && (
          <Fragment>
            <label>please upload pdf files: </label>
            <input
                type="file"
                name="description"
                accept=".pdf"
                onChange={MTAFileUpload}
                ref={MTARefUpload}
            />
            <br />
          </Fragment>
        )}
      {materialValues.materialType === "other" &&
        (serviceType === "optical" || serviceType === "photonic") &&
        materialValues.materialTransferAgreement === "custom" && (
          <Fragment>
            <label>please upload pdf files: </label>
            <input
                type="file"
                name="description"
                accept=".pdf"
                onChange={MTAFileUpload}
                ref={MTARefUpload}
            />
            <br />
          </Fragment>
        )}
    </div>
  );
}

import { Field, useFormikContext } from "formik";
import React, {Fragment, useState, useEffect, useRef} from "react";
import { MyTextArea } from "../fields/MyTextArea";
import { MyTextInput } from "../fields/MyTextInput";
import { validateField } from "../Helpers";

export const geometryInitialValues = {
  geometryType: "",
  majorDiameter: "",
  minorDiameter: "",
  thickness: "",
  wedge: 0,
  chamferWidth: 0,
  width: "",
  length: "",
  sideLength: "",
  dimensionalAccuracy: "",
  numberOfSides: "",
};

export default function Geometry({
  geometryValues,
  handleChange,
  blankSource,
  substrateSource,
  serviceType,
}) {
  const refUpload = useRef(null);

  function geometryFileUpload(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let fileType = file.name.substring(
        file.name.indexOf(".") + 1,
        file.name.length
    );
    if (
        fileType !== "dxf" &&
        fileType !== "stp" &&
        fileType !== "stl"
    ) {
      alert("Please upload dxf/stp/stl file");
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


  const [radius, setRadius] = useState(0);
  const {values: {geometry: {numberOfSides, sideLength}}} = useFormikContext()
  useEffect(() => {
    // temporary calculation
    setRadius(Number(numberOfSides) * Number(sideLength))
  }, [numberOfSides, sideLength])

  return (
    <div>
      <label className="required">
        Geometry: {"    "}
        <Field
          validate={validateField}
          as="select"
          name="geometry.geometryType"
        >
          <option value="N/A">Please select</option>
          <option value="circular/elliptical">Circular/Elliptical</option>
          <option value="rectangle">Rectangle</option>
          <option value="regular polygon">Regular Polygon</option>
          <option value="other">Other</option>
        </Field>
      </label>
      <br />
      {geometryValues.geometryType === "circular/elliptical" && (
        <Fragment>
          <MyTextInput
            labelClass="required"
            validate={validateField}
            label="Major Diameter (mm):  "
            placeholder="enter a float number here"
            name="geometry.majorDiameter"
            onChange={handleChange}
          />
          <MyTextInput
            label="Minor Diameter (mm):"
            name="geometry.minorDiameter"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            labelClass="required"
            validate={validateField}
            label="Thickness (mm):"
            name="geometry.thickness"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            label="Wedge (arcsecond):"
            name="geometry.wedge"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            label="Chamfer width (mm):"
            name="geometry.chamferWidth"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          {serviceType === 'SPDT Optic' 
                ?   
                <p>
                  Chamfers are assumed to be symmetric between the coated or turned face and neighbouring faces. 
                  If other chamfer types are required, please stipulate in the 'Additional Specifications' field.
                </p> 
                :
                <p>
                  Chamfers are assumed to be 45 degrees to the coated or turned face.
                  If other chamfer types are required, please stipulate in the
                  'Additional Specifications' field.
                </p>
          }
        </Fragment>
      )}
      {geometryValues.geometryType === "rectangle" && (
        <Fragment>
          <MyTextInput
            labelClass="required"
            validate={validateField}
            label="Width (mm):"
            name="geometry.width"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            label="Length (mm):"
            name="geometry.length"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            labelClass="required"
            validate={validateField}
            label="Thickness (mm):"
            name="geometry.thickness"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            label="Wedge (arcsecond):"
            name="geometry.wedge"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            label="Chamfer width (mm):"
            name="geometry.chamferWidth"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          {serviceType === 'SPDT Optic' 
                ?   
                <p>
                  Chamfers are assumed to be symmetric between the coated or turned face and neighbouring faces. 
                  If other chamfer types are required, please stipulate in the 'Additional Specifications' field.
                </p> 
                :
                <p>
                  Chamfers are assumed to be 45 degrees to the coated or turned face.
                  If other chamfer types are required, please stipulate in the
                  'Additional Specifications' field.
                </p>
          }
        </Fragment>
      )}
      {geometryValues.geometryType === "regular polygon" && (
        <Fragment>
          <MyTextInput
            labelClass="required"
            validate={validateField}
            label="Number of Sides:"
            name="geometry.numberOfSides"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            labelClass="required"
            validate={validateField}
            label="Side Length (mm):"
            name="geometry.sideLength"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <p>
            Radius: {radius}
          </p>
          <MyTextInput
            labelClass="required"
            validate={validateField}
            label="Thickness (mm):"
            name="geometry.thickness"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            label="Wedge (arcsecond):"
            name="geometry.wedge"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          <MyTextInput
            label="Chamfer width (mm):"
            name="geometry.chamferWidth"
            placeholder="enter a float number here"
            onChange={handleChange}
          />
          {serviceType === 'SPDT Optic' 
                ?   
                <p>
                  Chamfers are assumed to be symmetric between the coated or turned face and neighbouring faces. 
                  If other chamfer types are required, please stipulate in the 'Additional Specifications' field.
                </p> 
                :
                <p>
                  Chamfers are assumed to be 45 degrees to the coated or turned face.
                  If other chamfer types are required, please stipulate in the
                  'Additional Specifications' field.
                </p>
          }
        </Fragment>
      )}
      {geometryValues.geometryType === "other" && (
        <Fragment>
          <label>please upload dxf/stp/stl files: </label>
          <input
              type="file"
              name="description"
              accept=".dxf,.stp,.stl"
              onChange={geometryFileUpload}
              ref={refUpload}
          />
          <br />
        </Fragment>
      )}
      {geometryValues.geometryType !== geometryInitialValues.geometryType && (
        <Fragment>
          <br />
          <MyTextArea
            labelClass="required"
            validate={validateField}
            label="Dimensional Accuracy (mm): "
            name="geometry.dimensionalAccuracy"
            placeholder="Please specify the dimensional accuracy here..."
            cols={80}
            onChange={handleChange}
          />
          {serviceType === 'SPDT Optic' 
                ?
            <p>
              Our standard tolerances when machining blanks is 0.125mm. 
              <br/>
              If tighter tolerances are required, let us know in the 'Tolerances' field below. 
              <br/>
              Note that this refers to part geometry not surface or form of diamond turned faces.
            </p>
                :
            <p>
              Our standard tolerances on substrates are as follows. If different
              tolerances are required, let us know in the ‘Tolerances’ field
              below.
              <br />
              Optical substrates:
              <br />
              Diameter/Face Dimensions: ±0.15mm
              <br />
              Thickness: ±0.15mm
              <br />
              Wafers:
              <br />
              Diameter: +- 0.1mm
              <br />
              Thickness: +- 25um
            </p>
          }

        </Fragment>
      )}
    </div>
  );
}

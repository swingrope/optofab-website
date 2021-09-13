import { Field } from 'formik'
import React, { Fragment } from 'react'
import { MyTextArea } from '../fields/MyTextArea'
import { MyTextInput } from '../fields/MyTextInput'
import { validateField } from '../Helpers'

export const geometryInitialValues = {
    geometryType: '',
    majorDiameter: '',
    minorDiameter: '',
    thickness: '',
    wedge: 0,
    chamferWidth: 0,
    width: '',
    length: '',
    sideLength: '',
    dimensionalAccuracy: '',
    numberOfSides:''
}

export default function Geometry({geometryValues, handleChange, blankSource, substrateSource, serviceType}) {
    return (
        <div>
            <label className="required">
                Geometry:
                <Field validate={validateField} as='select' name='geometry.geometryType' >
                    <option value='N/A'>Please select</option>
                    <option value='circular/elliptical'>Circular/Elliptical</option>
                    <option value='rectangle'>Rectangle</option>
                    <option value='regular polygon'>Regular Polygon</option>
                    <option value='other'>Other</option>
                </Field>
            </label>
            <br />
            {geometryValues.geometryType === 'circular/elliptical' && (
                <Fragment>
                    <MyTextInput labelClass="required" validate={validateField} label='Major Diameter (mm):' name='geometry.majorDiameter' onChange={handleChange} />
                    <MyTextInput label='Minor Diameter (mm):' name='geometry.minorDiameter' onChange={handleChange} />
                    <MyTextInput labelClass="required" validate={validateField} label='Thickness (mm):' name='geometry.thickness' onChange={handleChange} />
                    <MyTextInput label='Wedge (arcsecond):' name='geometry.wedge' onChange={handleChange} />
                    <MyTextInput label='Chamfer width (mm):' name='geometry.chamferWidth' onChange={handleChange} />
                    <label>Chamfers are assumed to be 45 degrees to the coated or turned face. If other chamfer types are required, please stipulate in the 'Additional Specifications' field.</label>
                </Fragment>
            )}
            {geometryValues.geometryType === 'rectangle' && (
                <Fragment>
                    <MyTextInput labelClass="required" validate={validateField} label='Width (mm):' name='geometry.width' onChange={handleChange} />
                    <MyTextInput label='Length (mm):' name='geometry.length' onChange={handleChange} />
                    <MyTextInput labelClass="required" validate={validateField} label='Thickness (mm):' name='geometry.thickness' onChange={handleChange} />
                    <MyTextInput label='Wedge (arcsecond):' name='geometry.wedge' onChange={handleChange} />
                    <MyTextInput label='Chamfer width (mm):' name='geometry.chamferWidth' onChange={handleChange} />
                    <label>Chamfers are assumed to be 45 degrees to the coated or turned face. If other chamfer types are required, please stipulate in the 'Additional Specifications' field.</label>
                </Fragment>
            )}
            {geometryValues.geometryType === 'regular polygon' && (
                <Fragment>
                    <MyTextInput labelClass="required" validate={validateField} label='Number of Sides:' name='geometry.numberOfSides' onChange={handleChange} />
                    <MyTextInput labelClass="required" validate={validateField} label='Side Length (mm):' name='geometry.sideLength' onChange={handleChange} />
                    <MyTextInput labelClass="required" validate={validateField} label='Thickness (mm):' name='geometry.thickness' onChange={handleChange} />
                    <MyTextInput label='Wedge (arcsecond):' name='geometry.wedge' onChange={handleChange} />
                    <MyTextInput label='Chamfer width (mm):' name='geometry.chamferWidth' onChange={handleChange} />
                    <label>Chamfers are assumed to be 45 degrees to the coated or turned face. If other chamfer types are required, please stipulate in the 'Additional Specifications' field.</label>
                </Fragment>
            )}
            {geometryValues.geometryType === 'other' && (
                <Fragment>
                    <label>
                        <button>Upload file</button>
                        Max 5M PDF / PNG only
                    </label>
                    <br />
                    <MyTextArea labelClass="required" validate={validateField} label='Dimensional Accuracy (mm): ' name='geometry.dimensionalAccuracy' onChange={handleChange} />
                    <p>
                        Our standard tolerances on substrates are as follows. If different tolerances are required, let us know in the ‘Tolerances’ field below.
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
                </Fragment>
            )}
            {(geometryValues.geometryType !== geometryInitialValues.geometryType && (blankSource === 'ANFF supplied' || blankSource === 'Customer supplied' || substrateSource=== 'ANFF supplied – full custom')) && (
                <Fragment>
                    <MyTextArea labelClass="required" validate={validateField} label='Dimensional Accuracy (mm): ' name='geometry.dimensionalAccuracy' onChange={handleChange} />
                    <p>
                        Our standard tolerances on substrates are as follows. If different tolerances are required, let us know in the ‘Tolerances’ field below.
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
                </Fragment>
            )}
        </div>
    )
}

import { Field } from 'formik'
import React, { Fragment } from 'react'
import { MyTextInput } from '../fields/MyTextInput'

export const geometryInitialValues = {
    geometryType: '',
    majorDiameter: '',
    minorDiamter: '',
    thickness: '',
    wedge: '',
    chamferx: '',
    chamfery: '',
    width: '',
    height: '',
    sideLength: '',
    dimensionalAccuracy: ''
}

export default function Geometry({geometryValues, handleChange, blankSource}) {
    console.log(blankSource)
    return (
        <div>
            <label>
                Geometry:
                <Field as='select' name='geometry.geometryType' >
                    <option value='N/A'>Please select</option>
                    <option value='oval'>Oval</option>
                    <option value='rectangle'>Rectangle</option>
                    <option value='regular polygon'>Regular Polygon</option>
                    <option value='other'>Other</option>
                </Field>
            </label>
            <br />
            {geometryValues.geometryType === 'oval' && (
                <Fragment>
                    <MyTextInput label='Major Diameter (mm):' name='geometry.majorDiameter' onChange={handleChange} />
                    <MyTextInput label='Minor Diameter (mm):' name='geometry.minorDiameter' onChange={handleChange} />
                    <MyTextInput label='Thickness (mm):' name='geometry.thickness' onChange={handleChange} />
                    <MyTextInput label='Wedge (arcsecond):' name='geometry.wedge' onChange={handleChange} />
                    <MyTextInput label='Chamfer x:' name='geometry.chamferx' onChange={handleChange} />
                    <MyTextInput label='Chamfer y:' name='geometry.chamfery' onChange={handleChange} />
                </Fragment>
            )}
            {geometryValues.geometryType === 'rectangle' && (
                <Fragment>
                    <MyTextInput label='Width (mm):' name='geometry.width' onChange={handleChange} />
                    <MyTextInput label='Height (mm):' name='geometry.height' onChange={handleChange} />
                    <MyTextInput label='Thickness (mm):' name='geometry.thickness' onChange={handleChange} />
                    <MyTextInput label='Wedge (arcsecond):' name='geometry.wedge' onChange={handleChange} />
                    <MyTextInput label='Chamfer x:' name='geometry.chamferx' onChange={handleChange} />
                    <MyTextInput label='Chamfer y:' name='geometry.chamfery' onChange={handleChange} />
                </Fragment>
            )}
            {geometryValues.geometryType === 'regular polygon' && (
                <Fragment>
                    <MyTextInput label='Side Length (mm):' name='geometry.sideLength' onChange={handleChange} />
                    <MyTextInput label='Thickness (mm):' name='geometry.thickness' onChange={handleChange} />
                    <MyTextInput label='Wedge (arcsecond):' name='geometry.wedge' onChange={handleChange} />
                    <MyTextInput label='Chamfer x:' name='geometry.chamferx' onChange={handleChange} />
                    <MyTextInput label='Chamfer y:' name='geometry.chamfery' onChange={handleChange} />
                </Fragment>
            )}
            {geometryValues.geometryType === 'other' && (
                <Fragment>
                    <label>
                        <button>Upload file</button>
                        Max 5M PDF / PNG only
                    </label>
                </Fragment>
            )}
            {(geometryValues.geometryType !== geometryInitialValues.geometryType && blankSource === 'Custom supplied') && (
                <Fragment>
                    <MyTextInput label='Dimensional Accuracy (mm): ±' name='geometry.dimensionalAccuracy' onChange={handleChange} />
                </Fragment>
            )}
        </div>
    )
}

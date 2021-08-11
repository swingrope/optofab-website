import { Field } from 'formik'
import React from 'react'

export const specInitialValues = {
    wavelengthMin: '',
    wavelengthMax: '',
    polarisation: '',
    sMin: '',
    sMax: '',
    pMin: '',
    pMax: '',
    unpMin: '',
    unpMax: '',
    AOItheta1: '',
    AOItheta2: ''
}

export default function Spec({sideIndex, index, handleChange}) {

    let specNum = index + 1
    return (
        <div>
            <h3>Spec {specNum}</h3>
            <div>
                Wavelength (nm): &nbsp;&nbsp;&nbsp;
                <label>min: <Field name={`surface[${sideIndex}].coating.specs[${index}].wavelengthMin`} onChange={handleChange} /></label>
                <label>max: <Field name={`surface[${sideIndex}].coating.specs[${index}].wavelengthMax`} onChange={handleChange} /></label>
            </div>
            <div>
                S: &nbsp;&nbsp;&nbsp;
                <label>min: <Field name={`surface[${sideIndex}].coating.specs[${index}].sMin`} onChange={handleChange} /></label>
                <label>max: <Field name={`surface[${sideIndex}].coating.specs[${index}].sMax`} onChange={handleChange} /></label>
            </div>
            <div>
                P: &nbsp;&nbsp;&nbsp;
                <label>min: <Field name={`surface[${sideIndex}].coating.specs[${index}].pMin`} onChange={handleChange} /></label>
                <label>max: <Field name={`surface[${sideIndex}].coating.specs[${index}].pMax`} onChange={handleChange} /></label>
            </div>
            <div>
                UNP: &nbsp;&nbsp;&nbsp;
                <label>min: <Field name={`surface[${sideIndex}].coating.specs[${index}].unpMin`} onChange={handleChange} /></label>
                <label>max: <Field name={`surface[${sideIndex}].coating.specs[${index}].unpMax`} onChange={handleChange} /></label>
            </div>
            <label>
                Polarisation:
                <Field as='select' name={`surface[${sideIndex}].coating.specs[${index}].polarisation`} onChange={handleChange} >
                    <option value='N/A'>Please select</option>
                </Field>
            </label>
            <div>
                Angle of Incidence: &nbsp;&nbsp;&nbsp;
                <label>θ1: <Field name={`surface[${sideIndex}].coating.specs[${index}].AOItheta1`} onChange={handleChange} /></label>
                <label>θ2: <Field name={`surface[${sideIndex}].coating.specs[${index}].AOItheta2`} onChange={handleChange} /></label>
            </div>
        </div>
    )
}

import { Field } from 'formik'
import React from 'react'

export const specInitialValues = {
    wavelengthMin: '',
    wavelengthMax: '',
    polarisation: '',
    RTSelect:'',
    min: '',
    max: '',
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
                <label>
                    <Field name={`surface[${sideIndex}].coating.specs[${index}].RTSelect`} as='select' onChange={handleChange}>
                        <option value='N/A'>Please Select</option>
                        <option value='Reflection'>Reflection</option>
                        <option value='Transmission'>Transmission</option>
                    </Field>
                </label>
                <label>min: <Field name={`surface[${sideIndex}].coating.specs[${index}].min`} onChange={handleChange} /></label>
                <label>max: <Field name={`surface[${sideIndex}].coating.specs[${index}].max`} onChange={handleChange} /></label>
            </div>
            <label>
                Polarisation:
                <Field as='select' name={`surface[${sideIndex}].coating.specs[${index}].polarisation`} onChange={handleChange} >
                    <option value='N/A'>Please select</option>
                    <option value='S'>S</option>
                    <option value='P'>P</option>
                    <option value='UNP'>UNP</option>
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

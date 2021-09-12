import { Field } from 'formik'
import React from 'react'
import { validateField } from '../Helpers'

export const specInitialValues = {
    wavelengthMin: '',
    wavelengthMax: '',
    polarisation: '',
    RTSelect:'',
    min: '',
    max: '',
    unit: '',
    AOImin: '',
    AOImax: ''
}

export default function Spec({sideIndex, index, handleChange}) {

    const specNum = index + 1
    return (
        <div>
            <h3>Spec {specNum}</h3>
            <div className="required">
                Wavelength (nm): &nbsp;&nbsp;&nbsp;
                <label>min: <Field name={`surface[${sideIndex}].coating.specs[${index}].wavelengthMin`} validate={validateField} onChange={handleChange} /></label>
                <label>max: <Field name={`surface[${sideIndex}].coating.specs[${index}].wavelengthMax`} validate={validateField} onChange={handleChange} /></label>
            </div>
            <div>
                <label className="required">
                    <Field name={`surface[${sideIndex}].coating.specs[${index}].RTSelect`} as='select' onChange={handleChange}>
                        <option value='N/A'>Please Select</option>
                        <option value='Reflection'>Reflection</option>
                        <option value='Transmission'>Transmission</option>
                    </Field>
                </label>
                <label>min: <Field name={`surface[${sideIndex}].coating.specs[${index}].min`} onChange={handleChange} /></label>
                <label>max: <Field name={`surface[${sideIndex}].coating.specs[${index}].max`} onChange={handleChange} /></label>
                <label>
                    <Field name={`surface[${sideIndex}].coating.specs[${index}].unit`} as='select' onChange={handleChange}>
                        <option value='N/A'>Please Select</option>
                        <option value='ppm'>ppm</option>
                        <option value='%'>%</option>
                        <option value='dB'>dB</option>
                    </Field>
                </label>
            </div>
            <label className="required">
                Polarisation:
                <Field validate={validateField} as='select' name={`surface[${sideIndex}].coating.specs[${index}].polarisation`} onChange={handleChange} >
                    <option value='N/A'>Please select</option>
                    <option value='S'>S</option>
                    <option value='P'>P</option>
                    <option value='UNP'>UNP</option>
                </Field>
            </label>
            <div className="required">
                Angle of Incidence: &nbsp;&nbsp;&nbsp;
                <label>min: <Field validate={validateField} name={`surface[${sideIndex}].coating.specs[${index}].AOImin`} onChange={handleChange} /></label>
                <label>max: <Field validate={validateField} name={`surface[${sideIndex}].coating.specs[${index}].AOImax`} onChange={handleChange} /></label>
            </div>
        </div>
    )
}

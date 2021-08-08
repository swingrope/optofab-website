import { Field } from 'formik'
import React from 'react'
import {MyTextArea} from '../fields/MyTextArea.js'

export const surfaceInitialValues = {
    descriptionOfFace: '',
    curvature: ''
}

export default function Surface({handleChange, index, surfaceValues}) {
    let sideNumber = index + 1
    return (
        <div>
            <h3>Side {sideNumber}</h3>
            <MyTextArea 
                label='Description Of Face:' 
                name={`surface.${index}.descriptionOfFace`}
                placeholder='Leave the description here' 
                rows={3}
                onChange={handleChange}
            />
            <label>
                Curvature:
                <Field as='select' name={`surface.${index}.curvature`} onChange={handleChange} >
                    <option value='flat'>Flat</option>
                    <option value='parabolic'>Parabolic</option>
                    <option value='spherical'>Spherical</option>
                    <option value='aspheric'>Aspheric</option>
                    <option value='other'>Other</option>
                </Field>
            </label>
        </div>
    )
}

import React from 'react'
import { MyTextArea } from '../fields/MyTextArea'
import { Field } from 'formik'

export const SpdtStandardInitialValues = {
    DescriptionOfFace: '',
    Curvature: ''
}

export default function SpdtStandard({index, handleChange, values}) {
    let sideNumber = index + 1
    return (
        <div>
            <h3>Side {sideNumber}</h3>
            <MyTextArea 
                name='DescriptionOfFace'
                label='Description Of Face: '
                onChange={handleChange}
                rows={3}
            />
            <div id="curvature">Curvature: </div>
                <div role="group" aria-labelledby="curvature">
                <label>
                    <Field type="radio" name="Curvature" value="Flat" />
                    Flat
                </label>
                <label>
                    <Field type="radio" name="Curvature" value="Toric" />
                    Toric
                </label>
                <label>
                    <Field type="radio" name="Curvature" value="Parabolic" />
                    Parabolic
                </label>
                <label>
                    <Field type="radio" name="Curvature" value="Spherical" />
                    Spherical
                </label>
                <label>
                    <Field type="radio" name="Curvature" value="Aspheric" />
                    Aspheric
                </label>
                <label>
                    <Field type="radio" name="Curvature" value="Other" />
                    Other
                </label>
            </div>
        </div>
    )
}

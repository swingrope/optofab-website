import { Field } from 'formik'
import React from 'react'
import Geometry from './Geometry'

export const substrateInitialValues = {
    substrateType: '',
    inStock: '',
    geometryType: ''
}

export default function Substrate({namespace, index, values, handleChange}) {
    let substrateType = values[namespace][0].substrate.substrateType
    console.log(substrateType)
    return (
        <div>
            {/* Material will be written later*/}
            <h3>Substrate type: </h3>
            <Field as='select' name={`${namespace}.${index}.substrate.substrateType`} onChange={handleChange}>
                <option value='N/A'>Please select</option>
                <option value='stock'>ANFF supplied - stock</option> 
                <option value='supplied'>Customer Supplied</option>
                <option value='custom'>ANFF supplied - full custom</option>
            </Field>
            <br />
            {substrateType === 'stock' && (
                <label>
                    In stock:
                    <Field as='select' name={`${namespace}.${index}.substrate.inStock`} onChange={handleChange}>
                        <option value='N/A'>Please select</option>
                    </Field>
                </label>
            )}
            {substrateType === 'supplied' && (
                <label>
                    Geometry:
                    <Field as='select' name={`${namespace}.${index}.substrate.geometryType`} onChange={handleChange}>
                        <option value='N/A'>Please select</option>
                        <option value='oval'>Oval</option> 
                        <option value='rectangle'>Rectangle</option>
                        <option value='regularPolygon'>Regular Polygon</option>
                        <option value='other'>Other</option>
                    </Field>
                    <Geometry namespace={namespace} />
                </label>
            )}
        </div>
    )
}

import { Field } from 'formik'
import React from 'react'
import { MyTextInput } from '../fields/MyTextInput'
import { validateField } from '../Helpers'

export const layerInitialValues = {
    thicknessOfLayer: '',
    thicknessTolerance: '',
    material: '',
    refractiveIndex: '',
    tolerance: '',
    wavelength: ''
}

export default function Layer({sideIndex, index, handleChange}) {
    const layerNum = index + 1

    return (
        <div>
            <h3>Layer {layerNum}</h3>
            <MyTextInput 
                labelClass='required'
                validate={validateField}
                label='Thickness of Layer(nm): ' 
                name={`surface[${sideIndex}].coating.layers[${index}].thicknessOfLayer`}
                onChange={handleChange}
            />
            <MyTextInput 
                labelClass='required'
                validate={validateField}
                label='Thickness Tolerance(nm): ' 
                name={`surface[${sideIndex}].coating.layers[${index}].thicknessTolerance`}
                onChange={handleChange}
            />
            <label className='required'>
                Material: 
                <Field 
                validate={validateField}
                as='select' 
                name={`surface[${sideIndex}].coating.layers[${index}].material`}
                onChange={handleChange}
                >
                    <option value='N/A'>Please select</option>
                    <option value='Silica'>Silica</option>
                    <option value='Tantala'>Tantala</option>
                </Field>
            </label>
            <MyTextInput 
                label='Refractive index: ' 
                br={false}
                name={`surface[${sideIndex}].coating.layers[${index}].refractiveIndex`}
                onChange={handleChange}
            />
            <MyTextInput 
                label='±'
                name={`surface[${sideIndex}].coating.layers[${index}].tolerance`}
                onChange={handleChange}
            />
            <MyTextInput 
                label='Wavelength (nm): ' 
                name={`surface[${sideIndex}].coating.layers[${index}].wavelength`}
                onChange={handleChange}
            />
        </div>
    )
}

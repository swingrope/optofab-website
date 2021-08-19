import { Field } from 'formik'
import React from 'react'
import { MyTextInput } from '../fields/MyTextInput'

export const layerInitialValues = {
    thicknessOfLayer: '',
    thicknessTolerance: '',
    material: '',
    refractiveIndex: '',
    tolerance: '',
    wavelength: ''
}

export default function Layer({sideIndex, index, handleChange}) {
    let layerNum = index + 1

    return (
        <div>
            <h3>Layer {layerNum}</h3>
            <MyTextInput 
                label='Thickness of Layer(nm): ' 
                name={`surface[${sideIndex}].coating.layers[${index}].thicknessOfLayer`}
                onChange={handleChange}
            />
            <MyTextInput 
                label='Thickness Tolerance(nm): ' 
                name={`surface[${sideIndex}].coating.layers[${index}].thicknessTolerence`}
                onChange={handleChange}
            />
            <label>
                Material: 
                <Field 
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
                name={`surface[${sideIndex}].coating.layers[${index}].refractiveIndex`}
                onChange={handleChange}
            />
            <MyTextInput 
                label='Tolerance (nm): ' 
                name={`surface[${sideIndex}].coating.layers[${index}].refractiveIndex`}
                onChange={handleChange}
            />
            <MyTextInput 
                label='Wavelength (nm): ' 
                name={`surface[${sideIndex}].coating.layers[${index}].refractiveIndex`}
                onChange={handleChange}
            />
        </div>
    )
}

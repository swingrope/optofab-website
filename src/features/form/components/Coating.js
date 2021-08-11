import { Field, FieldArray } from 'formik'
import React, { useState } from 'react'
import { MyTextArea } from '../fields/MyTextArea'
import { MyTextInput } from '../fields/MyTextInput'
import Layer, { layerInitialValues } from './Layer'
import Spec, { specInitialValues } from './Spec'

export const coatingInitialValues = {
    layers: [{...layerInitialValues}],
    specs: [{ ...specInitialValues}]
}

export default function Coating({coatingValues, handleChange, index}) {
    
    // method1: index/thickness method2: transmission/reflection
    const [specMethod1, setSpecMethod1] = useState(false)

    const switchSpecMethod = (e) => {
        e.preventDefault()
        setSpecMethod1(!specMethod1)
    }

    const handleAddLayerOrSpec = (e, arrayHelpers) => {
        e.preventDefault()
        specMethod1 ? arrayHelpers.push({ ...layerInitialValues}) : arrayHelpers.push({ ...specInitialValues})
    }
    return (
        <div>
            <label>
                Coating specification method: {specMethod1 ? 'Index/thickness' : 'Tranmission/reflection'}
                <button onClick={e => switchSpecMethod(e)}>switch</button>
            </label>
            {specMethod1 ? (
                <FieldArray
                    name={`surface.${index}.coating.layers`}
                >
                    {arrayHelpers => (
                        <div>
                            {coatingValues.layers.map((layer, idx) => (
                                <Layer key={idx} sideIndex={index} index={idx} handleChange={handleChange} />
                            ))}
                            <button type='button' onClick={(e) => handleAddLayerOrSpec(e, arrayHelpers)}>Add a layer</button>
                        </div>
                    )}
                </FieldArray>
            ) : (
                <FieldArray
                    name={`surface.${index}.coating.specs`}
                >   
                    {arrayHelpers => (
                        <div>
                            {coatingValues.specs.map((spec, idx) => (
                                <Spec key={idx} sideIndex={index} index={idx} handleChange={handleChange} />
                            ))}
                            <button type='button' onClick={(e) => handleAddLayerOrSpec(e, arrayHelpers)}>Add a spec</button>
                        </div>
                    )}
                </FieldArray>
            )}
            <MyTextInput label='Coated Area Dimension: ' name={`surface[${index}].coating.coatedAreaDimension`} onChange={handleChange} />
            <MyTextInput label='Position: ' name={`surface[${index}].coating.position`} onChange={handleChange} />
            <MyTextArea label='Compensation Coating: ' name={`surface[${index}].coating.compensationCoating`} onChange={handleChange} />
            <MyTextArea label='Protective Coating: ' name={`surface[${index}].coating.protectiveCoating`} onChange={handleChange} />
            <MyTextArea label='Add Specification: ' name={`surface[${index}].coating.addSpecification`} onChange={handleChange} />
            <label>
                Deposition Process:
                <Field as='select' name={`surface[${index}].coating.depositionProcess`} onChange={handleChange}>
                    <option value="lowTempLowStress">Low Temperature + Low Stress</option>
                    <option value="highTempHighStress">High Temperature + High Stress</option>
                </Field>
            </label>
        </div>
    )
}

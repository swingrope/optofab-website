import { FieldArray } from 'formik'
import React, { Fragment, useState } from 'react'
import Layer, { layerInitialValues } from './Layer'

export const coatingInitialValues = {
    layers: [{...layerInitialValues}],
    specs: []
}

export default function Coating({coatingValues, handleChange, index}) {
    
    // method1: index/thickness method2: transmission/reflection
    const [specMethod1, setSpecMethod1] = useState(false)

    const switchSpecMethod = (e) => {
        e.preventDefault()
        setSpecMethod1(!specMethod1)
    }

    const handleAddLayer = (e, arrayHelpers) => {
        e.preventDefault()
        arrayHelpers.push({ ...layerInitialValues})
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
                            <button type='button' onClick={(e) => handleAddLayer(e, arrayHelpers)}>Add a layer</button>
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
                                <Layer key={idx} sideIndex={index} index={idx} handleChange={handleChange} />
                            ))}
                            <button type='button' onClick={(e) => handleAddLayer(e, arrayHelpers)}>Add a layer</button>
                        </div>
                    )}
                </FieldArray>
            )}
        </div>
    )
}

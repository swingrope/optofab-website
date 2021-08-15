import { Field } from 'formik'
import React, { Fragment } from 'react'
import { MyTextInput } from '../fields/MyTextInput'
import { MyTextArea } from '../fields/MyTextArea'

export const materialInitialValues = {
    materialType: '',
    reactivity: '',
    toxicity: '',
    type: '',
    maxTemperature: '',
    hazards: '',
    specialInstructions: '',
    chemicalCompatibilityForCleaning: '',
    materialTransferAgreement: ''
}

export default function Material({serviceType, handleChange, materialValues}) {
    return (
        <div>
            <label>
                Material:
                <Field as='select' name='material.materialType' onChange={handleChange}>
                    {serviceType === 'spdt' && (
                        <Fragment>
                            <option value='N/A'>Please select</option>
                        </Fragment>
                    )}
                    {serviceType === 'optical' && (
                        <Fragment>
                            <option value='N/A'>Please select</option>
                            <option value='other'>Other</option>
                        </Fragment>
                    )}
                </Field>            
            </label>
            {(materialValues.materialType === 'other' && serviceType === 'optical') && (
                <div>
                    <label>
                        Reactivity: 
                        <Field as='select' name='material.reactivity' onChange={handleChange}>
                            <Fragment>
                                <option value='N/A'>Please select</option>
                            </Fragment>
                        </Field>     
                    </label>
                    <br />
                    <label>
                        Toxicity: 
                        <Field as='select' name='material.toxicity' onChange={handleChange}>
                            <Fragment>
                                <option value='N/A'>Please select</option>
                            </Fragment>
                        </Field>     
                    </label>
                    <br />
                    <MyTextInput name='material.type' label='Type (e.g.BK7): ' onChange={handleChange} />
                    <MyTextInput name='material.maxTemperature' label='Max Temperature(°C): ' onChange={handleChange} />
                    <MyTextArea name='material.hazards' label='Hazards: ' onChange={handleChange} />
                    <MyTextArea name='material.specialInstructions' label='Special Instructions: ' onChange={handleChange} />
                    <label id="compatibility">
                        Chemical compatibility for cleaning: 
                        <span role="group" aria-labelledby="compatibility">
                            <label>
                            <Field type="radio" name="material.chemicalCompatibilityForCleaning" value="yes" />
                            Yes
                            </label>
                            <label>
                            <Field type="radio" name="material.chemicalCompatibilityForCleaning" value="no" />
                            No
                            </label>
                        </span>
                    </label>
                    <br />
                    <label id="MTA">
                        <strong>Material Transfer Agreement: </strong>
                        <span role="group" aria-labelledby="MTA">
                            <label>
                            <Field type="radio" name="material.materialTransferAgreement" value="standard" />
                            Standard
                            </label>
                            <label>
                            <Field type="radio" name="material.materialTransferAgreement" value="by agreement" />
                            By Agreement (via email1234567@anu.edu.au)
                            </label>
                        </span>
                    </label>

                </div>
            )}
        </div>
    )
}

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
                            <option value='Aluminium'>Aluminium</option>
                            <option value='Nickel'>Nickel</option>
                            <option value='Titanium'>Titanium</option>
                            <option value='Copper'>Copper</option>
                            <option value='ZnSe'>ZnSe</option>
                            <option value='CaF2'>CaF2</option>
                            <option value='BaF2'>BaF2</option>
                            <option value='MgF2'>MgF2</option>
                            <option value='Silicon'>Silicon</option>
                            <option value='Germanium'>Germanium</option>
                            <option value='PMMA'>PMMA</option>
                            <option value='Polycarbonate'>Polycarbonate</option>
                            <option value='Vespel'>Vespel</option>
                            <option value='Nylon'>Nylon</option>
                            <option value='Delrin'>Delrin </option>
                            <option value='PTFE'>PTFE </option>
                        </Fragment>
                    )}
                    {(serviceType === 'optical'||serviceType === 'photonic') && (
                        <Fragment>
                            <option value='N/A'>Please select</option>
                            <option value='other'>Other</option>
                        </Fragment>
                    )}
                </Field>            
            </label>
            {(materialValues.materialType === 'other' && (serviceType === 'optical'||serviceType === 'photonic')) && (
                <div>
                    <label>
                        Reactivity: 
                        <Field as='select' name='material.reactivity' onChange={handleChange}>
                            <Fragment>
                                <option value='N/A'>Please select</option>
                                <option value='reactive'>Reactive</option>
                                <option value='inert'>Inert</option>
                            </Fragment>
                        </Field>     
                    </label>
                    <br />
                    <label>
                        Toxicity: 
                        <Field as='select' name='material.toxicity' onChange={handleChange}>
                            <Fragment>
                                <option value='N/A'>Please select</option>
                                <option value='toxic'>Toxic</option>
                                <option value='radioactive'>Radioactive</option>
                                <option value='toxic and radioactive'>Toxic and Radioactive</option>
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
                        <br />
                        * Please tell us if any of the parts react with liquinox brand detergent, di water, acetone, isopropanol alcohol, ethanol, methanol, citranox, ultrasonic agitation. If you wish to have the substrate cleaned with a special regimen, please add full details to special requirements.
                    </label>
                    <br />
                    <label id="MTA">
                        <strong>Material Transfer Agreement: </strong>
                        <span role="group" aria-labelledby="MTA">
                            <label>
                            <Field type="radio" name="material.materialTransferAgreement" value="standard" />
                            Download Standard MTA
                            </label>
                            <label>
                            <Field type="radio" name="material.materialTransferAgreement" value="custom" />
                            Upload Custom MTA
                            </label>
                            <label>
                            <Field type="radio" name="material.materialTransferAgreement" value="to be agreed" />
                            To Be Agreed
                            </label>
                        </span>
                    </label>
                </div>
            )}
            {(materialValues.materialType === 'other' && (serviceType === 'optical'||serviceType === 'photonic') && materialValues.materialTransferAgreement==='standard') && (
                <label>
                    <button>Download</button>
                    Download Standard MTA
                </label>
            )}
            {(materialValues.materialType === 'other' && (serviceType === 'optical'||serviceType === 'photonic') && materialValues.materialTransferAgreement==='custom') && (
                <label>
                    <button>Upload</button>
                    Upload Custom MTA
                </label>
            )}

        </div>
    )
}

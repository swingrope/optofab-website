import { Formik, Form, Field, FieldArray } from 'formik'
import React, { Fragment } from 'react'
import Geometry, { geometryInitialValues } from './components/Geometry'
import Material, { materialInitialValues } from './components/Material'
import Surface, { surfaceInitialValues } from './components/Surface'
import {MyTextInput} from "./fields/MyTextInput";
import {MyTextArea} from "./fields/MyTextArea";

export const formInitialValues = {
    blankSource: '',
    substrateSource: '',
    stockSize: '',
    material: materialInitialValues,
    geometry: geometryInitialValues,
    surface: [surfaceInitialValues],
    quantity: '',
    specialInstructions:''
}

export const flattenObject = (obj) => {
    const flattened = {}
  
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, flattenObject(obj[key]))
      } else {
        flattened[key] = obj[key]
      }
    })
    return flattened
  }

export default function MainForm() {

      const getChangedValues = (values, initialValues) => {
        const flattenedValues = flattenObject(values)
        const flattenInitial = flattenObject(initialValues)
        // has bug
        return Object.entries(flattenedValues).reduce((acc, [key, value]) => {
            const hasChanged = flattenInitial[key] !== value
            if (hasChanged)
                acc[key] = value
            return acc
        }, {})
    }

    return (
        <Fragment>
            <h1>Request Form</h1>
            <Formik
                initialValues={formInitialValues}
                onSubmit={
                    async (values) => {
                        console.log(values)
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(getChangedValues(values, formInitialValues), null, 2));
                    }}
                >
                {({values, handleChange, handleSubmit}) => (
                    <Form>
                        <h1 id="service-type">Service Type: </h1>
                        <div role="group" aria-labelledby="service-type">
                            <label>
                            <Field type="radio" name="serviceType" value="SPDT Optic" />
                            SPDT Optic
                            </label>

                            <label>
                            <Field type="radio" name="serviceType" value="Optical Coating" />
                            Optical Coating
                            </label>
                            <label>
                            <Field type="radio" name="serviceType" value="Photonic Coating" />
                            Photonic Coating
                            </label>
                            <label>
                                <Field type="radio" name="serviceType" value="Integrated Optic Chip, Assembly and Others" />
                                Integrated Optic Chip, Assembly and Others
                            </label>                        </div>
                        <div>Picked: {values.serviceType}</div>
                            {
                                values.serviceType === "SPDT Optic" && (
                                    <Fragment>
                                        <label>
                                            Blank source:
                                            <Field name='blankSource' as='select'>
                                                <option value='ANFF supplied'>ANFF supplied</option>
                                                <option value='Customer supplied'>Customer supplied</option>
                                            </Field>
                                            <Material 
                                                serviceType='spdt' 
                                                handleChange={handleChange} 
                                                materialValues={values.material}
                                            />
                                            <Geometry
                                                handleChange={handleChange}
                                                geometryValues={values.geometry}
                                                blankSource={values.blankSource}
                                                substrateSource={'N/A'}
                                            />
                                            <FieldArray
                                                name='surface'
                                            >
                                                {({push}) => (
                                                    <div>
                                                        {values.surface.map((side, index) => (
                                                            <Surface 
                                                                key={index}
                                                                index={index} 
                                                                handleChange={handleChange}
                                                                surfaceValues={values.surface[index]}
                                                                blankSource={values.blankSource}
                                                                substrateSource={'N/A'}
                                                            />
                                                        ))}
                                                        <button type='button' onClick={() => push(surfaceInitialValues)}>Add a side</button>
                                                    </div>
                                                )}
                                            </FieldArray>
                                        </label>
                                    </Fragment>
                                )
                            }
                            {
                                values.serviceType === "Optical Coating" && (
                                    <Fragment>
                                        <label>
                                            Substrate source:
                                            <Field name='substrateSource' as='select'>
                                                <option value='N/A'>Please select</option>
                                                <option value='ANFF supplied-stock'>ANFF supplied-stock</option>
                                                <option value='Customer supplied'>Customer supplied</option>
                                                <option value='ANFF supplied – full custom'>ANFF supplied – full custom</option>
                                            </Field>
                                            {
                                                values.substrateSource === "ANFF supplied-stock" &&(
                                                    <Fragment>
                                                        <label><br />
                                                            In stock:
                                                            <Field name='stockSize' as='select' onChange={handleChange}>
                                                                <option value='N/A'>Please Select</option>
                                                                <option value='12.7mm'>12.7mm</option>
                                                                <option value='25.4mm'>25.4mm</option>
                                                                <option value='50.8mm'>50.8mm</option>
                                                            </Field>
                                                        </label>
                                                    </Fragment>
                                                )
                                            }
                                            {
                                                (values.substrateSource === "Customer supplied"||values.substrateSource === "ANFF supplied – full custom") &&(
                                                    <Fragment>
                                                        <Material
                                                            serviceType='optical'
                                                            handleChange={handleChange}
                                                            materialValues={values.material}
                                                        />
                                                        <Geometry
                                                            handleChange={handleChange}
                                                            geometryValues={values.geometry}
                                                            blankSource={'N/A'}
                                                            substrateSource={values.substrateSource}
                                                        />
                                                    </Fragment>
                                                )
                                            }
                                            <FieldArray
                                                name='surface'
                                            >
                                                {({push}) => (
                                                    <div>
                                                        {values.surface.map((side, index) => (
                                                            <Surface
                                                                key={index}
                                                                index={index}
                                                                handleChange={handleChange}
                                                                surfaceValues={values.surface[index]}
                                                                blankSource={'N/A'}
                                                                serviceType={values.serviceType}
                                                            />
                                                        ))}
                                                        <button type='button' onClick={() => push(surfaceInitialValues)}>Add a side</button>
                                                    </div>
                                                )}
                                            </FieldArray>

                                            {
                                                (values.substrateSource === "ANFF supplied-stock"||values.substrateSource === "Customer supplied"||values.substrateSource === "ANFF supplied – full custom") &&(
                                                    <Fragment>
                                                        <br />
                                                        <MyTextInput label='Quantity:' name='quantity' onChange={handleChange} />
                                                        <MyTextArea
                                                            label='Special instructions:'
                                                            name='specialInstructions'
                                                            placeholder='Leave the description here'
                                                            rows={3}
                                                            onChange={handleChange}
                                                        />
                                                        <label>
                                                            <button>Upload file</button>
                                                            Max 5M PDF / PNG only
                                                        </label>
                                                    </Fragment>
                                                )
                                            }
                                        </label>
                                        <br />
                                    </Fragment>
                                )
                            }
                        {
                            values.serviceType === "Photonic Coating" && (
                                <Fragment>
                                    <label>
                                        Substrate source:
                                        <Field name='substrateSource' as='select'>
                                            <option value='N/A'>Please select</option>
                                            <option value='ANFF supplied-stock'>ANFF supplied-stock</option>
                                            <option value='Customer supplied'>Customer supplied</option>
                                            <option value='ANFF supplied – full custom'>ANFF supplied – full custom</option>
                                        </Field>
                                        {
                                            values.substrateSource === "ANFF supplied-stock" &&(
                                                <Fragment>
                                                    <label><br />
                                                        In stock:
                                                        <Field name='stockSize' as='select' onChange={handleChange}>
                                                            <option value='N/A'>Please Select</option>
                                                            <option value='12.7mm'>12.7mm</option>
                                                            <option value='25.4mm'>25.4mm</option>
                                                            <option value='50.8mm'>50.8mm</option>
                                                        </Field>

                                                    </label>
                                                </Fragment>
                                            )
                                        }
                                        {
                                            (values.substrateSource === "Customer supplied"||values.substrateSource === "ANFF supplied – full custom") &&(
                                                <Fragment>
                                                    <Material
                                                        serviceType='optical'
                                                        handleChange={handleChange}
                                                        materialValues={values.material}
                                                    />
                                                    <Geometry
                                                        handleChange={handleChange}
                                                        geometryValues={values.geometry}
                                                        blankSource={'N/A'}
                                                        substrateSource={values.substrateSource}
                                                    />
                                                    <FieldArray
                                                        name='surface'
                                                    >
                                                        {({push}) => (
                                                            <div>
                                                                {values.surface.map((side, index) => (
                                                                    <Surface
                                                                        key={index}
                                                                        index={index}
                                                                        handleChange={handleChange}
                                                                        surfaceValues={values.surface[index]}
                                                                        blankSource={'N/A'}
                                                                        serviceType={values.serviceType}
                                                                    />
                                                                ))}
                                                                <button type='button' onClick={() => push(surfaceInitialValues)}>Add a side</button>
                                                            </div>
                                                        )}
                                                    </FieldArray>
                                                </Fragment>
                                            )
                                        }
                                        {
                                            (values.substrateSource === "ANFF supplied-stock"||values.substrateSource === "Customer supplied"||values.substrateSource === "ANFF supplied – full custom") &&(
                                                <Fragment>
                                                    <br />
                                                    <MyTextInput label='Quantity:' name='quantity' onChange={handleChange} />
                                                    <MyTextArea
                                                        label='Special instructions:'
                                                        name='specialInstructions'
                                                        placeholder='Leave the description here'
                                                        rows={3}
                                                        onChange={handleChange}
                                                    />
                                                    <label>
                                                        <button>Upload file</button>
                                                        Max 5M PDF / PNG only
                                                    </label>
                                                </Fragment>
                                            )
                                        }
                                    </label>
                                    <br />
                                </Fragment>
                            )
                        }
                        {
                            values.serviceType === "Integrated Optic Chip, Assembly and Others" && (
                                <Fragment>
                                    <label>
                                        For any requests or info about integrated optics and chip assembly please feel free to contact the following:<br />
                                        Node Director: A/Prof. Steve Madden<br />
                                        Email: stephen.madden@anu.edu.au<br />
                                        Phone: (02) 612 58574 or 0404 932 099<br />
                                    </label>
                                    <br />
                                </Fragment>
                            )
                        }
                        {
                            (values.serviceType === "Integrated Optic Chip, Assembly and Others"||values.serviceType === "Optical Coating"||values.serviceType === "Photonic Coating") && (
                                <button type="submit">Submit</button>
                            )
                        }
                    </Form>
                )}
            </Formik>
        </Fragment>
    )
}

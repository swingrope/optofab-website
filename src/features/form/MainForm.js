import { Formik, Form, Field, FieldArray } from 'formik'
import React, { Fragment } from 'react'
import Geometry, { geometryInitialValues } from './components/Geometry'
import Material, { materialInitialValues } from './components/Material'
import Surface, { surfaceInitialValues } from './components/Surface'
import {MyTextInput} from "./fields/MyTextInput";

export const formInitialValues = {
    blankSource: '',
    material: materialInitialValues,
    geometry: geometryInitialValues,
    dimensionalAccuracy: '',
    surface: [surfaceInitialValues]
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
                        console.log(formInitialValues)
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
                            <Field type="radio" name="serviceType" value="Integrated Optic Chip, Assembly and Others" />
                            Integrated Optic Chip, Assembly and Others
                            </label>
                            <label>
                            <Field type="radio" name="serviceType" value="Optical Coating" />
                            Optical Coating
                            </label>
                            <label>
                            <Field type="radio" name="serviceType" value="Photonic Coating" />
                            Photonic Coating
                            </label>
                        </div>
                        <div>Picked: {values.serviceType}</div>
                            {
                                values.serviceType === "SPDT Optic" && (
                                    <Fragment>
                                        <label>
                                            Blank source:
                                            <Field name='blankSource' as='select'>
                                                <option value='ANFF supplied'>ANFF supplied</option>
                                                <option value='Custom supplied'>Custom supplied</option>
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
                                                            />
                                                        ))}
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
                                                <option value='N/A'>Please Select</option>
                                                <option value='ANFF supplied-stock'>ANFF supplied-stock</option>
                                                <option value='Customer supplied'>Customer supplied</option>
                                                <option value='ANFF supplied – full custom'>ANFF supplied – full custom</option>
                                            </Field>
                                            <div>Picked:{values.substrateSource}</div>
                                            {
                                                values.substrateSource === "ANFF supplied-stock" &&(
                                                    <Fragment>
                                                        <label>
                                                            In stock:
                                                            <Field name='size' as='select'>
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
                                                values.substrateSource === "Customer supplied" &&(
                                                    <Fragment>
                                                        <Material
                                                            serviceType='optical'
                                                            handleChange={handleChange}
                                                            materialValues={values.material}
                                                        />
                                                        <Geometry
                                                            handleChange={handleChange}
                                                            geometryValues={values.geometry}
                                                            blankSource={values.blankSource}
                                                        />
                                                    </Fragment>
                                                )
                                            }
                                            {
                                                values.substrateSource === "ANFF supplied – full custom" &&(
                                                    <Fragment>
                                                        <Material
                                                            serviceType='optical'
                                                            handleChange={handleChange}
                                                            materialValues={values.material}
                                                        />
                                                        <Geometry
                                                            handleChange={handleChange}
                                                            geometryValues={values.geometry}
                                                            blankSource={values.blankSource}
                                                        />
                                                        <MyTextInput label='Dimensional Accuracy(mm):  +-' name='dimensionalAccuracy' onChange={handleChange} />
                                                    </Fragment>
                                                )
                                            }
                                        </label>
                                        <br />
                                    </Fragment>
                                )
                            }
                            <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </Fragment>
    )
}

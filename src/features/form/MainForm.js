import { Formik, Form, Field, FieldArray } from 'formik'
import React, { Fragment } from 'react'
import Material, { materialInitialValues } from './components/Material'
import Surface, { surfaceInitialValues } from './components/Surface'

export const formInitialValues = {
    blankSource: '',
    material: materialInitialValues,
    surface: [surfaceInitialValues]
}

export default function MainForm() {
    return (
        <Fragment>
            <h1>Request Form</h1>
            <Formik
                initialValues={formInitialValues}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
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
                            <Field type="radio" name="serviceType" value="Optic Coating" />
                            Optic Coating
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
                                            <FieldArray
                                                name='surface'
                                            >
                                                {({push}) => (
                                                    <div>
                                                        {values.surface.map((side, index) => (
                                                            <Surface 
                                                                index={index} 
                                                                handleChange={handleChange}
                                                                surfaceValues={values.surface[index]}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </FieldArray>
                                        </label>
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

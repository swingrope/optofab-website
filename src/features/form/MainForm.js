import { Formik, Form, Field, FieldArray } from 'formik'
import React, { Fragment } from 'react'
import SpdtStandard, { SpdtStandardInitialValues } from './components/SpdtStandard';
import Substrate from './components/Substrate';

export const formInitialValues = {
    serviceType: '',
    componentType: '',
    spdtStandardSides: [{...SpdtStandardInitialValues}],
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
                                        <h2 id="component-type">Component Type: </h2>
                                        <div role="group" aria-labelledby="component-type">
                                            <label>
                                            <Field type="radio" name="componentType" value="Standard Optical Component" />
                                            Standard Optical Component
                                            </label>
                                            <label>
                                            <Field type="radio" name="componentType" value="Full Custom" />
                                            Full Custom
                                            </label>
                                        </div>
                                        {
                                            values.componentType === "Standard Optical Component" && 
                                                <FieldArray 
                                                    name="spdtStandardSides"
                                                >
                                                {
                                                    (arrayHelpers) => (
                                                        <div>
                                                            {values.spdtStandardSides.map((side, index) => (
                                                                <Fragment key={index}>
                                                                    <SpdtStandard index={index} handleChange={handleChange} values={values}/>
                                                                    <Substrate namespace="spdtStandardSides" index={index} handleChange={handleChange} values={values} />
                                                                </Fragment>
                                                            )) }
                                                        </div>
                                                    )
                                                }

                                                </FieldArray>
                                        }
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

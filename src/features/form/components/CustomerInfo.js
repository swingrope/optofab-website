import { Field, Form, Formik, useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { MyTextInput } from '../fields/MyTextInput';

export const customerInfoInitialValues = {
    sameAsAbove: false
}

export default function CustomerInfo() {

    const {values, setFieldValue} = useFormikContext()

    useEffect(() => {
        if(values.sameAsAbove) {
            for (const [key, value] of Object.entries(values)) {
                if(key.endsWith('Shipping')) {
                    let name = key.replace('Shipping', 'Billing')
                    setFieldValue(name, value)
                }
            }
        }
    }, [setFieldValue, values])
    
    return (
        <Formik
            initialValues={customerInfoInitialValues}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                }, 1000);
            }}>
            {({handleSubmit, handleChange, values}) => (
                <Form>
                    <h1>Customer Information</h1>
                    <MyTextInput name='firstName' label='First Name' handleChange={handleChange} />
                    <MyTextInput name='lastName' label='Last Name' handleChange={handleChange} />
                    <MyTextInput name='companyName' label='Company Name' handleChange={handleChange} />
                    <MyTextInput name='email' label='Email' handleChange={handleChange} />
                    <MyTextInput name='phoneNumber' label='Company Name' handleChange={handleChange} />
                    
                    <h2>Shipping Address</h2>
                    <MyTextInput name='firstNameShipping' label='First Name' handleChange={handleChange} />
                    <MyTextInput name='lastNameShipping' label='Last Name' handleChange={handleChange} />
                    <MyTextInput name='companyNameShipping' label='Company Name' handleChange={handleChange} />
                    <MyTextInput name='address1Shipping' label='Address' handleChange={handleChange} />
                    <MyTextInput name='address2Shipping' label='Address2' handleChange={handleChange} />
                    <MyTextInput name='countryShipping' label='Country' handleChange={handleChange} />
                    <MyTextInput name='stateShipping' label='State' handleChange={handleChange} />
                    <MyTextInput name='cityShipping' label='City' handleChange={handleChange} />
                    <MyTextInput name='postcodeShipping' label='PostCode' handleChange={handleChange} />
                    
                    <label>
                        same as above?
                        <Field name='sameAsAbove' type='checkbox' />
                    </label>
                    <h2>Billing Address</h2>
                    <MyTextInput name='firstNameBilling' label='First Name' handleChange={handleChange} />
                    <MyTextInput name='lastNameBilling' label='Last Name' handleChange={handleChange} />
                    <MyTextInput name='companyNameBilling' label='Company Name' handleChange={handleChange} />
                    <MyTextInput name='address1Billing' label='Address' handleChange={handleChange} />
                    <MyTextInput name='address2Billing' label='Address2' handleChange={handleChange} />
                    <MyTextInput name='countryBilling' label='Country' handleChange={handleChange} />
                    <MyTextInput name='stateBilling' label='State' handleChange={handleChange} />
                    <MyTextInput name='cityBilling' label='City' handleChange={handleChange} />
                    <MyTextInput name='postcodeBilling' label='PostCode' handleChange={handleChange} />
                    
                </Form>
            )}
        </Formik>
    )
}

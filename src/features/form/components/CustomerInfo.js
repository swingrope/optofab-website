import { Field, Form, Formik } from 'formik'
import React from 'react'
import { MyTextInput } from '../fields/MyTextInput';

export const customerInfoInitialValues = {
    sameAsAbove: false
}

export default function CustomerInfo({part}) {

    const baseURL = 'http://localhost:8080/comp8715/optofab-website/src/api/OrderRequest.php'
    function fillBilling(values, setFieldValue) {
        
        values.sameAsAbove = !values.sameAsAbove

        if(values.sameAsAbove) {
            for (const [key, value] of Object.entries(values)) {
                if(key.endsWith('Shipping')) {
                    let name = key.replace('Shipping', 'Billing')
                    setFieldValue(name, value)
                }
            }
        }
        else {
            for (const [key] of Object.entries(values)) {
                if(key.endsWith('Billing')) {
                    setFieldValue(key, '')
                }
            }
        }
    }

    function handleSubmitForm(values) {
        let data = { customerInfo: values }
    
        for (let i=1; i<part; i++) {
            let itemName = `part${i}`
            let item = window.localStorage.getItem(itemName)
            data[itemName] = JSON.parse(item)
        }

        console.log(data)
        // next is ajax request
        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    return (
        <Formik
            initialValues={customerInfoInitialValues}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                handleSubmitForm(values)
                actions.setSubmitting(false);
                }, 1000);
            }}>
            {({handleChange, values, setFieldValue, isSubmitting}) => (
                <Form>
                    <h1>Customer Information</h1>
                    <MyTextInput name='firstName' label='First Name' onChange={handleChange} />
                    <MyTextInput name='lastName' label='Last Name' onChange={handleChange} />
                    <MyTextInput name='companyName' label='Company Name' onChange={handleChange} />
                    <MyTextInput name='email' label='Email' onChange={handleChange} />
                    <MyTextInput name='phoneNumber' label='Company Name' onChange={handleChange} />
                    
                    <h2>Shipping Address</h2>
                    <MyTextInput name='firstNameShipping' label='First Name' onChange={handleChange} />
                    <MyTextInput name='lastNameShipping' label='Last Name' onChange={handleChange} />
                    <MyTextInput name='companyNameShipping' label='Company Name' onChange={handleChange} />
                    <MyTextInput name='address1Shipping' label='Address' onChange={handleChange} />
                    <MyTextInput name='address2Shipping' label='Address2' onChange={handleChange} />
                    <MyTextInput name='countryShipping' label='Country' onChange={handleChange} />
                    <MyTextInput name='stateShipping' label='State' onChange={handleChange} />
                    <MyTextInput name='cityShipping' label='City' onChange={handleChange} />
                    <MyTextInput name='postcodeShipping' label='PostCode' onChange={handleChange} />
                    
                    <label>
                        same as above?
                        <Field name='sameAsAbove' type='checkbox' onClick={() => fillBilling(values, setFieldValue)}/>
                    </label>
                    <h2>Billing Address</h2>
                    <MyTextInput name='firstNameBilling' label='First Name' onChange={handleChange} />
                    <MyTextInput name='lastNameBilling' label='Last Name' onChange={handleChange} />
                    <MyTextInput name='companyNameBilling' label='Company Name' onChange={handleChange} />
                    <MyTextInput name='address1Billing' label='Address' onChange={handleChange} />
                    <MyTextInput name='address2Billing' label='Address2' onChange={handleChange} />
                    <MyTextInput name='countryBilling' label='Country' onChange={handleChange} />
                    <MyTextInput name='stateBilling' label='State' onChange={handleChange} />
                    <MyTextInput name='cityBilling' label='City' onChange={handleChange} />
                    <MyTextInput name='postcodeBilling' label='PostCode' onChange={handleChange} />
                    <button type='submit' disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    )
}

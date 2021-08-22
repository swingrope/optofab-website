import { Formik, Form} from 'formik'
import React from 'react'
import {MyTextArea} from "./fields/MyTextArea";
import {MyTextInput} from "./fields/MyTextInput";


export default function Modify() {
    return (
        <div>
            <h1>Modify Order</h1>
            <Formik
                initialValues={{
                    orderNumber :'',
                    modification : '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <MyTextInput label='Order number:' name='orderNumber' />
                    <MyTextArea
                        label='Please describe what kind of modification you want to make:'
                        name='modification'
                        placeholder='Please type in here'
                        rows={3}
                    />
                    <input type="file" />
                    <div><button type="submit">Submit</button></div>
                </Form>
            </Formik>
        </div>
    );
}
import { Formik, Form} from 'formik'
import React from 'react'
import {MyTextArea} from "./fields/MyTextArea";
import {MyTextInput} from "./fields/MyTextInput";


export default function Track() {
    return (
        <div>
            <h1>Track Order</h1>
            <Formik
                initialValues={{
                    orderNumber :'',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <MyTextInput label='Order number:' name='orderNumber' />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <table name="track">
            </table>
        </div>
    );
}
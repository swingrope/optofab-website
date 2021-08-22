import { Formik, Form} from 'formik'
import React from 'react'
import {MyTextArea} from "./fields/MyTextArea";


export default function Feedback() {
    return (
        <div>
            <h1>Feedback</h1>
            <Formik
                initialValues={{
                    feedback: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <MyTextArea
                        label='Please send us any feedback:'
                        name='feedback'
                        placeholder='Please type in here'
                        rows={3}
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
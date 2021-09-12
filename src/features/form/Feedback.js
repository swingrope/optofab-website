import { Formik, Form} from 'formik'
import React from 'react'
import {MyTextArea} from "./fields/MyTextArea";

export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(data)

    })
    return response
}

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
                    postData('http://localhost:8080/comp8715/optofab-website/src/api/Feedback.php', values)
                        .then((res) => {
                            console.log(res.status)
                            //if(res.status==200) window.location.href = 'Feedback_Success.html'
                        })
                        .catch(() => {
                            window.location.href = 'Error.html'
                        })
                }}
            >
                <Form>
                    <MyTextArea
                        label='Please send us any feedback:'
                        id='feedback-editor'
                        name='feedback'
                        placeholder='Please type in here'
                        rows={3}
                    />
                    <button type="submit" value="Submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

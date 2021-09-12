import { Formik, Form} from 'formik'
import React, {Fragment} from 'react'
import {MyTextArea} from "./fields/MyTextArea";
import {MyTextInput} from "./fields/MyTextInput";
import {postData} from "./Feedback";


export default function Track() {
    return (
        <div>
            <h1>Track Order</h1>
            <Formik
                initialValues={{
                    ordernum :'',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));

                    postData('http://localhost:8000/src/api/Status.php', values)
                        .then((res) => {
                            console.log(res.status())
                            if(res.status==200) window.location.href = 'Status_Success.html'
                        })
                        .catch(() => {
                            window.location.href = 'Error.html'
                        })
                }}
            >
                <Form>
                    <MyTextInput label='Order number:' name='ordernum' />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <table name="track">
            </table>
        </div>
    );
}
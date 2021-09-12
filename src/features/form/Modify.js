import { Formik, Form} from 'formik'
import React from 'react'
import {MyTextArea} from "./fields/MyTextArea";
import {MyTextInput} from "./fields/MyTextInput";
import {postData} from "./Feedback";


export default function Modify() {
    return (
        <div>
            <h1>Modify Order</h1>
            <Formik
                initialValues={{
                    ordernum :'',
                    Modification : '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    postData('http://localhost:8000/src/api/Modification.php', values)
                        .then((res) => {
                            console.log(res.status)
                            if(res.status==200) window.location.href = 'Modify_Success.html'
                        })
                        .catch(() => {
                            window.location.href = 'Error.html'
                        })
                }}
            >
                <Form>
                    <MyTextInput label='Order number:' name='ordernum' id='ordernum' />
                    <MyTextArea
                        label='Please describe what kind of modification you want to make:'
                        id='Modification'
                        name='Modification'
                        placeholder='Please type in here'
                        rows={3}
                    />
                    <input type="file" name='description' accept=".pdf,.png" />
                    <div><button type="submit">Submit</button></div>
                </Form>
            </Formik>
        </div>
    );
}
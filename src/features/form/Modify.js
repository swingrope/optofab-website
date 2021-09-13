import { Formik, Form} from 'formik'
import React from 'react'
import {MyTextArea} from "./fields/MyTextArea";
import {MyTextInput} from "./fields/MyTextInput";
import {postData} from "./Feedback";



export default function Modify() {

    function modifyFileUpload(e) {
        e.preventDefault();
        let file = e.target.files[0];
        var fileType = file.name.substring(file.name.indexOf('.') + 1, file.name.length);
        if(fileType!='png'||fileType!='pdf'||fileType!='PNG'||fileType!='PDF'){
            alert('Please upload PDF or PNG file');
            e.target.value = '';
        }
        else {
            const formdata = new FormData();
            formdata.append('modifyFile', file);
            const url = 'http://localhost:8080/comp8715/optofab-website/src/api/Modification.php';
            //const url = 'http://localhost:8080/src/api/Modification.php';
            fetch(url, {
                method: 'POST',
                body: formdata,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => {
                console.log(res.status)
                alert('uploaded successfully');
            })
                .catch(() => {
                    alert('upload failed');
                })
        }
    }


    return (
        <div>
            <h1>Modify Order</h1>
            <Formik
                initialValues={{
                    ordernum :'',
                    Modification : '',
                }}
                onSubmit={async (values) => {
                    values.append('file', this.fileInput.current.files[0]);
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    //postData('http://localhost:8080/src/api/Modification.php', values)
                    postData('http://localhost:8080/comp8715/optofab-website/src/api/Modification.php', values)
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
                    <input type="file" name='description' accept="image/png,application/pdf" onChange={modifyFileUpload}/>
                    <div><button type="submit">Submit</button></div>
                </Form>
            </Formik>
        </div>
    );
}
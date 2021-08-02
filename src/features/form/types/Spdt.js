import { Field, Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite';
import React, { Fragment, useState } from 'react'
import { useStore } from '../../../stores/store'
import SpdtCustom from './spdt components/SpdtCustom'
import SpdtStandard from './spdt components/SpdtStandard'

export default  observer(function Spdt() {

    const [componentType, setComponentType] = useState('')

    function handleSelectComponent(e) {
        setComponentType(e.target.value)
    }

    return (
        <Fragment>
            <h1>Component Type: </h1>
            <Formik 
                enableReinitialize
                initialValues={{}}
            >
                {(handleSubmit, isDirty) => (
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                        <Field as="select" name="Component Type:" onChange={e => handleSelectComponent(e)} >
                            <option value="N/A">Please Select</option>
                            <option value="Standard Optical Component">Standard Optical Component</option>
                            <option value="Full Custom">Full Custom</option>           
                        </Field>
                        {componentType === "Standard Optical Component" && <SpdtStandard />}
                        {componentType === "Full Custom" && <SpdtCustom />}
                        <div>
                            <span>
                            <button>Add Coating With Optic Specifications</button>
                            <button>Add Coating With Layer Specifications</button>
                            <button>Add Another Part</button>
                            <button>Submit</button>
                            </span>
                        </div>
                    </Form>
                )}
            </Formik>



        </Fragment>
    )
})

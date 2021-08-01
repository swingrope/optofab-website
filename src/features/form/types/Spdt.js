import { Field } from 'formik'
import React, { Fragment, useState } from 'react'
import SpdtCustom from './spdt components/SpdtCustom'
import SpdtStandard from './spdt components/SpdtStandard'

export default function Spdt() {
    const [selectedComponentType, setSelectedComponentType] = useState("")
    const [parts, setParts] = useState([])

    function handleSelectComponent(e) {
        setSelectedComponentType(e.target.value)
    }

    return (
        <Fragment>
            <label>Component Type: </label>
            <Field as="select" name="Component Type:" onChange={e => handleSelectComponent(e)}>
                <option value="N/A">Please Select</option>
                <option value="Standard Optical Component">Standard Optical Component</option>
                <option value="Full Custom">Full Custom</option>           
            </Field>
            {
                    selectedComponentType === "Standard Optical Component" &&
                        <SpdtStandard />
            }
            {
                    selectedComponentType === "Full Custom" && 
                        <SpdtCustom />
            }
            <div>
                <span>
                <button>Add Coating With Optic Specifications</button>
                <button>Add Coating With Layer Specifications</button>
                <button>Add Another Part</button>
                <button>Submit</button>
                </span>
            </div>
        </Fragment>
    )
}

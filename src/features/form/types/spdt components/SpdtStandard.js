import React, { Fragment, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../../../stores/store'
import { Field } from 'formik'
import SpdtMaterial from './SpdtMaterial'

export default observer(function SpdtStandard() {
    const {formStore: {componentCount}} = useStore()
    const [side1Optional, setSide1Optional] = useState(false)
    const [side2Optional, setSide2Optional] = useState(false)
    const [material, setMaterial] = useState('')

    return (
        <Fragment>
            <div>
                <h3>Side 1</h3>
                <h5>Surface Form: </h5>
                <div className="side1">
                    <label htmlFor="Cv-1">Cv: </label>
                    <Field id="Cv-1" name="side 1 Cv"/>
                    <label htmlFor="k-1">k: </label>
                    <Field id="k-1" name="side 1 k"/>
                    <label htmlFor="A1-1">A1:</label>
                    <Field id="A1-1" name="side 1 A1"/>
                    <label htmlFor="A2-1">A2:</label>
                    <Field id="A2-1" name="side 1 A2"/>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setSide1Optional(!side1Optional)
                        }}>
                            show options: 
                    </button>
                    <br/>
                    {
                        side1Optional && (
                            <div>
                                <label htmlFor="A4-1">A4:</label>
                                <Field id="A4-1" name="side 1 A4"/>
                                <label htmlFor="A6-1">A6:</label>
                                <Field id="A6-1" name="side 1 A6"/>
                                <label htmlFor="A8-1">A8:</label>
                                <Field id="A8-1" name="side 1 A8"/>
                                <label htmlFor="A10-1">A10:</label>
                                <Field id="A10-1" name="side 1 A10"/>
                            </div>
                        ) 
                    }
                    <label htmlFor="SurfaceAccuracy-1">Surface Accuracy(nm): ±</label>
                    <Field id="SurfaceAccuracy-1" name="side 1 surface accuracy" />
                </div>
                <div className="side2">
                    <label htmlFor="Cv-2">Cv: </label>
                    <Field id="Cv-2" name="side 2 Cv"/>
                    <label htmlFor="k-2">k: </label>
                    <Field id="k-2" name="side 2 k"/>
                    <label htmlFor="A1-2">A1:</label>
                    <Field id="A1-2" name="side 2 A1"/>
                    <label htmlFor="A2-2">A2:</label>
                    <Field id="A2-2" name="side 2 A2"/>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setSide2Optional(!side2Optional)
                        }}>
                            show options: 
                    </button>
                    <br/>
                    {
                        side2Optional && (
                            <div>
                                <label htmlFor="A4-2">A4:</label>
                                <Field id="A4-2" name="side 2 A4"/>
                                <label htmlFor="A6-2">A6:</label>
                                <Field id="A6-2" name="side 2 A6"/>
                                <label htmlFor="A8-2">A8:</label>
                                <Field id="A8-2" name="side 2 A8"/>
                                <label htmlFor="A10-2">A10:</label>
                                <Field id="A10-2" name="side 2 A10"/>
                            </div>
                        ) 
                    }
                    <label htmlFor="SurfaceAccuracy-2">Surface Accuracy(nm): ±</label>
                    <Field id="SurfaceAccuracy-2" name="side 2 surface accuracy" />
                </div>
                <br />
                <SpdtMaterial name='material' label='Material: ' />

            </div>

        </Fragment>
    )
})

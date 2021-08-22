import { Field } from 'formik'
import React, { Fragment, useState } from 'react'
import { MyTextArea } from '../fields/MyTextArea.js'
import { MyTextInput } from '../fields/MyTextInput.js'
import Coating, { coatingInitialValues } from './Coating.js'
import { MathComponent } from 'mathjax-react'

export const surfaceInitialValues = {
    descriptionOfFace: '',
    curvature: '',
    surfaceAccuracy: '',
    turningAngle: '',
    focalLength: '',
    radiusOfCurvature: '',
    cv: '',
    k: '',
    a1: '',
    a2: '',
    a4: '',
    a6: '',
    a8: '',
    a10: '',
    a12: '',
    formAccuracy: '',
    coating: coatingInitialValues
}

export default function Surface({handleChange, index, surfaceValues, blankSource, serviceType, substrateSource}) {

    const [expand, setExpand] = useState(false)
    const [buttonText, setButtonText] = useState('show more')
    let sideNumber = index + 1

    const handleExpand = (e) => {
        e.preventDefault()
        setExpand(!expand)
        !expand ? setButtonText('show less') : setButtonText('show more')
    }

    const handleUpload = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <h3>Side {sideNumber}</h3>
            <MyTextArea 
                label='Description Of Face:' 
                name={`surface.${index}.descriptionOfFace`}
                placeholder='Leave the description here' 
                rows={3}
                onChange={handleChange}
            />
            <label>
                Curvature:
                <Field as='select' name={`surface.${index}.curvature`} onChange={handleChange} >
                    <option value='N/A'>Please select</option>
                    <option value='flat'>Flat</option>
                    <option value='parabolic'>Parabolic</option>
                    <option value='spherical'>Spherical</option>
                    <option value='aspheric'>Aspheric</option>
                    <option value='other'>Other</option>
                </Field>
            </label>
            <br />
            {surfaceValues.curvature === 'flat' && (
                <MyTextInput label='Surface Accuracy (nm): ±' name={`surface.${index}.surfaceAccuracy`} onChange={handleChange} />
            )}
            {surfaceValues.curvature === 'parabolic' && (
                <Fragment>
                    <MyTextInput label='Turning Angle: ' name={`surface.${index}.turningAngle`} onChange={handleChange} />
                    <MyTextInput label='Focal Length: ' name={`surface.${index}.focalLength`} onChange={handleChange} />
                    <MyTextInput label='Surface Accuracy (nm): ±' name={`surface.${index}.surfaceAccuracy`} onChange={handleChange} />
                </Fragment>
            )}
            {surfaceValues.curvature === 'spherical' && (
                <Fragment>
                    <MyTextInput label='Radius of Curvature: ' name={`surface.${index}.radiusOfCurvature`} onChange={handleChange} />
                    <MyTextInput label='Surface Accuracy (nm): ±' name={`surface.${index}.surfaceAccuracy`} onChange={handleChange} />
                </Fragment>
            )}
            {surfaceValues.curvature === 'aspheric' && (
                <Fragment>
                    Surface Form:
                    <MathComponent tex={String.raw`Z=f(x)=\frac{C_{v}x^2}{1+\sqrt{1-(1+k)C_{v}^2x^2}}+A_{01}x+A_{02}x^2+\cdots`} />
                    <MyTextInput label='Cv: ' name={`surface.${index}.cv`} onChange={handleChange} />
                    <MyTextInput label='k: ' name={`surface.${index}.k`} onChange={handleChange} />
                    <MyTextInput label='A1: ' name={`surface.${index}.a1`} onChange={handleChange} />
                    <MyTextInput label='A2: ' name={`surface.${index}.a2`} onChange={handleChange} />
                    <button onClick={(e) => handleExpand(e)}>{buttonText}</button>
                    <br />
                    { expand && (
                        <Fragment>
                            <MyTextInput label='A4: ' name={`surface.${index}.a4`} onChange={handleChange} />
                            <MyTextInput label='A6: ' name={`surface.${index}.a6`} onChange={handleChange} />
                            <MyTextInput label='A8: ' name={`surface.${index}.a8`} onChange={handleChange} />
                            <MyTextInput label='A10: ' name={`surface.${index}.a10`} onChange={handleChange} />
                            <MyTextInput label='A12: ' name={`surface.${index}.a12`} onChange={handleChange} />
                        </Fragment>
                    )}
                    <MyTextInput label='Surface Accuracy (nm): ±' name={`surface.${index}.surfaceAccuracy`} onChange={handleChange} />
                </Fragment>
            )}
            {surfaceValues.curvature === 'other' && (
                <Fragment>
                    <label>
                        Upload Zemax/Winlens File:
                        <button onClick={e => handleUpload(e)}>Choose file</button>
                        No file chosen
                    </label>
                </Fragment>
            )}
            {(surfaceValues.curvature !== surfaceInitialValues.curvature && (blankSource === 'ANFF supplied'|| substrateSource==='ANFF supplied – full custom')) && (
                <Fragment>
                    <MyTextInput label='Form Accuracy (nm): ±' name={`surface.${index}.formAccuracy`} onChange={handleChange} />
                </Fragment>
            )}
            <Coating coatingValues={surfaceValues.coating} handleChange={handleChange} index={index} serviceType={serviceType}/>
        </div>
    )
}

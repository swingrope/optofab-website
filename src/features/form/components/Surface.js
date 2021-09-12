import { Field } from 'formik'
import React, { Fragment, useState } from 'react'
import { MyTextArea } from '../fields/MyTextArea.js'
import { MyTextInput } from '../fields/MyTextInput.js'
import Coating, { coatingInitialValues } from './Coating.js'
import { MathComponent } from 'mathjax-react'
import { validateField } from '../Helpers.js'

export const surfaceInitialValues = {
    descriptionOfFace: '',
    curvature: '',
    surfaceFigure: '',
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
    coating: coatingInitialValues,
    faceType:''
}

export default function Surface({handleChange, index, surfaceValues, blankSource, serviceType, substrateSource, geometry}) {

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
                labelClass="required"
                validate={validateField}
                label='Description Of Face:' 
                name={`surface.${index}.descriptionOfFace`}
                placeholder='Leave the description here' 
                rows={3}
                onChange={handleChange}
            />
            {(serviceType === 'Optical Coating' && geometry==='regular polygon') && (
                <label>
                    <Field as='select' name={`surface.${index}.descriptionOfFace`} >
                        <option value='N/A'>Please select</option>
                        <option value='Polygonal face'>Polygonal face</option>
                        <option value='Extruded face'>Extruded face</option>
                    </Field>
                    <br />
                </label>
            )}

            <label className="required">
                Curvature:
                <Field validate={validateField} as='select' name={`surface.${index}.curvature`} onChange={handleChange} >
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
                <Fragment>
                    <MyTextInput label='Surface Figure (nm): ±' name={`surface.${index}.surfaceFigure`} onChange={handleChange} />
                    <MyTextInput label='Surface Roughness (nm): rms' name={`surface.${index}.surfaceRoughness`} onChange={handleChange} />
                    <label>
                        Surface Quality:
                        <Field as='select' name={`surface.${index}.surfaceQuality`} onChange={handleChange} >
                            <option value='N/A'>Please select</option>
                            <option value='40-20'>40-20</option>
                            <option value='20-10'>20-10</option>
                            <option value='10-5'>10-5</option>
                        </Field>
                    </label>
                    <p>
                    Surface Figure: Maximum deviation (figure error) of the optical surface from the specified shape across the clear aperture, in units of λ/N, where λ=632.8nm
                    <br />
                    <br />
                    Surface Quality: Describes the number & severity of surface defects/imperfections within the clear aperture using the Scratch/Dig standard following ISO 10110-7
                    <br />
                    <br />
                    Surface Roughness: Root mean square variation of the optical surface with respect to the specified shape across the clear aperture
                    </p>
                </Fragment>
            )}
            {surfaceValues.curvature === 'parabolic' && (
                <Fragment>
                    <MyTextInput label='Turning Angle: ' name={`surface.${index}.turningAngle`} onChange={handleChange} />
                    <MyTextInput label='Focal Length: ' name={`surface.${index}.focalLength`} onChange={handleChange} />
                    <MyTextInput label='Surface Figure (nm): ±' name={`surface.${index}.surfaceFigure`} onChange={handleChange} />
                    <MyTextInput label='Surface Roughness (nm): rms' name={`surface.${index}.surfaceRoughness`} onChange={handleChange} />
                    <label>
                        Surface Quality:
                        <Field as='select' name={`surface.${index}.surfaceQuality`} onChange={handleChange} >
                            <option value='N/A'>Please select</option>
                            <option value='40-20'>40-20</option>
                            <option value='20-10'>20-10</option>
                            <option value='10-5'>10-5</option>
                        </Field>
                    </label>
                </Fragment>
            )}
            {surfaceValues.curvature === 'spherical' && (
                <Fragment>
                    <MyTextInput label='Radius of Curvature: ' name={`surface.${index}.radiusOfCurvature`} onChange={handleChange} />
                    <MyTextInput label='Surface Figure (nm): ±' name={`surface.${index}.surfaceFigure`} onChange={handleChange} />
                    <MyTextInput label='Surface Roughness (nm): rms' name={`surface.${index}.surfaceRoughness`} onChange={handleChange} />
                    <label>
                        Surface Quality:
                        <Field as='select' name={`surface.${index}.surfaceQuality`} onChange={handleChange} >
                            <option value='N/A'>Please select</option>
                            <option value='40-20'>40-20</option>
                            <option value='20-10'>20-10</option>
                            <option value='10-5'>10-5</option>
                        </Field>
                    </label>
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
                    <MyTextInput label='Surface Figure (nm): ±' name={`surface.${index}.surfaceFigure`} onChange={handleChange} />
                    <MyTextInput label='Surface Roughness (nm): rms' name={`surface.${index}.surfaceRoughness`} onChange={handleChange} />
                    <label>
                        Surface Quality:
                        <Field as='select' name={`surface.${index}.surfaceQuality`} onChange={handleChange} >
                            <option value='N/A'>Please select</option>
                            <option value='40-20'>40-20</option>
                            <option value='20-10'>20-10</option>
                            <option value='10-5'>10-5</option>
                        </Field>
                    </label>
                </Fragment>
            )}
            {surfaceValues.curvature === 'other' && (
                <Fragment>
                    <label>
                        Upload Zemax/Winlens File:
                    </label>
                    <input type="file" name='curvatureFile' accept=".zmx" />

                </Fragment>
            )}
            <Coating coatingValues={surfaceValues.coating} handleChange={handleChange} index={index} serviceType={serviceType}/>
        </div>
    )
}

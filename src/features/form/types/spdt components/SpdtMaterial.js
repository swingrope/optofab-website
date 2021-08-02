import { useField } from 'formik';
import React from 'react'

export default function SpdtMaterial(props) {
    console.log(props)
    const [field, meta, helpers] = useField(props.name);
    
    return (
        <>
            <label>{props.label}</label>
            <select    
                value={field.value || null}
                onChange={(e) => {helpers.setValue(e.target.value)}}
                onBlur={() => helpers.setTouched(true)}
            >
                <option value="0">Please Select</option>
                <option value="aluminium">Aluminium</option>
                <option value="nickel">Nickel</option>
                <option value="titanium">Titanium</option>
                <option value="copper">Copper</option>
                <option value="znse">ZnSe</option>
                <option value="zns">ZnS</option>
                <option value="caf2">CaF2</option>
                <option value="baf2">BaF2</option>
                <option value="mgf2">MgF2</option>
                <option value="silicon">Silicon</option>
                <option value="germanium">Germanium</option>
                <option value="pmma">PMMA</option>
                <option value="polycarbonate">Polycarbonate</option>
                <option value="vespel">Vespel</option>
                <option value="nylon">Nylon</option>
                <option value="delrin">Delrin</option>
                <option value="PTFE">PTFE</option>
            </select>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
}
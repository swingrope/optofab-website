import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Integrated from './types/Integrated';
import Spdt from './types/Spdt';

export default function MainForm() {

    const [selectedServiceType, setSelectedServiceType] = useState("")

    function handleServiceType(e) {
        setSelectedServiceType(e.target.value)
    }

    useEffect(() => {
        switch (selectedServiceType) {
            case "SPDT Optic":
                return <Redirect to='/spdt/1' />
            case "Integrated Optic Chip, Assembly and Others":
                return <Redirect to='/integrated/1' />
            default:
                break;
        }
    }, [selectedServiceType])

    return (
        <div>
            <h1>Request Form</h1>
                <label as="h2">Service Type: </label>
                <select name="Service Type: " onChange={(e) => handleServiceType(e)}>
                    <option defaultValue="selected" value="N/A">Please Select</option> 
                    <option as={Link} to="/spdt/1" value="SPDT Optic">SPDT Optic</option>
                    <option value="Integrated Optic Chip, Assembly and Others">Integrated Optic Chip, Assembly and Others</option>
                    <option value="Optic Coating">Optic Coating</option>
                    <option value="Photonic Coating">Photonic Coating</option>
                </select>
        </div>

    )
}

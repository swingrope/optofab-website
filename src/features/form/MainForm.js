import React from 'react'
import { Link } from 'react-router-dom';
import Integrated from './types/Integrated';
import Spdt from './types/Spdt';

export default function MainForm() {

    return (
        <div>
            <h1>Request Form</h1>
            <h2>Please Select A Service Type: </h2>
            <div>
                <Link to="/spdt">SPDT Optic </Link>
                <Link to="/integrated">Integrated Optic Chip, Assembly and Others </Link>
                <Link to="/optic">Optic Coating </Link>
                <Link to="/photonic">Photonic Coating </Link>
            </div>
        </div>

    )
}

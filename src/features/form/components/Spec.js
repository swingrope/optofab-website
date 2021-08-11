import React from 'react'

export default function Spec({sideIndex, index, handleChange}) {

    let specNum = index + 1
    return (
        <div>
            <h3>Spec {specNum}</h3>
        </div>
    )
}

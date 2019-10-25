import React from 'react'

export default function Planet({name, diameter, orbital_period}) {
        return (
            <div className="planet">
                <h2>{name}</h2>
                <div>diameter: {diameter}</div>
                <div>orbital period: {orbital_period}</div>
            </div>
        )
}

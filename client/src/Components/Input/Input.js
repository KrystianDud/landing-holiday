import React from 'react'
import './input.css'

export default function Input({ placeholder, value, name, updateContactData }) {
    return (
        <input className='input' type='text' value={value} placeholder={placeholder} name={name} onChange={(e) => updateContactData(e.target.name, e.target.value)} />
    )
}

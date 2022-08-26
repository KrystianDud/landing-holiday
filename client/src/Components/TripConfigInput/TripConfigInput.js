import React from 'react'
import './tripconfiginput.css'

export default function TripConfigInput({ text, type, inputWidth, hiding }) {
    return (
        <div className={hiding ? 'trip-bar-response-hide' : ''} style={{margin: 'auto'}} >
            <p className='trip-config-text'>{text}</p>
            <input type={type} className='trip-config-input-tag' />
        </div>
    )
}

import React from 'react'
import './section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Section({ icon, heading, clickText }) {
    return (
        <div className='section-element'>
            <div className="heading-element">
                <FontAwesomeIcon icon={icon == 1 ? faCube : faLocationDot} size="2x" color='#FF8A11' style={{ margin: '1rem' }} />
                <h2>{heading}</h2>
            </div>
            <button className='section-button'>{clickText}</button>
        </div>
    )
}

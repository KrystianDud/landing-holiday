import React from 'react'
import './destinations.css'

import Section from '../../Components/Section/Section';
import Carousel from '../../Components/Carousel/Carousel';

export default function Destinations() {
    return (
        <div className='destinations'>
            <div className="destinations-container">
                <Section icon={2} heading='Destinations' clickText='See all destinations' />
                <Carousel />
            </div>
        </div>
    )
}

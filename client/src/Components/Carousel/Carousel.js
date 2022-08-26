import React from 'react'
import './carousel.css';

import DestinationTile from '../DestinationTile/DestinationTile';
import ButtonCircle from '../ButtonCircle/ButtonCircle'

const destinationArray = [
    {
        id: 1,
        url: '/images/wine-country-min.jpg',
        alt: 'california'
    },
    {
        id: 2,
        url: '../../images/sea-min.jpg',
        alt: 'sea'
    },
    {
        id: 3,
        url: '../../images/london-min.jpg',
        alt: 'london'
    },
    {
        id: 4,
        url: '../../images/paris-min.jpg',
        alt: 'paris'
    },
    {
        id: 5,
        url: '../../images/dunes-min.jpg',
        alt: 'numbia'
    },
    {
        id: 6,
        url: '../../images/island-min.jpg',
        alt: 'hawai'
    },
    {
        id: 7,
        url: '../../images/paddies-min.jpg',
        alt: 'thailand'
    },
]

export default function Carousel() {
    return (
        <div className='carousel-main'>
            <div className="carousel-controls">
                <ButtonCircle type='secondary' icon='left' />
                <ButtonCircle type='secondary' icon='right' />
            </div>
            <div className="carousel-box">
                {destinationArray.map(({ alt, url, id }) => (
                    <DestinationTile alt={alt} url={url} key={id} />
                ))}
            </div>
        </div>
    )
}

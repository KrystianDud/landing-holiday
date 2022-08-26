import React from 'react';
import './tripconfig.css';

import TripConfigInput from '../TripConfigInput/TripConfigInput';
import Button from '../Button/Button';

export default function TripConfig() {
    return (
        <div className="trip-bar">
            <TripConfigInput text='Date' type='date' hiding={true}/>
            <TripConfigInput text='People' type='number' inputWidth={100} hiding={true}/>
            <TripConfigInput text='Place' type='text' inputWidth={150}  hiding={false}/>
            <Button text='Find' type='primary' />
        </div>
    )
}

import React from 'react';
import Button from '../../Components/Button/Button';
import './landing.css' 

export default function Landing() {
    return (
        <div className='landing-splash'>
            <div className='landing-plane' />

            <div className='landing-cta'>
                <Button text='Explore Now' type='primary' />
            </div> 
        </div>
    )
}

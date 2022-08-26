import React from 'react';
import './footer.css'
import ButtonCircle from '../../Components/ButtonCircle/ButtonCircle';
export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-social">
                <ButtonCircle type='primary' icon='facebook' />
                <ButtonCircle type='primary' icon='instagram' />
                <ButtonCircle type='primary' icon='twitter' />
            </div>
            <p style={{ color: 'white' }}>Aven - All rights reserved 2022</p>
        </div>
    )
}

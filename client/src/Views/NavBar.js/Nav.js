import React from 'react';
import './nav.css';


import Hamburger from '../../Components/Hamburger/Hamburger';
import Logo from '../../Components/Logo/Logo';
import NavFull from '../../Components/NavFull/NavFull';

export default function Nav() {

    return (
        <div className='nav'>
            <Logo />
            <NavFull />
            <Hamburger />
        </div>
    )
}

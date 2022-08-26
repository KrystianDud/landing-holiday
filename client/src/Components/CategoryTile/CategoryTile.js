import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faSun, faHouse, faLeaf, faBed, faDollar, faBasketball, faSnowflake } from '@fortawesome/free-solid-svg-icons'

import './categorytile.css'


export default function CategoryTile({ icon, title }) {

    const findIcon = () => {
        switch (icon) {
            case 'city':
                return faCity;
            case 'sun':
                return faSun;
            case 'house':
                return faHouse;
            case 'leaf':
                return faLeaf;
            case 'bed':
                return faBed;
            case 'dollar':
                return faDollar;
            case 'ball':
                return faBasketball;
            case 'snow':
                return faSnowflake;
            default:
                break;
        }
    }

    return (
        <div className='tile-main'>
            <div className='tile-icon'>
                <FontAwesomeIcon icon={findIcon()} size="lg" onClick={() => { console.log('tile clicked') }} />
            </div>
            <p>{title}</p>
        </div>
    )
}

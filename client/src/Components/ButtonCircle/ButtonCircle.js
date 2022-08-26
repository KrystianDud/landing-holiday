import React from 'react';
import './buttoncircle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
export default function ButtonCircle({ type, icon }) {

    const primary = {
        background: '#FF8A11',
    }
    const secondary = {
        background: '#6F4A9E',
    }

    const switchIcon = () => {
        switch (icon) {
            case 'facebook':
                return faFacebookF
            case 'instagram':
                return faInstagram
            case 'twitter':
                return faTwitter
            case 'left':
                return faAngleLeft
            case 'right':
                return faAngleRight
            default:
                break;
        }
    }

    return (
        <div className='buttoncircle' style={type === 'secondary' ? secondary : primary}>
            <FontAwesomeIcon className='' icon={switchIcon()} size="2x" onClick={() => { console.log('menu clicked') }} />
        </div>
    )
}

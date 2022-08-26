import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons'

export default function Hamburger() {
  return (
    <div className='hamburger'>
      <FontAwesomeIcon icon={faBars} size="lg" onClick={() => { console.log('menu clicked') }} />
    </div>
  )
}

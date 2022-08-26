import React from 'react'
import './destinationtile.css'

export default function DestinationTile({alt, url}) {
    return <img className='destination-card' alt={alt} src={url}/>
    
    // style={{background: `url(${url})`}}/>

}

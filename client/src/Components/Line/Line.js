import React from 'react'
import './line.css'

/**
 * 
 * @param {string} direction  of the line ('h' or 'v' for horizontal/vertical)
 * @param {*} color  The colour of the line primary, secondary, details
 */

export default function Line({ direction, color }) {
    const getSizeVal = (key) => {
        if (key === 'width' && direction === 'h') {
            return '100%'
        }
        else if (key === 'height' && direction === 'v') {
            return '100%'
        }
        else return '2px'
    }
    const getColorVal = () => {
        switch (color) {
            case 'primary':
                return '#FF8A11';
            case 'secondary':
                return '#6F4A9E';
            case 'details':
                return '#E81894';
            default:
                break;
        }
    }

    const lineStyle = {
        background: getColorVal(),
        width: getSizeVal('width'),
        height: getSizeVal('height'),
        marginInline: '2rem'
    }



    return <div className='line' style={lineStyle} />

}

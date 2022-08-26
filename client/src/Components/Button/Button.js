import React from 'react'
import './button.css'

/**
 * 
 * @param {text} string display text used in the button body 
 * @param {type} string determines if the button is 'primary' or 'secondary'
 * @param {*} param0
 * @param {*} param0
 * @param {*} param0
 * 
 * 
 */
export default function Button({text, type, callback}) {
    return (
        <button className={`button ${type =='primary' ? 'button-primary' : 'button-secondary'}`} onClick={callback != 'undefined' ? () => callback() : null}>{text}</button>
    )
}

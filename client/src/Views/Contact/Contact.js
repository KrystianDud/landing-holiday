import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactText from '../../Components/ContactText/ContactText'
import Line from '../../Components/Line/Line'

import './contact.css'

export default function Contact() {
    return (
        <div className='contact-main'>
            <div className="contact-box">
                <h1>Contact Us</h1>
                <Line direction='h' color='details' />
                <div className='contact-container'>
                    <ContactText />
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

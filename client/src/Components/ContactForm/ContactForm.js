import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

import './ContactForm.css'

export default function ContactForm() {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(false)
            setMessage('')
        }, 10000);
    }, [showMessage])

    const submit = () => {
        // validate if name, phone and email are filled in
        let fieldQty = 0
        Object.values(contactData).forEach(item => {
            if (item.length < 1) {
                return
            }
            else {
                fieldQty++
            }
        })
        if (fieldQty < Object.values(contactData).length) {
            setMessage('Some fields are incomplete. Please check and try again.')
            setShowMessage(true)
            return
        }

        setMessage('Submitting message...')
        setShowMessage(true)

        var data = new FormData();
        data.append("json", JSON.stringify(contactData));

        fetch("/submit",
            {
                method: "POST",
                body: data
            })
            .then(function (res) { return res.json(); })
            .then(data => {
                console.log(data)
                setMessage(data.message)
                setShowMessage(true)
            })
    }

    const updateContactData = (name, value) => {
        setContactData({ ...contactData, [name]: value })
        console.log(name, value)
    }

    return (
        <div className='contact-form'>
            <Input placeholder={'Name'} updateContactData={updateContactData} value={contactData.name} name={'name'} />
            <Input placeholder={'Email'} updateContactData={updateContactData} value={contactData.email} name={'email'} />
            <Input placeholder={'Mobile'} updateContactData={updateContactData} value={contactData.mobile} name={'mobile'} />

            <div className="gap"></div>

            <Input placeholder={'Message'} updateContactData={updateContactData} value={contactData.message} name={'message'} />

            <div className="gap"></div>

            <Button text='Submit' type='primary' callback={submit} />
            <div style={{ height: '40px' }}>
                <p style={{ visibility: showMessage ? 'visible' : 'hidden' }} >{message}</p>
            </div>
        </div>
    )
}

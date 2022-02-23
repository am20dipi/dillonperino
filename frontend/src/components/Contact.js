import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Sidenav from './Sidenav'
import IMG_9796 from '../images/charcoals/IMG_9796.jpg'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const SERVICE_ID = "service_gtevzjd"
const TEMPLATE_ID = 'template_xt3nuzr'
const USER_ID = "user_OZ8yrsbGZtL9WvOSeGMEQ"



toast.configure()

const Result = () => {
    return (
        <p>Your message has been successfully sent.</p>
    )
}

function Contact(){
    const initialValues = {
        name: '',
        email: '',
        message: ''
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [result, showResult] = useState(false)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

  
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                console.log(result.text)
                
            })
            .catch((error) => {
                console.log(error)
            })
        successNotify()    
        e.target.reset()
        debugger
        setInterval(() => {
            showResult(true)
        }, 2000)
        
    }

  

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        
        setFormValues({
            ...formValues,
            [name]: value
        })
        
        console.log(formValues)
    }

    

    const successNotify = () => {
        toast.success('Message sent!', { position: toast.POSITION.TOP_RIGHT})
        
    }

  
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="center" style={{flex: '30%', paddingTop: '100px', paddingLeft:'70px'}}>
                <img width='70%' src={IMG_9796} alt="charlie"/>
            </section>
            <section className="right" style={{flex: '50%'}}>
            <h1 style={{textAlign: 'left', paddingTop: '45px', paddingLeft: '20px'}}>contact<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>Feel free to contact me here, via Instagram or email. I will get back to you ASAP. </p></h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name"></label>
                    <input type="text" name="name" onChange={handleChange} placeholder="name" required/>
                    
                    <label htmlFor="email"></label>
                     <input type="email" name="email" onChange={handleChange}  placeholder="email" required />
                    

                    <label htmlFor="message"></label>
                        <textarea name="message" onChange={handleChange} placeholder="type your message" required/>
                    
                    <input className="submit" type="submit" value="submit" />
                </form>
                <div className="row">
                    {result ? <Result/> : null }
                </div>
            </section>
        </div>
    )
}

export default Contact
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Sidenav from './Sidenav'
const SERVICE_ID = "service_gtevzjd"
const TEMPLATE_ID = 'template_xt3nuzr'
const USER_ID = "user_OZ8yrsbGZtL9WvOSeGMEQ"

function Contact(){

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }
  
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right">
                <h1 style={{textAlign: 'left', paddingTop: '40px'}}>contact</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name">
                        <input type="text" name="user_name" placeholder="name"/>
                    </label>
                    
                    <label htmlFor="user_email">
                        <input type="email" name="user_email" placeholder="email" />
                    </label>
                    
                    <label htmlFor="message">
                        <textarea name="message" placeholder="type your message" />
                    </label>
                    
                    <input className="submit" type="submit" value="submit" />
                </form>
            </section>
        </div>
    )
}

export default Contact
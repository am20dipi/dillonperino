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
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="name"/>
                    <br/>
                    <input type="email" name="user_email" placeholder="email" />
                    <br/>
                    <textarea name="message" placeholder="type your message" />
                    <br/>
                    <input type="submit" value="Send" />
                </form>
            </section>
        </div>
    )
}

export default Contact
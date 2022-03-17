import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Sidenav from './Sidenav'
import IMG_9796 from '../images/charcoals/IMG_9796.jpg'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const SERVICE_ID = "service_gtevzjd"
const TEMPLATE_ID = 'template_xt3nuzr'
const USER_ID = "user_OZ8yrsbGZtL9WvOSeGMEQ"



toast.configure()


function Contact(){


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
    }

  

 
    

    const successNotify = () => {
        toast.success('Message sent!', { position: toast.POSITION.TOP_RIGHT})
        
    }

  
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right" >
            <p className="text-muted" style={{fontSize:'medium', paddingTop: '65px'}}>Feel free to contact me here, via Instagram or email. I will get back to you ASAP. </p>
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <input type="text" placeholder="name" name="name" required />
                            <input type="email" placeholder="email" name="email" required/>
                            <textarea rows="5" placeholder="type your message here" name="message"required />
                            <button className="submit">submit</button>
                        </form>
                
            </section>
        </div>
    )
}

export default Contact
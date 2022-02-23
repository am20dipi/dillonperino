import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Sidenav from './Sidenav'

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
        user_name: '',
        user_email: '',
        message: ''
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [result, showResult] = useState(false)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        setErrors(validate(formValues))
        setIsSubmit(true)
  
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                console.log(result.text)
                successNotify()
            })
            .catch((error) => {
                console.log(error)
                errorNotify()
            })
        
            
        e.target.reset()
        showResult(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [errors])


    const validate = (values) => {
        const errors = {}
        if (!values.user_name){
            errors.user_name = "Name is required."
        }
        if (!values.user_email){
            errors.user_email = "Email is required."
        }
        if (!values.message){
            errors.message = "Message is required."
        }
        return errors
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

    const errorNotify = () => {
        toast.error('Something went wrong. Try again.', { position: toast.POSITION.TOP_RIGHT})
    }

  
    return (
        <div className="wrapper" style={{display: 'flex'}}>
            <section className="left">
                <Sidenav/>
            </section>
            <section className="right" style={{flex: '90%', paddingLeft: '100px'}}>
            <h1 style={{textAlign: 'left', paddingTop: '45px', paddingLeft: '29px'}}>contact<p className="text-muted" style={{fontSize:'medium', textAlign: 'left' }}>Feel free to contact me here, via Instagram or email.</p></h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name">
                        <input type="text" name="user_name" onChange={handleChange} value={formValues.user_name} placeholder="name" required/>
                    </label>
                    <label htmlFor="user_email">
                        <input type="email" name="user_email" onChange={handleChange} value={formValues.user_email} placeholder="email" required />
                    </label>

                    <label htmlFor="message">
                        <textarea name="message" onChange={handleChange} value={formValues.message} placeholder="type your message" required/>
                    </label>
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
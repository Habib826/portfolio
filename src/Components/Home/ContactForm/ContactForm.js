import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'
import Footer from '../Footer/Footer';

const ContactForm = () => {

    function onSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_4p4pggt', 'template_711vers', e.target, 'user_bssm1tSjhlHODeHG5i2bb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="form"  id="contact">
            <h1 className="text-center pt-5" style={{color:'orange'}}>Stay Touch With Me</h1>
           <div className="container pt-5 pb-5">
           <form className="text-center" onSubmit={onSubmit}>
                <input type="hidden" name="contact_number" />
                <input
                className="field"
                 type="text" 
                 name="user_name"
                 placeholder="Name"
                 size="20"
                 /><br />
                <input 
                className="field"
                type="email" 
                name="user_email" 
                placeholder="Email"
                size="20"
                /><br />
                <textarea 
                className="field"
                name="message"
                placeholder="Message"
                rows="3"
                cols="25"
                /><br />
                <input type="submit" className="btn-main-offer" style={{color:'black'}} value="Send" />
            </form>
           </div>
           <div className="">
               <Footer/>
           </div>
        </div>
    );
};

export default ContactForm;
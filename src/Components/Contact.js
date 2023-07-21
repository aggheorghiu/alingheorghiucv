import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styling/Contact.css';

const Contact = () => {
    const [result, setResult] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_hgxz1fp', 'template_nrk92eh', event.target, 'InMapk65_zFyTq4_X')
            .then((result) => {
                console.log(result.text);
                setResult(true);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" required />
                </div>
                <input type="submit" value="Send" />
            </form>
            {result ? <p>Your message has been sent! I will get back to you soon.</p> : null}
        </div>
    );
}

export default Contact;

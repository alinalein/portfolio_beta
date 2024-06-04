import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';
import Notification from '../utils/notification';
import './contact.scss'

const Contact = ({ id, isWidthGreaterThan1050 }) => {

    const [notification, setNotification] = useState({ message: '', type: '' });
    const form = useRef();

    const variants = {
        // strarting point of the div animation
        hidden: { opacity: 0, x: '-70vw' },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'tween', duration: 2, ease: 'circOut' }
        }
    };

    const closeNotification = () => {
        setNotification({ message: '', type: '' });
    };

    const sendMessage = async (event) => {
        event.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current,
            {
                publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            })
            .then((result) => {
                console.log('Email sent:', result.text);
                setNotification({ message: 'You successfully sent your message', type: 'success' });
                setTimeout(closeNotification, 5000);
            }, (error) => {
                console.log('Email sending error:', error.text);
                setNotification({
                    message: 'Unfortunately your message could not be sent, please try again',
                    type: 'error'
                });
                setTimeout(closeNotification, 5000);
            });

        event.target.reset();
    }


    return (
        <motion.div id={id}
            className="floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variants : {}}
        >
            <div className="content">
                <div className='component_title' >
                    <h2><span className='span_title'>C</span>ontact Form</h2>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendMessage}>
                        <div className="input-row">
                            <input type="text" name='user_name' placeholder="Full Name" required />
                            <input type="email" name='user_email' placeholder="Email Address" required />
                        </div>
                        <textarea name='message' placeholder="Your Message" maxLength="240" required></textarea>
                        <button className='menu-item' type="submit">SEND MESSAGE <SendIcon className='send_icon' /></button>
                    </form>
                    <Notification message={notification.message} type={notification.type} onClose={closeNotification} />
                </div>


                <div className='component_title' >
                    <h2><span className='span_title'>G</span>et in touch</h2>
                </div>
                <div className='social_item_div contact_icons_div'>
                    <a href="https://de.linkedin.com/in/alina-leinweber-901b94135" className='menu-item social_item '>
                        <LinkedInIcon className='social_icon' />
                    </a>
                    <a href="https://github.com/alinalein " className='social_item menu-item' >
                        <GitHubIcon className='social_icon' />
                    </a>
                </div>
            </div>

        </motion.div>
    );
}

export default Contact;
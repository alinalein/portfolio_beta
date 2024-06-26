import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactComponent as MediumIcon } from '../../assets/svgs/medium-icon.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Notification from '../utils/notification';
import variantsBig from '../utils/variantsAnimation'
import './contact.scss'

const Contact = ({ id, isWidthGreaterThan1050 }) => {
    const [notification, setNotification] = useState({ message: '', type: '' });
    const form = useRef();

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
            variants={isWidthGreaterThan1050 ? variantsBig : {}}
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
                    <a href="https://github.com/alinalein" className='menu-item social_item ' style={{ width: '20%' }} >
                        <LinkedInIcon className='social_icon' />
                    </a>
                    <a href="https://github.com/alinalein " className='social_item menu-item' style={{ width: '20%' }} >
                        <GitHubIcon className='social_icon' />
                    </a>
                    <a href="https://medium.com/@linatech123 " className='social_item menu-item' style={{ width: '20%' }}  >
                        <MediumIcon className='social_icon' />
                    </a>
                </div>
            </div>

        </motion.div>
    );
}

export default Contact;
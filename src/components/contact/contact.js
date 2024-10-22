import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Notification from '../utils/notification';
import variantsBig from '../utils/variantsAnimation'
import Texts from '../utils/texts.js';
import ImpressumDE from '../../assets/pdf/Impressum_Alina_Leinweber_DE.pdf'
import ImpressumEN from '../../assets/pdf/Impressum_Alina_Leinweber_ENG.pdf'
import './contact.scss'

const Contact = ({ id, isWidthGreaterThan1050, language }) => {
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
                setNotification({ message: Texts[language].contact.successMessage, type: 'success' });
                setTimeout(closeNotification, 5000);
            }, (error) => {
                console.log('Email sending error:', error.text);
                setNotification({
                    message: Texts[language].contact.errorMessage,
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
                    <h2>
                        <span className='span_title'>{Texts[language].contact.formTitle.charAt(0)}</span>
                        {Texts[language].contact.formTitle.slice(1)}
                    </h2>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendMessage}>
                        <div className="input-row">
                            <input type="text" name='user_name' placeholder={Texts[language].contact.namePlaceholder} required />
                            <input type="email" name='user_email' placeholder={Texts[language].contact.emailPlaceholder} required />
                        </div>
                        <textarea name='message' placeholder="Your Message" maxLength="240" required></textarea>
                        <button className='menu-item' type="submit">
                            {Texts[language].contact.sendMessageButton} <SendIcon className='send_icon' />
                        </button>                    </form>
                    <Notification message={notification.message} type={notification.type} onClose={closeNotification} />
                </div>


                {/* Dynamic title for 'Get in Touch' */}
                <div className='component_title'>
                    <h2>
                        <span className='span_title'>{Texts[language].contact.getInTouchTitle.charAt(0)}</span>
                        {Texts[language].contact.getInTouchTitle.slice(1)}
                    </h2>
                </div>
                <div className='social_item_div contact_icons_div'>
                    <a href="https://www.linkedin.com/in/alina-leinweber-901b94135" className='menu-item social_item ' style={{ width: '20%' }} >
                        <LinkedInIcon className='social_icon' />
                    </a>
                    <a href="https://github.com/alinalein " className='social_item menu-item' style={{ width: '20%' }} >
                        <GitHubIcon className='social_icon' />
                    </a>
                </div>
                {isWidthGreaterThan1050 ?
                    '' :
                    <a
                        href={language === 'en' ? ImpressumEN : ImpressumDE}
                        style={{ color: 'var(--main-color)' }}
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        Impressum
                    </a>
                }
            </div>
        </motion.div>
    );
}

export default Contact;
import React, { useRef, useState } from 'react';
import Notification from '../utils/notification'
import Texts from '../../../shared/utils/texts';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';

const ContactFormSection = ({ language }) => {

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
        <>
            <div>
                <p className='remove_p-margin'>
                    {Texts[language].contact.formMessage}
                    <a href="mailto:leinweber.alina@gmx.de" style={{ color: "var(--main-color)", textDecoration: "none" }}>
                        leinweber.alina@gmx.de
                    </a>.
                </p>
            </div>
            <div className="contact-form">
                <form ref={form} onSubmit={sendMessage}>
                    <div className="input-row">
                        <input type="text" name='user_name' placeholder={Texts[language].contact.namePlaceholder} required />
                        <input type="email" name='user_email' placeholder={Texts[language].contact.emailPlaceholder} required />
                    </div>
                    <textarea name='message' placeholder={Texts[language].contact.messagePlaceholder} maxLength="240" required></textarea>
                    <button className='menu-item' type="submit">
                        {Texts[language].contact.sendMessageButton} <SendIcon className='send_icon' />
                    </button>                    </form>
                <Notification message={notification.message} type={notification.type} onClose={closeNotification} />
            </div>
        </>
    )
}
export default ContactFormSection; 
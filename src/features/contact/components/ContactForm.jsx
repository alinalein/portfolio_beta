import React from 'react';
import ContactForm from './ContactForm';
import Texts from '../../utils/texts';

const ContactFormSection = ({ language }) => (
    <>
        <div>
            <p className='remove_p-margin'>
                {Texts[language].contact.formMessage}
                <a href="mailto:leinweber.alina@gmx.de" style={{ color: "var(--main-color)", textDecoration: "none" }}>
                    leinweber.alina@gmx.de
                </a>.
            </p>
        </div>
        <ContactForm language={language} />
    </>
);

export default ContactFormSection;
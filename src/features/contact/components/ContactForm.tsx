import React from 'react';
import ContactForm from './ContactForm';
import Texts, { Language } from '../../../shared/utils/texts';

type ContactFormSectionProps = {
    language: Language;
}

const ContactFormSection = ({ language }: ContactFormSectionProps): JSX.Element => (
    <>
        <div>
            <p className='remove_p-margin'>
                {Texts[language].contact.formMessage}
                <a href="mailto:leinweber.alina@gmx.de" className='contact_form_link'>
                    leinweber.alina@gmx.de
                </a>.
            </p>
        </div>
        <ContactForm language={language} />
    </>
);

export default ContactFormSection;
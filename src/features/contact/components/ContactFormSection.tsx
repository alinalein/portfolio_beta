import ContactForm from './ContactForm';
import { useAppContext, Texts } from '../../../shared';

const ContactFormSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section aria-labelledby="contact-form-section">
      <div>
        <p className="remove_p-margin">
          {Texts[language].contact.formMessage}
          <a href="mailto:leinweber.alina@gmx.de" className="contact_form_link">
            leinweber.alina@gmx.de
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </section>
  );
};
export default ContactFormSection;

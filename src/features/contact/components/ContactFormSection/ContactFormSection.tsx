import ContactForm from './ContactForm';
import { useAppContext, Texts } from '../../../../shared';
import styles from './ContactFormSection.module.scss';

const ContactFormSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section aria-labelledby="contact-form-section">
      <div>
        <p className="p__no_margin">
          {Texts[language].contact.formMessage}
          <a href="mailto:leinweber.alina@gmx.de" className={styles.contact_form__link}>
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

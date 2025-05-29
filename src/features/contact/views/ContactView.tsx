import LetsConnectSection from '../components/LetsConnectSection/LetsConnectSection';
import ContactFormSection from '../components/ContactFormSection/ContactFormSection';

import { useAppContext, Title, useFocus, Texts, FloatingContainer } from '../../../shared';

type ContactViewProps = {
  id: string;
};

const ContactView = ({ id }: ContactViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();
  const { headingRef } = useFocus(focusKey);

  return (
    <FloatingContainer id={id}>
      {/* Dynamic title for 'Get in Touch' */}
      <div className="view__content">
        <div className="section__title">
          {Title({
            title: Texts[language].contact.formTitle,
            id: 'contact-form-section',
            ref: headingRef,
          })}
        </div>

        <ContactFormSection />

        {/* Dynamic title for 'Let's connect! */}
        <div className="section__title">
          {Title({
            title: Texts[language].contact.getInTouchTitle,
            id: 'lets-connect-section',
          })}
        </div>
        <LetsConnectSection />
      </div>
    </FloatingContainer>
  );
};
export default ContactView;

import FloatingContainer from '../../../shared/components/FloatingContainer';
import Texts from '../../../shared/utils/texts';
import LetsConnectSection from '../components/LetsConnectSection';
import ContactFormSection from '../components/ContactFormSection';
import '../styles/contact.scss';
import renderStyledTitle from '../../../shared/utils/renderStyledTitle';
import useFocusOnMount from '../../../shared/utils/useFocusOnMount ';
import { useAppContext } from '../../../shared/context/AppContext';
type ContactViewProps = {
  id: string;
};

const ContactView = ({ id }: ContactViewProps): JSX.Element => {
  const { language, focusKey } = useAppContext();
  const { headingRef } = useFocusOnMount(focusKey);

  return (
    <FloatingContainer id={id}>
      {/* Dynamic title for 'Get in Touch' */}
      <div className="content">
        <div className="component_title">
          {renderStyledTitle({
            title: Texts[language].contact.formTitle,
            id: 'contact-form-section',
            ref: headingRef,
            tabIndex: -1,
          })}
        </div>

        <ContactFormSection />

        {/* Dynamic title for 'Let's connect! */}
        <div className="component_title">
          {renderStyledTitle({
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

import FloatingContainer from '../../../shared/components/FloatingContainer';
import Texts from '../../../shared/utils/texts';
import LetsConnectSection from '../components/LetsConnectSection'
import ContactFormSection from '../components/ContactFormSection';
import '../styles/contact.scss'
import renderStyledTitle from '../../../shared/utils/renderStyledTitle';
import { useAppContext } from '../../../shared/context/AppContext';
type ContactViewProps = {
    id: string;
};

const ContactView = ({ id }: ContactViewProps): JSX.Element => {

    const { language } = useAppContext();

    return (
        <FloatingContainer id={id} >

            {/* Dynamic title for 'Get in Touch' */}
            <div className="content">
                <div className='component_title' >
                    {renderStyledTitle(Texts[language].contact.formTitle)}

                </div>

                <ContactFormSection />

                {/* Dynamic title for 'Let's connect! */}
                <div className='component_title'>
                    {renderStyledTitle(Texts[language].contact.getInTouchTitle)}

                </div>
                <LetsConnectSection
                />
            </div>
        </FloatingContainer>
    )
}
export default ContactView;
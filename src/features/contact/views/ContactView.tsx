import FloatingContainer from '../../../shared/components/FloatingContainer';
import Texts, { Language } from '../../../shared/utils/texts';
import LetsConnectSection from '../components/LetsConnectSection'
import ContactFormSection from '../components/ContactFormSection';
import '../styles/contact.scss'
import renderStyledTitle from '../../../shared/utils/renderStyledTitle';

type ContactViewProps = {
    id: string;
    handleImpressumClick: () => void;
    isWidthGreaterThan1050: boolean;
    language: Language;
};

const ContactView = ({
    id,
    handleImpressumClick,
    isWidthGreaterThan1050,
    language
}: ContactViewProps): JSX.Element => (

    <FloatingContainer id={id} isWidthGreaterThan1050={isWidthGreaterThan1050}>

        {/* Dynamic title for 'Get in Touch' */}
        <div className="content">
            <div className='component_title' >
                {renderStyledTitle(Texts[language].contact.formTitle)}

            </div>

            <ContactFormSection language={language} />

            {/* Dynamic title for 'Let's connect! */}
            <div className='component_title'>
                {renderStyledTitle(Texts[language].contact.getInTouchTitle)}

            </div>
            <LetsConnectSection
                isWidthGreaterThan1050={isWidthGreaterThan1050}
                handleImpressumClick={handleImpressumClick}
            />
        </div>
    </FloatingContainer>
)

export default ContactView;
import FloatingContainer from '../../../shared/components/FloatingContainer';
import Texts from '../../../shared/utils/texts';
import LetsConnectSection from '../components/LetsConnectSection'
import ContactFormSection from '../components/ContactFormSection';
import '../styles/contact.scss'

const ContactView = ({ id, handleImpressumClick, isWidthGreaterThan1050, language }) => (

    <>
        <FloatingContainer id={id} isWidthGreaterThan1050={isWidthGreaterThan1050}>

            {/* Dynamic title for 'Get in Touch' */}
            <div className="content">
                <div className='component_title' >
                    <h2>
                        <span className='span_title'>{Texts[language].contact.formTitle.charAt(0)}</span>
                        {Texts[language].contact.formTitle.slice(1)}
                    </h2>
                </div>

                <ContactFormSection language={language} />
                {/* Dynamic title for 'Let's connect! */}
                <div className='component_title'>
                    <h2>
                        <span className='span_title'>{Texts[language].contact.getInTouchTitle.charAt(0)}</span>
                        {Texts[language].contact.getInTouchTitle.slice(1)}
                    </h2>
                </div>
                <LetsConnectSection isWidthGreaterThan1050={isWidthGreaterThan1050} handleImpressumClick={handleImpressumClick} />
            </div>
        </FloatingContainer>
    </>
)

export default ContactView;
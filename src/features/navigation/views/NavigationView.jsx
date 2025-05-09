import '../styles/navigation.scss'
import Texts from '../../../shared/utils/texts';
import TypingAnimation from '../utils/typing_effect'
import SocialsSection from '../components/SocialsSection'
import ToogleLanguageSection from '../components/ToggleLanguageSection'
import ToogleThemeSection from '../components/ToogleThemeSection';
import NavItemsSection from '../components/NavItemsSection'
import ImpressumSection from '../components/ImpressumSection'

const NavigationView = ({ handleImpressumClick, setActiveItem, activeItem, language, setLanguage,
    isWidthGreaterThan1050, setActiveComponent, activeComponent
}) =>
(

    <>
        <nav className="navigation">
            <div className='nav_intro_div'>
                <div className=' name_div'>
                    {Texts[language].greeting}
                </div>
                <TypingAnimation />
                <SocialsSection />
            </div>
            <ToogleLanguageSection language={language} setLanguage={setLanguage} />
            <ToogleThemeSection />
            <NavItemsSection language={language} activeItem={activeItem} setActiveItem={setActiveItem} setActiveComponent={setActiveComponent}
                isWidthGreaterThan1050={isWidthGreaterThan1050} activeComponent={activeComponent}
            />
            <ImpressumSection isWidthGreaterThan1050={isWidthGreaterThan1050} handleImpressumClick={handleImpressumClick} />
        </nav>
    </>
)
export default NavigationView; 
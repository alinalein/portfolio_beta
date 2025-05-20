import '../styles/navigation.scss'
import { Dispatch, SetStateAction } from 'react';
import Texts, { Language } from '../../../shared/utils/texts';
import TypingAnimation from '../utils/typing_effect'
import SocialsSection from '../components/SocialsSection'
import ToggleLanguageSection from '../components/ToggleLanguageSection'
import ToggleThemeSection from '../components/ToggleThemeSection';
import NavItemsSection from '../components/NavItemsSection'
import ImpressumSection from '../components/ImpressumSection'
import type { ComponentKey } from '../../../types/routes';

type NavigationViewProps = {
    handleImpressumClick: () => void;
    setActiveItem: Dispatch<SetStateAction<string>>;
    activeItem: string;
    language: Language;
    setLanguage: Dispatch<SetStateAction<Language>>;
    isWidthGreaterThan1050: boolean;
    setActiveComponent: Dispatch<SetStateAction<ComponentKey>>;
    activeComponent: ComponentKey;
}

const NavigationView = ({
    handleImpressumClick,
    setActiveItem,
    activeItem,
    language,
    setLanguage,
    isWidthGreaterThan1050,
    setActiveComponent,
    activeComponent,
}: NavigationViewProps): JSX.Element => (

    <>
        <nav className="navigation">
            <div className='nav_intro_div'>
                <div className=' name_div'>
                    {Texts[language].greeting}
                </div>
                <TypingAnimation />
                <SocialsSection />
            </div>
            <ToggleLanguageSection language={language} setLanguage={setLanguage} />
            <ToggleThemeSection />
            <NavItemsSection language={language} activeItem={activeItem} setActiveItem={setActiveItem} setActiveComponent={setActiveComponent}
                isWidthGreaterThan1050={isWidthGreaterThan1050} activeComponent={activeComponent}
            />
            <ImpressumSection isWidthGreaterThan1050={isWidthGreaterThan1050} handleImpressumClick={handleImpressumClick} />
        </nav>
    </>
)
export default NavigationView; 
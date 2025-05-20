import '../styles/navigation.scss'
import Texts from '../../../shared/utils/texts';
import TypingAnimation from '../utils/typing_effect'
import SocialsSection from '../components/SocialsSection'
import ToggleLanguageSection from '../components/ToggleLanguageSection'
import ToggleThemeSection from '../components/ToggleThemeSection';
import NavItemsSection from '../components/NavItemsSection'
import ImpressumSection from '../components/ImpressumSection'
import { useAppContext } from '../../../shared/context/AppContext';

const NavigationView = (): JSX.Element => {

    const { language } = useAppContext();

    return (
        <nav className="navigation">
            <div className='nav_intro_div'>
                <div className=' name_div'>
                    {Texts[language].greeting}
                </div>
                <TypingAnimation />
                <SocialsSection />
            </div>
            <ToggleLanguageSection />
            <ToggleThemeSection />
            <NavItemsSection
            />
            <ImpressumSection />
        </nav>
    )
}
export default NavigationView; 
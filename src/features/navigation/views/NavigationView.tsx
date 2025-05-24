import '../styles/navigation.scss';
import Texts from '../../../shared/utils/texts';
import TypingAnimation from '../utils/typing_effect';
import SocialsSection from '../components/SocialsSection';
import ToggleLanguageSection from '../components/ToggleLanguageSection';
import ToggleThemeSection from '../components/ToggleThemeSection';
import NavItemsSection from '../components/NavItemsSection';
import ImpressumSection from '../components/ImpressumSection';
import { useAppContext } from '../../../shared/context/AppContext';

const NavigationView = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <nav className="navigation" aria-labelledby="website-navigation" role="navigation">
      <div className="nav_intro_div">
        <h2 id="website-navigation" className="name_div">
          {Texts[language].greeting}
        </h2>
        <TypingAnimation />
        <SocialsSection />
      </div>
      <ToggleLanguageSection />
      <ToggleThemeSection />
      <NavItemsSection />
      <ImpressumSection />
    </nav>
  );
};
export default NavigationView;

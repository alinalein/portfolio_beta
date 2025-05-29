import TypingAnimation from '../components/TypingAnimation/TypingAnimation';

import ToggleLanguageSection from '../components/ToggleLanguageSection/ToggleLanguageSection';
import ToggleThemeSection from '../components/ToggleThemeSection/ToggleThemeSection';
import NavItemsSection from '../components/NavItemsSection/NavItemsSection';
import ImpressumSection from '../components/ImpressumSection/ImpressumSection';

import { Texts, useAppContext, SocialLinks } from '../../../shared';
import styles from './NavigationView.module.scss';

const NavigationView = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <nav
      className={`navigation ${styles.navigation} `}
      aria-labelledby="website-navigation"
      role="navigation"
    >
      <div className={styles.navigation__intro}>
        <h2 id="website-navigation" className={styles.navigation__text}>
          {Texts[language].greeting}
        </h2>
        <TypingAnimation />
        <SocialLinks style_div={styles.navigation__socials} />
      </div>
      <ToggleLanguageSection />
      <ToggleThemeSection />
      <NavItemsSection />
      <ImpressumSection />
    </nav>
  );
};
export default NavigationView;

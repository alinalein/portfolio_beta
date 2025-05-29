import usePersistToLocalStorage from '../../hooks/usePersistToLocalStorage';
import { useAppContext, Texts, Language } from '../../../../shared';
import styles from './ToggleLanguageSection.module.scss';

const ToggleLanguageSection = (): JSX.Element => {
  const { language, setLanguage } = useAppContext();
  const toggleLanguage = (selectedLanguage: Language): void => {
    if (language !== selectedLanguage) {
      setLanguage(selectedLanguage);
    }
  };

  usePersistToLocalStorage('language', language);
  console.log('language: ', language);
  return (
    <section className={`language_toggle  ${styles.language_toggle}`}>
      <button
        className={`language_toggle__option ${styles.language_toggle__option} ${language === 'en' ? 'active' : ''}`}
        onClick={() => toggleLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        className={`language_toggle__option ${styles.language_toggle__option} ${language === 'de' ? 'active' : ''}`}
        onClick={() => toggleLanguage('de')}
        aria-pressed={language === 'de'}
      >
        {Texts[language].navigation.DE}
      </button>
      <div
        className={`language_toggle__indicator ${styles.language_toggle__indicator} ${language === 'en' ? styles.active_en : styles.active_de}`}
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default ToggleLanguageSection;

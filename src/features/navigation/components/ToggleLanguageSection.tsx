import Texts, { Language } from '../../../shared/utils/texts';
import usePersistToLocalStorage from '../hooks/usePersistToLocalStorage';
import { useAppContext } from '../../../shared/context/AppContext';

const ToggleLanguageSection = (): JSX.Element => {
  const { language, setLanguage } = useAppContext();
  const toggleLanguage = (selectedLanguage: Language): void => {
    if (language !== selectedLanguage) {
      setLanguage(selectedLanguage);
    }
  };

  usePersistToLocalStorage('language', language);

  return (
    <section className="language-toggle">
      <button
        className={`language-option ${language === 'en' ? 'active' : ''}`}
        onClick={() => toggleLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <button
        className={`language-option ${language === 'de' ? 'active' : ''}`}
        onClick={() => toggleLanguage('de')}
        aria-pressed={language === 'de'}
      >
        {Texts[language].navigation.DE}
      </button>
      <div
        className={`language-toggle-indicator ${language === 'en' ? 'active-en' : 'active-de'}`}
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default ToggleLanguageSection;

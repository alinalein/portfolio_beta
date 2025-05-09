import Texts from "../../../shared/utils/texts"
import usePersistToLocalStorage from '../hooks/usePersistToLocalStorage'

const ToogleLanguageSection = ({ language, setLanguage }) => {
    const toggleLanguage = (selectedLanguage) => {
        if (language !== selectedLanguage) {
            setLanguage(selectedLanguage);
        }
    };

    usePersistToLocalStorage('language', language)

    return (
        <div className="language-toggle">
            <div
                className={`language-option ${language === 'en' ? 'active' : ''}`}
                onClick={() => toggleLanguage('en')}
            >
                EN
            </div>
            <div
                className={`language-option ${language === 'de' ? 'active' : ''}`}
                onClick={() => toggleLanguage('de')}
            >
                {Texts[language].navigation.DE}
            </div>
            <div className={`language-toggle-indicator ${language === 'en' ? 'active-en' : 'active-de'}`}></div>
        </div>
    )
}

export default ToogleLanguageSection; 
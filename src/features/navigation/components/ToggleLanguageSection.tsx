import Texts, { Language } from "../../../shared/utils/texts";
import { Dispatch, SetStateAction } from "react";
import usePersistToLocalStorage from '../hooks/usePersistToLocalStorage'

type ToggleLanguageSectionProps = {
    language: Language;
    setLanguage: Dispatch<SetStateAction<Language>>
}

const ToggleLanguageSection = ({ language, setLanguage }: ToggleLanguageSectionProps): JSX.Element => {

    const toggleLanguage = (selectedLanguage: Language): void => {
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

export default ToggleLanguageSection; 
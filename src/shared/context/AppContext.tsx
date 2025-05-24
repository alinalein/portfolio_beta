import React, { createContext, useContext, useState, useEffect } from 'react';

import { ComponentKey } from '../../types/routes';
import { Language } from '../utils/texts';

type AppContextType = {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  isWidthGreaterThan1050: boolean;
  activeComponent: ComponentKey;
  setActiveComponent: React.Dispatch<React.SetStateAction<ComponentKey>>;
  handleImpressumClick: () => void;
  focusKey: number | null;
  triggerFocus: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    const stored = localStorage.getItem('language');
    // if in stored en OR de return it, otherwise return en
    return stored === 'en' || stored === 'de' ? stored : 'en';
  };
  const [language, setLanguage] = useState<'en' | 'de'>(getInitialLanguage);

  const getInitialComponent = (): ComponentKey => {
    const stored = localStorage.getItem('activeComponent');
    const valid: ComponentKey[] = ['ABOUT', 'WORK', 'CONTACT', 'IMPRESSUM'];
    return valid.includes(stored as ComponentKey) ? (stored as ComponentKey) : 'ABOUT';
  };
  const [activeComponent, setActiveComponent] = useState<ComponentKey>(getInitialComponent);

  const [activeItem, setActiveItem] = useState<string>(
    () => localStorage.getItem('activeItem') || ''
  );

  const [isWidthGreaterThan1050, setIsWidthGreaterThan1050] = useState<boolean>(
    window.innerWidth > 1050
  );
  useEffect(() => {
    const handleResize = (): void => setIsWidthGreaterThan1050(window.innerWidth > 1050);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImpressumClick = () => {
    setActiveComponent('IMPRESSUM');
    setActiveItem('');
  };

  // triggers focus on component, even the component is already active
  const [focusKey, setFocusKey] = useState<number | null>(null);
  const triggerFocus = () => {
    setFocusKey(Date.now()); // will change even if activeComponent stays the same
  };

  return (
    <AppContext.Provider
      value={{
        activeItem,
        setActiveItem,
        language,
        setLanguage,
        isWidthGreaterThan1050,
        activeComponent,
        setActiveComponent,
        handleImpressumClick,
        focusKey,
        triggerFocus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

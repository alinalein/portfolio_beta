import { useEffect, useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import usePersistToLocalStorage from '../hooks/usePersistToLocalStorage';

const ToggleThemeSection = (): JSX.Element => {
  const getInitialTheme = (): 'dark' | 'light' => {
    const stored: string | null = localStorage.getItem('theme');
    return stored === 'dark' ? stored : 'light';
  };

  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  // Apply the theme the first time it is loaded from the local memory, if it has been set beforehand
  useEffect(() => {
    document.body.className = `${theme}-mode`;
  }, [theme]);

  const toggleTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  usePersistToLocalStorage('theme', theme);

  return (
    <button
      onClick={toggleTheme}
      className="menu-item"
      aria-label={
        theme === 'light' ? 'Activate dark mode (higher contrast)' : 'Activate light mode'
      }
    >
      {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
    </button>
  );
};
export default ToggleThemeSection;

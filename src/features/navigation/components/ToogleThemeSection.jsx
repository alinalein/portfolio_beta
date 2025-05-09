import { useEffect, useState } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import usePersistToLocalStorage from '../hooks/usePersistToLocalStorage'

const ToogleThemeSection = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Apply the theme the first time it is loaded from the local memory, if it has been set beforehand 
    useEffect(() => {
        document.body.className = `${theme}-mode`;
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    usePersistToLocalStorage('theme', theme)

    return (
        <div onClick={toggleTheme} className='menu-item'>
            {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
        </div>
    )
}
export default ToogleThemeSection
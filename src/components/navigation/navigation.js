// Navigation.js
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import './navigation.scss'
import TypingAnimation from '../utils/typing_effect.js';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MessageIcon from '@mui/icons-material/Message';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Texts from '../utils/texts';

const Navigation = ({ handleImpressumClick, activeItem, setActiveItem, isWidthGreaterThan1050, setActiveComponent, activeComponent, language, setLanguage }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'ABOUT', label: Texts[language].navigation.ABOUT, icon: <PersonOutlineIcon className='menu-icon' /> },
        { name: 'WORK', label: Texts[language].navigation.WORK, icon: <RemoveRedEyeIcon className='menu-icon' /> },
        { name: 'CONTACT', label: Texts[language].navigation.CONTACT, icon: <MessageIcon className='menu-icon' /> },
    ];

    useEffect(() => {
        const scrollDetector = () => {
            // Array of section IDs
            const sections = ['about', 'work', 'contact'];

            let currentSection = '';
            for (let section of sections) {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const bounds = sectionElement.getBoundingClientRect();
                    if (bounds.top <= window.innerHeight / 2 && bounds.bottom >= window.innerHeight / 2) {
                        //ste the current section to upper case, as active Item & Component are also both in upper 
                        currentSection = section.toUpperCase();
                        break;
                    }
                }
            }
            // Update active states only if there's a change in sections
            if (currentSection !== activeItem && currentSection !== null) {
                console.log('Current Section:', currentSection);
                setActiveItem(currentSection);
                setActiveComponent(currentSection);
            }
        };

        if (!isWidthGreaterThan1050) {
            window.addEventListener('scroll', scrollDetector);
        }

        return () => window.removeEventListener('scroll', scrollDetector);
    }, [isWidthGreaterThan1050, activeItem, setActiveComponent]);

    // set activeItem icon & the active component to the #id of the initialy loaded page
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            if (isWidthGreaterThan1050) {
                // For larger screens, set the active component
                setActiveItem(hash.toUpperCase());
                setActiveComponent(hash.toUpperCase());
            } else {
                // For smaller screens, scroll to the component
                scrollToComponent(hash);
                setActiveItem(hash.toUpperCase());
            }
        }
    }, [isWidthGreaterThan1050, location.hash]);

    // set activeItem icon & the active component on user click
    const handleMenuItemClick = (name) => {
        const sectionId = name.toLowerCase();
        // sets url to component id
        navigate('/#' + sectionId);
        if (!isWidthGreaterThan1050) {
            scrollToComponent(sectionId)
        } else {
            setActiveItem(name)
            setActiveComponent(name);
        }
    }

    const scrollToComponent = (componentId) => {
        const element = document.getElementById(componentId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Apply the theme the first time it is loaded from the local memory, if it has been set beforehand 
    useEffect(() => {
        document.body.className = `${theme}-mode`;
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const toggleLanguage = (selectedLanguage) => {
        if (language !== selectedLanguage) {
            setLanguage(selectedLanguage);
        }
    };

    // Save the selected language, theme, activeItem in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('language', language);
        localStorage.setItem('theme', theme);
        localStorage.setItem('activeItem', activeItem);
        localStorage.setItem('activeComponent', activeComponent);
    }, [language, theme, activeItem, activeComponent]);

    return (
        <nav className="navigation">
            <div className='nav_intro_div'>
                <div className=' name_div'>
                    {Texts[language].greeting}
                </div>
                <TypingAnimation />
                <div className='social_item_div'>
                    <a href="https://www.linkedin.com/in/alina-leinweber/" className='social_item menu-item'>
                        <LinkedInIcon className='social_icon' />
                    </a>
                    <a href="https://github.com/alinalein " className='social_item menu-item' >
                        <GitHubIcon className='social_icon' />
                    </a>
                </div>
            </div>

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
            <div onClick={toggleTheme} className='menu-item'>
                {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
            </div>
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => { handleMenuItemClick(item.name) }}
                > {item.icon}
                    {item.label}
                </div>
            ))}
            {isWidthGreaterThan1050 ? (
                <Link to="/impressum" onClick={handleImpressumClick} className='nav_impressum'>
                    Impressum
                </Link>
            ) : null}
        </nav>
    );
}

export default Navigation;
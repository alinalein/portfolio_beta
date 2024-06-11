// Navigation.js
import React, { useState, useEffect } from 'react'
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

const Navigation = ({ components, isWidthGreaterThan1050, setActiveComponent }) => {
    const [activeItem, setActiveItem] = useState('ABOUT');
    const [theme, setTheme] = useState('light')
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'ABOUT', icon: <PersonOutlineIcon className='menu-icon' /> },
        { name: 'WORK', icon: <RemoveRedEyeIcon className='menu-icon' /> },
        { name: 'CONTACT', icon: <MessageIcon className='menu-icon' /> },
    ];

    // change active icon depending on the section the user scrolled to
    useEffect(() => {
        const handleScroll = () => {
            // list of section IDs corresponds to menuItems
            const sections = ['about', 'work', 'contact'];
            let currentSection = '';
            for (let section of sections) {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const bounds = sectionElement.getBoundingClientRect();
                    if (bounds.top <= window.innerHeight / 2 && bounds.bottom >= window.innerHeight / 2) {
                        currentSection = section.toUpperCase();
                        break;
                    }
                }
            }

            if (currentSection !== activeItem && currentSection !== '') {
                console.log('Current Section:', currentSection);
                setActiveItem(currentSection);
                setActiveComponent(currentSection);
            }
        };

        if (!isWidthGreaterThan1050) { window.addEventListener('scroll', handleScroll); }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isWidthGreaterThan1050, activeItem, setActiveComponent]);

    const scrollToComponent = (componentId) => {
        const element = document.getElementById(componentId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // set activeItem icon & the active component to the #id of the initialy loaded page
    useEffect(() => {
        const hash = location.hash.replace('#', '')
        if (hash && ['about', 'work', 'contact'].includes(hash)) {
            setActiveItem(hash.toUpperCase());
        }
        if (isWidthGreaterThan1050 && hash && components[hash]) {
            setActiveComponent(hash.toUpperCase());
        } else {
            scrollToComponent(hash);
        }
    }, [isWidthGreaterThan1050]);

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

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme + "-mode";
    };

    return (
        <nav className="navigation">
            <div className='nav_intro_div'>
                <div className=' name_div'>
                    Hello I'm Alina
                </div>
                <div> <TypingAnimation /></div>
                <div className='social_item_div'>
                    <a href="https://github.com/alinalein" className='social_item menu-item'>
                        <LinkedInIcon className='social_icon' />
                    </a>
                    <a href="https://github.com/alinalein " className='social_item menu-item' >
                        <GitHubIcon className='social_icon' />
                    </a>
                </div>
            </div>
            <div onClick={toggleTheme} className='menu-item'>
                {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
            </div>
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => { handleMenuItemClick(item.name); }}
                > {item.icon}
                    {item.name}
                </div>
            ))}
        </nav>
    );
}

export default Navigation;
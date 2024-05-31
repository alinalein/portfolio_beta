// Navigation.js
import React, { useState, useEffect } from 'react'
import './navigation.scss'
import profilePic from '../../assets/img/IMG_1732.jpeg';
import TypingAnimation from '../utils/typing_effect.js';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MessageIcon from '@mui/icons-material/Message';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navigation = ({ isWidthGreaterThan1050, setActiveComponent }) => {
    const [activeItem, setActiveItem] = useState('ABOUT');
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const hash = window.location.hash.replace('#', '').toUpperCase();
        if (hash && ['ABOUT', 'WORK', 'CONTACT'].includes(hash)) {
            setActiveItem(hash);
        }
    }, []);

    const handleMenuItemClick = (name) => {
        setActiveItem(name);
        const sectionId = name.toLowerCase();
        window.history.replaceState(null, null, '#' + sectionId);

        if (!isWidthGreaterThan1050) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            setActiveComponent(name);
        }
    }

    const menuItems = [
        { name: 'ABOUT', icon: <PersonOutlineIcon className='menu-icon' /> },
        { name: 'WORK', icon: <RemoveRedEyeIcon className='menu-icon' /> },
        { name: 'CONTACT', icon: <MessageIcon className='menu-icon' /> },

    ];

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme + "-mode";
    };

    return (
        <nav className="navigation">
            <div className='nav_intro_div'>
                <div className='name_div'>
                    Hello I'm Alina
                </div>
                <div>
                    <TypingAnimation />
                </div>
                <div>
                    <img src={profilePic} alt='Profile picture' className="nav_pic" />
                </div>
            </div>
            <div onClick={toggleTheme} className='menu-item'>
                {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
            </div>
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => {
                        setActiveItem(item.name);
                        handleMenuItemClick(item.name);
                    }}
                > {item.icon}
                    {item.name}
                </div>
            ))}
        </nav>
    );
}

export default Navigation;

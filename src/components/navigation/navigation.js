// Navigation.js
import React, { useState } from 'react'
import './navigation.scss'
import { useNavigate } from 'react-router-dom';

import TypingAnimation from '../helpers.js';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MessageIcon from '@mui/icons-material/Message';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('ABOUT');
    const [theme, setTheme] = useState('light');

    const navigate = useNavigate()

    const menuItems = [
        { name: 'ABOUT', icon: <PersonOutlineIcon className='menu-icon' />, path: '/about' },
        { name: 'WORK', icon: <RemoveRedEyeIcon className='menu-icon' />, path: '/work' },
        { name: 'CONTACT', icon: <MessageIcon className='menu-icon' />, path: '/contact' },

    ];

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme + "-mode";
    };

    return (
        <nav className="navigation">
            <div >
                Hello I am Alina
            </div>
            <div>
                <TypingAnimation />
            </div>
            <div onClick={toggleTheme}>
                {theme === 'light' ? <DarkModeIcon className="icon" /> : <WbSunnyIcon className="icon" />}
            </div>
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => { setActiveItem(item.name); navigate(item.path); }}
                > {item.icon}
                    {item.name}
                </div>
            ))}
        </nav>
    );
}

export default Navigation;

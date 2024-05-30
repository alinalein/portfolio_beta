// Navigation.js
import React, { useState, useEffect } from 'react'
import './navigation.scss'
import { useNavigate } from 'react-router-dom';
import profilePic from '../../assets/img/IMG_1732.jpeg';
import TypingAnimation from '../helpers.js';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MessageIcon from '@mui/icons-material/Message';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState('ABOUT');
    const [theme, setTheme] = useState('light');
    const [isWidthGreaterThan1050, setIsWidthGreaterThan1050] = useState(window.innerWidth > 1050);

    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setIsWidthGreaterThan1050(window.innerWidth > 1050);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handleMenuItemClick = (path, name) => {

        if (!isWidthGreaterThan1050) {

            const section = document.getElementById(name.toLowerCase());

            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });

            } else {
                // Update URL without reloading
                navigate(path, { replace: true });
            }
        } else {
            navigate(path);
        }
    };

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
            <div className='nav_intro_div'>
                <div className='name_div'>
                    Hello I'm Alina
                </div>
                <div>
                    <img src={profilePic} alt='Profile picture' className="nav_pic" />
                </div>
                <div>
                    <TypingAnimation />
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
                        handleMenuItemClick(item.path, item.name);
                    }}
                > {item.icon}
                    {item.name}
                </div>
            ))}
        </nav>
    );
}

export default Navigation;

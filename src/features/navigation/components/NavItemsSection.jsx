import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import useScrollSectionDetector from '../hooks/useScrollSectionDetector'
import usePersistToLocalStorage from '../hooks/usePersistToLocalStorage'
import getMenuItems from '../utils/getMenuItems'
import scrollToComponent from '../utils/scrollToComponent';
import Texts from '../../../shared/utils/texts';

const NavItemsSection = ({ language, activeItem, setActiveItem, activeComponent, setActiveComponent, isWidthGreaterThan1050 }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = getMenuItems(language, Texts);

    useScrollSectionDetector({
        isActive: !isWidthGreaterThan1050,
        sections: ['about', 'work', 'contact'],
        activeItem,
        setActiveItem,
        setActiveComponent
    });

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

    usePersistToLocalStorage('activeItem', activeItem)
    usePersistToLocalStorage('activeComponent', activeComponent)

    return (
        <>
            {menuItems.map((item) => (
                <div
                    key={item.name}
                    className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => { handleMenuItemClick(item.name) }}
                >
                    {item.icon}
                    {item.label}
                </div>
            ))}
        </>
    )
}

export default NavItemsSection; 
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useScrollSectionDetector from '../hooks/useScrollSectionDetector';
import usePersistToLocalStorage from '../hooks/usePersistToLocalStorage';
import getMenuItems from '../utils/getMenuItems';
import scrollToComponent from '../utils/scrollToComponent';

import type { ComponentKey } from '../../../types/routes';
import { useAppContext } from '../../../shared';

const NavItemsSection = (): JSX.Element => {
  const {
    language,
    activeItem,
    setActiveItem,
    activeComponent,
    setActiveComponent,
    isWidthGreaterThan1050,
    triggerFocus,
  } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = getMenuItems(language);

  useScrollSectionDetector({
    isActive: !isWidthGreaterThan1050,
    sections: ['about', 'work', 'contact'],
    activeItem,
    setActiveItem,
    setActiveComponent,
  });

  // set activeItem icon & the active component to the #id of the initialy loaded page
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      if (isWidthGreaterThan1050) {
        // For larger screens, set the active component
        setActiveItem(hash.toUpperCase());
        setActiveComponent(hash.toUpperCase() as ComponentKey);
      } else {
        // For smaller screens, scroll to the component
        scrollToComponent(hash);
        setActiveItem(hash.toUpperCase());
      }
    }
  }, [isWidthGreaterThan1050, location.hash]);

  // set activeItem icon & the active component on user click
  const handleMenuItemClick = (name: ComponentKey): void => {
    const sectionId = name.toLowerCase();
    // sets url to component id
    navigate('/#' + sectionId);
    if (!isWidthGreaterThan1050) {
      scrollToComponent(sectionId);
    } else {
      setActiveItem(name);
      setActiveComponent(name as ComponentKey);
      triggerFocus();
    }
  };

  usePersistToLocalStorage('activeItem', activeItem);
  usePersistToLocalStorage('activeComponent', activeComponent);

  return (
    <>
      <h2 className="sr-only">{language === 'en' ? 'Navigation section' : 'Navigationsbereich'}</h2>
      {menuItems.map((item) => (
        <button
          key={item.name}
          aria-label={item.name}
          aria-current={activeItem === item.name ? 'true' : undefined}
          className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
          onClick={() => {
            handleMenuItemClick(item.name as ComponentKey);
          }}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </>
  );
};

export default NavItemsSection;

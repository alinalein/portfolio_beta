import { useEffect } from 'react';

const useScrollSectionDetector = ({ isActive, sections, activeItem, setActiveItem, setActiveComponent }) => {

    useEffect(() => {
        const scrollDetector = () => {
            let currentSection = '';
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const bounds = element.getBoundingClientRect();
                    if (bounds.top <= window.innerHeight / 2 && bounds.bottom >= window.innerHeight / 2) {
                        currentSection = section.toUpperCase();
                        break;
                    }
                }
            }
            if (currentSection !== activeItem && currentSection !== '') {
                setActiveItem(currentSection);
                setActiveComponent(currentSection);
            }
        };

        // It only activates if isActive is true (e.g. on mobile view). & adds scroll listener 
        if (isActive) {
            window.addEventListener('scroll', scrollDetector);
            return () => window.removeEventListener('scroll', scrollDetector);
        }
    }, [isActive, sections, activeItem, setActiveItem, setActiveComponent]);
};

export default useScrollSectionDetector;

import { useEffect, Dispatch, SetStateAction } from 'react';
import type { ComponentKey } from '../../../types/routes';

type useScrollSectionDetectorProps = {
  isActive: boolean;
  sections: string[];
  activeItem: string;
  setActiveItem: Dispatch<SetStateAction<string>>;
  setActiveComponent: Dispatch<SetStateAction<ComponentKey>>;
};

const useScrollSectionDetector = ({
  isActive,
  sections,
  activeItem,
  setActiveItem,
  setActiveComponent,
}: useScrollSectionDetectorProps): void => {
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
        setActiveComponent(currentSection as ComponentKey);
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

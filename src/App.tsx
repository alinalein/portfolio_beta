import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import NavigationView from './features/navigation/views/NavigationView';
import Background from './shared/components/Background';
import useDeviceWidth from './shared/hooks/useDeviceWidth'
import MainRoutes from './routes/MainRoutes';
import type { ComponentKey } from '../src/types/routes';

function App(): JSX.Element {

    const getInitialLanguage = (): 'en' | 'de' => {
        const stored = localStorage.getItem('language');
        // if in stored en OR de return it, otherwise return en 
        return stored === 'en' || stored === 'de' ? stored : 'en';
    }

    const getInitialComponent = (): ComponentKey => {
        const stored = localStorage.getItem('activeComponent')
        const valid: ComponentKey[] = ['about', 'work', 'contact', 'impressum'];
        return valid.includes(stored as ComponentKey) ? (stored as ComponentKey) : 'about';
    }

    const isWide = useDeviceWidth();

    const [language, setLanguage] = useState<'en' | 'de'>(getInitialLanguage);
    const [activeComponent, setActiveComponent] = useState<ComponentKey>(getInitialComponent);
    const [activeItem, setActiveItem] = useState<string>(() => localStorage.getItem('activeItem') || '');

    const handleImpressumClick = () => {
        setActiveComponent('impressum');
        setActiveItem('');
    };

    return (
        <HashRouter>
            <div className="app_container">
                <Background />
                <NavigationView
                    handleImpressumClick={handleImpressumClick}
                    setActiveItem={setActiveItem}
                    activeItem={activeItem}
                    language={language}
                    setLanguage={setLanguage}
                    isWidthGreaterThan1050={isWide}
                    setActiveComponent={setActiveComponent}
                    activeComponent={activeComponent}
                />
                <div className='route_container'>
                    <MainRoutes
                        language={language}
                        isWide={isWide}
                        handleImpressumClick={handleImpressumClick}
                        activeComponent={activeComponent}
                    />
                </div>
            </div>
        </HashRouter>
    );
}

export default App;

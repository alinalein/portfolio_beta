import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import NavigationView from './features/navigation/views/NavigationView';
import Background from './shared/components/Background';
import useDeviceWidth from './shared/hooks/useDeviceWidth'
import MainRoutes from './routes/MainRoutes';

function App() {
    const isWide = useDeviceWidth();
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [activeComponent, setActiveComponent] = useState(localStorage.getItem('activeComponent') || 'ABOUT');
    const [activeItem, setActiveItem] = useState(localStorage.getItem('activeItem') || '');

    const handleImpressumClick = () => {
        setActiveComponent('');
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

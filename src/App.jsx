import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AboutMeView from './features/about_me/views/AboutMeView'
import ApiCaseStudy from './features/work/apiCaseStudy';
import ChatCaseStudy from './features/work/chatCaseStudy'
import Navigation from './features/navigation/navigation';
import Work from './features/work/work';
import Contact from './features/contact/contact';
import Background from './features/utils/background';
import Impressum from './features/utils/impressum';

function App() {
  const [isWidthGreaterThan1050, setIsWidthGreaterThan1050] = useState(window.innerWidth > 1050);
  const [activeComponent, setActiveComponent] = useState(localStorage.getItem('activeComponent') || 'ABOUT');
  // load english a default otherwise from localstrorage 
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [activeItem, setActiveItem] = useState(localStorage.getItem('activeItem') || '')

  const components = {
    // key in lower case to match the hash
    about: AboutMeView,
    work: Work,
    contact: Contact,
    impressum: Impressum
  };

  //if null -> error active component null 
  const handleImpressumClick = () => {
    // Reset the active states
    setActiveComponent('');
    setActiveItem('');
  };

  useEffect(() => {
    const handleResize = () => setIsWidthGreaterThan1050(window.innerWidth > 1050);
    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isWidthGreaterThan1050]);

  const ActiveComponent = components[activeComponent.toLowerCase()];

  return (
    <HashRouter>
      <div className="app_container">
        <Background />
        <Navigation handleImpressumClick={handleImpressumClick} setActiveItem={setActiveItem} activeItem={activeItem} language={language} setLanguage={setLanguage} isWidthGreaterThan1050={isWidthGreaterThan1050} setActiveComponent={setActiveComponent} activeComponent={activeComponent} className="navigation_component" />
        <div className='route_container'>
          <Routes>
            <Route path="/impressum" element={<Impressum id="impressum" language={language} isWidthGreaterThan1050={isWidthGreaterThan1050} />} />
            <Route path="/case-study/api" element={<ApiCaseStudy language={language} />} />
            <Route path="/case-study/chat" element={<ChatCaseStudy language={language} isWidthGreaterThan1050={isWidthGreaterThan1050} />} />
            {isWidthGreaterThan1050 ? (
              <Route path="/" element={<ActiveComponent id={activeComponent.toLowerCase()} isWidthGreaterThan1050={isWidthGreaterThan1050} language={language} />} />
            ) : (
              <>
                <Route path="/" element={
                  <>
                    <AboutMeView id="about" isWidthGreaterThan1050={isWidthGreaterThan1050} language={language} />
                    <Work id="work" isWidthGreaterThan1050={isWidthGreaterThan1050} language={language} />
                    <Contact id="contact" handleImpressumClick={handleImpressumClick} setActiveItem={setActiveItem} setActiveComponent={setActiveComponent} isWidthGreaterThan1050={isWidthGreaterThan1050} language={language} />
                  </>
                } />
              </>
            )}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

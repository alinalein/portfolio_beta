import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/about_me/about_me';
import Navigation from './components/navigation/navigation';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Background from './components/utils/background';

function App() {
  const [isWidthGreaterThan1050, setIsWidthGreaterThan1050] = useState(window.innerWidth > 1050);
  const [activeComponent, setActiveComponent] = useState('ABOUT');

  const components = {
    // key in lower case to match the hash
    about: AboutMe,
    work: Work,
    contact: Contact
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
        <Navigation components={components} isWidthGreaterThan1050={isWidthGreaterThan1050} setActiveComponent={setActiveComponent} className="navigation_component" />
        <div className='route_container'>
          <Routes>
            {isWidthGreaterThan1050 ? (
              <Route path="/" element={<ActiveComponent id={activeComponent.toLowerCase()} isWidthGreaterThan1050={isWidthGreaterThan1050} />} />
            ) : (
              <>
                <Route path="/" element={
                  <>
                    <AboutMe id="about" isWidthGreaterThan1050={isWidthGreaterThan1050} />
                    <Work id="work" isWidthGreaterThan1050={isWidthGreaterThan1050} />
                    <Contact id="contact" isWidthGreaterThan1050={isWidthGreaterThan1050} />
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

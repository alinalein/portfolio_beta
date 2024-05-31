import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/about_me/about_me';
import Navigation from './components/navigation/navigation';
import Work from './components/work/work';
import Contact from './components/contact/contact';

function App() {
  const [isWidthGreaterThan1050, setIsWidthGreaterThan1050] = useState(window.innerWidth > 1050);
  const [activeComponent, setActiveComponent] = useState('ABOUT');

  const components = {
    ABOUT: AboutMe,
    WORK: Work,
    CONTACT: Contact
  };

  useEffect(() => {
    const handleResize = () => setIsWidthGreaterThan1050(window.innerWidth > 1050);
    // Attach the resize event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ActiveComponent = components[activeComponent];

  return (
    <BrowserRouter>
      <div className="app_container">
        <Navigation isWidthGreaterThan1050={isWidthGreaterThan1050} setActiveComponent={setActiveComponent} className="navigation_component" />
        <div className='route_container'>
          <Routes>
            {isWidthGreaterThan1050 ? (
              < Route path='/' element={
                <ActiveComponent id={activeComponent.toLowerCase()} isWidthGreaterThan1050={isWidthGreaterThan1050} />
              }></Route>
            ) : (
              <>
                <Route path='/' element={<>
                  <AboutMe id="about" isWidthGreaterThan1050={isWidthGreaterThan1050} />
                  <Work id="work" isWidthGreaterThan1050={isWidthGreaterThan1050} />
                  <Contact id="contact" isWidthGreaterThan1050={isWidthGreaterThan1050} />
                </>} />
              </>
            )
            }
          </Routes>
        </div >
      </div >
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutMe from './components/about_me/about_me';
import Navigation from './components/navigation/navigation';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import Background from './components/utils/background';

function App() {
  const [isWidthGreaterThan1050, setIsWidthGreaterThan1050] = useState(window.innerWidth > 1050);
  const [activeComponent, setActiveComponent] = useState('ABOUT');

  console.log('activecomponent', activeComponent)
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

    // so the initial load is exactly on the hash of the url 
    const hash = window.location.hash.replace('#', '');
    if (isWidthGreaterThan1050 && hash && components[hash]) {
      setActiveComponent(hash.toUpperCase());
    } else {
      scrollToComponent(hash);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isWidthGreaterThan1050]);

  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const ActiveComponent = components[activeComponent.toLowerCase()];

  return (
    <BrowserRouter>
      <div className="app_container">
        <Background />
        <Navigation isWidthGreaterThan1050={isWidthGreaterThan1050} setActiveComponent={setActiveComponent} scrollToComponent={scrollToComponent} className="navigation_component" />
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

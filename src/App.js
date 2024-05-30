import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AboutMe from './components/about_me/about_me';
import Navigation from './components/navigation/navigation';
import Work from './components/work/work';
import Contact from './components/contact/contact';

function App() {
  const [isWidthGreaterThan1050, setIsWidthGreaterThan1050] = useState(window.innerWidth > 1050);

  useEffect(() => {
    const handleResize = () => setIsWidthGreaterThan1050(window.innerWidth > 1050);
    // Attach the resize event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className="app_container">
        <Navigation />
        <div className='route_container'>
          <Routes >
            {isWidthGreaterThan1050 ? (
              <>
                <Route path='/about' element={<AboutMe id="about" />} />
                <Route path='/work' element={<Work id="work" />} />
                <Route path='/contact' element={<Contact id="contact" />} />
              </>
            ) : (
              <>
                <Route path='/' element={<>
                  <AboutMe id="about" />
                  <Work id="work" />
                  <Contact id="contact" />
                </>} />
              </>
            )
            }
          </Routes>
        </div >
      </div >
    </BrowserRouter >
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import variantsBig from '../utils/variantsAnimation'
import Tools from '../utils/tools';
import CV from '../../assets/pdf/CV.pdf'
import Texts from '../utils/texts.js';
// import profilePic from '../../assets/img/profile.png'
import './about.scss'

const AboutMe = ({ id, isWidthGreaterThan1050, language }) => {

    return (
        <motion.div id={id}
            className="floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variantsBig : {}}
        >

            <div className="content">
                <div>
                    <div className='component_title' >
                        {/* Dynamic title for 'About Me' */}
                        <h2><span className='span_title'>{Texts[language].about.title.charAt(0)}</span>{Texts[language].about.title.slice(1)}</h2>
                    </div>
                    <div className='about_img_div'>
                        <div className='img_div' >
                            <img src={`${process.env.PUBLIC_URL}/img/profile.png`} alt='Profile' className="about_pic" />
                        </div>
                        <div className='text_div'>
                            <p>{Texts[language].about.welcomeText}</p>
                            <p>{Texts[language].about.description}</p>
                            <a href={CV} style={{ color: 'var(--main-color)' }} rel='noreferrer' target='_blank'>
                                {language === 'en' ? 'Download CV' : 'Lebenslauf herunterladen'}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='component_title'>
                    {/* Dynamic title for 'Skills & Technologies' */}
                    <h2><span className='span_title'>{Texts[language].about.skillsTitle.charAt(0)}</span>{Texts[language].about.skillsTitle.slice(1)}</h2>
                </div>
                <div className='about_img_div'>
                    <Tools />
                </div>
                <div className='component_title'>
                    {/* Dynamic title for 'Why Coding?' */}
                    <h2><span className='span_title'>{Texts[language].about.whyCodingTitle.charAt(0)}</span>{Texts[language].about.whyCodingTitle.slice(1)}</h2>
                </div>
                <p style={{ padding: '10px', textAlign: 'left' }}> {Texts[language].about.whyCodingText} </p>
            </div>
        </motion.div>
    );
}

export default AboutMe;
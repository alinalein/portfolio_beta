import React from 'react';
import { motion } from 'framer-motion';
import variantsBig from '../utils/variantsAnimation'
import Tools from '../utils/tools';
import CV_en from '../../assets/pdf/Leinweber Alina_Web Developer_Resume.pdf'
import CV_de from '../../assets/pdf/Leinweber Alina_Web Developer_Lebenslauf.pdf'
import Texts from '../utils/texts';
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

                        <img src={`${process.env.PUBLIC_URL}/img_hidden/4.png`} alt='ProfilePic' className="about_pic " />

                        <div className='text_div'>
                            <p className='remove_p-margin'>{Texts[language].about.welcomeText}</p>
                            <p>
                                {Texts[language].about.description.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line.split(' ').map((word, wordIndex) => {
                                            const technologiesToBold = ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js'];
                                            const cleanedWord = word.replace(/[,]/g, ''); // Remove commas only.

                                            const isBold = technologiesToBold.some(tech => cleanedWord.toLowerCase() === tech.toLowerCase());

                                            return (
                                                <React.Fragment key={wordIndex}>
                                                    {isBold ? <strong>{word}</strong> : word}{' '}
                                                </React.Fragment>
                                            );
                                        })}
                                    </span>
                                ))}
                            </p>

                            {language === 'en' ?
                                <a href={CV_en} style={{ color: 'var(--main-color)' }} rel='noopener noreferrer' target='_blank'>
                                    Download CV </a>
                                : <a href={CV_de} style={{ color: 'var(--main-color)' }} rel='noopener noreferrer' target='_blank'>
                                    Lebenslauf herunterladen</a>}
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
                    {/* Dynamic title for 'My background' */}
                    <h2><span className='span_title'>{Texts[language].about.backgroundTitle.charAt(0)}</span>{Texts[language].about.backgroundTitle.slice(1)}</h2>
                </div>
                <div className='about_img_div background_div' style={{ margin: '30px auto 10px auto' }}>
                    <p style={{ textAlign: 'left', padding: '0 10px' }} className='remove_p-margin'>
                        {Texts[language].about.backgroundText.split('\n\n').map((paragraph, pIndex) => (
                            <span key={pIndex}>
                                {paragraph.split('**').map((part, i) =>
                                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                                )}
                                <br /><br />
                            </span>
                        ))}
                    </p>
                    <img src={`${process.env.PUBLIC_URL}/img_hidden/CSM.jpg`} alt='CSMPic' className="CSM_pic" />
                </div>

                <div className='component_title'>
                    {/* Dynamic title for 'Why Coding?' */}
                    <h2><span className='span_title'>{Texts[language].about.whyCodingTitle.charAt(0)}</span>{Texts[language].about.whyCodingTitle.slice(1)}</h2>
                </div>

                <p style={{ textAlign: 'left', margin: '30px 10px 20px 10px' }} className='remove_p-margin'>
                    {Texts[language].about.whyCodingText.split('\n\n').map((paragraph, index) => (
                        <p key={index}>
                            {paragraph.split('**').map((part, i) =>
                                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                            )}
                        </p>
                    ))}
                </p>
            </div>
        </motion.div>
    );
}

export default AboutMe;
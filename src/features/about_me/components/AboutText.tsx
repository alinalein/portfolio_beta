import React from "react";
import Texts, { Language } from "../../../shared/utils/texts";
import CV_en from '../assets/pdf/Leinweber Alina_Web Developer_Resume.pdf'
import CV_ger from '../assets/pdf/Leinweber Alina_Web Developer_Lebenslauf.pdf'

type AboutTextProps = {
    language: Language;
}

const AboutText = ({ language }: AboutTextProps): JSX.Element => (

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
                    Open CV </a>
                : <a href={CV_ger} style={{ color: 'var(--main-color)' }} rel='noopener noreferrer' target='_blank'>
                    Lebenslauf öffnen</a>}
        </div>
    </div>
)
export default AboutText;
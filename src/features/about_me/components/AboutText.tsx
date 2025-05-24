import React from 'react';
import Texts from '../../../shared/utils/texts';
import CV_en from '../assets/pdf/Leinweber Alina_Web Developer_Resume.pdf';
import CV_ger from '../assets/pdf/Leinweber Alina_Web Developer_Lebenslauf.pdf';
import { useAppContext } from '../../../shared/context/AppContext';

const AboutText = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="about_img_div" aria-labelledby="about-heading">
      <img
        src={`${process.env.PUBLIC_URL}/img_hidden/4.png`}
        alt={language === 'en' ? 'Portrait of Alina Leinweber' : 'Porträt von Alina Leinweber'}
        className="about_pic "
      />

      <div className="text_div" lang={language}>
        <p className="remove_p-margin">{Texts[language].about.welcomeText}</p>
        <p>
          {Texts[language].about.description.split('\n').map((line, index) => (
            <span key={index}>
              {line.split(' ').map((word, wordIndex) => {
                const technologiesToBold = [
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'TypeScript',
                  'Node.js',
                ];
                const cleanedWord = word.replace(/[,]/g, ''); // Remove commas only.

                const isBold = technologiesToBold.some(
                  (tech) => cleanedWord.toLowerCase() === tech.toLowerCase()
                );

                return (
                  <React.Fragment key={wordIndex}>
                    {isBold ? <strong>{word}</strong> : word}{' '}
                  </React.Fragment>
                );
              })}
            </span>
          ))}
        </p>
        <a
          href={language === 'en' ? CV_en : CV_ger}
          style={{ color: 'var(--main-color)' }}
          rel="noopener noreferrer"
          target="_blank"
        >
          {language === 'en' ? 'Download resume (PDF)' : 'Lebenslauf herunterladen (PDF)'}
        </a>
      </div>
    </section>
  );
};
export default AboutText;

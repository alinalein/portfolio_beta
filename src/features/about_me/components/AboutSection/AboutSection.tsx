import React from 'react';

import CV_en from '../../assets/pdf/Leinweber Alina_Web Developer_Resume.pdf';
import CV_ger from '../../assets/pdf/Leinweber Alina_Web Developer_Lebenslauf.pdf';

import { useAppContext, Texts } from '../../../../shared';
import styles from './AboutSection.module.scss';

const AboutSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="about__section_layout" aria-labelledby="about-heading">
      <img
        src={`${process.env.PUBLIC_URL}/img_hidden/4.png`}
        alt={language === 'en' ? 'Portrait of Alina Leinweber' : 'Porträt von Alina Leinweber'}
        className={styles.about__image}
      />

      <div className={styles.about__text} lang={language}>
        <p className="p__no_margin">{Texts[language].about.welcomeText}</p>
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
          className={styles.about__resume_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {language === 'en' ? 'Open resume (PDF)' : 'Lebenslauf öffnen (PDF)'}
        </a>
      </div>
    </section>
  );
};
export default AboutSection;

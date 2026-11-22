import React from 'react';

import CV_en from '../../assets/pdf/Leinweber Alina_Web Developer_Resume.pdf';
import CV_ger from '../../assets/pdf/Leinweber Alina_Web Developer_Lebenslauf.pdf';

import { useAppContext, Texts } from '../../../../shared';
import styles from './AboutSection.module.scss';

const AboutSection = (): JSX.Element => {
  const { language } = useAppContext();
  const bold = (text: string) =>
    text
      .split(
        /\b(TypeScript|React|Node\.js|SaaS|AI Engineering|Full-Stack Developer|LLM Applications|RAG|AI Agents|LLM-Anwendungen)\b/i
      )
      .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

  return (
    <section className="about__section_layout" aria-labelledby="about-heading">
      <img
        src={`${process.env.PUBLIC_URL}/img_hidden/4.png`}
        alt={language === 'en' ? 'Portrait of Alina Leinweber' : 'Porträt von Alina Leinweber'}
        className={styles.about__image}
      />

      <div className={styles.about__text} lang={language}>
        {/* <p className="p__no_margin">{Texts[language].about.welcomeText}</p> */}
        {Texts[language].about.welcomeText.map((paragraph, index) => (
          <p className="p__no_margin" key={index}>
            {bold(paragraph)}
          </p>
        ))}
        <p>{bold(Texts[language].about.description)}</p>
        {/* link to download the CV  */}
        {/* <a
          href={language === 'en' ? CV_en : CV_ger}
          className={styles.about__resume_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {language === 'en' ? 'Download resume (PDF)' : 'Lebenslauf herunterladen (PDF)'}
        </a> */}
      </div>
    </section>
  );
};
export default AboutSection;

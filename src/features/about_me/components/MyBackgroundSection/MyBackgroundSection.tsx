import CSM from '../../assets/img/CSM.jpg';
import { useAppContext, Texts } from '../../../../shared';
import styles from './MyBackgroundSection.module.scss';

const MyBackground = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`about__section_layout ${styles.background__layout}`}
      aria-labelledby="background-heading"
    >
      <div className={styles.background__text}>
        {Texts[language].about.backgroundText.split('\n\n').map((paragraph, pIndex) => (
          <p key={pIndex}>
            {paragraph
              .split('**')
              .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
          </p>
        ))}
      </div>
      <img
        src={CSM}
        alt={
          language === 'en'
            ? 'Illustration of the duties of a Customer Success Manager'
            : 'Darstellung der Aufgaben eines Customer Success Managers'
        }
        className={styles.background__image}
      />
    </section>
  );
};
export default MyBackground;

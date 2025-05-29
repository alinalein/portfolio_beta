import { useAppContext, Texts } from '../../../../shared';
import styles from './WhyCodingSection.module.scss';

const WhyCodingSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section aria-labelledby="why-coding-section">
      <div className={styles.why_coding__text}>
        {Texts[language].about.whyCodingText.split('\n\n').map((paragraph, index) => (
          <p key={index}>
            {paragraph
              .split('**')
              .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
          </p>
        ))}
      </div>
    </section>
  );
};
export default WhyCodingSection;

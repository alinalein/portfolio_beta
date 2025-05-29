import EastSharpIcon from '@mui/icons-material/EastSharp';
import BuildIcon from '@mui/icons-material/Build';

import { useAppContext, Texts } from '../../../../shared';
import viewStyles from '../../views/ApiCaseStudyView.module.scss';
import styles from './DebuggingSection.module.scss';

const DebuggingSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__section ${viewStyles.case_study__section}`}
      aria-labelledby="debugging-section"
    >
      <BuildIcon className={`case_study__icon ${viewStyles.case_study__icon}`} aria-hidden="true" />
      <div className={viewStyles.case_study__header}>
        <h2 id="debugging-section" className={viewStyles.case_study__title}>
          {Texts[language].case_api.testing.tag}
        </h2>
        <div className={styles.debugging_section}>
          <p>{Texts[language].case_api.testing.introduction_1}</p>
          <p> {Texts[language].case_api.testing.introduction_2}</p>
          <div className={styles.debugging_section__ui}>
            <div className={`debugging_section__circle ${styles.debugging_section__circle}`}>
              {' '}
              {Texts[language].case_api.testing.error}
            </div>
            <EastSharpIcon className={styles.debugging_section__arrow} aria-hidden="true" />
            <div className={`debugging_section__circle ${styles.debugging_section__circle}`}>
              {' '}
              {Texts[language].case_api.testing.detects}
            </div>
            <EastSharpIcon className={styles.debugging_section__arrow} aria-hidden="true" />
            <div className={`debugging_section__circle ${styles.debugging_section__circle}`}>
              {' '}
              {Texts[language].case_api.testing.solution}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DebuggingSection;

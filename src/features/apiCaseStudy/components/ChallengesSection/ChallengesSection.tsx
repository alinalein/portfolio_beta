import BoltIcon from '@mui/icons-material/Bolt';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { useAppContext, Texts } from '../../../../shared';
import styles from './ChallengesSection.module.scss';
import viewStyles from '../../views/ApiCaseStudyView.module.scss';
const ChallengesSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__section ${viewStyles.case_study__section}`}
      aria-labelledby="challenges-section"
    >
      <BoltIcon className={`case_study__icon ${viewStyles.case_study__icon}`} aria-hidden="true" />
      <div className={viewStyles.case_study__header}>
        <h2 id="challenges-section" className={viewStyles.case_study__title}>
          {Texts[language].case_api.challenges.tag}
        </h2>
        <div className={styles.challenges_section}>
          <div className={styles.challenges_section__item}>
            <DoneAllIcon className={styles.challenges_section__icon} aria-hidden="true" />
            <div className={styles.challenges_section__point}>
              <h3> {Texts[language].case_api.challenges.overview.strategic_title}</h3>
              <p>{Texts[language].case_api.challenges.overview.strategic}</p>
            </div>
          </div>
          <div className={styles.challenges_section__item}>
            <DoneAllIcon className={styles.challenges_section__icon} aria-hidden="true" />
            <div className={styles.challenges_section__point}>
              <h3>{Texts[language].case_api.challenges.overview.implementing_title}</h3>
              <p>
                {Texts[language].case_api.challenges.overview.implementing}
                <pre
                  aria-label={
                    language === 'en'
                      ? 'Authorization check example'
                      : 'Beispiel einer Berechtigungsprüfung'
                  }
                >
                  <code className={`challenges_section__code ${styles.challenges_section__code}`}>
                    {' '}
                    if (req.user.Username !== req.params.Username)
                  </code>
                </pre>
              </p>
            </div>
          </div>
          <div className={styles.challenges_section__item}>
            <DoneAllIcon className={styles.challenges_section__icon} aria-hidden="true" />
            <div className={styles.challenges_section__point}>
              <h3>{Texts[language].case_api.challenges.overview.resolving_title}</h3>
              <p>{Texts[language].case_api.challenges.overview.resolving}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChallengesSection;

import LockIcon from '@mui/icons-material/Lock';

import { useAppContext, Texts } from '../../../../shared';
import viewStyles from '../../views/ApiCaseStudyView.module.scss';
import styles from './SecuritySection.module.scss';

const SecuritySection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__section ${viewStyles.case_study__section}`}
      aria-labelledby="security-section"
    >
      <LockIcon className={`case_study__icon ${viewStyles.case_study__icon}`} aria-hidden="true" />
      <div className={viewStyles.case_study__header}>
        <h2 id="security-section" className={viewStyles.case_study__title}>
          {Texts[language].case_api.access_control.tag}
        </h2>
        <div className={styles.auth_section}>
          <h3 className={`auth_section__label ${styles.auth_section__label}`}>
            {Texts[language].case_api.access_control.overview.authentication_title}
          </h3>
          <div className={styles.auth_section__desc}>
            {Texts[language].case_api.access_control.overview.authentication}
          </div>

          <h3 className={`auth_section__label ${styles.auth_section__label}`}>
            {Texts[language].case_api.access_control.overview.authorization_title}
          </h3>
          <div className={styles.auth_section__desc}>
            {Texts[language].case_api.access_control.overview.authorization}
          </div>

          <h3 className={`auth_section__label ${styles.auth_section__label}`}>
            {Texts[language].case_api.access_control.overview.security_title}
          </h3>
          <div className={styles.auth_section__desc}>
            {Texts[language].case_api.access_control.overview.security}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

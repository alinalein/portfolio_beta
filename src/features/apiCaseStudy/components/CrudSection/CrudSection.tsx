import InterestsIcon from '@mui/icons-material/Interests';

import { useAppContext, Texts } from '../../../../shared';
import viewStyles from '../../views/ApiCaseStudyView.module.scss';

import styles from './CrudSection.module.scss';
const CrudSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__section ${viewStyles.case_study__section}`}
      aria-labelledby="crud-section"
    >
      <InterestsIcon
        className={`case_study__icon ${viewStyles.case_study__icon}`}
        aria-hidden="true"
      />
      <div className={viewStyles.case_study__header}>
        <h2 className={viewStyles.case_study__title} id="crud-section">
          CRUD
        </h2>
        <div className={styles.crud}>
          <p>{Texts[language].case_api.crud.introduction}</p>
          <span className={styles.crud__text}>{Texts[language].case_api.crud.action}</span>
          <p>{Texts[language].case_api.crud.description}</p>

          <div className={`crud__glow_frame ${styles.crud__glow_frame}`}>
            <div className={styles.crud__glow_inner}>
              <img
                src={`${process.env.PUBLIC_URL}/img/CRUD-endpoint.jpg`}
                className={styles.crud__image}
                alt={
                  language === 'en'
                    ? 'Screenshot showing an example of a CRUD endpoint response'
                    : 'Screenshot eines Beispiel-CRUD-Endpunkts'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrudSection;

import CodeIcon from '@mui/icons-material/Code';

import { useAppContext, Texts } from '../../../../shared';
import viewStyles from '../../views/ApiCaseStudyView.module.scss';
import styles from './RestApiSection.module.scss';

const RestApiSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__section ${viewStyles.case_study__section}`}
      aria-labelledby="rest-api-section"
    >
      <CodeIcon className={`case_study__icon ${viewStyles.case_study__icon}`} aria-hidden="true" />
      <div className={viewStyles.case_study__header}>
        <h2 id="rest-api-section" className={viewStyles.case_study__title}>
          Rest API
        </h2>
        <div className={styles.rest_api_diagram}>
          <p className={styles.rest_api_diagram__discription}>
            {Texts[language].case_api.rest_api.p}
          </p>
          <div className={styles.rest_api_diagram__top_row}>
            <div className={styles.rest_api_diagram__box}>
              {Texts[language].case_api.rest_api.client}
            </div>
            <div className={styles.rest_api_diagram__request}>
              <p className={styles.rest_api_diagram__request_text}>
                {Texts[language].case_api.rest_api.request}
              </p>
              {/* width & height removed for better controll */}
              <p className="sr-only">
                {language === 'en'
                  ? 'Client sends request to the server. Server responds and interacts with the database.'
                  : 'Client sendet eine Anfrage an den Server. Der Server antwortet und kommuniziert mit der Datenbank.'}
              </p>
              <svg
                viewBox="0 0 150 80"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.rest_api_diagram__request__svg}
              >
                <line x1="10" y1="10" x2="130" y2="10" stroke="black" strokeWidth="2" />
                <polygon points="130,5 130,15 140,10" fill="black" />
                {/* arrow to left  */}
                {/* <polygon points="10,5 10,15 0,10" fill="black" /> */}
              </svg>
            </div>
            <div className={styles.rest_api_diagram__box}>SERVER</div>
          </div>

          <div className={styles.rest_api_diagram__bottom_row}>
            <div className={styles.rest_api_diagram__response_row}>
              <div className={styles.rest_api_diagram__arrow_label}>
                {Texts[language].case_api.rest_api.response}
              </div>
              <svg
                className={styles.rest_api_diagram__response_row__svg}
                viewBox="0 0 300 80"
                width="100%"
                height="auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0 V60 H290 V0" stroke="black" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className={styles.rest_api_diagram__database}>
              {Texts[language].case_api.rest_api.database}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestApiSection;

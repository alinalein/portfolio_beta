import CodeIcon from '@mui/icons-material/Code';

import { useAppContext, Texts } from '../../../shared';

const RestApiDiagram = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="case-study-section" aria-labelledby="rest-api-section">
      <CodeIcon className="case-study-svgs" aria-hidden="true" />
      <div className="case-study-header">
        <h2 id="rest-api-section" className="case-study-header-p">
          Rest API
        </h2>
        <div className="rest-api-diagram">
          <p>{Texts[language].case_api.rest_api.p}</p>
          <div className="top-row">
            <div className="box">{Texts[language].case_api.rest_api.client}</div>
            <div className="request-row">
              <p className="request-row-p">{Texts[language].case_api.rest_api.request}</p>
              {/* width & height removed for better controll */}
              <p className="sr-only">
                {language === 'en'
                  ? 'Client sends request to the server. Server responds and interacts with the database.'
                  : 'Client sendet eine Anfrage an den Server. Der Server antwortet und kommuniziert mit der Datenbank.'}
              </p>
              <svg viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="10" x2="130" y2="10" stroke="black" strokeWidth="2" />
                <polygon points="130,5 130,15 140,10" fill="black" />
                {/* arrow to left  */}
                {/* <polygon points="10,5 10,15 0,10" fill="black" /> */}
              </svg>
            </div>
            <div className="box">SERVER</div>
          </div>

          <div className="bottom-row">
            <div className="response-row">
              <div className="arrow-label">{Texts[language].case_api.rest_api.response}</div>
              <svg
                viewBox="0 0 300 80"
                width="100%"
                height="auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0 V60 H290 V0" stroke="black" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="database">{Texts[language].case_api.rest_api.database}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestApiDiagram;

import InterestsIcon from '@mui/icons-material/Interests';

import { useAppContext, Texts } from '../../../shared';

const CrudSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="case-study-section" aria-labelledby="crud-section">
      <InterestsIcon className="case-study-svgs" aria-hidden="true" />
      <div className="case-study-header">
        <h2 className="case-study-header-p" id="crud-section">
          CRUD
        </h2>
        <div className="crud-section">
          <p>{Texts[language].case_api.crud.introduction}</p>
          <span className="crud-text">{Texts[language].case_api.crud.action}</span>
          <p>{Texts[language].case_api.crud.description}</p>

          <div className="glow-frame">
            <div className="glow-inner">
              <img
                src={`${process.env.PUBLIC_URL}/img/CRUD-endpoint.jpg`}
                className="case-study-pic-crud"
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

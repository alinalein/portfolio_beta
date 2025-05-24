import BoltIcon from '@mui/icons-material/Bolt';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import { useAppContext, Texts } from '../../../shared';

const ChallengesSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="case-study-section" aria-labelledby="challenges-section">
      <BoltIcon className="case-study-svgs" aria-hidden="true" />
      <div className="case-study-header">
        <h2 id="challenges-section" className="case-study-header-p">
          {Texts[language].case_api.challenges.tag}
        </h2>
        <div className="challenges-sections">
          <div className="challenges-section">
            <DoneAllIcon className="challenges-icon" aria-hidden="true" />
            <div className="challenges-point">
              <h3> {Texts[language].case_api.challenges.overview.strategic_title}</h3>
              <p>{Texts[language].case_api.challenges.overview.strategic}</p>
            </div>
          </div>
          <div className="challenges-section">
            <DoneAllIcon className="challenges-icon" aria-hidden="true" />
            <div className="challenges-point">
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
                  <code> if (req.user.Username !== req.params.Username)</code>
                </pre>
              </p>
            </div>
          </div>
          <div className="challenges-section">
            <DoneAllIcon className="challenges-icon" aria-hidden="true" />
            <div className="challenges-point">
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

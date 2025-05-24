import LockIcon from '@mui/icons-material/Lock';

import { useAppContext, Texts } from '../../../shared';

const SecuritySection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="case-study-section" aria-labelledby="security-section">
      <LockIcon className="case-study-svgs" aria-hidden="true" />
      <div className="case-study-header">
        <h2 id="security-section" className="case-study-header-p">
          {Texts[language].case_api.access_control.tag}
        </h2>
        <div className="auth-section">
          <h3 className="label">
            {Texts[language].case_api.access_control.overview.authentication_title}
          </h3>
          <div className="desc">
            {Texts[language].case_api.access_control.overview.authentication}
          </div>

          <h3 className="label">
            {Texts[language].case_api.access_control.overview.authorization_title}
          </h3>
          <div className="desc">
            {Texts[language].case_api.access_control.overview.authorization}
          </div>

          <h3 className="label">
            {Texts[language].case_api.access_control.overview.security_title}
          </h3>
          <div className="desc">{Texts[language].case_api.access_control.overview.security}</div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

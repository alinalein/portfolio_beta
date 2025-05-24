import EastSharpIcon from '@mui/icons-material/EastSharp';
import BuildIcon from '@mui/icons-material/Build';
import Texts from '../../../shared/utils/texts';
import { useAppContext } from '../../../shared/context/AppContext';

const DebuggingSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="case-study-section" aria-labelledby="debugging-section">
      <BuildIcon className="case-study-svgs" aria-hidden="true" />
      <div className="case-study-header">
        <h2 id="debugging-section" className="case-study-header-p">
          {Texts[language].case_api.testing.tag}
        </h2>
        <div className="debugging-section">
          <p>{Texts[language].case_api.testing.introduction_1}</p>
          <p> {Texts[language].case_api.testing.introduction_2}</p>
          <div className="debugging-ui">
            <div className="debugging-circles"> {Texts[language].case_api.testing.error}</div>
            <EastSharpIcon className="debugging-arrow" aria-hidden="true" />
            <div className="debugging-circles"> {Texts[language].case_api.testing.detects}</div>
            <EastSharpIcon className="debugging-arrow" aria-hidden="true" />
            <div className="debugging-circles"> {Texts[language].case_api.testing.solution}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DebuggingSection;

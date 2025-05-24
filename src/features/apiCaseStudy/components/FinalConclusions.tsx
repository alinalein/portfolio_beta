import FlagIcon from '@mui/icons-material/Flag';
import ExtensionIcon from '@mui/icons-material/Extension'; // Puzzle-like
import GradientExtensionIcon from '../utils/GradientExtensionIcon';
import Texts from '../../../shared/utils/texts';
import { useAppContext } from '../../../shared/context/AppContext';

const FinalConclusions = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="case-study-section" aria-labelledby="final-conclusion-sections">
      <FlagIcon className="case-study-svgs" />
      <div className="case-study-header">
        <h2 className="case-study-header-p" id="final-conclusion-sections">
          {Texts[language].case_api.final_conclusions.tag}
        </h2>
        <div className="final-section">
          <h3>{Texts[language].case_api.final_conclusions.looking_title}</h3>
          <p>{Texts[language].case_api.final_conclusions.looking_text}</p>

          <div className="final-puzzle-section">
            <GradientExtensionIcon className="first" aria-hidden="true" />
            <ExtensionIcon className="second" aria-hidden="true" />
            <GradientExtensionIcon className="third" aria-hidden="true" />
          </div>
          <h3>{Texts[language].case_api.final_conclusions.future_title}</h3>
          <p>{Texts[language].case_api.final_conclusions.future_text}</p>
        </div>
      </div>
    </section>
  );
};
export default FinalConclusions;

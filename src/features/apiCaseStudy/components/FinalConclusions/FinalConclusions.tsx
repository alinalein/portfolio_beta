import FlagIcon from '@mui/icons-material/Flag';
import ExtensionIcon from '@mui/icons-material/Extension'; // Puzzle-like
import GradientExtensionIcon from './GradientExtensionIcon';

import { useAppContext, Texts } from '../../../../shared';
import viewStyles from '../../views/ApiCaseStudyView.module.scss';
import styles from './FinalConclusions.module.scss';
const FinalConclusions = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__section ${viewStyles.case_study__section}`}
      aria-labelledby="final-conclusion-sections"
    >
      <FlagIcon className={`case_study__icon ${viewStyles.case_study__icon}`} />
      <div className={viewStyles.case_study__header}>
        <h2 className={viewStyles.case_study__title} id="final-conclusion-sections">
          {Texts[language].case_api.final_conclusions.tag}
        </h2>
        <div className={styles.final_section}>
          <h3>{Texts[language].case_api.final_conclusions.looking_title}</h3>
          <p>{Texts[language].case_api.final_conclusions.looking_text}</p>

          <div className={styles.final_section__puzzle}>
            <GradientExtensionIcon
              className={styles.final_section__puzzle_icon_first}
              aria-hidden="true"
            />
            <ExtensionIcon
              className={`final_section__puzzle_icon_second  ${styles.final_section__puzzle_icon_second}`}
              aria-hidden="true"
            />
            <GradientExtensionIcon
              className={styles.final_section__puzzle_icon_third}
              aria-hidden="true"
            />
          </div>
          <h3>{Texts[language].case_api.final_conclusions.future_title}</h3>
          <p>{Texts[language].case_api.final_conclusions.future_text}</p>
        </div>
      </div>
    </section>
  );
};
export default FinalConclusions;

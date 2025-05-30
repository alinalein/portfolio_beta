import { useAppContext, Texts } from '../../../../shared';
import styles from './OverviewSection.module.scss';
const OverviewSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className={`case_study__table ${styles.case_study__table}`}
      aria-label={
        language === 'en' ? 'Project overview table section' : 'Tabelle zur Projektübersicht'
      }
    >
      <table>
        <caption className="sr-only">
          {language === 'en'
            ? 'Project overview including context, duration, and objectives'
            : 'Projektübersicht mit Kontext, Dauer und Zielen'}
        </caption>
        <thead>
          <tr>
            <th scope="col">{Texts[language].case_api.overview.purpose_and_context.title}</th>
            <th scope="col">{Texts[language].case_api.overview.project_duration.title}</th>
            <th scope="col">{Texts[language].case_api.overview.objective.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Texts[language].case_api.overview.purpose_and_context.description}</td>
            <td>{Texts[language].case_api.overview.project_duration.description}</td>
            <td>{Texts[language].case_api.overview.objective.description}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default OverviewSection;

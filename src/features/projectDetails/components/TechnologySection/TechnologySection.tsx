import styles from './TechnologySection.module.scss';
import detailsStyles from '../../views/ProjectDetailsView.module.scss';

type TechnologyListProps = {
  technologies: string[];
  label: string;
};

const TechnologySection = ({ technologies, label }: TechnologyListProps): JSX.Element => (
  <section aria-labelledby="technologies-section">
    <h4
      id="technologies-section"
      className={`${styles.technologies__title} ${detailsStyles.project_details__title}`}
    >
      {label}
    </h4>
    <ul className={styles.technologies__list} style={{ paddingLeft: '0' }}>
      {technologies.map((technology) => (
        <li key={technology} className={styles.technologies__item}>
          {technology}
        </li>
      ))}
    </ul>
  </section>
);
export default TechnologySection;

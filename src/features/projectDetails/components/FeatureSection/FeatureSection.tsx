import styles from './FeatureSection.module.scss';
import detailsStyles from '../../views/ProjectDetailsView.module.scss';
type FeatureListProps = {
  features?: readonly string[];
};

const FeatureSection = ({ features }: FeatureListProps): JSX.Element => (
  <section aria-labelledby="features-section">
    <h4
      id="features-section"
      className={`${styles.features__title} ${detailsStyles.project_details__title}`}
    >
      Features
    </h4>
    <ul className={styles.features__list}>
      {features?.map((feature) => (
        <li className={styles.features_item} key={feature}>
          <span className={styles.features__bullet} aria-hidden="true">
            ❍
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);
export default FeatureSection;

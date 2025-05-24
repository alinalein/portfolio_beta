type FeatureListProps = {
  features?: readonly string[];
};

const FeatureList = ({ features }: FeatureListProps): JSX.Element => (
  <section aria-labelledby="features-section">
    <h4 id="features-section" className="modal_technologies" style={{ marginBottom: '5px' }}>
      Features
    </h4>
    <ul style={{ paddingLeft: '0' }}>
      {features?.map((feature) => (
        <li className="feature-item" key={feature}>
          <span className="feature-bullet" aria-hidden="true">
            ❍
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);
export default FeatureList;

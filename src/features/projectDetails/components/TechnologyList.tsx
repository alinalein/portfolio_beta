type TechnologyListProps = {
  technologies: string[];
  label: string;
};

const TechnologyList = ({ technologies, label }: TechnologyListProps): JSX.Element => (
  <section aria-labelledby="technologies-section">
    <h4 id="technologies-section" className="modal_technologies" style={{ margin: '10px 0' }}>
      {label}
    </h4>
    <ul style={{ paddingLeft: '0' }}>
      {technologies.map((technology) => (
        <li key={technology} className="languagesProject">
          {technology}
        </li>
      ))}
    </ul>
  </section>
);
export default TechnologyList;

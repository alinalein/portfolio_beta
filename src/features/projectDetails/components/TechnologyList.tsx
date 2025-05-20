type TechnologyListProps = {
    technologies: string[];
    label: string
}

const TechnologyList = ({ technologies, label }: TechnologyListProps): JSX.Element => (
    <>
        <div>
            <p className="modal_technologies" style={{ marginTop: '14px' }}>{label}</p>
            {technologies.map((technology) => (
                <span key={technology} className="languagesProject">{technology}</span>
            ))}
        </div>
    </>
);
export default TechnologyList;

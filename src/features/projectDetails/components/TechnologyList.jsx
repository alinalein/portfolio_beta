const TechnologyList = ({ technologies = [], label }) => (
    <>
        <div>
            <p className="modal_technologies" style={{ marginTop: '14px' }}>{label}</p>
            {technologies.map((technology, i) => (
                <span key={i} className="languagesProject">{technology}</span>
            ))}
        </div>
    </>
);
export default TechnologyList;

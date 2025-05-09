const FeatureList = ({ features = [] }) => (
    <>
        <p className="modal_technologies" style={{ marginBottom: '5px' }}>Features</p>
        {features?.map((feature, i) => (
            <div className="feature-item" key={i}>
                <span className="feature-bullet">❍</span>
                <span>{feature}</span>
            </div>
        ))}
    </>
);
export default FeatureList;

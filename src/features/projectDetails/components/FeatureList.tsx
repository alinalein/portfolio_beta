type FeatureListProps = {
    features?: readonly string[];
};

const FeatureList = ({ features }: FeatureListProps): JSX.Element => (
    <>
        <p className="modal_technologies" style={{ marginBottom: '5px' }}>Features</p>
        {features?.map((feature) => (
            <div className="feature-item" key={feature}>
                <span className="feature-bullet">❍</span>
                <span>{feature}</span>
            </div>
        ))}
    </>
);
export default FeatureList;

import { useNavigate, useLocation } from 'react-router-dom';

const ApiCaseStudy = ({ id, language, isWidthGreaterThan1050 }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        // Navigiere zum vorherigen Zustand zurück
        if (location.state?.activeItem) {
            navigate(`${location.state.from}?project=${location.state.activeItem.id}`);
        } else {
            navigate('/'); // Standardmäßig zur Hauptseite
        }
    };

    return (
        <div id={id}
            style={{
                zIndex: '999',
                position: 'relative', // Add this line
            }}
        >
            {/* Back Button */}
            <button onClick={goBack} style={{ margin: '20px', padding: '10px' }}>
                Go Back
            </button>
            <p
                style={{
                    fontWeight: 'bold',
                    opacity: '1',
                    background: 'red',
                    color: 'black',
                    margin: '100px',
                    padding: '100px',
                }}
            >
                HEYYYYYYYYYYY
            </p>

        </div>
    );
};

export default ApiCaseStudy;
import { useNavigate, useLocation } from 'react-router-dom';

const ApiCaseStudy = ({ language, isWidthGreaterThan1050 }) => {

    const navigate = useNavigate();
    const location = useLocation();

    // activeItem Object - for component return , id string for the url cretaion (object not accepted)
    const { from, activeProject, id } = location.state || {};

    console.log('activeItem_api', activeProject)

    // loads the active project component and the corresponding url on back button 
    const goBack = () => {
        if (from) {
            navigate(`${from}?project=${id}`, {
                state: { activeProject }
            });;
        } else {
            navigate('/#work');
        }
    };

    return (
        <div
            style={{
                zIndex: '999',
                position: 'relative',
            }}
        >
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
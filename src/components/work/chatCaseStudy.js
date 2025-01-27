
import { useNavigate } from 'react-router-dom';
const ChatCaseStudy = ({ id, language, isWidthGreaterThan1050 }) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                zIndex: '999',
                position: 'relative', // Add this line
            }}
        >
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)} // Navigates back to the previous page
                style={{
                    fontWeight: 'bold',
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    margin: '20px',
                }}
            >
                Go Back
            </button>
            <p
                style={{
                    fontWeight: 'bold',
                    opacity: '1',
                    zIndex: '999',
                    position: 'relative', // Add this line
                    background: 'blue',
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

export default ChatCaseStudy;
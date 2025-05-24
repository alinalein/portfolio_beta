import { useNavigate, useLocation } from 'react-router-dom';

// under construction

const ChatCaseStudy = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, activeProject, id } = location.state || {};

  //    error here

  console.log('activeItem_api', activeProject);

  const goBack = () => {
    if (from) {
      navigate(`${from}?project=${id}`, {
        state: { activeProject },
      });
    } else {
      navigate('/#work');
    }
  };

  return (
    <div
      style={{
        zIndex: '999',
        position: 'relative',
        border: 'none',
      }}
    >
      <button onClick={goBack} style={{ margin: '20px', padding: '10px' }}>
        Go Back
      </button>
      <p
        style={{
          fontWeight: 'bold',
          opacity: '1',
          zIndex: '999',
          position: 'relative',
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

import { useAppContext } from '../../../shared/context/AppContext';

type NotificationProps = {
  message: string;
  type: 'success' | 'error' | '';
  onClose: () => void;
};

const Notification = ({ message, type, onClose }: NotificationProps): JSX.Element | null => {
  const { language } = useAppContext();
  // If no message, don't render anything
  if (!message) return null;

  const notificationStyle: React.CSSProperties = {
    display: 'flex',
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px 15px',
    margin: '10px 0',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: type === 'error' ? 'gray' : 'var(--main-color)',
    textAlign: 'center',
    position: 'fixed',
    bottom: '40%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-30%)',
    zIndex: '1000',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
  };

  const buttonStye: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    top: '0',
    right: '0',
    width: '10px',
    height: '10px',
    padding: '0 10px 0 15px',
    color: 'white',
    boxShadow: '0 0 30px rgba(159, 157, 157, 0.9)',
  };
  return (
    <section aria-labelledby="email-send-message">
      <h2 id="email-send-message" className="sr-only">
        {' '}
        {language === 'en' ? 'Email notification message' : 'E-Mail-Benachrichtigung'}
      </h2>
      <div style={notificationStyle}>
        <p>{message}</p>
        <button onClick={onClose} style={buttonStye}>
          x
        </button>
      </div>
    </section>
  );
};
export default Notification;

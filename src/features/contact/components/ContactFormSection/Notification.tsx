import { useAppContext } from '../../../../shared/context/AppContext';
import styles from './Notification.module.scss';

type NotificationProps = {
  message: string;
  type: 'success' | 'error' | '';
  onClose: () => void;
};

const Notification = ({ message, type, onClose }: NotificationProps): JSX.Element | null => {
  const { language } = useAppContext();
  // If no message, don't render anything
  if (!message) return null;

  return (
    <section aria-labelledby="email-send-message">
      <h2 id="email-send-message" className="sr-only">
        {' '}
        {language === 'en' ? 'Email notification message' : 'E-Mail-Benachrichtigung'}
      </h2>
      <div
        className={`${styles.notification} ${
          type === 'success'
            ? styles.notification__success
            : type === 'error'
              ? styles.notification__error
              : ''
        }`}
      >
        <p>{message}</p>
        <button onClick={onClose} className={styles.notification__button}>
          x
        </button>
      </div>
    </section>
  );
};
export default Notification;

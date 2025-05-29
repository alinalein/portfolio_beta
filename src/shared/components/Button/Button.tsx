import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface SharedButtonProps {
  title: string;
  goBack?: () => void;
  href?: string;
  to?: string;
  className?: string;
  state?: any;
}

const Button = ({ title, goBack, href, to, className, state }: SharedButtonProps): JSX.Element => {
  return to ? (
    <Link to={to} state={state} className={styles.button_base}>
      {title}
    </Link>
  ) : href ? (
    <a href={href} target={'_blank'} rel={'noopener noreferrer'} className={styles.button_base}>
      {title}
    </a>
  ) : (
    <button onClick={goBack} className={`${className ?? ''} ${styles.button_base}`} type="button">
      {title}
    </button>
  );
};

export default Button;

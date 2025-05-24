import { Link } from 'react-router-dom';

interface SharedButtonProps {
  title: string;
  goBack?: () => void;
  href?: string;
  to?: string;
  className?: string;
  state?: any;
}

const SharedButton = ({
  title,
  goBack,
  href,
  to,
  className,
  state,
}: SharedButtonProps): JSX.Element => {
  return to ? (
    <Link to={to} state={state} className="details_link">
      {title}
    </Link>
  ) : href ? (
    <a href={href} target={'_blank'} rel={'noopener noreferrer'} className="details_link">
      {title}
    </a>
  ) : (
    <button onClick={goBack} className={`details_link ${className ?? ''}`} type="button">
      {title}
    </button>
  );
};

export default SharedButton;

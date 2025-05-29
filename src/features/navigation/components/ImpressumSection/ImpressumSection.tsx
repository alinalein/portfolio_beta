import { Link } from 'react-router-dom';
import { useAppContext } from '../../../../shared';
import styles from './ImpressumSection.module.scss';

const ImpressumSection = (): JSX.Element | null => {
  const { isWidthGreaterThan1050, handleImpressumClick, language } = useAppContext();

  return isWidthGreaterThan1050 ? (
    <Link
      to="/impressum"
      onClick={handleImpressumClick}
      className="impressum__link"
      aria-label={
        language === 'en' ? 'Navigate to the Impressum page' : 'Navigieren zur Impressum-Seite'
      }
    >
      Impressum
    </Link>
  ) : null;
};

export default ImpressumSection;

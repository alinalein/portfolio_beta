import { Link } from 'react-router-dom';

import connect from '../../assets/connect.jpg';
import { useAppContext } from '../../../../shared/context/AppContext';
import { SocialLinks } from '../../../../shared';
import styles from './LetsConnectSection.module.scss';

const LetsConnectSection = (): JSX.Element => {
  const { isWidthGreaterThan1050, handleImpressumClick } = useAppContext();

  return (
    <section aria-labelledby="lets-connect-section">
      <SocialLinks style_div={styles.lest_connect__socials} style_a={styles.lets_connect__link} />
      <div className={styles.lets_connect_section}>
        <img src={connect} alt="Contact" className={styles.lets_connect_section__image} />
      </div>
      {!isWidthGreaterThan1050 && (
        <Link to="/impressum" onClick={handleImpressumClick} className="impressum__link">
          Impressum
        </Link>
      )}
    </section>
  );
};
export default LetsConnectSection;

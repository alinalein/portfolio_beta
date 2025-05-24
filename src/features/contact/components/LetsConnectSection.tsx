import connect from '../assets/connect.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../shared/context/AppContext';

const LetsConnectSection = (): JSX.Element => {
  const { isWidthGreaterThan1050, handleImpressumClick, language } = useAppContext();

  return (
    <section aria-labelledby="lets-connect-section">
      <div className="social_item_div " style={{ margin: '30px' }}>
        <a
          href="https://www.linkedin.com/in/alina-leinweber/"
          className="menu-item social_item "
          style={{ width: '20%' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            className="social_icon"
            aria-label={language === 'en' ? 'Link to LinkedIn' : 'Link zu LinkedIn'}
          />
        </a>
        <a
          href="https://github.com/alinalein"
          className="social_item menu-item"
          style={{ width: '20%' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            className="social_icon"
            aria-label={language === 'en' ? 'Link to GitHub' : 'Link zu GitHub'}
          />
        </a>
      </div>
      <div className="contactPic">
        <img src={connect} alt="Contact" />
      </div>
      {!isWidthGreaterThan1050 && (
        <Link to="/impressum" onClick={handleImpressumClick} className="nav_impressum">
          Impressum
        </Link>
      )}
    </section>
  );
};
export default LetsConnectSection;

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useAppContext } from '../../../shared/context/AppContext';

const SocialsSection = (): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section
      className="social_item_div"
      aria-label={language === 'en' ? 'Social media links' : 'Links zu sozialen Medien'}
    >
      <a
        href="https://www.linkedin.com/in/alina-leinweber/"
        className="social_item menu-item"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          language === 'en'
            ? "Visit Alina's LinkedIn profile"
            : 'Besuchen Sie das LinkedIn-Profil von Alina '
        }
      >
        <LinkedInIcon className="social_icon" />
      </a>
      <a
        href="https://github.com/alinalein"
        className="social_item menu-item"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          language === 'en' ? "Visit Alina's GitHub profile" : 'Alinas GitHub-Profil besuchen'
        }
      >
        <GitHubIcon className="social_icon" />
      </a>
    </section>
  );
};

export default SocialsSection;

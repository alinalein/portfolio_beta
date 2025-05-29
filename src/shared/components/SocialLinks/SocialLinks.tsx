import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useAppContext } from '../../context/AppContext';
import styles from './SocialLinks.module.scss';

interface SocialLinksProps {
  style_div?: string;
  style_a?: string;
}
const SocialLinks = ({ style_div, style_a }: SocialLinksProps): JSX.Element => {
  const { language } = useAppContext();

  return (
    <div
      className={`${style_div ?? ' '} ${styles.social_items}`}
      aria-label={language === 'en' ? 'Social media links' : 'Links zu sozialen Medien'}
    >
      <a
        href="https://www.linkedin.com/in/alina-leinweber/"
        className={`${style_a ?? ''}  ${styles.social_items__item}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          language === 'en'
            ? "Visit Alina's LinkedIn profile"
            : 'Besuchen Sie das LinkedIn-Profil von Alina '
        }
      >
        <LinkedInIcon className={`social_items__icon ${styles.social_items__icon}`} />
      </a>
      <a
        href="https://github.com/alinalein"
        className={`${style_a ?? ''}  ${styles.social_items__item}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          language === 'en' ? "Visit Alina's GitHub profile" : 'Alinas GitHub-Profil besuchen'
        }
      >
        <GitHubIcon className={`social_items__icon ${styles.social_items__icon}`} />
      </a>
    </div>
  );
};
export default SocialLinks;

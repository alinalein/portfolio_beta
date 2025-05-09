import connect from '../assets/connect.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const LetsConnectSection = ({ isWidthGreaterThan1050, handleImpressumClick }) => (

    <>
        <div
            className="social_item_div " style={{ margin: '30px' }}
        >
            <a href="https://www.linkedin.com/in/alina-leinweber/" className='menu-item social_item ' style={{ width: '20%' }} >
                <LinkedInIcon className='social_icon' />
            </a>
            <a href="https://github.com/alinalein " className='social_item menu-item' style={{ width: '20%' }} >
                <GitHubIcon className='social_icon' />
            </a>
        </div>
        <div className='contactPic'>
            <img src={connect} alt='ContactPic' />
        </div>
        {isWidthGreaterThan1050 ? null : (
            <Link to="/impressum" onClick={handleImpressumClick} className='nav_impressum'>
                Impressum
            </Link>
        )}
    </>
)
export default LetsConnectSection; 
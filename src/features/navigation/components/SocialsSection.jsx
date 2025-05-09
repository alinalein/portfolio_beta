import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialsSection = () => (

    <>
        <div className='social_item_div'>
            <a href="https://www.linkedin.com/in/alina-leinweber/" className='social_item menu-item' target="_blank"
                rel="noopener noreferrer">
                <LinkedInIcon className='social_icon' />
            </a>
            <a href="https://github.com/alinalein" className='social_item menu-item' target="_blank"
                rel="noopener noreferrer" >
                <GitHubIcon className='social_icon' />
            </a>
        </div>
    </>
)

export default SocialsSection
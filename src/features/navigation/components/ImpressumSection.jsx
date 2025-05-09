import { Link } from 'react-router-dom';

const ImpressumSection = ({ isWidthGreaterThan1050, handleImpressumClick }) => (

    <>
        {isWidthGreaterThan1050 ? (
            <Link to="/impressum" onClick={handleImpressumClick} className='nav_impressum'>
                Impressum
            </Link>
        ) : null}
    </>
)

export default ImpressumSection
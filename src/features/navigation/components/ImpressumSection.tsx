import { Link } from 'react-router-dom';
import { useAppContext } from '../../../shared/context/AppContext';

const ImpressumSection = (): JSX.Element => {
    const { isWidthGreaterThan1050, handleImpressumClick } = useAppContext();
    return (
        <>
            {isWidthGreaterThan1050 ? (
                <Link to="/impressum" onClick={handleImpressumClick} className='nav_impressum' aria-label="Open Impressum page">
                    Impressum
                </Link>
            ) : null}
        </>
    )

}

export default ImpressumSection
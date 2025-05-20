import { Link } from 'react-router-dom';

type ImpressumSectionProps = {
    isWidthGreaterThan1050: boolean;
    handleImpressumClick: () => void
}
const ImpressumSection = ({ isWidthGreaterThan1050, handleImpressumClick }: ImpressumSectionProps): JSX.Element => (

    <>
        {isWidthGreaterThan1050 ? (
            <Link to="/impressum" onClick={handleImpressumClick} className='nav_impressum' aria-label="Open Impressum page">
                Impressum
            </Link>
        ) : null}
    </>
)

export default ImpressumSection
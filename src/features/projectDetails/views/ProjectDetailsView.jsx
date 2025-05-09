
import { Modal } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import '../styles/projectDetails.scss';
import FeatureList from '../components/FeatureList';
import ImageGallery from '../components/ImageGallery';
import TechnologyList from '../components/TechnologyList';

const ProjectDetailsView = ({
    onClose,
    language,
    id,
    title,
    description,
    features = [],
    languagesUsed = [],
    linkLive,
    linkGit,
    phonePic = [],
    linkCase,
    activeProject,
    Texts,
}) => {

    const location = useLocation();

    return (
        <Modal open onClose={onClose}>
            <div className='modal_div'>
                <div className='component_title' style={{ justifyContent: 'space-between' }}>
                    <h2> <span style={{ color: 'var(--main-color)' }}>{title.charAt(0)}</span>{title.slice(1)}</h2>
                    <button onClick={onClose} className='modal_close_button'>x</button>
                </div>

                <ImageGallery images={phonePic} title={title} />
                <p>{description}</p>

                {features && <FeatureList features={features} />}
                <TechnologyList technologies={languagesUsed} label={Texts[language].project_details} />

                <div className='social_item_div'>
                    <a href={linkGit} target="_blank" rel="noopener noreferrer" className='details_link'>GitHub Project</a>
                    {linkLive && (
                        <a href={linkLive} target="_blank" rel="noopener noreferrer" className='details_link'>Live Project</a>
                    )}
                    {linkCase && (
                        <Link
                            to={linkCase}
                            className="details_link"
                            // states send to the api case study component 
                            // Current path of the Work component
                            state={{ from: location.pathname, activeProject, id }}
                        >
                            Case Study
                        </Link>
                    )}
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetailsView;
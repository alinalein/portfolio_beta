
import { Modal } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import '../styles/projectDetails.scss';
import FeatureList from '../components/FeatureList';
import ImageGallery from '../components/ImageGallery';
import TechnologyList from '../components/TechnologyList';
import Texts, { Language } from '../../../shared/utils/texts'
import type { WorkItem } from '../../../types/work';
import renderStyledTitle from '../../../shared/utils/renderStyledTitle';
import { useAppContext } from '../../../shared/context/AppContext';

type ProjectDetailsViewProps = {
    onClose: () => void;
    activeProject: WorkItem
}

const ProjectDetailsView = ({
    onClose,
    activeProject,
}: ProjectDetailsViewProps): JSX.Element => {

    const {
        id,
        title,
        description,
        features,
        languagesUsed,
        linkLive,
        linkGit,
        images,
        linkCase
    } = activeProject;

    const { language } = useAppContext();
    const location = useLocation();

    return (
        <Modal open onClose={onClose}>
            <div className='modal_div'>
                <div className='component_title' style={{ justifyContent: 'space-between' }}>
                    {title && (
                        <>
                            {renderStyledTitle(title, { color: 'var(--main-color)' })}
                        </>
                    )}
                    <button onClick={onClose} aria-label="Close modal" className='modal_close_button'>x</button>
                </div>

                <ImageGallery images={images} title={title} />
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
import { useEffect } from 'react';
import { Modal } from '@mui/material';
import { useLocation } from 'react-router-dom';

import FeatureList from '../components/FeatureList';
import ImageGallery from '../components/ImageGallery';
import TechnologyList from '../components/TechnologyList';
import type { WorkItem } from '../../../types/work';

import { useAppContext, SharedButton, useFocus, renderStyledTitle, Texts } from '../../../shared';

import '../styles/projectDetails.scss';

type ProjectDetailsViewProps = {
  onClose: () => void;
  activeProject: WorkItem;
};

const ProjectDetailsView = ({ onClose, activeProject }: ProjectDetailsViewProps): JSX.Element => {
  const { id, title, description, features, languagesUsed, linkLive, linkGit, images, linkCase } =
    activeProject;

  const { language } = useAppContext();
  const location = useLocation();
  const { headingRef } = useFocus();

  // for Accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Modal open onClose={onClose}>
      <section
        className="modal_div"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${title}-app-section`}
      >
        <div className="component_title" style={{ justifyContent: 'space-between' }}>
          {title && (
            <>
              {renderStyledTitle({
                title,
                id: `${title}-app-section`,
                ref: headingRef,
              })}
            </>
          )}
          <button
            onClick={onClose}
            aria-label={language === 'en' ? 'Close modal' : 'Modal schließen'}
            className="modal_close_button"
          >
            x
          </button>
        </div>

        <ImageGallery images={images} title={title} />
        <p>{description}</p>

        {features && <FeatureList features={features} />}
        <TechnologyList
          technologies={languagesUsed}
          label={Texts[language].project_details.technologies}
        />

        <div className="social_item_div">
          <SharedButton href={linkGit} title={Texts[language].project_details.github} />
          {linkLive && (
            <SharedButton href={linkLive} title={Texts[language].project_details.live} />
          )}
          {linkCase && (
            <SharedButton
              to={linkCase}
              // states send to the api case study component
              // Current path of the Work component
              state={{ from: location.pathname, activeProject, id }}
              title={'Case Study'}
            />
          )}
        </div>
      </section>
    </Modal>
  );
};

export default ProjectDetailsView;

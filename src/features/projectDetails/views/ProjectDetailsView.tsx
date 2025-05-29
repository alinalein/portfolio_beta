import { useEffect } from 'react';
import { Modal } from '@mui/material';
import { useLocation } from 'react-router-dom';

import FeatureSection from '../components/FeatureSection/FeatureSection';
import ImagesSection from '../components/ImagesSection/ImagesSection';
import TechnologySection from '../components/TechnologySection/TechnologySection';
import type { WorkItem } from '../../../types/work';

import { useAppContext, SharedButton, useFocus, Title, Texts } from '../../../shared';
import styles from './ProjectDetailsView.module.scss';

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
        className={styles.project_details}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${title}-app-section`}
      >
        <div className={` ${styles.project_details__header} section__title`}>
          {title && (
            <>
              {Title({
                title,
                id: `${title}-app-section`,
                ref: headingRef,
              })}
            </>
          )}
          <button
            onClick={onClose}
            aria-label={language === 'en' ? 'Close modal' : 'Modal schließen'}
            className={styles.project_details__close_btn}
          >
            x
          </button>
        </div>

        <ImagesSection images={images} title={title} />
        <p>{description}</p>

        {features && <FeatureSection features={features} />}
        <TechnologySection
          technologies={languagesUsed}
          label={Texts[language].project_details.technologies}
        />

        <div className={styles.project_details__links}>
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

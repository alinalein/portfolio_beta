import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import getWorkItems from '../utils/getWorkItems';
import ProjectDetailsView from '../../projectDetails/views/ProjectDetailsView';
import { WorkItem } from '../../../types/work';
import { useAppContext } from '../../../shared';

const WorkGridSection = (): JSX.Element => {
  const { language } = useAppContext();

  const [activeProject, setActiveProject] = useState<WorkItem | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const workItems: WorkItem[] = getWorkItems(language);

  const urlParams = new URLSearchParams(location.search);
  const projectIdFromUrl = urlParams.get('project');

  useEffect(() => {
    if (projectIdFromUrl) {
      const project = workItems.find((item) => item.id === projectIdFromUrl);
      if (project) setActiveProject(project);
    }
  }, [projectIdFromUrl]);

  const showDetails = (project: WorkItem) => {
    setActiveProject(project);
    navigate(`?project=${project.id}`, {
      state: { from: location.pathname, activeProject: project },
    });
  };

  const onClose = (): void => {
    setActiveProject(null);
    navigate('/#work');
  };

  return (
    <section aria-labelledby="work-section">
      <div className="work_grid">
        {workItems.map((project) => (
          <button
            type="button"
            className="work_grid_item"
            key={project.id}
            onClick={() => showDetails(project)}
            aria-label={
              language === 'en'
                ? `View details for ${project.title}`
                : `Details vom ${project.title} ansehen`
            }
          >
            <div className="work_img_div">
              <img className="work_img" src={project.imgSrc} alt={project.title} loading="lazy" />
              <div className="portfolio-overlay">
                <p className="overlay_plus">+</p>
              </div>
            </div>
            <p>{project.title}</p>
          </button>
        ))}
      </div>

      <div className="scrollable_images_container" aria-live="polite">
        {activeProject && <ProjectDetailsView onClose={onClose} activeProject={activeProject} />}
      </div>
    </section>
  );
};

export default WorkGridSection;

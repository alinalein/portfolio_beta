import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import getWorkItems from "../utils/getWorkItems";
import ProjectDetailsView from "../../projectDetails/views/ProjectDetailsView";
import { WorkItem } from "../../../types/work";
import { useAppContext } from "../../../shared/context/AppContext";

const WorkGridSection = (): JSX.Element => {
    const { language } = useAppContext()

    const [activeProject, setActiveProject] = useState<WorkItem | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const workItems: WorkItem[] = getWorkItems(language);

    const urlParams = new URLSearchParams(location.search);
    const projectIdFromUrl = urlParams.get("project");

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
        navigate("/#work");
    };

    return (
        <>
            <div className="work_grid">
                {workItems.map((project) => (
                    <div
                        className="work_grid_item"
                        key={project.id}
                        onClick={() => showDetails(project)}
                    >
                        <div className="work_img_div">
                            <img
                                className="work_img"
                                src={project.imgSrc}
                                alt={project.title}
                                loading="lazy"
                            />
                            <div className="portfolio-overlay">
                                <p className="overlay_plus">+</p>
                            </div>
                        </div>
                        <p>{project.title}</p>
                    </div>
                ))}
            </div>

            <div className="scrollable_images_container">
                {activeProject && (
                    <ProjectDetailsView
                        onClose={onClose}
                        activeProject={activeProject}
                    />
                )}
            </div>
        </>
    );
};

export default WorkGridSection;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import getWorkItems from "../utils/getWorkItems";
import ProjectDetailsView from "../../projectDetails/views/ProjectDetailsView";

const WorkGridSection = ({ language, Texts }) => {

    const [activeProject, setActiveProject] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const workItems = getWorkItems(language, Texts);

    const urlParams = new URLSearchParams(location.search);
    const projectIdFromUrl = urlParams.get("project");

    useEffect(() => {
        if (projectIdFromUrl) {
            const project = workItems.find((item) => item.id === projectIdFromUrl);
            if (project) setActiveProject(project);
        }
    }, [projectIdFromUrl]);

    const showDetails = (project) => {
        setActiveProject(project);
        navigate(`?project=${project.id}`, {
            state: { from: location.pathname, activeProject: project },
        });
    };

    const onClose = () => {
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
                        language={language}
                        {...activeProject}
                        Texts={Texts}
                    />
                )}
            </div>
        </>
    );
};

export default WorkGridSection;

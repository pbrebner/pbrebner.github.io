import "./styles/ProjectContainer.css";

function ProjectContainer({ reversed, project }) {
    {
        if (reversed) {
            return (
                <div className="projectContainer reversedProjectContainer">
                    <div className="projectDetails">
                        <h3 className="projectTitle">{project.title}</h3>
                        <div className="projectTags">
                            {project.tags.map((tag, index) => {
                                return (
                                    <p key={index} className="projectTag">
                                        {tag}
                                    </p>
                                );
                            })}
                        </div>
                        <p className="projectInfo">{project.description}</p>
                        <div className="projectLinks">
                            {project.github && (
                                <a
                                    href={project.github}
                                    className="projectLink"
                                >
                                    Review the Code
                                </a>
                            )}
                            {project.website && (
                                <a
                                    href={project.website}
                                    className="projectLink"
                                >
                                    See it Live
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="projectImages">
                        <img
                            src={project.mainImage}
                            alt="project image"
                            className="projectImage mainImage"
                        />
                        {project.secondaryImage && (
                            <img
                                src={project.secondaryImage}
                                alt="project image"
                                className="projectImage secondaryImage"
                            />
                        )}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="projectContainer">
                    <div className="projectImages">
                        <div className="projectImages">
                            <img
                                src={project.mainImage}
                                alt="project image"
                                className="projectImage mainImage"
                            />
                            {project.secondaryImage && (
                                <img
                                    src={project.secondaryImage}
                                    alt="project image"
                                    className="projectImage secondaryImage"
                                />
                            )}
                        </div>
                    </div>
                    <div className="projectDetails">
                        <h3 className="projectTitle">{project.title}</h3>
                        <div className="projectTags">
                            {project.tags.map((tag, index) => {
                                return (
                                    <p key={index} className="projectTag">
                                        {tag}
                                    </p>
                                );
                            })}
                        </div>
                        <p className="projectInfo">{project.description}</p>
                        <div className="projectLinks">
                            {project.github && (
                                <a
                                    href={project.github}
                                    className="projectLink"
                                >
                                    Review the Code
                                </a>
                            )}
                            {project.website && (
                                <a
                                    href={project.website}
                                    className="projectLink"
                                >
                                    See it Live
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ProjectContainer;

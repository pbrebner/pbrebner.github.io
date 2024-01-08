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
                            <a href="" className="projectLink">
                                Review the Code
                            </a>
                            <a href="" className="projectLink">
                                See it Live
                            </a>
                        </div>
                    </div>
                    <div className="projectImages">
                        <div className="projectImage mainImage">
                            Project Image
                        </div>
                        <div className="projectImage secondaryImage">
                            Project Image
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="projectContainer">
                    <div className="projectImages">
                        <div className="projectImage mainImage">
                            Project Image
                        </div>
                        <div className="projectImage secondaryImage">
                            Project Image
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
                            <a href="" className="projectLink">
                                Review the Code
                            </a>
                            <a href="" className="projectLink">
                                See it Live
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ProjectContainer;

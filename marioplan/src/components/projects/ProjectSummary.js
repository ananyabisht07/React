import React from 'react';

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary style-form">
            <div className="card-content color">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">32d sep,2019</p>
            </div>
        </div>
    );
}
export default ProjectSummary;
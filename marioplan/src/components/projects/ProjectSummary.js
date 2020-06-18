import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary style-form">
            <div className="card-content color">
                <span className="card-title"><b>{project.title}</b></span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    );
}
export default ProjectSummary;
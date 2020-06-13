import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div className="container section project-details">
            <div className="card z-depth-0 ">
                <div className="card-content ">
                    <span className="card-title"><h4>{ project.title }</h4></span>
                    <p>{ project.content }</p>
                    <br />
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by { project.authorFirstName } { project.authorLastName } .</div>
                        <div>3rd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
            )
        
    }

    }

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails)

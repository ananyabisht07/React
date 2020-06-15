import React, { Component } from 'react';
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        //console.log(this.props);
        const { projects, auth, notifications} = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    firestoreConnect([
        { collection: 'projects' },
        { collection: 'notifications', limit: 3}
    ]),
  connect(mapStateToProps),
)(Dashboard);




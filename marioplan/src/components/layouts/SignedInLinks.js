import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions'
import { connect } from 'react-redux'

const SignedInNavLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating black lighten-3'>NN</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInNavLinks);
import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase' 


const Navbar = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                { isLoaded(auth) && links }
            </div>
        </nav>
    );
}

const matStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(matStateToProps)(Navbar);
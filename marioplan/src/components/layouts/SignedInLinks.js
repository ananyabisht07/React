import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInNavLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating black lighten-3'>NN</NavLink></li>
        </ul>
    );
}
export default SignedInNavLinks;
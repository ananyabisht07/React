import React from 'react'
import { Navbar } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'





function Header() {
    return (
        <div className="">
        
            <Navbar fixed="top" collapseOnSelect expand="lg" className="header" >
                
                <Navbar.Brand href="/" style={{marginLeft:40}}><img src="img/3.png" width="220px" height="75px" alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle style={{marginRight:40}} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav navbar className="ml-auto">
                    <NavItem>
                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> ABOUT US</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link"  to='/blog'><span className="fab fa-blogger-b" style={{fontSize:"30px"}} ></span> BLOGS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contact'><span className="fa fa-envelope  fa-lg"></span> CONTACT US</NavLink>
                    </NavItem>
                    </Nav>
                    
                    
                </Navbar.Collapse>
            
            </Navbar>
            
        </div>
    )
}

export default Header;


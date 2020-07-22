import React from 'react'
import { Navbar,Jumbotron } from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

// <ul className=" navbar-nav ml-auto" style={{marginRight:40,}}>
//                         <li><Link to="/">Home <span> </span> </Link></li> 
//                         <li><NavLink to="/aboutus">ABOUT US</NavLink></li>
//                         <li><NavLink to="/blog">BLOG</NavLink></li>
//                         <li><NavLink to="/contact">CONTACT</NavLink></li>
//                     </ul>

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
            <Jumbotron fluid className="jumbo">
                    <div className="jumbo-text">
                        <p>FEED THE HUNGARY,<br/>
                        HELP THE NEEDY.</p>
                    </div>
            </Jumbotron>
        </div>
    )
}

export default Header;


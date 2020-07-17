import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap'

function Header() {
    return (
        <div className="">
        
            <Navbar collapseOnSelect expand="lg" className="header" >
            
                <Navbar.Brand href="/" style={{marginLeft:40}}><img src="img/3.png" width="250px" height="100px" alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle style={{marginRight:40}} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="ml-auto" style={{marginRight:40,}}>
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="aboutus">ABOUT US</Nav.Link>
                        <Nav.Link href="blog">BLOGS</Nav.Link>
                        <Nav.Link href="contact">CONTACT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
            </Navbar>
        
        </div>
    )
}

export default Header;


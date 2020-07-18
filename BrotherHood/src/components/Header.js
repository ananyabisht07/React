import React from 'react'
import { Navbar, Nav,Jumbotron } from 'react-bootstrap'


function Header() {
    return (
        <div className="">
        
            <Navbar collapseOnSelect expand="lg" className="header" >
                
                <Navbar.Brand href="/" style={{marginLeft:40}}><img src="img/3.png" width="220px" height="75px" alt="Logo" /></Navbar.Brand>
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


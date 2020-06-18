import React from 'react'
import { Navbar, NavbarBrand} from 'reactstrap'

const Header = () => {
    return (
        <div>
            <Navbar dark color="primary" className="justify-content-center">
                
                <span><img src='images/notepad.png' height="70" width="65" alt='Ristorante Con Fusion' /></span>
                <NavbarBrand href="/"><h1>TodoList</h1></NavbarBrand>
            </Navbar>
        </div>
    )
}


export default Header

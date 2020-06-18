import React from 'react'
import { Navbar, NavbarBrand} from 'reactstrap'

const Header = () => {
    return (
        <div>
            <Navbar className=" navv heading-color justify-content-center ">
                
                <span><img src='images/notepad.png' height="70" width="65" alt='Ristorante Con Fusion' /></span>
                <NavbarBrand href="/" className="text-white"><h1>TodoList</h1></NavbarBrand>
            </Navbar>
        </div>
    )
}


export default Header

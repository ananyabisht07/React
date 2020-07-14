import React, { Component } from 'react'
import {FormControl, Navbar,Form,} from 'react-bootstrap'

class Header extends Component {
    render(){
        return(
            <Navbar  className="Navigation my-auto justify-content-center">
                <Form  className="center" inline>
                    <div className="row">
                        <div className="col">
                            <FormControl type="text" placeholder="Search"  />                        
                        </div>
                        
                    </div> 
                </Form>
            </Navbar>
        )
    }
}

export default Header;
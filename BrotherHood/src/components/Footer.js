import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center" style={{marginTop:"50px", marginBottom:"50px"}}>             
                <div className="col-4  col-sm-6 text-left">
                    <h5>Navigation</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-6 text-center">
                <img src="img/3.png" width="300px" height="160px" alt="Logo" />
                    <p>All of the operational models are based on constantly escalating happy smiles through healthy teamwork and our
                     rigorous effort towards service to our society.</p>
                </div>
                
            </div>
        </div>
        <div className="row justify-content-center box" >             
                <div className="col-auto " style={{marginTop:"20px"}}>
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
        </div>
    </div>
    )
}

export default Footer;
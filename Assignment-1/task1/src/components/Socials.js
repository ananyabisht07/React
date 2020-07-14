import React, { useState } from 'react'
import {Card, Button,CardDeck} from 'react-bootstrap';
import { useHistory } from "react-router";
import { CSSTransition } from 'react-transition-group';
import { FadeTransform } from 'react-animation-components';


function Socials() {
    const history = useHistory();
    const handleClick = () => (
        history.push({ pathname: "/offer" })
    )
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
        
        <FadeTransform in
                    transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Card className="card-style">
                        <Card.Img  className="card-img"  src="assets/img2.jpg" />
                        <Card.Body >
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <Card.Title className="social-text">Social</Card.Title>
                                </div>
                            </div>
                                
                            <div className="row">
                                <div className="col col-md-4  d-flex justify-content-center">
                                    <Button className="pill-button">Indian</Button>
                                </div>
                                <div className="col col-md-4  d-flex justify-content-center ">
                                    <Button className="pill-button">Dance</Button>
                                </div>
                                <div className="col col-md-4  d-flex justify-content-center ">
                                    <Button className="pill-button">Bollywood</Button>
                                </div>   
                            </div>

                            <div className="row">
                                <div className="col d-flex justify-content-center align-text-bottom ">
                                    <i className="fa fa-angle-down fa-4x mb-0" 
                                        onClick={() => setShowMessage(true)}>
                                    </i>
                                </div>
                            </div>
                            <div className="row">
                            </div>
                            <CSSTransition 
                                in={showMessage} 
                                timeout={300} 
                                classNames="alert" 
                                unmountOnExit
                                onEnter={() => setShowButton(false)}
                                onExited={() => setShowButton(true)}>
                                
                                <div id="collapse-text">
                                    
                                    
                                    <CardDeck>
                                        
                                        <Card className="small-cards color shadow" onClick={handleClick} >
                                            <Card.Body >
                                                <div className="row">
                                                    <div className="col d-flex justify-content-center">
                                                        <Card.Title style={{color:'#2ddddd', fontWeight:'lighter'}}>OFFER</Card.Title>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:10}}>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src='assets/g2.png' height="95" width="73" alt='glass-icon' />
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:10}}>
                                                    <div className="col d-flex justify-content-center">
                                                        <Card.Text style={{ fontWeight:'bolder',fontFamily: 'Montserrat',fontSize: 20}}>Happy Hour</Card.Text>
                                                    </div>
                                                </div>    
                                                <div className="row" style={{marginTop:40}}>
                                                    <div className="col d-flex justify-content-center">
                                                        <Button className="pill-button1" style={{ fontWeight:'bold'}}>09:00 PM</Button>
                                                    </div>
                                                </div>                                        
                                            </Card.Body>
                                        </Card>
                                    
                                        <Card className="small-cards color" onClick={handleClick}>
                                            <Card.Body >
                                                <div className="row" >
                                                    <div className="col d-flex justify-content-center">
                                                        <Card.Title style={{color:'#2ddddd', fontWeight:'lighter'}}>EVENT</Card.Title>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:14}}>
                                                    <div className="col d-flex justify-content-center">
                                                        <img src='assets/mic2.png' height="95" width="50" alt='Comedy-Night' />
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:10}}>
                                                    <div className="col d-flex justify-content-center">
                                                        <Card.Text style={{ fontWeight:'bolder',fontFamily: 'Montserrat',fontSize: 20}}>Comedy Night</Card.Text>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop:40}}>
                                                    <div className="col d-flex justify-content-center">
                                                        <Button className="pill-button1" style={{ fontWeight:'bold'}}>09:00 PM</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        
                                    </CardDeck>
                                    
                                </div>
                                
                            </CSSTransition>
                                
                        </Card.Body>
                    </Card>
                </div>
                </div>
            </FadeTransform>
    )
}


export default Socials;
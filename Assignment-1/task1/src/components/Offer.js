import React, {useState} from 'react'
import {Card,Button } from 'react-bootstrap';
//import { FadeTransform } from 'react-animation-components';
import { CSSTransition } from 'react-transition-group';


function Offer(){
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
        return (
                <div className="row slide_in">
                    <div className="col  d-flex justify-content-center">
                        <Card className="small-cards1 color ">
                            <Card.Body >
                                <div className="row">
                                    <div className="col d-flex justify-content-center">
                                        <Card.Title style={{color:'#2ddddd', fontWeight:'lighter'}}>OFFER</Card.Title>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:20}}>
                                    <div className="col d-flex justify-content-center">
                                        <img src='assets/g2.png' height="95" width="73" alt='glass-icon' />
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:30}}>
                                    <div className="col d-flex justify-content-center">
                                        <Card.Text style={{ fontWeight:'bolder',fontFamily: 'Montserrat',fontSize: 20}}>Happy Hour</Card.Text>
                                    </div>
                                </div>    
                                <div className="row" style={{marginTop:40}}>
                                    <div className="col d-flex justify-content-center">
                                        <Button className="pill-button1" style={{ fontWeight:'bold',width:250}}>SAT  23RD JULY  09:00 PM</Button>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:40}}>
                                    <div className="col d-flex justify-content-center">
                                        <Button className="redeem" 
                                            onClick={() => setShowMessage(true)}>REDEEM  
                                        </Button> &nbsp;&nbsp;
                                        <span><i className="fa fa-map-marker fa-4x" aria-hidden="true"></i></span>
                                    </div>
                                </div>  
                                <div className="row"></div>
                                <CSSTransition 
                                    in={showMessage} 
                                    timeout={300} 
                                    className="alert" 
                                    unmountOnExit
                                    onEnter={() => setShowButton(false)}
                                    onExited={() => setShowButton(true)}>
                                    <div className="row">
                                    <div className=" col d-flex justify-content-center" style={{marginTop:30,marginBottom:30}} >
                                        <img src='assets/barcode.jpg' height="170" width="310" alt='glass-icon' />
                                    </div>
                                    </div>  
                                </CSSTransition>                          
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )
    
}

export default Offer;
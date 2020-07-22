import React from 'react'
import {Container, Row, Col, Jumbotron} from 'react-bootstrap'

function OurTeam(){
    return(
        <Jumbotron className="jumbo-banner1">
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} sm={6} className="text-center">
                        <img className="imagess" style={{marginTop:"30px",borderRadius:"50%"}} src="img/t1.jpg" alt="Sanjit SenaPati" height="180" width="160"/>
                        <h2 style={{marginTop:20}}>Sanjit Senapati</h2>
                        <div className="seperator1 "> </div>
                        <h2 style={{marginBottom:"20px", marginTop:20, fontWeight:"15px"}}>Managing Trusty</h2>
                    </Col>
                    <Col md={4} sm={6} className="text-center">
                        <img className="imagess" style={{borderRadius:"50%"}} src="img/t2.jpg" alt="Sujit SenaPati" height="180" width="160"/>
                        <h2 style={{marginTop:20}}>Sujit Senapati</h2>
                        <div className="seperator1 "> </div>
                        <h2 style={{ marginBottom:"20px", marginTop:20,fontWeight:"15px"}}>Trusty</h2>
                    </Col>
                    <Col md={4} sm={6} className="text-center">
                        <img className="imagess" style={{marginTop:"30px",borderRadius:"50%"}} src="img/t3.jpg" alt="Santyajit SenaPati" height="180" width="160"/>
                        <h2 style={{marginTop:20}}>Satyajeet Senapati</h2>
                        <div className="seperator1 "> </div>
                        <h2 style={{marginBottom:"40px",marginTop:20, fontWeight:"15px"}}>Founder</h2>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default OurTeam;
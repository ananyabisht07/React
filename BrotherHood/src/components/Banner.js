import React from 'react'
import{ Jumbotron, Row, Col,  Container} from 'react-bootstrap'

function Banner(){
    return(
        <Jumbotron className="jumbo-banner">
            <Container>
            <Row className="banner-img">
                <Col md={4} sm={6} className="text-center">
                    <img src="img/heart4.png" alt="Avatar" height="120" width="120" />
                    <h2 style={{marginTop:30}}>Ration Kits Distributed</h2>
                    <h2 style={{fontWeight:"bolder", marginTop:30}}>5900</h2>
                </Col>
                <Col md={4} sm={6} className="text-center">
                    <img src="img/cash.png" alt="Avatar" height="120" width="120" />
                    <h2 style={{marginTop:30}}>Cash Help Extended</h2>
                    <h2 style={{fontWeight:"bolder", marginTop:30}}>Rs 240654</h2>
                </Col>
                <Col md={4} sm={12} className="text-center">
                    <img src="img/help.jpg" alt="Avatar" height="120" width="120" />
                    <h2 style={{marginTop:30}}>People Provided Help</h2>
                    <h2 style={{fontWeight:"bolder",marginTop:30}}>3565</h2>
                </Col>
            </Row>
            </Container>
        </Jumbotron>
    );
}

export default Banner;
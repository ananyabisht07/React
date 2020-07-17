import React, {Component} from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap'

class Deck extends Component{

    render(){
        return(
            <Container>
                <Row>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15, height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c4.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at Forest Park.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15, height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c5.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at Ekamra Vihar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15, height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c6.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at Bapuji Nagar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15, height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c7.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at A G Colony.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15, height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c8.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at Master Canteen.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15, height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c9.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at Patia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15, height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c10.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at Nayapalli
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:15,height:320, border:"none" }}>
                            <div className="inner">
                                <Card.Img variant="top" src="img/c11.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>COVID-19 Relief Services</Card.Title>
                                <Card.Text>
                                    In Bhubaneswar at VSS Nagar
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            
        );
    }
}

export default Deck;
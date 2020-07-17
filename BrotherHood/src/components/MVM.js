import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';

function MVM(){
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={4} sm={11} xm={12} className="banner-img" style={{marginTop:"30px"}}>
                    <Card className="card-bg">
                        <Card.Body style={{marginTop:"60px", marginBottom:"60px"}}>
                            <Row>
                                <Col md={6} sm={12} className="text-center ">
                                    <Card.Img variant="top" src="img/hand4.png" width="50" height="135" alt="mission" />
                                </Col>
                                <Col md={6} sm={12} className="text-center">
                                    <Card.Title className="heading1">MISSION</Card.Title>

                                    <Card.Text style={{marginTop:"30px", }}>
                                        To eradicate hunger and poverty.
                                    </Card.Text>

                                </Col>
                            </Row>   
                        </Card.Body>                     
                    </Card>
                </Col>


                <Col md={4} sm={11} xm={12} className="" style={{marginTop:"30px"}}>
                    <Card className="card-bg">
                        <Card.Body style={{marginTop:"60px", marginBottom:"60px"}}>
                            <Row>
                                <Col md={6} sm={12} className="text-center ">
                                    <Card.Img variant="top" src="img/vision1.png" width="60" height="135" alt="vision" />
                                </Col>
                                <Col md={6} sm={12} className="text-center">

                                    <Card.Title className="heading1">VISION</Card.Title>

                                    <Card.Text style={{marginTop:"30px",}}>
                                        A world full of people devoid of miseries and pain.
                                    </Card.Text>

                                </Col>
                            </Row>   
                        </Card.Body>                     
                    </Card>
                </Col>


                <Col md={4} sm={11} xm={12} className="" style={{marginTop:"30px"}}>
                    <Card className="card-bg" >
                        <Card.Body style={{marginTop:"60px", marginBottom:"60px"}}>
                            <Row>
                                <Col md={6} sm={12} className="text-center " style={{marginTop:"30px"}}>
                                    <Card.Img variant="top" src="img/motto2.png" width="" height="105" alt="motto" />
                                </Col>
                                <Col md={6} sm={12} className="text-center">

                                    <Card.Title className="heading1">MOTTO</Card.Title>

                                    <Card.Text style={{marginTop:"30px", }}>
                                        We rise by lifting others.
                                    </Card.Text>

                                </Col>
                            </Row>   
                        </Card.Body>                     
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MVM;
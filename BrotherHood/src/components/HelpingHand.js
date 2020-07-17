import React, {Component} from 'react'
import { Card, Container, Row, Col, Button} from 'react-bootstrap'

class HelpingHand extends Component{

    render(){
        return(
            <Container >
                <Row>
                    <Col md={4} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:30,  border:"none" }}>
                            <div className="">
                                <Card.Img  src="img/c1.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>A helping hand</Card.Title>
                                <Card.Text>A helping hand is a critical need ...</Card.Text>
                                <Button variant="primary">READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} >
                        <Card className="shadow cards" style={{  marginTop:30,  border:"none" }}>
                            <div className="">
                                <Card.Img  src="img/c2.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>During Fani</Card.Title>
                                <Card.Text>During Fani, our team had worked hard...</Card.Text>
                                <Button variant="primary">READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={12} >
                        <Card className="shadow cards" style={{  marginTop:30,  border:"none"  }}>
                            <div style={{objectFit:"cover"}}>
                                <Card.Img  src="img/c3.jpg" alt="img" />                        
                            </div>
                            <Card.Body className="">
                                <Card.Title>Covid-19</Card.Title>
                                <Card.Text>We are at the forefront of Covid-19 ...</Card.Text>
                                <Button variant="primary">READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default HelpingHand;
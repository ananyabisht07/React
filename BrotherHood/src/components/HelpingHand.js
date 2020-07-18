import React, {useState} from 'react'
import { Card, Container, Row, Col, Button, Modal} from 'react-bootstrap'

function HelpingHand (){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
                                <Button style={{backgroundColor:"#706866 ", color:"white",border:"none"}} onClick={handleShow}>READ MORE</Button>
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
                                <Button style={{backgroundColor:"#706866 ", color:"white",border:"none"}}>READ MORE</Button>
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
                                <Button style={{backgroundColor:"#706866 ", color:"white",border:"none"}}>READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton style={{backgroundColor:"#706866 ", color:"white"}}>
                    <Modal.Title>A Helping Hand</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        A helping hand is a critical need of the elder who are destitute, sick and abandoned by family and 
                        those uprooted by disasters. Our team has been working for abandoned,old & aged people towards their rehabilitation.
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    
}

export default HelpingHand;
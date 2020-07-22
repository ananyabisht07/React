import React, { Component} from 'react'
import { Card, Container, Row, Col, Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux'


class HelpingHand extends Component {
    
    state = {
        show:false,
        buttonID:null
      };

    handleClose = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleShow = (e) => {
        this.setState({
            show: !this.state.show,
            buttonID:e.target.id
        })
    }

    
    
    render() {
        const { helps } = this.props
        const helpDisplay = helps.map(help => {
            if (this.state.buttonID === help.id) {
            return (
                <div key={help.id}>
                    <p> {help.content} </p>
                </div>
            )} else {
                return null
            }
        })
            
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
                                <Button id="1" onClick={this.handleShow} style={{backgroundColor:"#706866 ", color:"white",border:"none"}} >READ MORE</Button>
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
                                <Button id="2" onClick={this.handleShow} style={{backgroundColor:"#706866 ", color:"white",border:"none"}}>READ MORE</Button>
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
                                <Button id="3"onClick={this.handleShow} style={{backgroundColor:"#706866 ", color:"white",border:"none"}}>READ MORE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header  closeButton style={{backgroundColor:"#706866 ", color:"white"}}>
                    <Modal.Title>A Helping Hand</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {helpDisplay}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button  onClick={this.handleClose} variant="secondary" >
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    
    }
    
}

const mapStateToProps = (state) => {
    return {
        helps: state.help
    }
}

export default connect(mapStateToProps)(HelpingHand);
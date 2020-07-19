import React, { Component } from "react"
import { Container, Row, Col,  Button, Form, FormControl, Card} from "react-bootstrap";



// handleSubmit = (values) => {
//     console.log('Current State is: ' + JSON.stringify(values));
//     alert('Current State is: ' + JSON.stringify(values));
//     this.props.resetFeedbackForm();
// }


class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            subject: '',
            message: '',
            touched:{
                firstname: false,
                lastname: false,
                telnum: false,
                email: false, 
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur= (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]:true}
        })
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        }
        if (this.state.touched.firstname && firstname.length <= 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length >= 12 )
            errors.firstname = 'First Name should be < 12 characters'; 

        if (this.state.touched.lastname && lastname.length <= 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lasstname && lastname.length >= 12 )
            errors.lastname = 'Last Name should be < 12 characters'; 

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum ='Tel. Number should contain only numbers.'

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter the correct email.'

        return errors;

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
        
    }


    render () {

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email)
    
        return(
            <div style={{marginTop:"27em"}}>
                <Container>
                    <Row className="justify-content-center">
                        <img src="img/welcome.png" alt="Welcome" width="200" height="300" />
                    </Row>
                </Container>
                <Container style={{marginTop:"3em"}}>
                    <center><h3 className="headings">Get in Touch</h3></center> 
                    <Card className="form-card">
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit} className="form-style">
                                <Form.Row className="justify-content-center">
                                    <Col md={6}>
                                        <Form.Group >
                                            <center><Form.Label htmlFor="firstname" >First Name</Form.Label></center>
                                                <Form.Control type="text" size="md" id="firstname" name="firstname"
                                                    placeholder="First Name"
                                                    value={this.state.firstname}
                                                    valid={errors.firstname === ''}
                                                    invalid={errors.firstname !== ''}
                                                    onBlur={this.handleBlur('firstname')}
                                                    onChange={this.handleInputChange} />
                                                <FormControl.Feedback>{errors.firstname}</FormControl.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group >
                                            <center><Form.Label htmlFor="lastname" >Last Name</Form.Label></center>
                                                <Form.Control type="text" size="md" id="lastname" name="lastname"
                                                    placeholder="Last Name"
                                                    value={this.state.lastname}
                                                    valid={errors.lastname === ''}
                                                    invalid={errors.lastname !== ''}
                                                    onBlur={this.handleBlur('lastname')}
                                                    onChange={this.handleInputChange} />
                                                <FormControl.Feedback>{errors.lastname}</FormControl.Feedback>
                                        </Form.Group>
                                    </Col>  
                                </Form.Row>
                                
                                
                                <Form.Group >
                                    <Form.Label htmlFor="telnum" >Contact Tel.</Form.Label>                               
                                        <Form.Control type="tel" size="md" id="telnum" name="telnum"
                                            placeholder="Tel. number"
                                            value={this.state.telnum}
                                            valid={errors.telnum === ''}
                                            invalid={errors.telnum !== ''}
                                            onBlur={this.handleBlur('telnum')}
                                            onChange={this.handleInputChange} />
                                        <FormControl.Feedback>{errors.telnum}</FormControl.Feedback>
                                </Form.Group>
                                

                                <Form.Group >
                                    <Form.Label htmlFor="email" >Email</Form.Label>                             
                                        <Form.Control type="email" size="md" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            valid={errors.email === ''}
                                            invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')}
                                            onChange={this.handleInputChange} />
                                    <FormControl.Feedback>{errors.email}</FormControl.Feedback>                           
                                </Form.Group>


                                <Form.Group >                              
                                        <Form.Label htmlFor="subject" >Subject</Form.Label>
                                        <Form.Control type="text" size="md" id="subject" name="subject"
                                            placeholder="Subject"
                                            value={this.state.subject}
                                            valid={errors.subject === ''}
                                            invalid={errors.subject !== ''}
                                            onBlur={this.handleBlur('subject')}
                                            onChange={this.handleInputChange} />
                                        <FormControl.Feedback>{errors.subject}</FormControl.Feedback>                                               
                                </Form.Group>
                                

                                <Form.Group>
                                    <Form.Label htmlFor="message" >Something more..</Form.Label>                            
                                    <Form.Control size="md" as="textarea" id="message" name="message"
                                        rows="10"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} />                           
                                </Form.Group>

                                
                                <Form.Group >                       
                                    <Button type="submit" className="form-button">Submit</Button>              
                                </Form.Group>
                            </Form>
                        
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Contact;
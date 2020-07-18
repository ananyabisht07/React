import React, { Component } from "react"
import HelpingHand from './HelpingHand'
import {Container} from 'react-bootstrap'

class Blog extends Component{
    render () {
        return(
            <div style={{marginTop:"35em"}}>
                <Container style={{marginTop:"10em",}}>
                    <div className="row" >
                        <div className=" para col-12 col-lg-7 text-center mx-auto ml-auto" >
                            <h2 className="headings">A HELPING HAND</h2>
                            <div className="seperator "> </div>
                            <p style={{marginTop:30}}>
                                Making a difference by extending a helping hand for a social cause is like prestidigitating the magic of highest prestige.
                            </p>
                        </div>      
                    </div>
                </Container>


                <div style={{  marginTop:"3em" }}>
                    <HelpingHand />
                </div>

                
                <Container style={{marginTop:"10em",}}>
                    <div className="row" >
                        <div className=" para col-12 col-lg-7 text-center mx-auto ml-auto" >
                            <h2 className="headings">Major Works</h2>
                            <div className="seperator "> </div>
                            <p style={{marginTop:30}}>
                                Our major work based on Child Education, Child health, Save Girl Child, Girl Education, Women health care and 
                                education, Employment, Training, poor rehabilitation, Food & Nutrition, plantation, Serving old orphan people, public 
                                awareness etc.
                            </p>
                        </div>      
                    </div>
                </Container>
            </div>
        )
    }
}

export default Blog;
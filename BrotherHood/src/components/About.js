import React, { Component } from "react"
import { Container, Image } from 'react-bootstrap'

class About extends Component{
    render () {
        return(
            <div style={{marginTop:"35em"}}>

                <div className="" style={{marginTop:"10em",}}>
                    <img src="/img/banner.jpg" width="100%" alt="Inspiration"/>
                </div> 
                
                <Container style={{marginTop:"10em",}}>
                    <div className="row justify-content-center" >
                        <div className=" para col-12 col-lg-6 text-center mx-auto ml-auto" style={{marginTop:"3em",}} >
                            <h2 className="headings">Be the change</h2>
                            <div className="seperator "> </div>
                            <p style={{marginTop:30}}>
                                Brotherhood global foundation Trust the voice of a common man and it stands for the hunger and for poor 
                                persons rehabilitation. It helps society become a ray of hope for people in need. We Choose a cause that 
                                is close to your heart I:e all-natural calamities & nation crises and join hands with millions of donors 
                                like you who aim to make this world a better place.
                            </p>
                        </div>   
                        <div className=" para col-12 col-lg-6 text-center img-animation" style={{marginTop:"30px"}} >
                            <Image  src="img/c12.jpg" alt="img" width="450" height="500" />                        
                        </div>     
                    </div>
                </Container>

                <Container style={{marginTop:"15em",}}>
                    <div className="row" >
                        <div className=" para col-12 col-lg-6 text-center mx-auto ml-auto img-animation" >
                            <Image  src="img/c13.jpg" alt="img" width="450" height="500" />                        
                        </div> 
                        <div className=" para col-12 col-lg-6 text-center mx-auto ml-auto"style={{marginTop:"5em",}} >
                            <h2 className="headings">Child Welfare</h2>
                            <div className="seperator "> </div>
                            <p style={{marginTop:30}}>
                                Our major work based on Child Education, Child health, Save Girl Child, Girl Education, Women health care
                                 and education, Employment, Training, poor rehabilitation, Food & Nutrition, plantation, Serving old 
                                 orphan people, public awareness etc.
                            </p>
                        </div>       
                    </div>
                </Container>


                <Container style={{marginTop:"13em",}}>
                    <div className="row" >
                        <div className=" para col-12 col-lg-7 text-center mx-auto ml-auto" >
                            <h2 className="headings">OUR TEAM</h2>
                            <div className="seperator "> </div>
                            <p style={{marginTop:30}}>
                                We make a difference in the lives of people during a very traumatic time in their life.
                            </p>
                        </div>      
                    </div>
                </Container>
            </div>
        )
    }
}

export default About;
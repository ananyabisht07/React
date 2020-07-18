import React, { Component } from "react"
import { Card ,Jumbotron, Container, CardDeck} from 'react-bootstrap'
import Deck from './Deck';
import Banner from "./Banner";
import HelpingHand from "./HelpingHand";
import OurTeam from "./OurTeam";
import MVM from './MVM';




class Home extends Component{
    render () {
        return(
            <div>
                
                

                <div style={{marginTop:"21em"}}>
                    <MVM />
                </div>


                <Container style={{marginTop:"10em",}}>
                    <div className="row" >
                        <div className=" para col-12 col-lg-7 text-center mx-auto ml-auto" >
                            <h2 className="headings">MOTIVE</h2>
                            <div className="seperator "> </div>
                            <p style={{marginTop:30}}>
                                The only way to do great work is to love what you do & the most important thing within our team is to work 
                                wholeheartedly. A single act of kindness is like a drop of water on a dessert affecting more than the original 
                                need. The smallest act of kindness is worth more than the grandest intention. And our team inspired by Utkal Mani 
                                Gopabandhu Das.
                            </p>
                        </div>      
                    </div>
                </Container>


                <div className="" style={{marginTop:"10em",}}>
                    <img src="/img/banner.jpg" width="100%" alt="Inspiration"/>
                </div> 


                <Container style={{marginTop:"10em",}}>
                    <div className="row">
                        <div className=" para col-12 col-lg-7 text-center mx-auto ml-auto" >
                            <h2 className="headings">A SMALL HELP</h2>
                            <div className="seperator "> </div>
                            <p style={{marginTop:30}}>
                                Brotherhood global foundation Trust has created a revolution among youngsters, which not only based on ethics but 
                                also added value and believing in our culture and tradition also.
                            </p>
                        </div>      
                    </div>
                </Container>
                

                <div style={{marginTop:"3em"}}>
                    <Deck />
                </div>


                <Container style={{marginTop:"10em",}}>
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


                <div>
                    <OurTeam />
                </div>

                <div>
                    <Banner />
                </div>



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


            </div>
        )
    }
}

export default Home;
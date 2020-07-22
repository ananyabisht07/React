import React from 'react'
import { Transform } from 'react-animation-components'
import { Jumbotron } from 'react-bootstrap'

function Jumboo(){
    return(
        <Jumbotron fluid className="jumbo">
            <div className="jumbo-text">
                <Transform enterTransform="translateX(10px)" exitTransform="translateX(-700px)" duration={500} in>
                    <p>FEED THE HUNGARY,<br/>
                    HELP THE NEEDY.</p>
                </Transform>
            </div>
        </Jumbotron>
    );
}
export default Jumboo;
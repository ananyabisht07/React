import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0 ">
                <div className="card-content ">
                    <span className="card-title"><h4>Project Title - {id}</h4></span>
                    <p>Lorem ipsium dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
                    <br />
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by the Net Ninja.</div>
                        <div>3rd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

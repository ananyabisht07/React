import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Hello everybody! This is Contact page and I am learning the concept of react router.</p>
        </div>
    )
}

export default Contact;
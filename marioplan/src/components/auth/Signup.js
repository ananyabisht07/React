import React, {Component } from 'react'

class Signup extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }


    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="style-form">
                    <h4 className="color" > Sign Up</h4>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className="color" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className="color" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="color" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="color" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn black lighten z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
    }

export default Signup

import React, {Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions';

class Signin extends Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }


    render(){
        const { authError } = this.props
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="style-form">
                    <h4 className="color" > Sign In</h4>
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
                    <div className="red-text center darken-3">
                        { authError ? <p><b>{authError}</b></p> : null }
                    </div>
                </form>
            </div>
        )
    }
    }


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}    


const mapDispatchToProps = (dispatch) => {
return {
    signIn: (creds) => dispatch(signIn(creds))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

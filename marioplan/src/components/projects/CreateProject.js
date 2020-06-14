import React, {Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title:'',
        content:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
        //console.log(this.state)
    }


    render(){
        const { auth } = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="style-form ">
                    <h4 className="color" >Create New Project</h4>
                    <div className="input-field color">
                        <label htmlFor="title" className="text-type">Title</label>
                        <input type="text" id="title" className="color" onChange={this.handleChange} />
                    </div>
                    <div className="input-field ">
                        <label htmlFor="content">Project Content</label>
                        <textarea  id="content"  className="materialize-textarea color" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn black lighten z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
    }


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject:(project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

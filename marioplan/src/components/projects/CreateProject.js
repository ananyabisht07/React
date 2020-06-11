import React, {Component } from 'react'

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
        console.log(this.state)
    }


    render(){
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

export default CreateProject

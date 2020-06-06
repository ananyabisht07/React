import React, { Component } from 'react';

class AddTodo extends Component {
    state= {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>

                <label><h4 className="text-blue">Add new todo:</h4></label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        )
    }
}

export default AddTodo;
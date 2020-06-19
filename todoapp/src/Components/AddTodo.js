import React, { Component } from 'react';
import {Form, FormGroup,Button,Input } from 'reactstrap'
import {connect } from 'react-redux'
import {addTodo} from '../Store/actions/todoActions'

class AddTodo extends Component {
     state= {
         id:'',
         content: ''
     }

    handleChange = (e) => {
        this.setState({
            content: e.target.value,
            id : Math.random()
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
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <div className="input-group-prepend ">
                                <Input type="text" id="todo" name="todo"
                                onChange={this.handleChange} value={this.state.content} 
                                placeholder="Enter new todo..." 
                                />
                                <Button className="search-button" onClick={this.handleSubmit} >
                                        <span className="fa fa-plus fa-lg"></span>
                                </Button>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('my state2',state)
    return{
        todos: state.add.todos
    }
}



const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo:(todo) => {dispatch(addTodo(todo))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
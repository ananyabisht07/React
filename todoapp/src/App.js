import React, { Component } from 'react';
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import Header from './Components/Header'
import './Components/App.css';
//import Footer from './Components/Footer';

class App extends Component {
  state={
    todos:[
      {id:1, content:'buy some milk'},
      {id:2, content:'play mario Kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos:todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }

  render(){
    return(
      <div className="todo-app">
        <Header />
        <div className="container">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    )
  }
}

export default App;

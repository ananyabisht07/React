import React , { Component } from 'react';
import Ninjas from './Ninjas.js';
import AddNinja from './AddNinja';

class App extends Component{
  state={
    ninjas:[
      {name:'Ryu',age:20,belt:'black',id:1},
      {name:'Yoshi',age:25,belt:'blue',id:2},
      {name:'Crystal',age:30,belt:'violet',id:3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }


  render(){
    return(
      <div className="App">
        <h1>This is my first react app.</h1>
        <p>Welcome!!</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}


/*function App() {
  return (
    <div className="App">
      <h1>This is my first react app.</h1>
      <p>Welcome!!</p>
    </div>
  );
}*/

export default App;

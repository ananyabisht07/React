import React, { Component } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Offer from './components/Offer'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainComponent from './components/MainComponent';

//import './_custom.scss'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          
              <Switch>
                <Route exact path="/" component={MainComponent} />
                <Route path="/offer" component={Offer} />
              </Switch>
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

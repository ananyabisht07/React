import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
      <Header />
      <div className="">
        <Switch>
          <Route  path="/home" component={Home} />
          <Route  exact path="/aboutus" component={About} />
          <Route  exact path="/blog" component={Blog} />
          <Route  exact path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>

    // {<div>
    //   <ImageGrid />
    // </div>}
  );
}

export default App;





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
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/aboutus" component={About} />
          <Route  path="/blog" component={Blog} />
          <Route  path="/contact" component={Contact} />
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





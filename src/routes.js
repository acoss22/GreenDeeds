import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';

export const Routes = () =>{
return (
  <div>
  <Nav />
  <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  
  );
};
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
  <Nav title="Green Deeds" />
  <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
 
      </Switch>
    </div>
  
  );
};
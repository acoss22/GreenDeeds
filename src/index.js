import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import "./styles/index.css";
import { Routes } from './routes'; // where we are going to specify our routes

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);

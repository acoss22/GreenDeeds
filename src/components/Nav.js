import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import "../styles/Nav.css";
import Home from './Home';

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <div className="navbarList">
              <ul className="navbar-ul">
                 
              <li className="navbar-li">
                  <Link to="/home">GD</Link>
                </li>
                <li className="navbar-li">
                  <Link to="/home">Home</Link>
                </li>
                <li className="navbar-li">
                  <Link to="/about">About</Link>
                </li>
                <li className="navbar-li">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
            <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
    }
}

export default Nav;

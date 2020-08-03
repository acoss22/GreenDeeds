import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import About from "./About";

const Nav = ({ title }) => {
  return (
    <Router>
      <div>
        <nav>
          <div className="header-right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
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
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import About from "./About";
import '../styles/nav.css';


class Nav extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <nav>
            <div className="header-right">
              <ul className="ul-nav">
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
  }
}

export default Nav;

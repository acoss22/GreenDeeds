import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbarList">
            <ul className="navbar-ul">
              <Link to="/">
                <li className="navbar-li">GD</li>
              </Link>
              <Link to="/">
                <li className="navbar-li">Home</li>
              </Link>

              <Link to="/about">
                <li className="navbar-li">About</li>
              </Link>

              <Link to="/contact">
                <li className="navbar-li">Contact</li>
              </Link>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

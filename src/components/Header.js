import React from "react";
import logo from '../styles/logoGD.svg';
import Nav from './Nav';

const Header = ({ title }) => {
  return (
    <header>
        <div className="header">
        <a href="#default">
          <img src={logo} alt="GD" className="logo"></img> <span className="title">{title}</span>
        </a>
        </div>
      <Nav></Nav>
    </header>
  );
};

Header.defaultProps = {
  title: "GreenDeeds",
};

export default Header;

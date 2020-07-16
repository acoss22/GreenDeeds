import React from "react";

const Header = ({ title }) => {
  return (
    <header>
        <nav>
      <div className="header">
        <a href="#default" className="logo">
          CompanyLogo  <span>{title}</span>
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
     
        </div>
      </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  title: "GreenDeeds",
};

export default Header;

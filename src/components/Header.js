import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <div className="header">
        <a href="#default" className="logo">
          CompanyLogo  <span>{title}</span>
        </a>
       
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "GreenDeeds",
};

export default Header;

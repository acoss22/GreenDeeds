import React from "react";

const Nav = ({ title }) => {
  return (
    <nav>
    
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
         
          <a href="#post">Post</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
     
    </nav>
  );
};

export default Nav;

import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from "react-router";


class App extends React.Component {
  render() {

    console.log(this.props);
    console.log(this.props.children);

    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;

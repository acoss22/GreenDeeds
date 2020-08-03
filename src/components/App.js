import React from "react";
import "../styles/index.css";
import Header from "./Header";
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;

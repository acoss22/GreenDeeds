import React from "react";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/about" component={About}>
            </Route>
            <Route exact path="/contact" component={Contact}>
            </Route>
            <Route exact path="/" component={Home}>
              
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

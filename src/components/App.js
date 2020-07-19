import React from "react";
import "../styles/index.css";
import Header from "./Header";


import Home from './Home';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { lat: null};
  }
 
  render() {

    window.navigator.geolocation.getCurrentPosition(
      position => {this.setState({ lat: position.coords.latitude }); 
    },
      err => console.log(err)
    );

    return (
      <div className="App">
        <Header />
    
        <Home />
        <p> Latitude: {this.state.lat} </p>
      </div>
    );
  }
}

export default App;

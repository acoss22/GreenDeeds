import React from "react";
import "../styles/index.css";
import Header from "./Header";
import SeasonDisplay from './SeasonDisplay';
import Post from "./Post";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage : err.message})
    );
    console.log("My component was rendered to the screen");
    
  }

  componentDidUpdate(){
    console.log("My component was just updated! ");
  }

  render() {
  

    return (
      <div className="App">
        <Header />

        
        <div className="PostsFeed">
          <Post lat= {this.state.lat} title="Fire Hazard" />
          <Post lat= {this.state.lat} title="Bad smell"/>
          <Post lat= {this.state.lat} title="Dirty waters"/>
          <Post lat= {this.state.lat} title="Toxic Waste"/>
        </div>
        <div>
          <button className="NextPage">Next Page</button>
        </div>
  
        <p> Latitude: {this.state.lat} </p>
       <SeasonDisplay />
      </div>
    );
  }
}

export default App;

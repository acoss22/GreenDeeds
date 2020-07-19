import React from "react";
import Post from './Post';
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="PostsFeed">
          <Post title="Fire Hazard" />
          <Post title="Bad smell"/>
          <Post title="Dirty waters"/>
          <Post title="Toxic Waste"/>
        </div>
        <div>
          <button className="NextPage">Next Page</button>
        </div>
      </div>
    );
  }
}
export default Home;

import React from "react";
import faker from 'faker';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="PostsFeed">
          <div className="PostContainer">
            <div className="Post">Post Title</div>
            <img src="../src/data/post1.jpg" alt="Fire Hazard Pollution"></img>
          </div>
          <div className="PostContainer">
            <div className="Post">Post Title</div>
            <img src={faker.image.nature} alt="image"></img>
          </div>
          <div className="PostContainer">
            <div className="Post">Post 3</div>
            <img src="" alt="image"></img>
          </div>
          <div className="PostContainer">
            <img src="" alt="image"></img>
            <div className="Post">Post 4</div>
            <img src="" alt="image"></img>
          </div>
        </div>
        <div>
        <button className="NextPage">Next Page</button>
        </div>
      </div>
    );
  }
}
export default Home;

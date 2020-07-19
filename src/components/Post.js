import React from "react";
import faker from "faker";

const Post = (props) =>{

    return (
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={faker.image.avatar()} alt={props.title} ></img>
          </div>
          <div className="content">
            <div className="header">{props.title}</div>
            <div className="meta">
              <a>Friends</a>
            </div>
            <div className="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2013</span>
            <span>
              <i className="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
      </div>
    );
 
}

export default Post;

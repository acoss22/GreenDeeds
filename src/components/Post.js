import React from "react";
import faker from "faker";

const Post = (props) =>{

    return (
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <img src={faker.image.avatar()} alt={props.title} ></img>
          </div>
          <div class="content">
            <div class="header">{props.title}</div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              Matthew is an interior designer living in New York.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">Joined in 2013</span>
            <span>
              <i class="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
      </div>
    );
 
}

export default Post;

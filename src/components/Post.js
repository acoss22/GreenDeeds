import React from 'react';

const Post = (props) => (
  <li>
    <img src={props.img} alt="post" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Post;
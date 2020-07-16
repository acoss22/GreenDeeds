
import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
  let posts = props.data.map((post) => {
    return <PostContainer title={post.title}
                   desc={post.description}
                   img={post.img_src}
                   key={post.id} />
  }); 
  return (
    <div>
      <ul>
        {posts}    
      </ul>
    </div>
  );
}

export default PostContainer;
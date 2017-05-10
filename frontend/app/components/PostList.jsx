import React from 'react';
import PostItem from 'PostItem';
import loadPosts from 'queries/loadPosts'

const PostList = (props) => {
  console.log(props)
  return (
    <ul>
      { [{ id: 0, title: 'make a kebab' }].map((post) => <PostItem key={ post.id } post={ post }/>) }
    </ul>
  )
}

export default loadPosts(PostList);

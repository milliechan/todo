import React from 'react';
import PostItem from 'PostItem';
import loadPosts from 'queries/loadPosts'

const PostList = (props) => {
  if (props.data.loading) {
    return <div>Loading...</div>
  }
  return (
    <ul>
      { props.data.posts && props.data.posts.map((post) => <PostItem key={ post.id } post={ post }/>) }
    </ul>
  )
}

export default loadPosts(PostList);

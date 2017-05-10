import { gql, graphql } from 'react-apollo'
import { loadPostsQuery } from '../queries/loadPosts'

const createPostMutation = gql`
  mutation CreatePost($title: String!) {
    createPost(input: { title: $title }) {
      post {
        id
        title
      }
    }
  }
`

const createPost = graphql(createPostMutation, {
  props: ({ mutate }) => ({
    createPost: (title) => mutate({
      variables: { title },
      // updateQueries: {
      //   LoadPosts: (prev, { mutationResult }) => {
      //     // console.log(mutationResult.data.createPost.post)
      //     // console.log(prev)
      //     return { ...prev, posts: [...prev.posts, mutationResult.data.createPost.post] }
      //   }
      // }
      // update: (store, { data: { createPost } }) => {
      //   const data = store.readQuery({ query: loadPostsQuery })
      //   data.posts.push(createPost.post)
      //   store.writeQuery({ query: loadPostsQuery, data })
      // }
      refetchQueries: [{
        query: loadPostsQuery
      }]
    })
  })
})

export default createPost

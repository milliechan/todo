import { gql, graphql } from 'react-apollo'

export const loadPostsQuery = gql`
  query LoadPosts {
    posts {
      id
      title
    }
  }
`

const loadPosts = graphql(loadPostsQuery)

export default loadPosts

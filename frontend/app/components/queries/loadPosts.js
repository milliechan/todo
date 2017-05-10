import { gql, graphql } from 'react-apollo'

const loadPostsQuery = gql`
  query Posts {
    posts {
      id
      title
    }
  }
`

const loadPosts = graphql(loadPostsQuery)

export default loadPosts

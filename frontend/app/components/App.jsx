import React from 'react'
import PostList from 'PostList'
import { connect } from 'react-redux'
import { showKebab, hideKebab } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  hideKebab: () => dispatch(hideKebab()),
  showKebab: () => dispatch(showKebab())
})

const mapStateToProps = (state) => ({
  showingKebab: state.kebabPhoto.show
})

const withKebabControls = connect(
  mapStateToProps,
  mapDispatchToProps
)

const App = (props) => {
  return (
    <div>
      <h1 onClick={ props.showKebab }>kebab-to-dos</h1>
      <img src="http://2.bp.blogspot.com/-Q9bPs8X6C4o/U4cLPhyjrsI/AAAAAAAAAv8/x8qB5pA6Poc/s1600/gm-diet-chicken+kebabs-recipe.jpg" hidden={ !props.showingKebab } onClick={ props.hideKebab } />
      <PostList />
    </div>
  )
}

export default withKebabControls(App)

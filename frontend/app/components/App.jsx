import React from 'react'
import PostList from 'PostList'
import PostForm from 'PostForm'
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { searchTitle: '' }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    this.setState({ searchTitle: e.target.value })
  }

  render() {
    return (
      <div>
        <h1 onClick={ this.props.showKebab }>kebab-to-dos</h1>
        <img
          src="http://2.bp.blogspot.com/-Q9bPs8X6C4o/U4cLPhyjrsI/AAAAAAAAAv8/x8qB5pA6Poc/s1600/gm-diet-chicken+kebabs-recipe.jpg"
          hidden={ !this.props.showingKebab }
          onClick={ this.props.hideKebab }
        />
        <label>Search: <input value={ this.state.searchTitle } onChange={ this.handleSearch }/></label>
        <PostForm />
        <PostList title={ this.state.searchTitle }/>
      </div>
    )
  }
}

export default withKebabControls(App)

import { connect } from 'react-redux'
import * as actions from '../actions/searchActions'
import { Home }  from '../pages/home'

const mapStateToProps = (state, ownProps) => ({
  isUsedSearch: state.search.usedSearch,
  results: state.search.results
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSearch: () => dispatch(actions.toggleSearchAction()),
    updateResults: result => dispatch(actions.updateSearchResults(result))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

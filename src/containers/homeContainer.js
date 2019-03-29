import { connect } from 'react-redux'
import * as actions from '../actions'
import { Home }  from '../pages/home'

//la vuelta a las props del componente <----
const mapStateToProps = (state, ownProps) => ({
  isUsedSearch: state.usedSearch,
  results: state.results
})

//la ida al store -->
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    togleSearch: () => dispatch(actions.togleSearchAction()),
    updateResults: result => dispatch(actions.updateSearchResults(result))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
